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
      <div className="max-w-2xl text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-medium text-white mb-6 leading-tight">
          Forward Deployed Engineer
        </h1>
        <p className="text-lg text-white/70 leading-relaxed">
          <span className="text-white/90 font-medium">System Integration:</span> Connecting new technologies (such as frontier AI models or analytics platforms) with a client&apos;s legacy infrastructure and security frameworks.
        </p>
        <p className="text-lg text-white/70 leading-relaxed mt-3">
          <span className="text-white/90 font-medium">Bespoke Development:</span> Writing custom code, APIs, and scripts to tailor the software to the client&apos;s specific daily workflows.
        </p>
        <p className="text-lg text-white/70 leading-relaxed mt-3">
          <span className="text-white/90 font-medium">Feedback Loop Management:</span> Acting as the eyes and ears of the core product team. Identifying missing features or user friction in the field and relaying this data back to base to improve the overarching product.
        </p>
        <p className="text-lg text-white/70 leading-relaxed mt-3">
          <span className="text-white/90 font-medium">Troubleshooting & Support:</span> Managing MLOps pipelines, configuring cloud environments (e.g., AWS, Azure), and fixing system bugs directly at the client site.
        </p>
        <p className="text-sm text-white/50 mt-6">
          Proficiency in Python, AWS, Azure, Kubernetes, and database/vector management.
        </p>
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