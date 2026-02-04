import { useState, useRef, useCallback, useEffect } from "react";

// Speech Recognition types
interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
  resultIndex: number;
}

interface SpeechRecognitionErrorEvent extends Event {
  error: string;
}

interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  abort: () => void;
  onresult: ((event: SpeechRecognitionEvent) => void) | null;
  onerror: ((event: SpeechRecognitionErrorEvent) => void) | null;
  onend: (() => void) | null;
  onstart: (() => void) | null;
}

declare global {
  interface Window {
    SpeechRecognition: new () => SpeechRecognition;
    webkitSpeechRecognition: new () => SpeechRecognition;
  }
}

interface UseVoiceSearchOptions {
  language: string;
  onResult: (transcript: string) => void;
  onError?: (error: string) => void;
}

export const useVoiceSearch = ({ language, onResult, onError }: UseVoiceSearchOptions) => {
  const [isListening, setIsListening] = useState(false);
  const [isSupported, setIsSupported] = useState(false);
  const [permissionState, setPermissionState] = useState<"prompt" | "granted" | "denied" | "unknown">("unknown");
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  // Check for browser support
  useEffect(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    setIsSupported(!!SpeechRecognitionAPI);

    // Check microphone permission state
    if (navigator.permissions) {
      navigator.permissions.query({ name: "microphone" as PermissionName }).then((result) => {
        setPermissionState(result.state as "prompt" | "granted" | "denied");
        result.onchange = () => {
          setPermissionState(result.state as "prompt" | "granted" | "denied");
        };
      }).catch(() => {
        setPermissionState("unknown");
      });
    }
  }, []);

  // Initialize recognition when needed
  const initializeRecognition = useCallback(() => {
    const SpeechRecognitionAPI = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognitionAPI) return null;

    const recognition = new SpeechRecognitionAPI();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = language === "hi" ? "hi-IN" : "en-IN";

    recognition.onstart = () => {
      setIsListening(true);
      setPermissionState("granted");
    };

    recognition.onresult = (event: SpeechRecognitionEvent) => {
      const transcript = event.results[0][0].transcript;
      onResult(transcript);
      setIsListening(false);
    };

    recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
      console.log("Speech recognition error:", event.error);
      setIsListening(false);
      
      if (event.error === "not-allowed") {
        setPermissionState("denied");
        onError?.("Microphone permission denied. Please allow microphone access.");
      } else if (event.error === "no-speech") {
        onError?.("No speech detected. Please try again.");
      } else if (event.error === "network") {
        onError?.("Network error. Please check your connection.");
      } else {
        onError?.(`Error: ${event.error}`);
      }
    };

    recognition.onend = () => {
      setIsListening(false);
    };

    return recognition;
  }, [language, onResult, onError]);

  // Request permission and start listening
  const startListening = useCallback(async () => {
    if (!isSupported) {
      onError?.("Voice search is not supported in your browser.");
      return;
    }

    // If permission is denied, show helpful message
    if (permissionState === "denied") {
      onError?.("Microphone access denied. Please enable it in browser settings.");
      return;
    }

    try {
      // Request microphone permission first
      if (permissionState !== "granted") {
        await navigator.mediaDevices.getUserMedia({ audio: true });
        setPermissionState("granted");
      }

      // Create fresh recognition instance
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
      
      recognitionRef.current = initializeRecognition();
      
      if (recognitionRef.current) {
        recognitionRef.current.lang = language === "hi" ? "hi-IN" : "en-IN";
        recognitionRef.current.start();
      }
    } catch (err) {
      console.error("Microphone permission error:", err);
      setPermissionState("denied");
      onError?.("Microphone access denied. Please allow microphone access to use voice search.");
    }
  }, [isSupported, permissionState, language, initializeRecognition, onError]);

  // Stop listening
  const stopListening = useCallback(() => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
    }
  }, []);

  // Toggle listening
  const toggleListening = useCallback(() => {
    if (isListening) {
      stopListening();
    } else {
      startListening();
    }
  }, [isListening, startListening, stopListening]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.abort();
      }
    };
  }, []);

  return {
    isListening,
    isSupported,
    permissionState,
    startListening,
    stopListening,
    toggleListening,
  };
};
