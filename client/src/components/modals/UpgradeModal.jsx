import React from "react";
import { X, Check, Zap, Sparkles, Brain, ArrowRight } from "lucide-react";
import { useChat } from "../../context/ChatContext";
import toast from "react-hot-toast";

export default function UpgradeModal() {
  const { isUpgradeOpen, setIsUpgradeOpen } = useChat();

  if (!isUpgradeOpen) return null;

  const handleUpgrade = () => {
    toast.success("Welcome to VEXIS PRO Plus! Subscription activated.");
    setIsUpgradeOpen(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-[#171717] border border-[#2f2f2f] w-full max-w-2xl rounded-2xl shadow-2xl overflow-hidden p-6 relative">
        <button
          onClick={() => setIsUpgradeOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-lg hover:bg-[#2f2f2f]"
        >
          <X size={18} />
        </button>

        <div className="text-center max-w-md mx-auto mb-8">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 flex items-center justify-center text-white mx-auto mb-3 shadow-xl shadow-emerald-600/30">
            <Zap size={24} />
          </div>
          <h2 className="text-xl font-bold text-white">Upgrade your plan</h2>
          <p className="text-xs text-zinc-400 mt-1">
            Get access to VEXIS PRO Pro, reasoning model, and priority speeds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Free Plan */}
          <div className="bg-[#212121] border border-zinc-800 rounded-2xl p-5 flex flex-col justify-between">
            <div>
              <div className="text-sm font-semibold text-white">Free</div>
              <div className="text-2xl font-bold text-white mt-2">$0</div>
              <div className="text-[11px] text-zinc-400 mt-0.5">For casual browsing</div>
              <div className="space-y-2 mt-4 text-xs text-zinc-300">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-zinc-500" />
                  <span>Access to VEXIS PRO Fast</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-zinc-500" />
                  <span>Standard response speed</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-zinc-500" />
                  <span>Web search integration</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => setIsUpgradeOpen(false)}
              className="w-full py-2.5 mt-6 bg-[#2f2f2f] text-zinc-300 hover:text-white font-medium rounded-xl text-xs transition"
            >
              Your current plan
            </button>
          </div>

          {/* Plus Plan */}
          <div className="bg-gradient-to-b from-emerald-950/40 to-[#212121] border-2 border-emerald-500/60 rounded-2xl p-5 flex flex-col justify-between relative shadow-xl shadow-emerald-950/50">
            <span className="absolute -top-3 right-4 bg-emerald-500 text-black text-[10px] font-bold px-2.5 py-0.5 rounded-full">
              POPULAR
            </span>
            <div>
              <div className="text-sm font-semibold text-emerald-400 flex items-center gap-1.5">
                <Sparkles size={16} />
                VEXIS PRO Plus
              </div>
              <div className="text-2xl font-bold text-white mt-2">
                $20 <span className="text-xs font-normal text-zinc-400">/ month</span>
              </div>
              <div className="text-[11px] text-zinc-400 mt-0.5">For power users & developers</div>
              <div className="space-y-2 mt-4 text-xs text-zinc-200">
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  <span>Full access to <strong>VEXIS PRO Pro</strong> & <strong>o1 reasoning</strong></span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  <span>5x higher message limits</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  <span>Advanced image & file analysis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check size={14} className="text-emerald-400" />
                  <span>Ultra-fast priority response time</span>
                </div>
              </div>
            </div>
            <button
              onClick={handleUpgrade}
              className="w-full py-2.5 mt-6 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl text-xs transition shadow-lg shadow-emerald-600/30 flex items-center justify-center gap-1.5"
            >
              Get VEXIS PRO Plus <ArrowRight size={14} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
