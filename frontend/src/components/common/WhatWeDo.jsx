import React from "react";
import { whatWeDoServices } from "../../constants/data";

const WhatWeDo = () => {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto w-full max-w-[1180px] px-5 pt-[80px] pb-[110px]">

        {/* Heading */}
        <div className="text-center">
          <h2 className="font-[Poppins,sans-serif] text-[45px] leading-[1.2] font-bold text-[#191919] max-md:text-[34px]">
            What We Do
          </h2>

          <div className="mx-auto mt-[22px] h-[4px] w-[55px] rounded-full bg-[#ff5a00]" />
        </div>

        {/* Services */}
        <div className="mt-[65px] grid grid-cols-3 gap-[24px] max-lg:grid-cols-2 max-md:grid-cols-1">
          {whatWeDoServices.map((service) => (
            <div
              key={service.number}
              className="w-full rounded-[24px]  bg-white p-[35px] duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Number */}
              <div className="mb-[15px] font-[Poppins,sans-serif] text-[17px] leading-none font-semibold text-[#8B1E3F]">
                {service.number}
              </div>

              {/* Title */}
              <h3 className="mb-[20px] font-[Poppins,sans-serif] text-[26px] leading-[1.2] font-bold text-[#181818]">
                {service.title}
              </h3>

              {/* Description */}
              <p className="font-[Poppins,sans-serif] text-[14px] leading-[1.7] font-normal tracking-[0.05px] text-[#555555] text-justify">
                {service.description}
              </p>

            </div>
          ))}
        </div>

        {/* Read More */}
        <div className="mt-[65px] flex justify-center">
          <button
            type="button"
            className="h-[54px] min-w-[160px] rounded-full bg-[#f90072] px-[30px] font-[Poppins,sans-serif] text-[14px] font-semibold uppercase tracking-[0.3px] text-white hover:bg-[#df0065]"
          >
            READ MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default WhatWeDo;