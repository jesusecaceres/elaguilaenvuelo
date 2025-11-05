"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowButton(true), 3000);
    return () => clearTimeout(t);
  }, []);

  return (
    <main className="relative h-screen w-full flex flex-col items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cinematic-banner.png"  // <-- exact filename, no spaces
          alt="El Águila Cinematic Banner"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/80" />
      </div>

      {/* Centered Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="El Águila Logo"
          width={420}
          height={420}
          className="animate-fadeIn drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]"
          priority
        />
        <p className="mt-6 text-lg text-yellow-300 tracking-wide italic opacity-90">
          Orgullo Latino Sin Fronteras
        </p>
      </div>

      {/* Enter Site Button */}
      {showButton && (
        <button
          onClick={() => router.push("/home")}
          className="relative z-10 mt-12 px-8 py-3 text-lg font-semibold text-yellow-300 border border-yellow-500 rounded-full 
          hover:bg-yellow-500 hover:text-black transition-all duration-700 ease-in-out animate-buttonFade glow"
        >
          ✨ Explora El Águila ✨
        </button>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.96); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes buttonFade {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 2s ease-in-out forwards; }
        .animate-buttonFade { animation: buttonFade 2s ease-in-out forwards; }
        .glow { box-shadow: 0 0 20px rgba(255,215,0,.4), 0 0 40px rgba(255,215,0,.2); }
      `}</style>
    </main>
  );
}
