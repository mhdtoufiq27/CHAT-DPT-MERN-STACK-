import React, { useState, useEffect, useRef } from "react";
import { Camera, CameraOff, ShieldCheck, AlertTriangle } from "lucide-react";

export default function CandidateCamera({ isCameraOn, onToggleCamera }) {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null);
  const [permissionError, setPermissionError] = useState("");

  useEffect(() => {
    let activeStream = null;

    if (isCameraOn) {
      setPermissionError("");
      navigator.mediaDevices
        ?.getUserMedia({ video: true, audio: false })
        .then((mediaStream) => {
          activeStream = mediaStream;
          setStream(mediaStream);
          if (videoRef.current) {
            videoRef.current.srcObject = mediaStream;
          }
        })
        .catch((err) => {
          console.warn("[Camera Permission Error]:", err);
          setPermissionError("Camera access denied or device unavailable.");
          onToggleCamera(false);
        });
    } else {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
        setStream(null);
      }
      if (videoRef.current) {
        videoRef.current.srcObject = null;
      }
    }

    return () => {
      if (activeStream) {
        activeStream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCameraOn]);

  return (
    <div className="relative rounded-3xl bg-[#1e1e1e] border border-[#2f2f2f] overflow-hidden flex flex-col justify-between shadow-xl min-h-[220px]">
      {/* Top Bar inside Camera Frame */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-black/40 backdrop-blur-xs z-10 border-b border-white/5">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-white tracking-tight">Candidate Video Preview</span>
        </div>

        <button
          onClick={() => onToggleCamera(!isCameraOn)}
          className={`flex items-center gap-1.5 px-3 py-1 rounded-xl text-xs font-semibold transition border ${
            isCameraOn
              ? "bg-emerald-500/20 text-emerald-400 border-emerald-500/40 hover:bg-emerald-500/30"
              : "bg-zinc-800 text-zinc-300 border-zinc-700 hover:bg-zinc-700 hover:text-white"
          }`}
        >
          {isCameraOn ? <Camera size={13} /> : <CameraOff size={13} />}
          <span>{isCameraOn ? "Camera ON" : "Camera OFF"}</span>
        </button>
      </div>

      {/* Video Content Display */}
      <div className="flex-1 flex items-center justify-center relative min-h-[160px] bg-zinc-950">
        {isCameraOn ? (
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full h-full object-cover transform -scale-x-100"
          />
        ) : (
          <div className="flex flex-col items-center justify-center p-6 text-center text-zinc-500 space-y-2">
            <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-600">
              <CameraOff size={24} />
            </div>
            <p className="text-xs font-medium text-zinc-400">Camera preview disabled</p>
            <p className="text-[11px] text-zinc-600 max-w-xs">
              Audio and text fallback mode are active. You can enable your camera anytime to simulate an interview environment.
            </p>

            {permissionError && (
              <div className="flex items-center gap-1.5 text-xs text-amber-400 bg-amber-950/30 border border-amber-500/30 px-3 py-1.5 rounded-xl mt-2">
                <AlertTriangle size={13} />
                <span>{permissionError}</span>
              </div>
            )}
          </div>
        )}
      </div>

      {/* Privacy Disclaimer Footer */}
      <div className="px-4 py-2 bg-black/60 backdrop-blur-xs border-t border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
        <div className="flex items-center gap-1 text-emerald-400 font-medium">
          <ShieldCheck size={12} />
          <span>Privacy Guaranteed</span>
        </div>
        <span className="text-zinc-500">No video recorded, stored, or physically analyzed</span>
      </div>
    </div>
  );
}
