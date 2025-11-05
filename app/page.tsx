export default function Home() {
  return (
    <main className="relative h-screen w-full flex items-center justify-center text-center text-white overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('/images/flags-banner.jpg')`, // replace with your blended flags image
        }}
      ></div>

      {/* Gold Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60 backdrop-blur-sm"></div>

      {/* Content */}
      <section className="relative z-10 px-4 max-w-2xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-wide text-yellow-400 drop-shadow-lg">
          El Águila — Orgullo Latino Sin Fronteras
        </h1>
        <p className="text-lg md:text-2xl mb-8 italic text-gray-100">
          Vuela con nosotros
        </p>
        <a
          href="/revista"
          className="inline-block bg-yellow-500 hover:bg-yellow-400 text-black font-semibold py-3 px-6 rounded-full transition-all duration-300 shadow-lg"
        >
          Explora la Revista
        </a>
      </section>
    </main>
  );
}
