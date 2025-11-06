import "./globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "El Águila — Orgullo Latino Sin Fronteras",
  description: "Vuela con nosotros.",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
