import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-black to-[#1a1a1a] text-gray-300 border-t-2 border-yellow-500 shadow-[0_-2px_10px_rgba(255,215,0,0.2)] mt-20">

      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
        
        {/* Logo + Motto */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <Image
            src="/images/logo.png"
            alt="El Águila Logo"
            width={80}
            height={80}
            className="mb-3"
          />
          <p className="text-yellow-400 italic text-sm">
            Orgullo Latino Sin Fronteras
          </p>
        </div>

        {/* Quick Links */}
        <div className="text-center">
          <h3 className="text-yellow-400 font-semibold mb-2">Explora</h3>
          <nav className="flex flex-col space-y-2 text-sm">
            <Link href="/news" className="hover:text-yellow-400">Noticias</Link>
            <Link href="/entertainment" className="hover:text-yellow-400">Entretenimiento</Link>
            <Link href="/revista" className="hover:text-yellow-400">Revista</Link>
            <Link href="/coupons" className="hover:text-yellow-400">Cupones</Link>
            <Link href="/sorteos" className="hover:text-yellow-400">Sorteos</Link>
          </nav>
        </div>

        {/* CTA */}
        <div className="flex flex-col items-center md:items-end text-center md:text-right">
          <h3 className="text-yellow-400 font-semibold mb-2">Vuela con nosotros</h3>
          <p className="text-sm mb-3">
            Únete a nuestra comunidad y recibe lo mejor de El Águila.
          </p>
          <Link
            href="/newsletter"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-2 px-4 rounded-full text-sm transition"
          >
            Suscríbete
          </Link>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-yellow-500/30 py-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} El Águila — Orgullo Latino Sin Fronteras.
        Todos los derechos reservados.
      </div>
    </footer>
  );
}
