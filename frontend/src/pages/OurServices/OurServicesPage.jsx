import React, { useState } from "react";
import { Link } from "react-router-dom";
import { DonateSection } from "../../components/common";
import { serviceList, galleryImages } from "../../constants/data";

const OurServicesPage = () => {
  // Creates an array of 6 elements to loop through the 6 grid columns/sections
  const columns = Array.from({ length: 6 });


  return (
    <div className="w-full font-['Poppins',sans-serif] bg-[#ececec] text-[#151515]">
      
      {/* Services Section */}
      <section className="w-full md:py-4.5 bg-[#ececec]">
        <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
          <div className="flex flex-col space-y-12 md:space-y-16">
            {serviceList.map((service) => (
              <div
                key={service.id}
                className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-8 lg:gap-12"
              >
                {/* Text Content */}
                <div className="w-full lg:w-[54%] flex flex-col justify-center">
                  <h2 className="text-[20px] sm:text-[22px] md:text-[21px] font-bold text-[#111111] leading-[1.3] mb-4">
                    {service.title}
                  </h2>
                  <p className="text-[13.5px] text-left sm:text-[15px] font-normal text-[#333333]">
                    {service.description}
                  </p>
                </div>

                {/* Image Container */}
                <div className="w-full lg:w-[46%] flex justify-center items-center">
                  <div className="w-full max-w-[500px] aspect-[16/10] overflow-hidden rounded-xs shadow-xs border border-gray-100 group">
                    <img
                      src={service.image}
                      alt={service.imageAlt}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* Gallery Section */}
<section className="w-full pt-10 pb-16 bg-[#ececec]">
  <div className="mx-auto max-w-[1440px] px-4">

    {/* Section Header */}
    <div className="text-center mb-14 w-full max-w-[1140px] mx-auto">
      <div className="w-full h-[4.8px] bg-[#333333] mb-8" />

      <h1 className="text-[32px] sm:text-[33px]  font-extrabold font-roboto text-[#c44884]  ">
        Gallery
      </h1>

      <div className="w-full h-[4.8px] bg-[#333333] mt-8" />
    </div>

    {/* 6 Parts */}
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-[48px] gap-y-[50px] w-[1100px] mx-[160px] ">

      {Array.from({ length: 6 }).map((_, partIndex) => {
        const startIndex = partIndex * 12;
        const partImages = galleryImages.slice(
          startIndex,
          startIndex + 12
        );

        return (
          <div
            key={partIndex}
            className="grid grid-cols-4 gap-4.5 "
          >
            {partImages.map((image, imageIndex) => (
              <div
                key={imageIndex}
                className="w-[70px] h-[70px] overflow-hidden"
              >
                <img
                  src={image}
                  alt={`Gallery Image ${startIndex + imageIndex + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        );
      })}

    </div>
  </div>
</section>
      <DonateSection />
    </div>
  );
};

export default OurServicesPage;
