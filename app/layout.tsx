import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export const metadata = {
  title: "El Águila — Orgullo Latino Sin Fronteras",
  description: "El Águila en Vuelo: Noticias, Cultura y Comunidad Latina.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main className="pt-24 min-h-screen">{children}</main>

        {/* Footer */}
        <Footer />
      </body>
    </html>
  );
}
