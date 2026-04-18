import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div>
    <section className="relative min-h-screen bg-linear-to-r from-[#0a2540] to-[#1c3d5a] text-white flex items-center px-6 md:px-16 py-20">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-20">

        {/* LEFT TEXT */}
        <div className="max-w-xl text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-3xl md:text-5xl font-bold leading-tight"
          >
            Smart Facility Management <br />
            <span className="text-yellow-400">
              Powered by Skilled Workforce
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 md:mt-6 text-sm sm:text-base md:text-lg text-gray-300"
          >
            We provide professional cleaning staff, sweepers, and advanced
            maintenance solutions for hospitals, schools, and industries.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 md:mt-8 flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
          >
            <Link to="/quote">
              <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold cursor-pointer hover:scale-105 transition">
                Get Free Quote
              </button>
            </Link>

            <Link to="/services">
              <button className="border border-white px-6 py-3 rounded-lg cursor-pointer hover:bg-white hover:text-black transition">
                Our Services
              </button>
            </Link>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
         <div className="w-full md:w-auto flex justify-center">
          <div className="w-full max-w-sm md:max-w-none">
            <ImageCarousel />
          </div>
        </div>

      </div>

    </section>
    <div className="bg-linear-to-r from-[#0a2540] to-[#1c3d5a]">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="
          grid grid-cols-2 gap-3 text-center

          md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2
          md:flex md:gap-10 md:text-left
          px-4 py-3 md:px-10 md:py-4
          rounded-xl
          text-xs md:text-sm text-gray-200
          shadow-lg
          w-full max-w-xs mx-auto md:w-auto
        "
      >
        {["🏫 Schools", "🏬 Colleges", "🏥 Hospitals", "🏢 Corporate"].map((item, i) => (
          <span key={i} className="px-2 py-1">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  </div>
  );
};

export default Hero;