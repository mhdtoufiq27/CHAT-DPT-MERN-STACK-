import React, { useState, useRef, useEffect } from "react";
import {
  ArrowUp,
  Plus,
  Globe,
  Mic,
  MicOff,
  X,
  FileText,
  Image as ImageIcon,
  Square,
  Camera,
  FileUp,
} from "lucide-react";
import { useChat } from "../../context/ChatContext";
import toast from "react-hot-toast";

export default function ChatInput() {
  const {
    sendMessage,
    isSending,
    isStreaming,
    stopGenerating,
    webSearch,
    setWebSearch,
    attachments,
    uploadFile,
    removeAttachment,
  } = useChat();

  const [input, setInput] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [showAttachMenu, setShowAttachMenu] = useState(false);
  const textareaRef = useRef(null);
  const fileInputRef = useRef(null);
  const isSubmittingRef = useRef(false);

  const MAX_CHAR_LIMIT = 4000;

  // Auto resize textarea height
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${Math.min(
        textareaRef.current.scrollHeight,
        200
      )}px`;
    }
  }, [input]);

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      e.stopPropagation();
      handleSubmit();
    }
  };

  const handleSubmit = (e) => {
    if (e) e.preventDefault();

    // Idempotency guard: drop duplicate trigger if sending, streaming, or submitting
    if (isSending || isStreaming || isSubmittingRef.current) return;
    if (!input.trim() && attachments.length === 0) return;

    isSubmittingRef.current = true;
    const textToSend = input.trim();
    setInput("");

    sendMessage(textToSend);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }

    setTimeout(() => {
      isSubmittingRef.current = false;
    }, 400);
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    files.forEach((file) => {
      uploadFile(file);
    });
    e.target.value = null;
    setShowAttachMenu(false);
  };

  // Speech to text integration via Web Speech API
  const toggleRecording = () => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      toast.error("Voice speech recognition is not supported in this browser");
      return;
    }

    if (isRecording) {
      setIsRecording(false);
    } else {
      try {
        const recognition = new SpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = "en-US";

        recognition.onstart = () => {
          setIsRecording(true);
          toast.success("Listening...");
        };

        recognition.onresult = (event) => {
          const transcript = event.results[0][0].transcript;
          setInput((prev) => (prev ? prev + " " + transcript : transcript));
          setIsRecording(false);
        };

        recognition.onerror = (event) => {
          console.error("Speech error:", event.error);
          setIsRecording(false);
          toast.error("Voice input error");
        };

        recognition.onend = () => {
          setIsRecording(false);
        };

        recognition.start();
      } catch (err) {
        setIsRecording(false);
        toast.error("Unable to access microphone");
      }
    }
  };

  const isInputActive = Boolean(input.trim() || attachments.length > 0);

  return (
    <div className="w-full max-w-4xl mx-auto px-4 pb-4 select-none">
      {/* Attachment Previews */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-2.5 p-2 bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-[#f7f7f8] rounded-2xl border border-[#3a3a3a] dark:border-[#3a3a3a] light:border-[#e5e5e5] animate-in fade-in duration-150">
          {attachments.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#212121] dark:bg-[#212121] light:bg-white text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 shadow-xs"
            >
              {file.fileType?.includes("image") ? (
                <ImageIcon size={14} className="text-emerald-400" />
              ) : (
                <FileText size={14} className="text-emerald-400" />
              )}
              <span className="truncate max-w-[140px] font-medium">{file.name}</span>
              <button
                type="button"
                onClick={() => removeAttachment(idx)}
                className="hover:text-red-400 text-zinc-400 p-0.5 rounded-full hover:bg-zinc-700/50"
              >
                <X size={13} />
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Input Pill Container */}
      <form
        onSubmit={handleSubmit}
        className="relative rounded-3xl bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white border border-[#3a3a3a] dark:border-[#3a3a3a] light:border-[#d9d9d9] shadow-xl dark:shadow-black/30 light:shadow-zinc-200/50 p-3 focus-within:border-zinc-500 dark:focus-within:border-zinc-400 light:focus-within:border-zinc-400 transition-colors duration-180"
      >
        <textarea
          ref={textareaRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Message VEXIS PRO..."
          rows={1}
          maxLength={MAX_CHAR_LIMIT}
          disabled={isSending || isStreaming}
          className="w-full bg-transparent text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder-zinc-400 dark:placeholder-zinc-400 light:placeholder-zinc-500 px-3 pt-2 pb-1.5 outline-none resize-none max-h-48 leading-relaxed font-sans custom-scrollbar disabled:opacity-60"
        />

        {/* Toolbar Controls */}
        <div className="flex items-center justify-between px-2 pt-1">
          {/* Left tools: + Attachment, Web search & Character Indicator */}
          <div className="flex items-center gap-1.5 relative">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              multiple
              className="hidden"
            />

            <button
              type="button"
              onClick={() => setShowAttachMenu(!showAttachMenu)}
              className="p-2 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#3a3a3a] dark:hover:bg-[#3a3a3a] light:hover:bg-zinc-100 rounded-full transition"
              title="Add attachment"
            >
              <Plus size={18} />
            </button>

            {/* Attachment Options Dropdown */}
            {showAttachMenu && (
              <div className="absolute bottom-11 left-0 w-48 bg-[#212121] dark:bg-[#212121] light:bg-white border border-[#3a3a3a] dark:border-[#3a3a3a] light:border-[#e5e5e5] rounded-2xl shadow-2xl py-1.5 z-50 text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800 animate-in fade-in duration-150">
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                >
                  <FileUp size={15} className="text-emerald-400" />
                  Upload file
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                >
                  <ImageIcon size={15} className="text-cyan-400" />
                  Upload image
                </button>
                <button
                  type="button"
                  onClick={() => fileInputRef.current?.click()}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                >
                  <FileText size={15} className="text-amber-400" />
                  Upload PDF / Doc
                </button>
                <button
                  type="button"
                  onClick={() => {
                    setShowAttachMenu(false);
                    fileInputRef.current?.click();
                  }}
                  className="w-full flex items-center gap-2.5 px-3.5 py-2 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                >
                  <Camera size={15} className="text-purple-400" />
                  Take photo
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setWebSearch(!webSearch)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition ${
                webSearch
                  ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                  : "text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#3a3a3a] dark:hover:bg-[#3a3a3a] light:hover:bg-zinc-100"
              }`}
              title="Toggle live web search"
            >
              <Globe size={14} />
              <span>Search</span>
            </button>

            {input.length > 50 && (
              <span className="text-[10px] text-zinc-500 font-mono ml-2">
                {input.length}/{MAX_CHAR_LIMIT}
              </span>
            )}
          </div>

          {/* Right tools: Voice mic & Send / Stop arrow */}
          <div className="flex items-center gap-1.5">
            <button
              type="button"
              onClick={toggleRecording}
              className={`p-2 rounded-full transition ${
                isRecording
                  ? "bg-red-500 text-white animate-pulse shadow-lg shadow-red-500/30"
                  : "text-zinc-400 dark:text-zinc-400 light:text-zinc-500 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#3a3a3a] dark:hover:bg-[#3a3a3a] light:hover:bg-zinc-100"
              }`}
              title={isRecording ? "Stop listening" : "Voice input"}
            >
              {isRecording ? <MicOff size={18} /> : <Mic size={18} />}
            </button>

            {/* Stop Generating Button or Send Button */}
            {isStreaming || isSending ? (
              <button
                type="button"
                onClick={stopGenerating}
                className="w-8 h-8 rounded-full bg-zinc-100 dark:bg-zinc-100 light:bg-zinc-900 text-zinc-900 dark:text-zinc-900 light:text-zinc-100 hover:opacity-90 flex items-center justify-center transition shadow-md"
                title="Stop generating"
              >
                <Square size={14} className="fill-current" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isInputActive || isSending || isStreaming}
                className={`w-8 h-8 rounded-full flex items-center justify-center transition ${
                  isInputActive
                    ? "bg-zinc-100 dark:bg-zinc-100 light:bg-zinc-900 text-zinc-900 dark:text-zinc-900 light:text-zinc-100 hover:opacity-90 shadow-md cursor-pointer"
                    : "bg-[#3a3a3a] dark:bg-[#3a3a3a] light:bg-[#e5e5e5] text-zinc-500 dark:text-zinc-500 light:text-zinc-400 cursor-not-allowed"
                }`}
                title="Send message"
              >
                <ArrowUp size={18} />
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Footer Disclaimer */}
      <div className="text-[11px] text-center text-zinc-500 dark:text-zinc-500 light:text-zinc-400 mt-2 font-sans">
        VEXIS PRO can make mistakes. Check important info.
      </div>
    </div>
  );
}

