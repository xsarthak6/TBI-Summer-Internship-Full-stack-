function Hero() {
  return (
    <section
      className="relative h-[85vh] bg-cover bg-center flex items-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1600')",
      }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 max-w-xl mx-auto px-6 text-white">
        <h1 className="text-4xl md:text-6xl font-bold">
          Travel Green.
          <br />
          Stay Meaningfully.
        </h1>

        <p className="text-xl max-w-xl mb-8">
          Discover eco-friendly stays, community experiences,
          and AI-powered travel planning.
        </p>

        <div className="flex gap-4">
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-xl font-semibold">
            Explore Stays
          </button>

          <button className="border border-white px-6 py-3 rounded-xl">
            Plan with AI
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;