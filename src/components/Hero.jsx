import heroImage from "../assets/hero-image.png";
function Hero() {
  return (
   <section className="relative min-h-[120vh] md:min-h-[125vh] flex items-center pt-20">
      <img
        src={heroImage}
        alt="Luxury Mountain Lodge"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/55 to-black/35"></div>

    <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 lg:px-16 text-white">
        <span className="inline-block ml-6 px-4 py-2 rounded-full border border-yellow-500 text-yellow-400 mb-6">
          Sustainable Travel Platform
        </span>

        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold leading-tight max-w-xl md:max-w-3xl">
          Explore Responsibly.
          <br />
          <span className="text-green-400">
            Stay Sustainably.
          </span>
        </h1>

        <p className="mt-8 max-w-lg text-lg md:text-xl text-gray-200 leading-relaxed">
          Curated sustainable stays, authentic local experiences,
          and AI-powered trip planning for conscious explorers.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <button className="bg-green-700 px-6 py-3 rounded-lg">
            Explore Stays
          </button>

          <button className="border border-white px-6 py-3 rounded-lg">
            Plan With AI
          </button>
        </div>
       <div className="grid grid-cols-2 md:flex gap-6 md:gap-12 mt-12 pb-40 md:pb-24">

        <div>
          <h3 className="text-3xl font-bold">12K+</h3>
          <p className="text-gray-300 text-sm">
            Eco Stays
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">8K+</h3>
          <p className="text-gray-300 text-sm">
            Experiences
          </p>
        </div>

        <div>
          <h3 className="text-3xl font-bold">25K+</h3>
          <p className="text-gray-300 text-sm">
            Travelers
          </p>
        </div>
        <div>
          <h3 className="text-3xl font-bold">1M+</h3>
          <p className="text-gray-300 text-sm">
            Trees Supported
          </p>
        </div>

      </div>
        <div className="hidden lg:block absolute right-[10%] top-[10%] bg-black/20 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-3 w-52">

  <div className="text-yellow-400 text-sm mb-2">
    ✨ AI Pick
  </div>

  <h3 className="text-xl font-bold">
    Green Valley Homestay
  </h3>

  <p className="text-gray-300">
    📍 Meghalaya, India
  </p>

  <p className="mt-2 text-green-400 font-bold">
    ₹2200/night
  </p>

  <p className="text-yellow-400">
    ★ 4.8
  </p>

</div>
      </div>
    </section>
  );
}

export default Hero;