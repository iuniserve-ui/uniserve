const testimonials = [
  {
    name: "City Hospital",
    review:
      "Outstanding service! Their cleaning staff maintains top hygiene standards.",
  },
  {
    name: "Green Valley School",
    review:
      "Reliable and professional team. Highly recommended for institutions.",
  },
  {
    name: "TechCorp Pvt Ltd",
    review:
      "Their industrial cleaning solutions improved our workspace efficiency.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-[#0a2540] text-white text-center">
      
      {/* Heading */}
      <h2 className="text-4xl font-bold mb-12">
        What Our Clients Say
      </h2>

      {/* Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center px-6 md:px-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl max-w-sm border border-white/10 hover:border-yellow-400/30 transition duration-300"
          >
            <p className="text-gray-300 mb-4 text-sm leading-relaxed">
              "{t.review}"
            </p>

            <h4 className="text-yellow-400 font-semibold">
              {t.name}
            </h4>
          </div>
        ))}
      </div>

    </section>
  );
};

export default Testimonials;