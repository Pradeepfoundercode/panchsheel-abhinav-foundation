import React, { useState } from "react";

import contact from "../../assets/images/contact.png";
import phone from "../../assets/images/phone.png";
import mail from "../../assets/images/mail.png";
import whatsapp from "../../assets/images/whatsapp.png";
import instagram from "../../assets/images/instagram.png";
import contact1 from "../../assets/images/contact1.png";
import linkedin from "../../assets/images/linkedin.png";
import sms from "../../assets/images/sms.png";
import close from "../../assets/images/close.png";

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const socialLinks = [
    {
      icon: phone,
      bg: "#00D98B",
      link: "tel:+919999999999",
      label: "Call",
    },
    {
      icon: mail,
      bg: "#FF405A",
      link: "mailto:jeevanjyoti.sss@gmail.com",
      label: "Email",
    },
    {
      icon: whatsapp,
      bg: "#42DE6C",
      link: "https://wa.me/919999999999",
      label: "WhatsApp",
    },
    {
      icon: instagram,
      bg: "#F58AE5",
      link: "https://www.instagram.com/",
      label: "Instagram",
    },
    {
      icon: contact1,
      bg: "#293F7D",
      link: "https://www.facebook.com/",
      label: "Facebook",
    },
    {
      icon: linkedin,
      bg: "#087DB8",
      link: "https://www.linkedin.com/",
      label: "LinkedIn",
    },
    {
      icon: sms,
      bg: "#F84587",
      link: "sms:+919999999999",
      label: "SMS",
    },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-[9999] flex w-[88px] flex-col items-center">

      {/* Icons */}
      {isOpen && (
        <div className="mb-2 flex w-[60px] flex-col items-center gap-2">
          {socialLinks.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target={item.link.startsWith("http") ? "_blank" : undefined}
              rel={
                item.link.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              aria-label={item.label}
              onClick={() => setIsOpen(false)}
              className="flex h-[70px] w-[70px] shrink-0 items-center justify-center rounded-full"
              style={{ backgroundColor: item.bg }}
            >
              <img
                src={item.icon}
                alt={item.label}
                className="h-[85px] w-[85x] object-contain"
              />
            </a>
          ))}
        </div>
      )}

      {/* Main Contact / Close Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close contact menu" : "Open contact menu"}
        className="flex h-[85px] w-[85px] shrink-0 items-center justify-center border-0 bg-transparent p-0"
      >
        <img
          src={isOpen ? close : contact}
          alt={isOpen ? "Close" : "Contact us"}
          className="h-[85px] w-[85px] object-contain"
        />
      </button>
    </div>
  );
};

export default ContactButton;