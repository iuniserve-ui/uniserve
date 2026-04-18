import { useState } from "react";
import { services } from "../lib/ServiceData";
import ImageSlider from "../components/ImageSlider";

const FullServices = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative py-30 px-4 sm:px-6 bg-[#f8fafc] min-h-screen overflow-hidden">

      {/* Background Logo */}
      <img
        src="/logo.png"
        alt="bg"
        className="
          absolute top-1/2 left-1/2
          w-[250px] sm:w-[400px] md:w-[500px]
          opacity-10
          -translate-x-1/2 -translate-y-1/2
          pointer-events-none select-none
        "
      />

      {/* Title */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#0a2540] mb-10 md:mb-16">
        UniServe Facility Management Private Limited
      </h1>

      {/* Grid */}
      <div className="
        grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10
        max-w-6xl mx-auto
      ">
        {services.map((service, index) => (
          <div
            key={index}
            onClick={() => setSelected(service)}
            className="
              bg-white rounded-xl shadow-md hover:shadow-xl
              cursor-pointer transition overflow-hidden
            "
          >
            <img
              src={service.image}
              alt=""
              className="
                w-full h-40 sm:h-44 md:h-48 object-cover
              "
            />

            <div className="p-4 sm:p-6">
              <h2 className="text-lg sm:text-xl font-semibold text-[#0a2540] mb-2 sm:mb-3">
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

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="
            relative bg-white rounded-2xl shadow-2xl
            w-full max-w-3xl
            p-4 sm:p-6
          ">

            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black text-xl"
            >
              ✕
            </button>

            {/* Title */}
            <h2 className="text-lg sm:text-2xl font-bold text-[#0a2540] mb-3 sm:mb-4">
              {selected.title}
            </h2>

            {/* Slider */}
            <ImageSlider images={selected.gallery} />

          </div>
        </div>
      )}

    </section>
  );
};

export default FullServices;