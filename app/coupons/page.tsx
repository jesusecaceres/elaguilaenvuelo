export default function Coupons() {
  const offers = [
    {
      business: "Taquería El Buen Sabor",
      deal: "10% de descuento en todos los tacos los martes.",
      image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?w=800",
    },
    {
      business: "AutoFix Latino",
      deal: "Cambio de aceite por solo $29.99 con El Águila.",
      image: "https://images.unsplash.com/photo-1571607388263-157ad1e10b69?w=800",
    },
    {
      business: "Belleza Latina Spa",
      deal: "Facial gratuito con tu primera cita.",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800",
    },
  ];

  return (
    <main style={{ maxWidth: 1200, margin: "24px auto", padding: "0 20px" }}>
      <h1 style={{ fontSize: 36, marginBottom: 20 }}>Cupones</h1>
      <p style={{ marginBottom: 24 }}>
        Aprovecha las mejores ofertas de negocios locales asociados con El Águila.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: 20,
        }}
      >
        {offers.map((o) => (
          <article
            key={o.business}
            style={{
              background: "#fff",
              borderRadius: 16,
              boxShadow: "0 6px 20px rgba(0,0,0,.08)",
              overflow: "hidden",
            }}
          >
            <img
              src={o.image}
              alt={o.business}
              style={{ width: "100%", height: 180, objectFit: "cover" }}
            />
            <div style={{ padding: 16 }}>
              <h2 style={{ fontSize: 20, marginBottom: 6 }}>{o.business}</h2>
              <p style={{ fontSize: 15, color: "#444" }}>{o.deal}</p>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
