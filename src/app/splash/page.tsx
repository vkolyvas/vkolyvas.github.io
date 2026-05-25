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
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-3">
      <div className="flex items-center gap-4 mb-3 w-full max-w-2xl">
        <div className="flex-shrink-0">
          <h1 className="text-lg md:text-xl font-medium text-white leading-tight">
            AI Forward Deployed Engineer
          </h1>
          <p className="text-xs text-white/90 font-light tracking-wide mt-1">
            Understand | Define | Design | Build | Deploy | Improve
          </p>
        </div>
        <img
          src="/FDE.svg"
          alt="FDE Cycle"
          className="w-48 md:w-56"
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
        className="absolute bottom-3 right-3 px-2 py-1 text-xs text-white/60 hover:text-white transition-colors"
      >
        Skip →
      </button>
    </div>
  );
}