import ContactInfo from "./ContactInfo";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#0a2540] text-white pt-16 pb-8">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-4 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold mb-4">
            <span className="text-yellow-400">Uni</span>Serve
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed">
            Delivering professional facility management solutions with
            trained workforce and advanced technology.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <Link to="/" className="hover:text-yellow-400">Home</Link><br/>
            <Link to="services" className="hover:text-yellow-400">Services</Link><br/>
            <a href="#contact" className="hover:text-yellow-400">Contact</a>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-300 text-sm">
            <li>Cleaning Staff</li>
            <li>Hospital Sanitation</li>
            <li>Industrial Cleaning</li>
            <li>Workforce Management</li>
          </ul>
        </div>

        {/* Contact */}
        <div id="contact">
          <h3 className="font-semibold mb-4">Contact</h3>
          <ContactInfo />
        </div>

      </div>

      {/* Divider */}
      <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
        © {new Date().getFullYear()} UniServe Facility Management Private Limited. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;