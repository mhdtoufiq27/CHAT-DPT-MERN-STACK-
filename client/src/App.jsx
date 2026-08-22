import React, { useRef, useEffect, useState } from "react";
import { AuthProvider } from "./context/AuthContext";
import { ChatProvider, useChat } from "./context/ChatContext";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import WelcomeState from "./components/chat/WelcomeState";
import MessageItem from "./components/chat/MessageItem";
import ChatInput from "./components/chat/ChatInput";
import SettingsModal from "./components/modals/SettingsModal";
import AuthModal from "./components/modals/AuthModal";
import UpgradeModal from "./components/modals/UpgradeModal";
import ConfirmModal from "./components/modals/ConfirmModal";
import InterviewModal from "./components/interview/InterviewModal";
import InterviewHistoryModal from "./components/interview/InterviewHistoryModal";
import IntroCoachModal from "./components/interview/IntroCoachModal";
import CareerNavigatorModal from "./components/career/CareerNavigatorModal";
import { Sparkles, ArrowDown } from "lucide-react";

function MainChatArea() {
  const {
    messages,
    streamingText,
    isStreaming,
    isSending,
    createNewChat,
    setIsSettingsOpen,
    setIsSidebarOpen,
    isInterviewOpen,
    setIsInterviewOpen,
    isInterviewHistoryOpen,
    setIsInterviewHistoryOpen,
    isIntroCoachOpen,
    setIsIntroCoachOpen,
    isCareerNavigatorOpen,
    setIsCareerNavigatorOpen,
    activeCareerRoleId,
  } = useChat();

  const scrollContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const [showScrollBottom, setShowScrollBottom] = useState(false);
  const isUserScrolledUp = useRef(false);

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current;
    const distanceFromBottom = scrollHeight - scrollTop - clientHeight;
    if (distanceFromBottom > 120) {
      isUserScrolledUp.current = true;
      setShowScrollBottom(true);
    } else {
      isUserScrolledUp.current = false;
      setShowScrollBottom(false);
    }
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    isUserScrolledUp.current = false;
    setShowScrollBottom(false);
  };

  useEffect(() => {
    if (!isUserScrolledUp.current) {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, streamingText, isSending]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.shiftKey && e.key.toLowerCase() === "o") {
        e.preventDefault();
        createNewChat();
      } else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsSidebarOpen(true);
        const searchInput = document.querySelector('input[placeholder*="Search"]');
        if (searchInput) searchInput.focus();
      } else if (e.key === "Escape") {
        setIsSettingsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [createNewChat, setIsSidebarOpen, setIsSettingsOpen]);

  return (
    <div
      className="flex-1 flex flex-col h-screen overflow-hidden theme-transition"
      style={{ backgroundColor: "var(--bg-primary)" }}
    >
      <Header />

      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto custom-scrollbar flex flex-col relative"
      >
        {messages.length === 0 ? (
          <WelcomeState />
        ) : (
          <div className="flex-1 py-4">
            {messages.map((msg, idx) => (
              <MessageItem key={msg._id ? `${msg._id}_${idx}` : `msg_${idx}`} message={msg} />
            ))}

            {/* Live Streaming Response */}
            {isStreaming && (
              <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-600/20">
                    <Sparkles size={13} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                    VEXIS PRO
                  </span>
                </div>
                <div
                  className="text-sm leading-relaxed font-sans prose max-w-none"
                  style={{ color: "var(--text-primary)" }}
                >
                  {streamingText}
                  <span className="inline-block w-2 h-4 bg-emerald-400 ml-1 animate-pulse align-middle" />
                </div>
              </div>
            )}

            {/* Thinking State */}
            {isSending && !isStreaming && (
              <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-3">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-600/20 animate-pulse">
                    <Sparkles size={13} />
                  </div>
                  <span className="text-xs font-semibold" style={{ color: "var(--text-primary)" }}>
                    VEXIS PRO
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs mt-1" style={{ color: "var(--text-muted)" }}>
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  VEXIS PRO is thinking...
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        )}

        {/* Floating Scroll to Bottom */}
        {showScrollBottom && (
          <button
            onClick={scrollToBottom}
            className="fixed bottom-24 right-8 shadow-xl rounded-full p-2.5 hover:scale-105 transition duration-150 z-30 flex items-center gap-1.5 text-xs font-semibold theme-transition"
            style={{
              backgroundColor: "var(--bg-surface)",
              color: "var(--text-primary)",
              borderWidth: 1,
              borderStyle: "solid",
              borderColor: "var(--border-strong)",
            }}
          >
            <ArrowDown size={14} className="text-emerald-400 animate-bounce" />
            <span>New response</span>
          </button>
        )}
      </div>

      <ChatInput />
      <SettingsModal />
      <AuthModal />
      <UpgradeModal />
      <ConfirmModal />
      <InterviewModal isOpen={isInterviewOpen} onClose={() => setIsInterviewOpen(false)} />
      <InterviewHistoryModal
        isOpen={isInterviewHistoryOpen}
        onClose={() => setIsInterviewHistoryOpen(false)}
      />
      <IntroCoachModal
        isOpen={isIntroCoachOpen}
        onClose={() => setIsIntroCoachOpen(false)}
      />
      <CareerNavigatorModal
        isOpen={isCareerNavigatorOpen}
        onClose={() => setIsCareerNavigatorOpen(false)}
        initialRoleId={activeCareerRoleId}
      />
    </div>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <ChatProvider>
        <div
          className="flex h-screen w-screen overflow-hidden theme-transition"
          style={{ backgroundColor: "var(--bg-primary)" }}
        >
          <Sidebar />
          <MainChatArea />
        </div>
      </ChatProvider>
    </AuthProvider>
  );
}