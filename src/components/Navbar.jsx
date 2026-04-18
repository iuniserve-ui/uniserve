import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed w-full z-50 bg-[#0a2540]/90 backdrop-blur-md text-white px-6 md:px-8 py-4"
    >
      <div className="relative flex items-center justify-between">

        {/* LEFT: Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-18" />
          {/* <h1 className="text-2xl font-bold">
            <span className="text-yellow-400">Uni</span>Serve
          </h1> */}
        </div>

        {/* CENTER: Links */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-8 text-sm">
          <Link to="/" className="hover:text-yellow-400">
            Home
          </Link>

          <Link to="/services" className="hover:text-yellow-400">
            Services
          </Link>

          <Link to="/about" className="hover:text-yellow-400">
            About
          </Link>

          <a href="#contact" className="hover:text-yellow-400">
            Contact
          </a>
        </div>

        {/* RIGHT: Button + Mobile Menu */}
        <div className="flex items-center gap-4">

          {/* Desktop Button */}
          <Link to="/quote">
          <button className="hidden md:block cursor-pointer bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition">
            Get Quote
          </button>
          </Link>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="flex flex-col gap-1">
              <span className={`block w-6 h-0.5 bg-white transition ${open ? "rotate-45 translate-y-1.5" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition ${open ? "opacity-0" : ""}`}></span>
              <span className={`block w-6 h-0.5 bg-white transition ${open ? "-rotate-45 -translate-y-1.5" : ""}`}></span>
            </button>
          </div>

        </div>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden mt-4 bg-[#0a2540] border border-white/10 rounded-xl p-6 flex flex-col gap-4 text-center shadow-lg">
          <Link to="/" onClick={() => setOpen(false)}>Home</Link>
          <Link to="services" onClick={() => setOpen(false)}>Services</Link>
          <Link to="about" onClick={() => setOpen(false)}>About</Link>
          <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold mt-2">
            Get Quote
          </button>
        </div>
      )}
    </motion.nav>
  );
};

export default Navbar;