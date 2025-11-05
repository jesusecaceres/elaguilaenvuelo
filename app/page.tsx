import Image from "next/image";

export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden bg-black">
      {/* Cinematic Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/cinematic-banner.png"
          alt="El Águila Cinematic Banner"
          fill
          className="object-cover opacity-95"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/70" />
      </div>

      {/* Centered Logo */}
      <div className="relative z-10 flex flex-col items-center">
        <Image
          src="/images/logo.png"
          alt="El Águila Logo"
          width={420}
          height={420}
          className="animate-fadeIn drop-shadow-[0_0_35px_rgba(255,215,0,0.7)]"
          priority
        />

        {/* Optional Subtext */}
        <p className="mt-6 text-lg text-yellow-300 tracking-wide italic opacity-90">
          Orgullo Latino Sin Fronteras
        </p>
      </div>

      {/* Fade-in animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.98);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 2s ease-in-out forwards;
        }
      `}</style>
    </main>
  );
}
