import React from "react";
import { AlertTriangle, X } from "lucide-react";
import { useChat } from "../../context/ChatContext";

export default function ConfirmModal() {
  const { confirmModalData, setConfirmModalData } = useChat();

  if (!confirmModalData) return null;

  const {
    title = "Are you sure?",
    message = "This action cannot be undone.",
    confirmText = "Confirm",
    cancelText = "Cancel",
    isDanger = false,
    onConfirm,
  } = confirmModalData;

  const handleConfirm = () => {
    if (onConfirm) onConfirm();
    setConfirmModalData(null);
  };

  const handleClose = () => {
    setConfirmModalData(null);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-6 relative">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black p-1 rounded-lg hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100"
        >
          <X size={18} />
        </button>

        <div className="flex items-start gap-4 mb-4">
          <div
            className={`p-3 rounded-2xl shrink-0 ${
              isDanger
                ? "bg-red-500/10 text-red-400 border border-red-500/20"
                : "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
            }`}
          >
            <AlertTriangle size={24} />
          </div>

          <div>
            <h3 className="text-base font-semibold text-white dark:text-white light:text-zinc-900 mb-1">
              {title}
            </h3>
            <p className="text-xs text-zinc-400 dark:text-zinc-400 light:text-zinc-600 leading-relaxed">
              {message}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-end gap-2 pt-4 border-t border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5]">
          <button
            onClick={handleClose}
            className="px-4 py-2 rounded-xl text-xs font-medium text-zinc-300 dark:text-zinc-300 light:text-zinc-700 hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100 transition"
          >
            {cancelText}
          </button>
          <button
            onClick={handleConfirm}
            className={`px-4 py-2 rounded-xl text-xs font-semibold text-white shadow-md transition ${
              isDanger
                ? "bg-red-600 hover:bg-red-500 shadow-red-600/20"
                : "bg-emerald-600 hover:bg-emerald-500 shadow-emerald-600/20"
            }`}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
