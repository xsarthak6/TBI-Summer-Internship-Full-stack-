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
    <section className="bg-green-950 py-10">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-6 px-8">
        {features.map((item) => (
          <div
            key={item.title}
            className="bg-green-900 text-white p-6 rounded-2xl"
          >
            <div className="text-3xl mb-3">{item.icon}</div>

            <h3 className="font-bold text-lg">
              {item.title}
            </h3>

            <p className="text-sm text-gray-300 mt-2">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;