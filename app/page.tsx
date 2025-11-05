export default function HomePage() {
  return (
    <main>
      <section
        style={{
          background:
            'linear-gradient(135deg, rgba(255,215,0,.9), rgba(255,140,0,.85)), url(https://images.unsplash.com/photo-1529078155058-5d716f45d604?q=80&w=1600&auto=format&fit=crop) center/cover no-repeat',
          color: '#0d0d0d',
          padding: '80px 20px',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <h1 style={{ fontSize: 42, lineHeight: 1.1, fontWeight: 900, margin: 0 }}>
            El Águila — Orgullo Latino Sin Fronteras.
          </h1>
          <p style={{ fontSize: 18, margin: '14px 0 24px' }}>
            Noticias, entretenimiento y una revista digital para nuestra comunidad — desde San José hacia toda Latinoamérica.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <a
              href="/magazine"
              style={{
                background: '#0d0d0d',
                color: '#fff',
                padding: '12px 16px',
                borderRadius: 12,
                textDecoration: 'none',
                fontWeight: 700,
              }}
            >
              Ver Revista
            </a>
            <a
              href="/sweepstakes"
              style={{
                background: '#fff',
                color: '#0d0d0d',
                padding: '12px 16px',
                borderRadius: 12,
                textDecoration: 'none',
                fontWeight: 700,
                border: '1px solid #0d0d0d',
              }}
            >
              Sorteos
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
