function Features() {
  const features = [
    {
      title: "Eco-Friendly",
      desc: "Sustainable stays that care for nature",
      icon: "🌿",
    },
    {
      title: "Community First",
      desc: "Support local hosts & communities",
      icon: "👥",
    },
    {
      title: "AI Powered",
      desc: "Smart travel recommendations",
      icon: "✨",
    },
    {
      title: "Safe & Trusted",
      desc: "Verified stays and secure bookings",
      icon: "🛡️",
    },
  ];

  return (
    <section className="bg-[#071f13] py-16">

      <div className="max-w-7xl mx-auto px-8">

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item) => (
            <div
              key={item.title}
              className="bg-[#0d2b1b] border border-green-800/30 rounded-3xl p-6 hover:scale-105 transition duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-green-700 flex items-center justify-center text-2xl mb-4">
                {item.icon}
              </div>

              <h3 className="text-white font-bold text-xl">
                {item.title}
              </h3>

              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}

export default Features;