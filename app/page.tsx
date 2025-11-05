"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/cinematic-banner.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
      ></div>

      {/* Subtle Black & Gold Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/80"></div>

      {/* Logo Animation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center justify-center"
      >
        <Image
          src="/images/logo.png"
          alt="El Águila Logo"
          width={500}
          height={500}
          className="drop-shadow-[0_0_25px_rgba(255,215,0,0.6)]"
          priority
        />
      </motion.div>

      {/* Cinematic Fade at Bottom */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
    </main>
  );
}
