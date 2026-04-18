import { useState } from "react";
import { services } from "../lib/ServiceData";
import ImageSlider from "../components/ImageSlider";

const FullServices = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="py-30 px-6 bg-[#f8fafc] min-h-screen">

      {/* Background Logo */}
        <img
          src="/banner.png"
          alt="bg"
          className="absolute top-4/5 left-1/2 w-125 opacity-20 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none"
        />

      {/* Title */}
      <h1 className="text-4xl font-bold text-center text-[#0a2540] mb-16">
        UniServe Facility Management Private Limited
      </h1>

      {/* Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(service)}
            className="bg-white rounded-xl shadow-md hover:shadow-xl cursor-pointer transition overflow-hidden"
          >
            <img
              src={service.image}
              alt=""
              className="w-full h-48 object-cover"
            />

            <div className="p-6">
              <h2 className="text-xl font-semibold text-[#0a2540] mb-3">
                {service.title}
              </h2>

              <ul className="text-gray-600 text-sm space-y-1">
                {service.points.map((p, i) => (
                  <li key={i}>• {p}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}

      </div>

      {/* Modal Gallery */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">

          {/* Modal Container */}
          <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-[90%] p-6">

            {/* Close Button */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 text-gray-500 cursor-pointer hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold text-[#0a2540] mb-4">
              {selected.title}
            </h2>

            {/* Image Slider */}
            <ImageSlider images={selected.gallery} />

          </div>
        </div>
      )}

    </section>
  );
};

export default FullServices;