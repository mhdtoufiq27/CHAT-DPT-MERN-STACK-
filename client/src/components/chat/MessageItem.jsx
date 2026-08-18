import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import {
  Sparkles,
  User,
  Copy,
  Check,
  Volume2,
  VolumeX,
  RotateCcw,
  ThumbsUp,
  ThumbsDown,
  FileText,
  Edit2,
  MoreHorizontal,
  Flag,
  Play,
  Send,
  Download,
  Globe,
  Pause,
} from "lucide-react";

import { useAuth } from "../../context/AuthContext";
import { useChat } from "../../context/ChatContext";
import toast from "react-hot-toast";

// Lightweight Syntax Highlighter Helper for Code Blocks
function formatCodeWithSyntax(code) {
  if (!code) return code;
  const lines = code.split("\n");

  return lines.map((line, lineIdx) => {
    // Regex matching comments, strings, keywords, numbers, functions
    const parts = [];
    let remaining = line;
    let keyIdx = 0;

    // Simple line-level syntax highlighting for common patterns
    const commentMatch = remaining.match(/(\/\/.+$|#.+|\/\*[\s\S]*?\*\/)/);
    let commentPart = null;
    if (commentMatch) {
      const idx = commentMatch.index;
      commentPart = remaining.substring(idx);
      remaining = remaining.substring(0, idx);
    }

    // Replace keywords with styled spans
    const tokenRegex = /(\b(?:const|let|var|function|return|if|else|for|while|switch|case|break|import|export|from|default|class|extends|super|this|async|await|try|catch|finally|throw|new|typeof|instanceof|void|yield|null|undefined|true|false|def|self|print|public|private|protected|static|int|string|boolean|double|float|long|struct|enum|interface|type)\b)|("[^"]*"|'[^']*'|`[^`]*`)|(\b\d+(\.\d+)?\b)|(\b[a-zA-Z_]\w*(?=\())/g;

    let lastIdx = 0;
    let match;

    while ((match = tokenRegex.exec(remaining)) !== null) {
      if (match.index > lastIdx) {
        parts.push(<span key={`${lineIdx}-${keyIdx++}`}>{remaining.substring(lastIdx, match.index)}</span>);
      }
      if (match[1]) {
        parts.push(<span key={`${lineIdx}-${keyIdx++}`} className="token-kw">{match[1]}</span>);
      } else if (match[2]) {
        parts.push(<span key={`${lineIdx}-${keyIdx++}`} className="token-str">{match[2]}</span>);
      } else if (match[3]) {
        parts.push(<span key={`${lineIdx}-${keyIdx++}`} className="token-num">{match[3]}</span>);
      } else if (match[5]) {
        parts.push(<span key={`${lineIdx}-${keyIdx++}`} className="token-fn">{match[5]}</span>);
      }
      lastIdx = tokenRegex.lastIndex;
    }

    if (lastIdx < remaining.length) {
      parts.push(<span key={`${lineIdx}-${keyIdx++}`}>{remaining.substring(lastIdx)}</span>);
    }

    if (commentPart) {
      parts.push(<span key={`${lineIdx}-cmt`} className="token-cmt">{commentPart}</span>);
    }

    return (
      <div key={lineIdx} className="table-row">
        <span className="table-cell pr-4 text-right text-zinc-600 select-none text-[11px] font-mono">
          {lineIdx + 1}
        </span>
        <span className="table-cell">{parts.length > 0 ? parts : line || " "}</span>
      </div>
    );
  });
}

function CodeBlock({ language, code }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    toast.success("Code copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownload = () => {
    const extMap = {
      javascript: "js", js: "js", jsx: "jsx", typescript: "ts", ts: "ts", tsx: "tsx",
      python: "py", py: "py", java: "java", html: "html", css: "css", json: "json", sql: "sql",
      cpp: "cpp", c: "c",
    };
    const ext = extMap[(language || "").toLowerCase()] || "txt";
    const filename = `code-snippet.${ext}`;
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`Downloaded ${filename}`);
  };

  return (
    <div className="my-4 rounded-xl overflow-hidden border border-[#2f2f2f] bg-[#141414] text-zinc-100 shadow-md">
      {/* Code Header Bar */}
      <div className="flex items-center justify-between px-4 py-2 bg-[#1f1f1f] border-b border-[#2f2f2f] text-xs text-zinc-400">
        <span className="font-mono text-[11px] uppercase tracking-wider text-emerald-400 font-semibold">
          {language || "code"}
        </span>
        <div className="flex items-center gap-3">
          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 hover:text-white transition font-sans text-[11px] font-medium"
            title="Download code snippet"
          >
            <Download size={13} />
            <span>Download</span>
          </button>
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 hover:text-white transition font-sans text-[11px] font-medium"
          >
            {copied ? (
              <>
                <Check size={13} className="text-emerald-400" />
                <span className="text-emerald-400 font-semibold">Copied ✓</span>
              </>
            ) : (
              <>
                <Copy size={13} />
                <span>Copy code</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Code Content with Line Numbers & Token Coloring */}
      <div className="p-4 text-xs font-mono text-zinc-200 overflow-x-auto leading-relaxed custom-scrollbar">
        <div className="table w-full border-collapse">
          {formatCodeWithSyntax(code)}
        </div>
      </div>
    </div>
  );
}

export default function MessageItem({ message }) {
  const { user } = useAuth();
  const { regenerateResponse, editUserMessage, sendMessage, submitFeedback } = useChat();
  const [copiedMsg, setCopiedMsg] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [liked, setLiked] = useState(null);
  const [showMoreMenu, setShowMoreMenu] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editContent, setEditContent] = useState(message.content);

  const isUser = message.role === "user";

  const handleCopyMessage = () => {
    navigator.clipboard.writeText(message.content);
    setCopiedMsg(true);
    toast.success("Copied to clipboard!");
    setTimeout(() => setCopiedMsg(false), 2000);
  };

  const handleSpeak = () => {
    if ("speechSynthesis" in window) {
      if (isSpeaking) {
        window.speechSynthesis.cancel();
        setIsSpeaking(false);
      } else {
        const utterance = new SpeechSynthesisUtterance(message.content);
        utterance.onend = () => setIsSpeaking(false);
        utterance.onerror = () => setIsSpeaking(false);
        window.speechSynthesis.speak(utterance);
        setIsSpeaking(true);
      }
    } else {
      toast.error("Text-to-speech not supported in this browser");
    }
  };

  const handleSaveEdit = () => {
    if (!editContent.trim()) return;
    setIsEditing(false);
    editUserMessage(message._id, editContent.trim());
  };

  const handleFeedback = (type) => {
    if (liked === type) {
      setLiked(null);
    } else {
      setLiked(type);
      submitFeedback(message._id, type === "up" ? "like" : "dislike");
      if (type === "up") {
        toast.success("Feedback recorded! Thanks 👍");
      } else {
        toast("Feedback recorded! We'll work to improve.", { icon: "👎" });
      }
    }
  };


  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 py-3 theme-transition">
      {isUser ? (
        /* USER MESSAGE: Right-aligned ChatGPT style bubble */
        <div className="flex justify-end w-full">
          <div className="bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-[#f0f0f0] border border-[#3a3a3a] dark:border-[#3a3a3a] light:border-[#e5e5e5] rounded-3xl rounded-tr-md p-4 max-w-[88%] sm:max-w-[75%] shadow-xs group transition-colors duration-180">
            <div className="flex items-center justify-between mb-1.5 gap-4">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-emerald-600 flex items-center justify-center font-bold text-[10px] text-white shrink-0 shadow-xs">
                  {user ? user.name.charAt(0).toUpperCase() : <User size={12} />}
                </div>
                <span className="text-xs font-semibold text-zinc-200 dark:text-zinc-200 light:text-zinc-900">
                  {user ? user.name : "You"}
                </span>
              </div>

              {/* Hover actions toolbar for user message */}
              {!isEditing && (
                <div className="opacity-0 group-hover:opacity-100 transition flex items-center gap-1">
                  <button
                    onClick={() => setIsEditing(true)}
                    className="p-1 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black rounded-md hover:bg-[#3a3a3a] dark:hover:bg-[#3a3a3a] light:hover:bg-zinc-200"
                    title="Edit message"
                  >
                    <Edit2 size={13} />
                  </button>
                  <button
                    onClick={handleCopyMessage}
                    className="p-1 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black rounded-md hover:bg-[#3a3a3a] dark:hover:bg-[#3a3a3a] light:hover:bg-zinc-200"
                    title="Copy message"
                  >
                    {copiedMsg ? <Check size={13} className="text-emerald-400" /> : <Copy size={13} />}
                  </button>
                </div>
              )}
            </div>

            {/* File Attachments */}
            {message.attachments && message.attachments.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-2">
                {message.attachments.map((att, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#212121] dark:bg-[#212121] light:bg-white border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 text-xs text-zinc-300 dark:text-zinc-200 light:text-zinc-800"
                  >
                    <FileText size={14} className="text-emerald-400" />
                    <span className="truncate max-w-[160px] font-medium">{att.name}</span>
                  </div>
                ))}
              </div>
            )}

            {/* User Text or Edit Mode */}
            {isEditing ? (
              <div className="mt-2 space-y-2">
                <textarea
                  value={editContent}
                  onChange={(e) => setEditContent(e.target.value)}
                  rows={3}
                  className="w-full bg-[#212121] dark:bg-[#212121] light:bg-white text-xs text-zinc-100 dark:text-zinc-100 light:text-zinc-900 border border-emerald-500 rounded-xl p-3 outline-none resize-none font-sans"
                />
                <div className="flex items-center justify-end gap-2">
                  <button
                    onClick={() => setIsEditing(false)}
                    className="px-3 py-1.5 rounded-lg text-xs font-medium text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#3a3a3a]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={handleSaveEdit}
                    className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white flex items-center gap-1 shadow-sm"
                  >
                    <Send size={12} />
                    Save & Resend
                  </button>
                </div>
              </div>
            ) : (
              <div className="text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-relaxed font-sans whitespace-pre-wrap">
                {message.content}
              </div>
            )}
          </div>
        </div>
      ) : (

        /* ASSISTANT MESSAGE: Natural flow without giant card, clean typography */
        <div className="py-2">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-emerald-600 flex items-center justify-center text-white shrink-0 shadow-md shadow-emerald-600/20">
                <Sparkles size={13} />
              </div>
              <span className="text-xs font-semibold text-zinc-100 dark:text-zinc-100 light:text-zinc-900">
                VEXIS PRO
              </span>
            </div>

            {/* Web Search Used Indicator Pill */}
            {message.webSearchUsed && (
              <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[11px] font-medium text-emerald-400 select-none">
                <Globe size={12} className="animate-pulse" />
                <span>🌐 Web search used</span>
              </div>
            )}
          </div>


          {/* Markdown Content Display */}
          <div className="text-sm text-zinc-100 dark:text-zinc-100 light:text-zinc-900 leading-relaxed font-sans prose dark:prose-invert max-w-none">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || "");
                  const codeString = String(children).replace(/\n$/, "");

                  if (!inline && (match || codeString.includes("\n"))) {
                    return (
                      <CodeBlock
                        language={match ? match[1] : ""}
                        code={codeString}
                      />
                    );
                  }

                  return (
                    <code
                      className="bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-zinc-200 text-emerald-400 dark:text-emerald-300 light:text-emerald-700 px-1.5 py-0.5 rounded text-xs font-mono"
                      {...props}
                    >
                      {children}
                    </code>
                  );
                },
              }}
            >
              {message.content}
            </ReactMarkdown>
          </div>

          {/* Subtle Action Icon Buttons Toolbar */}
          <div className="flex items-center gap-1 mt-3 text-zinc-400 dark:text-zinc-400 light:text-zinc-500 text-xs select-none relative">
            <button
              onClick={handleCopyMessage}
              className="p-1.5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-lg transition"
              title="Copy response"
            >
              {copiedMsg ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>

            <button
              onClick={handleSpeak}
              className={`p-1.5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-lg transition ${
                isSpeaking ? "text-emerald-400 font-semibold" : ""
              }`}
              title={isSpeaking ? "Stop reading" : "Read aloud"}
            >
              {isSpeaking ? <VolumeX size={14} /> : <Volume2 size={14} />}
            </button>

            <button
              onClick={regenerateResponse}
              className="p-1.5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-lg transition"
              title="Regenerate response"
            >
              <RotateCcw size={14} />
            </button>

            <div className="h-3 w-px bg-zinc-700 dark:bg-zinc-700 light:bg-zinc-300 mx-0.5" />

            <button
              onClick={() => handleFeedback("up")}
              className={`p-1.5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-lg transition ${
                liked === "up" ? "text-emerald-400 font-semibold" : ""
              }`}
              title="Good response"
            >
              <ThumbsUp size={14} />
            </button>

            <button
              onClick={() => handleFeedback("down")}
              className={`p-1.5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-lg transition ${
                liked === "down" ? "text-red-400 font-semibold" : ""
              }`}
              title="Bad response"
            >
              <ThumbsDown size={14} />
            </button>


            {/* More Actions Menu */}
            <div className="relative">
              <button
                onClick={() => setShowMoreMenu(!showMoreMenu)}
                className="p-1.5 hover:text-white dark:hover:text-white light:hover:text-black hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 rounded-lg transition"
                title="More actions"
              >
                <MoreHorizontal size={14} />
              </button>

              {showMoreMenu && (
                <div className="absolute left-0 top-8 w-44 bg-[#212121] dark:bg-[#212121] light:bg-white border border-[#3a3a3a] dark:border-[#3a3a3a] light:border-[#e5e5e5] rounded-xl shadow-2xl py-1 z-30 text-xs text-zinc-200 dark:text-zinc-200 light:text-zinc-800 animate-in fade-in duration-150">
                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      handleCopyMessage();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                  >
                    <Copy size={13} />
                    Copy text
                  </button>
                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      regenerateResponse();
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                  >
                    <RotateCcw size={13} />
                    Regenerate
                  </button>
                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      sendMessage("Continue response");
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 text-left transition"
                  >
                    <Play size={13} />
                    Continue response
                  </button>
                  <div className="h-px bg-[#3a3a3a] dark:bg-[#3a3a3a] light:bg-[#e5e5e5] my-1" />
                  <button
                    onClick={() => {
                      setShowMoreMenu(false);
                      toast.success("Response reported");
                    }}
                    className="w-full flex items-center gap-2 px-3 py-1.5 hover:bg-red-500/10 text-red-400 text-left transition"
                  >
                    <Flag size={13} />
                    Report response
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

