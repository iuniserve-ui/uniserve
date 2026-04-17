import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#0a2540] to-[#1c3d5a] text-white flex items-center px-6 md:px-16 py-20">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-20">

        {/* LEFT TEXT */}
        <div className="max-w-xl text-center md:text-left">

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight"
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
            <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:scale-105 transition">
              Get Free Quote
            </button>

            <button className="border border-white px-6 py-3 rounded-lg hover:bg-white hover:text-black transition">
              Our Services
            </button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full md:w-auto flex justify-center">
          <ImageCarousel />
        </div>

      </div>

      {/* INDUSTRIES BAR */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="
          mt-12 md:mt-0
          md:absolute md:bottom-6 md:left-1/2 md:-translate-x-1/2
          backdrop-blur-lg bg-white/10 border border-white/20
          px-4 py-3 md:px-10 md:py-4
          rounded-xl
          flex flex-wrap justify-center gap-3 md:gap-10
          text-xs md:text-sm text-gray-200
          shadow-lg
          w-full max-w-xl mx-auto md:w-auto
        "
      >
        {["🏫Schools", "🏬Colleges", "🏥Hospitals", "🏢Corporate"].map((item) => (
          <span className="px-2 py-1">
            {item}
          </span>
        ))}
      </motion.div>

    </section>
  );
};

export default Hero;