export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-20 text-gray-300 border-t border-yellow-500/40">
      {/* Background gradient + gold texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]" />

      <div className="relative z-10 py-10 px-6 text-center">
        <p className="text-sm text-yellow-400">
          © 2025 El Águila — Orgullo Latino Sin Fronteras.
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Vuela con nosotros
        </p>
      </div>
    </footer>
  );
}
