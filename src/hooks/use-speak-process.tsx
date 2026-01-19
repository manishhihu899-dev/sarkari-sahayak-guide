import { useState, useCallback, useRef, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Step {
  step: number;
  title: string;
  description: string;
}

// Cache for generated scripts to avoid re-fetching
const scriptCache = new Map<string, string>();

export const useSpeakProcess = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [script, setScript] = useState<string | null>(null);
  const [lastTitle, setLastTitle] = useState<string | null>(null);
  const [lastSteps, setLastSteps] = useState<Step[] | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  // Generate cache key
  const getCacheKey = (steps: Step[], title: string) => {
    return `${title}_${steps.map(s => s.step).join('_')}`;
  };

  // Start speaking with the given script
  const speakScript = useCallback((scriptText: string) => {
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(scriptText);
    speechRef.current = utterance;

    // Try to find a Hindi voice, fallback to default
    const voices = window.speechSynthesis.getVoices();
    const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('Hindi'));
    if (hindiVoice) {
      utterance.voice = hindiVoice;
    }

    utterance.rate = 0.9; // Slightly slower for clarity
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onstart = () => {
      setIsSpeaking(true);
      setIsLoading(false);
      setIsPaused(false);
    };

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
      speechRef.current = null;
    };

    utterance.onerror = (event) => {
      console.error("Speech error:", event);
      setIsSpeaking(false);
      setIsLoading(false);
      setIsPaused(false);
      speechRef.current = null;
    };

    utterance.onpause = () => {
      setIsPaused(true);
    };

    utterance.onresume = () => {
      setIsPaused(false);
    };

    window.speechSynthesis.speak(utterance);
  }, []);

  const generateAndSpeak = useCallback(async (steps: Step[], title: string) => {
    if (isLoading) return;

    // Save for retry
    setLastTitle(title);
    setLastSteps(steps);

    // Check cache first for instant playback
    const cacheKey = getCacheKey(steps, title);
    const cachedScript = scriptCache.get(cacheKey);
    
    if (cachedScript) {
      setScript(cachedScript);
      speakScript(cachedScript);
      return;
    }

    setIsLoading(true);

    try {
      // Cancel any ongoing speech
      window.speechSynthesis.cancel();

      const { data, error } = await supabase.functions.invoke('speak-process', {
        body: { steps, title }
      });

      if (error) throw error;

      const generatedScript = data?.script;
      if (!generatedScript) throw new Error("No script generated");

      // Cache the script for future use
      scriptCache.set(cacheKey, generatedScript);
      setScript(generatedScript);
      
      // Start speaking
      speakScript(generatedScript);
    } catch (error) {
      console.error("Error generating speech:", error);
      setIsLoading(false);
      setIsSpeaking(false);
    }
  }, [isLoading, speakScript]);

  // Retry function - replays the last spoken process
  const retrySpeaking = useCallback(() => {
    if (script) {
      speakScript(script);
    } else if (lastSteps && lastTitle) {
      generateAndSpeak(lastSteps, lastTitle);
    }
  }, [script, lastSteps, lastTitle, speakScript, generateAndSpeak]);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    setIsPaused(false);
    speechRef.current = null;
  }, []);

  const pauseSpeaking = useCallback(() => {
    if (isSpeaking && !isPaused) {
      window.speechSynthesis.pause();
      setIsPaused(true);
    }
  }, [isSpeaking, isPaused]);

  const resumeSpeaking = useCallback(() => {
    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
    }
  }, [isPaused]);

  const togglePause = useCallback(() => {
    if (isPaused) {
      resumeSpeaking();
    } else {
      pauseSpeaking();
    }
  }, [isPaused, pauseSpeaking, resumeSpeaking]);

  // Handle visibility change - continue speaking in background
  useEffect(() => {
    const handleVisibilityChange = () => {
      // Web Speech API continues in background by default on most browsers
      // but we ensure the state is synced
      if (document.hidden && isSpeaking) {
        // App went to background while speaking - speech continues
        console.log("App in background, voice continues...");
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isSpeaking]);

  // Preload voices
  useEffect(() => {
    const loadVoices = () => {
      window.speechSynthesis.getVoices();
    };
    
    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
    
    return () => {
      window.speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // Check if we have a cached script for immediate playback
  const hasCache = useCallback((steps: Step[], title: string) => {
    return scriptCache.has(getCacheKey(steps, title));
  }, []);

  return {
    isLoading,
    isSpeaking,
    isPaused,
    script,
    hasCache,
    generateAndSpeak,
    retrySpeaking,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking,
    togglePause
  };
};
