import { useState, useCallback, useRef } from "react";
import { supabase } from "@/integrations/supabase/client";

interface Step {
  step: number;
  title: string;
  description: string;
}

export const useSpeakProcess = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [script, setScript] = useState<string | null>(null);
  const speechRef = useRef<SpeechSynthesisUtterance | null>(null);

  const generateAndSpeak = useCallback(async (steps: Step[], title: string) => {
    if (isLoading || isSpeaking) return;

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

      setScript(generatedScript);

      // Use Web Speech API to speak
      const utterance = new SpeechSynthesisUtterance(generatedScript);
      speechRef.current = utterance;

      // Try to find a Hindi voice, fallback to default
      const voices = window.speechSynthesis.getVoices();
      const hindiVoice = voices.find(v => v.lang.includes('hi') || v.lang.includes('Hindi'));
      if (hindiVoice) {
        utterance.voice = hindiVoice;
      }

      utterance.rate = 0.85; // Slightly slower for clarity
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => {
        setIsSpeaking(true);
        setIsLoading(false);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        speechRef.current = null;
      };

      utterance.onerror = () => {
        setIsSpeaking(false);
        setIsLoading(false);
        speechRef.current = null;
      };

      window.speechSynthesis.speak(utterance);
    } catch (error) {
      console.error("Error generating speech:", error);
      setIsLoading(false);
      setIsSpeaking(false);
    }
  }, [isLoading, isSpeaking]);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis.cancel();
    setIsSpeaking(false);
    speechRef.current = null;
  }, []);

  const pauseSpeaking = useCallback(() => {
    window.speechSynthesis.pause();
  }, []);

  const resumeSpeaking = useCallback(() => {
    window.speechSynthesis.resume();
  }, []);

  return {
    isLoading,
    isSpeaking,
    script,
    generateAndSpeak,
    stopSpeaking,
    pauseSpeaking,
    resumeSpeaking
  };
};