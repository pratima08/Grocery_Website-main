import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";  // Import WhatsApp icon

const SocialLinks = () => {
  return (
    <div>
      {/* <a
        href="https://www.facebook.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook style={{ fontSize: "24px", color: "#4267B2" }} />
      </a> */}
      <a
        href="https://www.instagram.com/rajumamta2605?igsh=MWdwemk4aG96YTRlYw=="
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram style={{ fontSize: "24px", color: "#E4405F" }} />
      </a>
      <a
        href="https://wa.me/9893358946?text=Hello%2C%20I%20need%20assistance%21" // Replace with your phone number
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp style={{ fontSize: "24px", color: "#25D366" }} />  {/* WhatsApp color */}
      </a>
    </div>
  );
};

// Named exports for SocialLinks and the individual icons
export { SocialLinks,  FaInstagram, FaWhatsapp };
