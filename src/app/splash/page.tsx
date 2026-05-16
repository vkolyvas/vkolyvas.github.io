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
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <video
        src="/brain.mp4"
        autoPlay
        muted
        playsInline
        onEnded={handleVideoEnd}
        className="w-full h-full object-cover"
      />
      <button
        onClick={handleSkip}
        className="absolute bottom-8 right-8 px-4 py-2 text-sm text-white/60 hover:text-white transition-colors"
      >
        Skip →
      </button>
    </div>
  );
}