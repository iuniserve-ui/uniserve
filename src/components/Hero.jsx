import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-r from-[#0a2540] to-[#1c3d5a] text-white flex items-center px-6 md:px-16 py-20">

      <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-12 md:gap-20">

        {/* LEFT TEXT */}
        <div className="max-w-xl text-center md:text-left">
          {/* Contact Row */}
            <div className="flex items-center gap-4 text-[12px] text-gray-300">
              <a href="tel:+918867456566" className="hover:text-yellow-400">
                <Phone/>+91 8867456566
              </a>

              <span className="text-gray-500">|</span>

              <a href="mailto:iuniserve@gmail.com" className="hover:text-yellow-400">
                <Mail/>iuniserve@gmail.com
              </a>
            </div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl mt-10 sm:text-4xl md:text-5xl font-bold leading-tight"
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

          {/* CTA BUTTONS */}
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

          {/* 🔹 CONTACT + INDUSTRIES (NEW STRUCTURE) */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="mt-8 flex flex-col items-center md:items-start gap-4"
          >

            

            {/* Industries Grid */}
            <div className="
              grid grid-cols-2 gap-3
              bg-white/10 backdrop-blur-md border border-white/20
              px-4 py-3 rounded-xl
              text-xs text-gray-200
              w-full max-w-xs
            ">
              {["🏫 Schools", "🏬 Colleges", "🏥 Hospitals", "🏢 Corporate"].map((item, i) => (
                <span key={i} className="text-center">
                  {item}
                </span>
              ))}
            </div>

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
  );
};

export default Hero;