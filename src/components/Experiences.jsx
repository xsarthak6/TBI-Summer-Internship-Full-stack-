function Experiences() {
  const experiences = [
    {
      title: "Village Tours",
      count: "48 Experiences",
      icon: "🏘️",
    },
    {
      title: "Cooking Classes",
      count: "32 Experiences",
      icon: "🍳",
    },
    {
      title: "Farm Visits",
      count: "25 Experiences",
      icon: "🌾",
    },
    {
      title: "Handicraft Workshops",
      count: "19 Experiences",
      icon: "🧶",
    },
  ];

  return (
    <section className="bg-[#F5F1E8] py-20">
      <div className="max-w-7xl mx-auto px-8">
        <div className="text-center mb-4">
          <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold">
            Local Culture
          </span>
        </div>

        <h2 className="text-6xl font-bold text-center mb-4">
          Community Experiences
        </h2>

        <p className="text-center text-gray-600 mb-12">
          Local & Authentic Experiences
        </p>

        <div className="grid md:grid-cols-4 gap-6">

          {experiences.map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-3xl p-10 shadow-lg min-h-[260px] hover:-translate-y-3 hover:shadow-2xl transition duration-300"
            >
              <div className="text-5xl mb-5">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold">
                {item.title}
              </h3>

              <p className="text-gray-500 mt-2">
                {item.count}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experiences;