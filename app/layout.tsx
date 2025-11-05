export const metadata = {
  title: "El Águila — Orgullo Latino Sin Fronteras",
  description: "Medio digital Latino: noticias, entretenimiento, revista, cupones y sorteos.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body style={{
        fontFamily: 'system-ui, -apple-system, Segoe UI, Roboto, Noto Sans, Ubuntu, Cantarell, Helvetica Neue, Arial',
        margin: 0,
        background: '#f8f8f8',
        color: '#0d0d0d'
      }}>
        <header style={{
          position: 'sticky',
          top: 0,
          zIndex: 10,
          background: '#0d0d0d',
          color: '#fff',
          boxShadow: '0 2px 8px rgba(0,0,0,.2)',
        }}>
          <div style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '14px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
            <a href="/" style={{
              display: 'flex',
              alignItems: 'baseline',
              gap: 8,
              textDecoration: 'none',
              color: '#fff',
            }}>
              <span style={{ fontSize: 22, fontWeight: 800 }}>El Águila</span>

