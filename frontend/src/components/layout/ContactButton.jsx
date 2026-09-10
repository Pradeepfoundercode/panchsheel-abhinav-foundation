import React from "react";
import contact from "../../assets/images/contact.png";

const ContactButton = () => {
  return (
    <div className="fixed bottom-3 right-3 z-[9999]">
      <img
        src={contact}
        alt="Contact us"
        className="w-[232px] h-auto cursor-pointer"
      />
    </div>
  );
};

export default ContactButton;