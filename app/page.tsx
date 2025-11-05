"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/flags-banner.jpg')",
        }}
      ></div>

      {/* Gold Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60"></div>

      {/* Content */}
      <section className="relative z-10 px-4 max-w-2xl">
        {/* El Águila Logo with Fade-in + Glow Animation */}
        <motion.div
          className="w-full max-w-lg mx-auto mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
        >
          <Image
            src="/el-aguila-logo-blue.png"
            alt="El Águila Logo"
            width={600}
            height={250}
            priority
            className="mx-auto drop-shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          />
        </motion.div>

        {/* Main Slogan */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-yellow-400 drop-shadow-[0_0_10px_rgba(255,215,0,0.4)]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          El Águila — Orgullo Latino Sin Fronteras
        </motion.h1>

        {/* Tagline */}
        <motion.p
          className="mt-3 text-lg italic text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          Vuela con nosotros
        </motion.p>

        {/* Button */}
        <motion.a
          href="/magazine"
          className="mt-8 inline-block bg-yellow-500 text-black px-6 py-2 rounded-lg font-semibold hover:bg-yellow-400 transition"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2 }}
        >
          Explora la Revista
        </motion.a>
      </section>
    </main>
  );
}
