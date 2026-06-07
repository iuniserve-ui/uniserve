import { MapPin, Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <ul className="space-y-4 text-gray-300">

      {/* Location */}
      <li>
        <a
          href="https://maps.app.goo.gl/3B91S53aj6Z3E9t8A?g_st=aw"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-yellow-500 transition"
        >
          <MapPin size={18} />
          <span>Horamavu Main Road, Benguluru, Karnataka</span>
        </a>
      </li>

      {/* Phone → WhatsApp */}
      <li>
        <a
          href="tel:+918341689831"
          className="flex items-center gap-2 hover:text-blue-400 transition"
        >
          <Phone size={15} />
          <span>+91 8341689831</span>
        </a>
      </li>
      <li>
        <a
          href="https://wa.me/918867456566"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-green-500 transition"
        >
          <FaWhatsapp size={18} />
          <span>+91 8341689831</span>
        </a>
      </li>

      {/* Email */}
      <li>
        <a
          href="mailto:iuniserve@gmail.com"
          className="flex items-center gap-3 hover:text-cyan-500 transition"
        >
          <Mail size={18} />
          <span>iuniserve@gmail.com</span>
        </a>
      </li>

    </ul>
  );
};

export default ContactInfo;