import React from "react";

const HeroBanner = ({ backgroundImage, children, fixed = false }) => {
  return (
    <section
      className={`relative w-full bg-cover bg-center overflow-hidden ${fixed ? "bg-fixed" : ""}`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: "clamp(520px, 44.45vw, 640px)",
        height: "70vh",
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(105deg, rgba(237,8,117,0.92) 0%, rgba(255,100,20,0.88) 100%)",
        }}
      />
      {children}
    </section>
  );
};

export default HeroBanner;
