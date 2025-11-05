export default function Sweepstakes() {
  const giveaways = [
    {
      title: "Sorteo de Fiestas Patrias",
      desc: "Gana boletos para el concierto de tu artista latino favorito. ¡Participa ahora!",
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=800",
    },
    {
      title: "Premio Familiar El Águila",
      desc: "Participa y gana una canasta con productos locales y certificados de regalo.",
      image: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800",
    },
  ];

  return (
    <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Sorteos</h1>
      <p style={{ marginBottom: 24 }}>
        Participa en los sorteos y celebraciones exclusivas de El Águila.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {giveaways.map((g) => (
          <article
            key={g.title}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,.08)",
              overflow: "hidden",
            }}
          >
            <img
              src={g.image}
              alt={g.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h2 style={{ fontSize: 20, marginBottom: 6 }}>{g.title}</h2>
              <p style={{ fontSize: 15, color: "#444" }}>{g.desc}</p>
              <a
                href="#"
                style={{
                  display: "inline-block",
                  marginTop: 10,
                  padding: "10px 16px",
                  background: "#0d0d0d",
                  color: "#fff",
                  borderRadius: 8,
                  textDecoration: "none",
                  fontWeight: 700,
                }}
              >
                Participar →
              </a>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
