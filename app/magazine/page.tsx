export default function Magazine() {
  const features = [
    {
      title: "El Águila en Vuelo — Edición Especial",
      desc: "Explora nuestra revista digital con videos, entrevistas y contenido exclusivo.",
      video: "https://www.youtube.com/embed/ysz5S6PUM-U",
    },
    {
      title: "Historias con Orgullo",
      desc: "Narrativas visuales que celebran la fuerza y el espíritu de nuestra comunidad latina.",
      video: "https://www.youtube.com/embed/DWRcNpR6Kdc",
    },
  ];

  return (
    <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Revista Digital</h1>
      <div style={{ display: "flex", flexDirection: "column", gap: 40 }}>
        {features.map((f) => (
          <section
            key={f.title}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,.08)",
              overflow: "hidden",
            }}
          >
            <div style={{ padding: 16 }}>
              <h2 style={{ fontSize: 24, marginBottom: 8 }}>{f.title}</h2>
              <p style={{ fontSize: 15, color: "#444" }}>{f.desc}</p>
              <div
                style={{
                  position: "relative",
                  paddingBottom: "56.25%",
                  height: 0,
                  marginTop: 16,
                }}
              >
                <iframe
                  src={f.video}
                  title={f.title}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    border: "none",
                    borderRadius: 12,
                  }}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
