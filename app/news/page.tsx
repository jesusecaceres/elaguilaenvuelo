export default function News() {
  const articles = [
    {
      title: "Orgullo Latino: Historias que Inspiran",
      excerpt: "Descubre a los héroes de nuestra comunidad que marcan la diferencia cada día.",
      image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800",
    },
    {
      title: "El Águila en la Calle: Noticias Locales",
      excerpt: "Cobertura directa de eventos, negocios y cultura desde San José y más allá.",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
    },
    {
      title: "Tendencias y Cultura Latina",
      excerpt: "Música, entretenimiento y estilo con el toque de nuestra gente.",
      image: "https://images.unsplash.com/photo-1505238680356-667803448bb6?w=800",
    },
  ];

  return (
    <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Noticias</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {articles.map((a) => (
          <article
            key={a.title}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,.08)",
              overflow: "hidden",
            }}
          >
            <img
              src={a.image}
              alt={a.title}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h2 style={{ fontSize: 20, marginBottom: 8 }}>{a.title}</h2>
              <p style={{ fontSize: 14, color: "#444" }}>{a.excerpt}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
