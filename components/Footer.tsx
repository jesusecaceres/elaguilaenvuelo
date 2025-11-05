import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden mt-20 text-gray-300 border-t border-yellow-500/40">
      {/* Background gradient + gold texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#111] to-[#1a1a1a]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,215,0,0.08),transparent_60%)]" />
      
      {/* Faint eagle watermark (optional – replace with your real logo later) */}
      <div className="absolute inset-0 opacity-5 bg-[url('/images/logo.png')] bg-center bg-no-repeat bg-contain"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10 z-10">
        
        {/* Logo + Motto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-3">
          <Image
            src="/images/logo.png"
            alt="El Águila Logo"
            width={80}
            height={80}
            className="drop-shadow-[0_0_10px_rgba(255,215,0,0.3)]"
          />
          <p className="text-yellow-400 italic text-sm tracking-wide">
            Orgullo Latino Sin Fronteras
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-yellow-400 font-semibold mb-2 text-lg">Explora</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/news" className="hover:text-yellow-400 transition">Noticias</Link>
            <Link href="/entertainment" className="hover:text-yellow-400 transition">Entretenimiento</Link>
            <Link href="/revista" className="hover:text-yellow-400 transition">Revista</Link>
            <Link href="/coupons" className="hover:text-yellow-400 transition">Cupones</Link>
            <Link href="/sorteos" className="hover:text-yellow-400 transition">Sorteos</Link>
          </nav>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right space-y-3">
          <h3 className="text-yellow-400 font-semibold text-lg">Vuela con nosotros</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            Únete a nuestra comunidad y recibe lo mejor de El Águila cada semana.
          </p>
          <Link
            href="/newsletter"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-5 rounded-full text-sm shadow-lg hover:shadow-yellow-500/30 transition-all duration-300"
          >
            Suscríbete
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="relative border-t border-yellow-500/20 py-4 text-center text-xs text-gray-500 bg-black/40">
        © {new Date().getFullYear()} <span className="text-yellow-400">El Águila</span> — Orgullo Latino Sin Fronteras. Todos los derechos reservados.
      </div>
    </footer>
  );
}
