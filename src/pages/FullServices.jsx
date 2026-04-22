import { useState } from "react";
import { services } from "../lib/ServiceData";
import ImageSlider from "../components/ImageSlider";
import {
  BrushCleaning,
  Users,
  ShieldCheck,
  Wrench,
  Building2,
  UserCheck,
} from "lucide-react";

const iconMap = {
  "House Keeping Services": BrushCleaning,
  "Man Power Supply": Users,
  "Security Support Staff": ShieldCheck,
  "Technical Support": Wrench,
  "Facility Management": Building2,
  "Office Support Staff": UserCheck,
};

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
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10 max-w-6xl mx-auto">
        {services.map((service, index) => {
          const Icon = iconMap[service.title] || BrushCleaning;

          return (
            <div
              key={index}
              // onClick={() => setSelected(service)}
              className="
                bg-white border border-gray-200 rounded-lg
                hover:shadow-xl hover:-translate-y-1
                transition-all duration-300
                cursor-pointer overflow-hidden
              "
            >
              {/* Image */}
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover object-top"
              />

              <div className="p-5 sm:p-6">

                {/* Title with Icon */}
                <h2 className="text-lg sm:text-xl font-semibold text-[#0a2540] mb-4 flex items-center gap-2">
                  <Icon size={20} className="text-amber-500" />
                  {service.title}
                </h2>

                {/* Divider */}
                <div className="border-t border-gray-200 mb-4"></div>

                {/* Points */}
                <div className="space-y-3">
                  {service.points.map((p, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-2 text-sm text-gray-700"
                    >
                      <span className="text-gray-400 mt-[2px]">▪</span>
                      <span>{p}</span>
                    </div>
                  ))}
                </div>

              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {selected && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 px-4">

          <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-3xl p-4 sm:p-6">

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