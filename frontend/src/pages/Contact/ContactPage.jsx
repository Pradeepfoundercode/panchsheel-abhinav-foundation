import React from "react";

import { DonateSection, HeroBanner } from "../../components/common";
import { assets } from "../../constants/data";

const ContactPage = () => {
  return (
    <div className="w-full font-['Poppins',sans-serif] bg-white text-[#151515]">
     <section
  className="
    relative
    h-[570px]
    w-full
    overflow-hidden
    bg-scroll
    bg-cover
    bg-center

    max-xl:h-[570px]

    max-lg:h-[570px]
    max-lg:bg-scroll

    max-md:h-auto
    max-md:min-h-[620px]
    max-md:bg-scroll

    max-sm:min-h-[570px]
  "
  style={{
    backgroundImage: `url(${assets.banner04})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#f32956]/90 to-[#ff6815]/90 opacity-90" />

  {/* Content */}
  <div
    className="
      relative
      z-10
      mx-[190px]
      flex
      h-full
      max-w-[1140px]
      flex-col
      justify-center
      px-4
      mt-18

      max-xl:mx-[120px]

      max-lg:mx-[60px]
      max-lg:px-4

      max-md:mx-0
      max-md:h-auto
      max-md:min-h-[620px]
      max-md:justify-center
      max-md:px-5
      max-md:py-[60px]
      max-md:mt-0

      max-sm:min-h-[570px]
      max-sm:px-4
      max-sm:py-[50px]
    "
  >
    <div>
      <h3
        className="
          mb-7
          text-[20px]
          font-bold
          text-white

          max-lg:text-[18px]

          max-md:mb-5
          max-md:text-[15px]

          max-sm:mb-4
          max-sm:text-[14px]
        "
      >
        Panchsheel Abhinav Foundation
      </h3>

      <div
        className="
          mb-10
          h-[5px]
          w-[101px]
          bg-white

          max-md:mb-7
          max-md:h-[4px]
          max-md:w-[60px]

          max-sm:mb-6
          max-sm:w-[55px]
        "
      />
    </div>

    <h1
      className="
        max-w-[1100px]
        font-amatic
        text-[100px]
        font-bold
        leading-[1]
        tracking-normal
        text-white
        uppercase

        max-xl:text-[85px]

        max-lg:max-w-[900px]
        max-lg:text-[72px]

        max-md:max-w-full
        max-md:text-[50px]
        max-md:leading-[0.95]

        max-sm:text-[40px]
        max-sm:leading-[1.05]
      "
    >
      Contact Us
    </h1>
  </div>
</section>

     <section className="w-full bg-white py-[70px] max-md:py-[45px]">
  <div className="mx-auto w-full max-w-[1140px] px-5">

    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">

      {/* Left - Contact Person */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-md:p-6">
        <p className="mb-2 text-[14px] font-medium uppercase tracking-[1.5px] text-[#f32956]">
          Contact
        </p>

        <h2 className="mb-6 text-[28px] font-bold text-[#171717] max-md:text-[24px]">
          S. Lal <span className="text-[18px] font-medium text-gray-500">(MD)</span>
        </h2>

        <div className="space-y-4">

          {/* Phone */}
          <div className="flex items-start gap-4">
           

            <div>
              <p className="text-[13px] font-medium text-gray-500">
                Contact Number
              </p>
              <p className="mt-1 text-[16px] font-semibold text-[#171717]">
                +91 7705015444
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            

            <div className="min-w-0">
              <p className="text-[13px] font-medium text-gray-500">
                Email Address
              </p>
              <p className="mt-1 break-all text-[16px] font-semibold text-[#171717]">
                panchsheelabhinavfoundation7@gmail.com
              </p>
            </div>
          </div>

        </div>
      </div>


      {/* Right - Address */}
      <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_8px_30px_rgba(0,0,0,0.06)] max-md:p-6">

        <p className="mb-2 text-[14px] font-medium uppercase tracking-[1.5px] text-[#f32956]">
          Address
        </p>

        <h2 className="mb-6 text-[28px] font-bold text-[#171717] max-md:text-[24px]">
          Panchsheel Abhinav Foundation
        </h2>

        <div className="flex items-start gap-4">

         

          <div className="text-[16px] leading-[28px] text-gray-600">
            <p>
              C/o Om Prakash Verma,
            </p>
            <p>
              Ramashankar Verma, Garwar,
            </p>
            <p>
              Ballia, Uttar Pradesh – 277121,
            </p>
            <p>
              India
            </p>
          </div>

        </div>
      </div>

    </div>

  </div>
</section>

      <DonateSection />
    </div>
  );
};

export default ContactPage;
