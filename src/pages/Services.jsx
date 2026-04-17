const services = [
  {
    title: "Professional Cleaning",
    desc: "Highly trained staff ensuring hygiene and cleanliness.",
    icon: "🧹",
  },
  {
    title: "Hospital Sanitation",
    desc: "Specialized cleaning protocols for medical environments.",
    icon: "🏥",
  },
  {
    title: "Industrial Maintenance",
    desc: "Advanced machinery and workforce for large-scale cleaning.",
    icon: "🏭",
  },
];

const Services = () => {
  return (
    <section id="services" className="relative py-24 bg-linear-to-r from-[#0a2540] to-[#1c3d5a] text-center">

      {/* Smooth fade from hero */}
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#0a2540] to-transparent pointer-events-none"></div>

      {/* Heading */}
      <h2 className="text-4xl font-bold text-[#f2f4f6] mb-4">
        Our Services
      </h2>

      <p className="text-white mb-14">
        Reliable, scalable and professional facility solutions
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-10 px-6 md:px-10 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
          >
            {/* Icon */}
            <div className="text-4xl mb-4">
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-xl font-semibold text-[#0a2540] mb-3 group-hover:text-yellow-500 transition">
              {service.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>

            {/* Bottom accent line */}
            <div className="mt-6 h-0.5 w-0 bg-yellow-400 group-hover:w-full transition-all duration-300"></div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Services;