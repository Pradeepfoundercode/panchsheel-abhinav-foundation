import React from "react";
import { Link } from "react-router-dom";

import { DonateSection, HeroBanner, WhatWeDo } from "../../components/common";
import { assets, whatWeDoServices, careForCards } from "../../constants/data";

const WhatWeDoPage = () => {
  return (
    <div className="w-full font-['Poppins',sans-serif] bg-white text-[#151515]">
      <section
  className="
    relative
    h-[721.2px]
    w-full
    overflow-hidden
    bg-fixed
    bg-cover
    bg-center
    bg-auto

    max-lg:h-[650px]
    max-lg:bg-scroll

    max-md:h-auto
    max-md:min-h-[620px]
    max-md:bg-scroll

    max-sm:min-h-[570px]
  "
  style={{
    backgroundImage: `url(${assets.banner02})`,
  }}
>
  <div className="absolute inset-0 bg-gradient-to-r from-[#f32956]/90 to-[#ff6815]/90 opacity-90" />

  <div
    className="
      relative
      z-10
      mx-[200px]
      flex
      h-full
      max-w-[1140px]
      flex-col
      justify-center
      px-4
      mt-9

      max-xl:mx-[100px]

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
          mb-8
          text-[27px]
          font-bold
          text-white

          max-lg:text-[22px]

          max-md:mb-5
          max-md:text-[15px]

          max-sm:mb-4
          max-sm:text-[14px]
        "
      >
        Panchsheel Abhinav Foundation for Disabled Children in Lucknow
      </h3>

      <div
        className="
          mb-9
          h-[5px]
          w-[101px]
          bg-white

          max-lg:mb-7

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
        text-[95px]
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
      We Support Children and Youth to Reach Their Full Potential
    </h1>
  </div>
</section>

      <section>
        <WhatWeDo />
      </section>

      <section className="w-full bg-[#fdfbfa] py-16 md:py-24 border-t border-[#f4ebec]">
        <div className="mx-auto w-full max-w-[1180px] px-5">
          <div className="text-center">
            <h2 className="text-[34px] md:text-[40px] font-[700] text-[#181818] leading-[1.2]">
              What We Care For
            </h2>
            <div className="mx-auto mt-[18px] h-[4px] w-[50px] bg-[#ff5b00]" />
          </div>

          <div className="mt-[60px] md:mt-[75px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careForCards.map((card) => (
              <div
                key={card.id}
                className="bg-white border border-[#eaeaea] shadow-xs flex flex-col overflow-hidden transition-all duration-300 hover:shadow-md hover:border-[#dfdfdf]"
              >
                <div className="w-full h-[220px] sm:h-[240px] bg-slate-100 overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-grow">
                  <h3 className="text-[17px] md:text-[18px] font-[700] text-[#181818] leading-[1.35] mb-4">
                    {card.title}
                  </h3>

                  <div className="space-y-3.5 text-[13.5px] font-[400] leading-[1.75] text-[#444] text-justify flex-grow">
                    {card.paragraphs.map((p, idx) => (
                      <p key={idx}>{p}</p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-20">
        <div className="mx-auto w-full max-w-[1180px] px-5">
          <div className="w-full border-y-5 border-[#f50070] py-7 px-6 text-center mb-12">
            <h2 className="text-[26px] md:text-[30px] font-[300] text-[#181818] leading-[1.2]">
              Our Success Stories
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start">
            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[22px] font-[700] text-[#181818] mb-4">
                Social Inclusion
              </h3>
              <p className="text-[14px] font-[400] leading-[1.8] text-[#3d3d3d] text-justify">
                At Panchsheel Abhinav Foundation in Lucknow
                we’ve made significant strides in empowering children with
                disabilities through social inclusion. By creating safe,
                inclusive environments, we’ve helped children gain confidence,
                access education, and participate actively in their communities.
                Children once isolated are now thriving academically and
                socially, making friends and breaking societal stigmas through
                our community integration drives.
              </p>
            </div>

            <div className="flex flex-col">
              <h3 className="text-[20px] md:text-[22px] font-[700] text-[#181818] mb-4">
                Financial Inclusion
              </h3>
              <p className="text-[14px] font-[400] leading-[1.8] text-[#3d3d3d] text-justify">
                Through our financial inclusion programs, vocational training,
                and small-business support for families, we have helped lift
                many households out of poverty. By empowering parents and
                guardians of special-needs children with sustainable income
                sources, families are becoming financially self-sufficient and
                capable of providing quality care, therapy, and education for
                their children's long-term future.
              </p>
            </div>
          </div>
        </div>
      </section>

      <DonateSection />
    </div>
  );
};

export default WhatWeDoPage;
