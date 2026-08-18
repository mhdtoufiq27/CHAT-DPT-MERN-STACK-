import { useState, useEffect, useRef, useCallback } from "react";

export function useInterviewerVoice() {
  const [hasVoiceEnabled, setHasVoiceEnabled] = useState(true);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const synthRef = useRef(null);
  const utteranceRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      synthRef.current = window.speechSynthesis;
    }
    return () => {
      if (synthRef.current) {
        synthRef.current.cancel();
      }
    };
  }, []);

  const stop = useCallback(() => {
    if (synthRef.current) {
      synthRef.current.cancel();
    }
    setIsSpeaking(false);
    setIsPaused(false);
  }, []);

  const pause = useCallback(() => {
    if (synthRef.current && isSpeaking && !isPaused) {
      synthRef.current.pause();
      setIsPaused(true);
    }
  }, [isSpeaking, isPaused]);

  const resume = useCallback(() => {
    if (synthRef.current && isPaused) {
      synthRef.current.resume();
      setIsPaused(false);
    }
  }, [isPaused]);

  const speak = useCallback(
    (text, onEnd) => {
      if (!synthRef.current || !hasVoiceEnabled || !text) {
        if (onEnd) onEnd();
        return;
      }

      // Stop any active utterance before starting new one
      synthRef.current.cancel();
      setIsPaused(false);

      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1.0; // Professional speed
      utterance.pitch = 1.0;
      utterance.lang = "en-US";

      // Try selecting a professional English voice if available
      const voices = synthRef.current.getVoices();
      const preferredVoice = voices.find(
        (v) =>
          v.lang.startsWith("en") &&
          (v.name.includes("Natural") ||
            v.name.includes("Google") ||
            v.name.includes("Samantha") ||
            v.name.includes("Daniel") ||
            v.name.includes("Karen") ||
            v.name.includes("Arthur"))
      );
      if (preferredVoice) {
        utterance.voice = preferredVoice;
      }

      utterance.onstart = () => {
        setIsSpeaking(true);
      };

      utterance.onend = () => {
        setIsSpeaking(false);
        setIsPaused(false);
        if (onEnd) onEnd();
      };

      utterance.onerror = (e) => {
        console.warn("[Voice Error]:", e);
        setIsSpeaking(false);
        setIsPaused(false);
        if (onEnd) onEnd();
      };

      utteranceRef.current = utterance;
      synthRef.current.speak(utterance);
    },
    [hasVoiceEnabled]
  );

  return {
    speak,
    pause,
    resume,
    stop,
    isSpeaking,
    isPaused,
    hasVoiceEnabled,
    setHasVoiceEnabled,
  };
}
