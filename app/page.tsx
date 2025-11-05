import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "El Águila — Orgullo Latino Sin Fronteras",
  description: "Vuela con nosotros.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-black text-white font-sans">{children}</body>
    </html>
  );
}
