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
    <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-8 leading-tight">
          AI Forward Deployed Engineer
        </h1>
        <p className="text-2xl text-white/90 font-light tracking-wide mb-4">
          Understand &nbsp;|&nbsp; Define &nbsp;|&nbsp; Design &nbsp;|&nbsp; Build &nbsp;|&nbsp; Deploy &nbsp;|&nbsp; Improve
        </p>
        <img
          src="/FDE.svg"
          alt="FDE Cycle"
          className="w-full max-w-xl mx-auto"
        />
      </div>
      <div className="w-full max-w-3xl">
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
        className="absolute bottom-8 right-8 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
      >
        Skip →
      </button>
    </div>
  );
}