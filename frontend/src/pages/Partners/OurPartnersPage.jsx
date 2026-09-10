import React from "react";

import { DonateSection } from "../../components/common";
import { assets, galleryImages } from "../../constants/data";

const OurPartnersPage = () => {
  return (
    <div className="w-full font-['Poppins',sans-serif] bg-white text-[#151515]">

      {/* ================= HERO ================= */}
      <section
        className="
          relative
          h-[710px]
          w-full
          overflow-hidden
          bg-scroll
          bg-cover
          bg-center
          max-md:h-[620px]
        "
        style={{
          backgroundImage: `url(${assets.homeBanner04})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f32956]/90 to-[#ff6815]/90" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            max-w-[1140px]
            flex-col
            justify-center
            px-5
          "
        >
          <div>
            <h3
              className="
                mb-6
                text-[22px]
                font-bold
                text-white
                max-md:mb-5
                max-md:text-[15px]
              "
            >
              Jeevan Jyoti Samaj Sewa Sansthan
            </h3>

            <div className="mb-10 h-[5px] w-[101px] bg-white max-md:mb-7 max-md:h-[4px] max-md:w-[60px]" />
          </div>

          <h1
            className="
              max-w-[1100px]
              font-amatic
              text-[100px]
              font-bold
              uppercase
              leading-[1]
              tracking-normal
              text-white
              max-md:text-[50px]
              max-md:leading-[0.95]
            "
          >
            These Are the Heroes with the Passion to Transform Their
            Communities
          </h1>
        </div>
      </section>

      {/* ================= OUR PARTNERS / GALLERY ================= */}
      <section className="w-full bg-[#f3f3f3] py-[68px]">
        <div className="mx-auto w-full max-w-[1400px] px-5">

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-12
              gap-x-[24px]
              gap-y-[25px]
              items-center
            "
          >
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="
                  flex
                  h-[88px]
                  w-[88px]
                  items-center
                  justify-center
                  overflow-hidden
                  rounded-[2px]
                  bg-white
                "
              >
                <img
                  src={image}
                  alt={`Gallery ${index + 1}`}
                  className="
                    h-full
                    w-full
                    object-cover
                  "
                />
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= DONATE ================= */}
      <DonateSection />
    </div>
  );
};

export default OurPartnersPage;