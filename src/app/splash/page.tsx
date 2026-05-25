"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Splash() {
  const router = useRouter();
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push("/home");
    }, 45000); // fallback after 45 seconds

    return () => clearTimeout(timer);
  }, [router]);

  const handleVideoEnd = () => {
    setVideoEnded(true);
    router.push("/home");
  };

  const handleSkip = () => {
    router.push("/home");
  };

  return (
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-xl text-center mb-4">
        <h1 className="text-xl md:text-2xl font-medium text-white mb-4 leading-tight">
          AI Forward Deployed Engineer
        </h1>
        <p className="text-sm text-white/90 font-light tracking-wide mb-3">
          Understand | Define | Design | Build | Deploy | Improve
        </p>
        <img
          src="/FDE.svg"
          alt="FDE Cycle"
          className="w-full max-w-md mx-auto"
        />
      </div>
      <div className="w-full max-w-xl">
        <video
          src="/brain.mp4"
          autoPlay
          muted
          playsInline
          onEnded={handleVideoEnd}
          className="w-full rounded-lg shadow-2xl"
        />
      </div>
      <button
        onClick={handleSkip}
        className="absolute bottom-4 right-4 px-3 py-1.5 text-xs text-white/60 hover:text-white transition-colors"
      >
        Skip →
      </button>
    </div>
  );
}