import { MapPin, Phone, Mail } from "lucide-react";

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
          href="https://wa.me/918867456566"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 hover:text-green-500 transition"
        >
          <Phone size={18} />
          <span>+91 8867456566</span>
        </a>
      </li>

      {/* Email */}
      <li>
        <a
          href="mailto:iuniserve@gmail.com"
          className="flex items-center gap-3 hover:text-blue-500 transition"
        >
          <Mail size={18} />
          <span>iuniserve@gmail.com</span>
        </a>
      </li>

    </ul>
  );
};

export default ContactInfo;