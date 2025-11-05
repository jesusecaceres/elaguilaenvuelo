export default function Entertainment() {
  const items = [
    {
      title: "Ritmos del Momento",
      desc: "Lo mejor de la música latina actual — reggaetón, pop, y más.",
      img: "https://images.unsplash.com/photo-1497032205916-ac775f0649ae?w=800",
    },
    {
      title: "Cine con Orgullo",
      desc: "Películas latinas que conquistan corazones en todo el mundo.",
      img: "https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800",
    },
    {
      title: "Influencers y Cultura Pop",
      desc: "Las voces digitales que representan nuestra nueva generación.",
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800",
    },
  ];

  return (
    <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Entretenimiento</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {items.map((i) => (
          <div
            key={i.title}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,.08)",
              overflow: "hidden",
            }}
          >
            <img
              src={i.img}
              alt={i.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h2 style={{ fontSize: 20, marginBottom: 8 }}>{i.title}</h2>
              <p style={{ fontSize: 14, color: "#444" }}>{i.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
