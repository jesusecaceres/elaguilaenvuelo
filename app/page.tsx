"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/cinematic-banner .png"
          alt="Cinematic Latin American Flag Banner"
          fill
          className="object-cover opacity-80"
          priority
        />
      </div>

      {/* Overlay for Fade */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/80 z-10" />

      {/* Content Section */}
      <section className="relative z-20 flex flex-col items-center space-y-6">
        {/* Animated Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 2 }}
          className="drop-shadow-[0_0_25px_rgba(255,215,0,0.7)]"
        >
          <Image
            src="/images/logo.png"
            alt="El Águila Logo"
            width={480}
            height={480}
            className="mx-auto"
            priority
          />
        </motion.div>

        {/* Button Fade-in */}
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1.2 }}
          className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 px-8 rounded-full shadow-lg transition-all"
        >
          ✨ Explora El Águila ✨
        </motion.a>
      </section>
    </main>
  );
}
