import { motion } from "framer-motion";
import ImageCarousel from "./ImageCarousel";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <section className="relative min-h-[90vh] md:min-h-screen bg-gradient-to-r from-[#0a2540] via-[#123456] to-[#1c3d5a] text-white flex items-center px-5 sm:px-6 md:px-16 pt-12 md:pt-20 pb-12 md:pb-16 overflow-hidden">

        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-400/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-20">

          {/* IMAGE FIRST ON MOBILE */}
          <div className="relative w-full md:w-auto flex justify-center">

            {/* Trust Badge */}
            <div
              className="
                mt-3
                absolute
                top-4
                right-2
                md:top-3
                md:right-3
                z-20
                bg-yellow-400
                text-black
                px-3
                py-1.5
                md:px-4
                md:py-2
                rounded-full
                text-[10px]
                md:text-xs
                font-bold
                shadow-xl
              "
            >
              Trusted Workforce Partner
            </div>

            <div
              className="
                w-full
                max-w-[320px]
                sm:max-w-[380px]
                md:max-w-none
              "
            >
              <ImageCarousel />
            </div>
          </div>

          {/* TEXT CONTENT */}
          <div className="max-w-2xl text-center md:text-left">

            {/* Contact Info */}
            <div
              className="
                flex
                flex-wrap
                items-center
                justify-center
                mt-4 
                md:justify-start
                gap-2
                text-[12px]
                sm:text-[13px]
                text-gray-300
                mb-5
              "
            >
              <a
                href="tel:+918341689831"
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                <Phone size={15} />
                <span>+91 8341689831</span>
              </a>

              <span className="hidden md:block text-gray-500">|</span>

              <a
                href="mailto:iuniserve@gmail.com"
                className="flex items-center gap-2 hover:text-yellow-400 transition"
              >
                <Mail size={15} />
                <span>iuniserve@gmail.com</span>
              </a>
            </div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                lg:text-6xl
                font-extrabold
                leading-tight
              "
            >
              Professional Facility
              <br />
              Management Services
              <br />
              <span className="text-yellow-400">
                for Schools, Hospitals & Corporates
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="
                mt-5
                text-sm
                sm:text-base
                md:text-lg
                text-gray-300
                leading-relaxed
                max-w-xl
                mx-auto
                md:mx-0
              "
            >
              Uniserve delivers reliable housekeeping, cleaning,
              maintenance, and workforce solutions backed by trained
              professionals, compliance standards, and dedicated
              on-site supervision.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="
                mt-8
                flex
                flex-col
                sm:flex-row
                gap-4
                justify-center
                md:justify-start
                w-full
              "
            >
              <Link to="/quote" className="w-full sm:w-auto">
                <button
                  className="
                    w-full
                    sm:w-auto
                    bg-yellow-400
                    text-black
                    px-7
                    py-3
                    rounded-lg
                    font-semibold
                    hover:scale-105
                    transition
                    shadow-lg
                    cursor-pointer
                  "
                >
                  Request Free Consultation
                </button>
              </Link>

              <Link to="/services" className="w-full sm:w-auto">
                <button
                  className="
                    w-full
                    sm:w-auto
                    border
                    border-white
                    px-7
                    py-3
                    rounded-lg
                    hover:bg-white
                    hover:text-black
                    transition
                    cursor-pointer
                  "
                >
                  Explore Services
                </button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="
                grid
                grid-cols-2
                md:grid-cols-4
                gap-3
                md:gap-4
                mt-8
              "
            >
              {[
                { number: "500+", label: "Workforce" },
                { number: "50+", label: "Sites Managed" },
                { number: "24/7", label: "Support" },
                { number: "100%", label: "PF & ESI Compliance" },
              ].map((item) => (
                <div
                  key={item.label}
                  className="
                    bg-white/10
                    backdrop-blur-md
                    border
                    border-white/10
                    rounded-xl
                    p-3
                    md:p-4
                    text-center
                  "
                >
                  <h3 className="text-xl md:text-2xl font-bold text-yellow-400">
                    {item.number}
                  </h3>

                  <p className="text-xs md:text-sm text-gray-300 mt-1">
                    {item.label}
                  </p>
                </div>
              ))}
            </motion.div>

          </div>
        </div>
      </section>

      {/* Industries Served */}
      <div className="bg-gradient-to-r from-[#0a2540] via-[#123456] to-[#1c3d5a] pb-8">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
            grid
            grid-cols-2
            md:flex
            md:justify-center
            gap-3
            md:gap-6
            px-4
            max-w-6xl
            mx-auto
          "
        >
          {[
            "🏫 Educational Institutions",
            "🏥 Healthcare Facilities",
            "🏢 Corporate Offices",
            "🏘️ Residential Communities",
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/5
                border
                border-white/10
                rounded-lg
                px-3
                py-3
                text-center
                text-xs
                sm:text-sm
                text-gray-200
                backdrop-blur-sm
              "
            >
              {item}
            </div>
          ))}
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;