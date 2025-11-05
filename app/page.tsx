"use client";
import Image from "next/image";
import { motion } from "framer-motion";
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
          src="/cinematic-banner.png" // ✅ updated image name
          alt="El Águila Cinematic Banner"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />
      </div>

      {/* Center Logo with Glow Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center"
      >
        <Image
          src="/logo.png" // ✅ confirmed name
          alt="El Águila Logo"
          width={420}
          height={420}
          className="drop-shadow-[0_0_40px_rgba(255,215,0,0.8)]"
          priority
        />
        <p className="mt-6 text-lg text-yellow-300 tracking-wide italic opacity-90">
          Orgullo Latino Sin Fronteras
        </p>
      </motion.div>

      {/* Button */}
      {showButton && (
        <motion.button
          onClick={() => router.push("/home")}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="relative z-10 mt-12 px-8 py-3 text-lg font-semibold text-yellow-300 border border-yellow-500 rounded-full 
          hover:bg-yellow-500 hover:text-black transition-all duration-700 ease-in-out glow"
        >
          ✨ Explora El Águila ✨
        </motion.button>
      )}

      <style jsx>{`
        .glow {
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2);
        }
      `}</style>
    </main>
  );
}
