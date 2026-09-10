import React from "react";
import { assets, whatWeDoServices } from "../../constants/data";

const WhatWeDo = () => {
  return (
    <section className="w-full bg-white bg-fixed bg-cover bg-center" style={{ backgroundImage: `url(${assets.manImage})` }}>
      <div className="mx-auto w-full max-w-[1180px] px-0 pt-[91px] pb-[125px]">
        <div className="text-center">
          <h2 className="font-[Poppins,sans-serif] text-[40px] leading-[1.2] font-[700] text-[#191919]">
            What We Do
          </h2>
          <div className="mx-auto mt-[28px] h-[4px] w-[55px] bg-[#ff5a00]" />
        </div>

        <div className="mt-[82px] grid grid-cols-3 gap-x-[22px] gap-y-[64px]">
          {whatWeDoServices.map((service) => (
            <div key={service.number} className="w-full">
              <div className="mb-[22px] pl-[1px] font-[Poppins,sans-serif] text-[17px] leading-[1] font-[600] text-[#171717]">
                {service.number}
              </div>
              <h3 className="mb-[43px] font-[Poppins,sans-serif] text-[30px] leading-[1.15] font-[700] text-[#181818]">
                <span className="mr-[9px]">—</span>
                {service.title}
              </h3>
              <p className="font-[Poppins,sans-serif] text-[16px] leading-[1.62] font-[400] tracking-[0.05px] text-[#202020] text-justify">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-[96px] flex justify-center">
          <button
            type="button"
            className="h-[56px] min-w-[161px] rounded-full bg-[#f90072] px-[30px] font-[Poppins,sans-serif] text-[15px] font-[500] uppercase text-white transition-all duration-200 hover:bg-[#df0065]"
          >
            READ MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
