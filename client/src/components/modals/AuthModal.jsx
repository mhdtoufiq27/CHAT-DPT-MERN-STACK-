import React, { useState } from "react";
import { X, Sparkles, LogIn, UserPlus, Eye, EyeOff } from "lucide-react";
import { useAuth } from "../../context/AuthContext";
import toast from "react-hot-toast";

export default function AuthModal() {
  const {
    isAuthModalOpen,
    setIsAuthModalOpen,
    authMode,
    setAuthMode,
    login,
    register,
  } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  if (!isAuthModalOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (authMode === "login") {
      await login(email, password);
    } else {
      await register(name, email, password);
    }
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 animate-in fade-in duration-200">
      <div className="bg-[#171717] dark:bg-[#171717] light:bg-white border border-[#2f2f2f] dark:border-[#2f2f2f] light:border-[#e5e5e5] w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-6 relative">
        <button
          onClick={() => setIsAuthModalOpen(false)}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black p-1 rounded-lg hover:bg-[#2f2f2f] dark:hover:bg-[#2f2f2f] light:hover:bg-zinc-100"
        >
          <X size={18} />
        </button>

        <div className="flex flex-col items-center justify-center gap-1 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-lg shadow-emerald-600/30">
              <Sparkles size={20} />
            </div>
            <span className="text-xl font-bold text-white dark:text-white light:text-zinc-900 tracking-tight">
              VEXIS PRO
            </span>
          </div>
          <p className="text-xs text-zinc-400">
            {authMode === "login" ? "Welcome to VEXIS PRO — Your intelligent AI workspace." : "Create your VEXIS PRO account"}
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 p-1 rounded-xl mb-6">
          <button
            onClick={() => setAuthMode("login")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              authMode === "login"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black"
            }`}
          >
            Log In
          </button>
          <button
            onClick={() => setAuthMode("register")}
            className={`flex-1 py-2 text-xs font-semibold rounded-lg transition ${
              authMode === "register"
                ? "bg-[#2f2f2f] dark:bg-[#2f2f2f] light:bg-white text-white dark:text-white light:text-zinc-900 shadow-xs"
                : "text-zinc-400 dark:text-zinc-400 light:text-zinc-600 hover:text-white dark:hover:text-white light:hover:text-black"
            }`}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 text-xs">
          {authMode === "register" && (
            <div>
              <label className="block text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mohammed Toufiq"
                className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder-zinc-500 outline-none focus:border-emerald-500 transition"
              />
            </div>
          )}

          <div>
            <label className="block text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3.5 py-2.5 text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder-zinc-500 outline-none focus:border-emerald-500 transition"
            />
          </div>

          <div>
            <label className="block text-zinc-300 dark:text-zinc-300 light:text-zinc-700 font-medium mb-1">
              Password
            </label>
            <div className="relative flex items-center">
              <input
                type={showPassword ? "text" : "password"}
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#212121] dark:bg-[#212121] light:bg-zinc-100 border border-zinc-700 dark:border-zinc-700 light:border-zinc-300 rounded-xl px-3.5 py-2.5 pr-10 text-zinc-100 dark:text-zinc-100 light:text-zinc-900 placeholder-zinc-500 outline-none focus:border-emerald-500 transition"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 text-zinc-400 hover:text-white dark:hover:text-white light:hover:text-black"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Remember me & Forgot Password */}
          {authMode === "login" && (
            <div className="flex items-center justify-between text-[11px] text-zinc-400">
              <label className="flex items-center gap-1.5 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="accent-emerald-500 rounded"
                />
                <span>Remember me</span>
              </label>
              <button
                type="button"
                onClick={() => toast("Password reset link sent to email", { icon: "📧" })}
                className="text-emerald-400 hover:underline"
              >
                Forgot password?
              </button>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-xl transition shadow-lg shadow-emerald-600/20 flex items-center justify-center gap-2 mt-2"
          >
            {authMode === "login" ? <LogIn size={16} /> : <UserPlus size={16} />}
            {loading
              ? "Processing..."
              : authMode === "login"
              ? "Log In to VEXIS PRO"
              : "Create VEXIS PRO Account"}
          </button>
        </form>
      </div>
    </div>
  );
}
