import React, { useState } from "react";
import { Link } from "react-router-dom";

import WhatWeDo from "../../components/common/WhatWeDo";
import { assets, stories } from "../../constants/data";
import PartnersSlider from "../../components/common/PartnersSlider";
import { DonateSection } from "../../components/common";
import { FaQuoteRight } from "react-icons/fa";

const Home = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="w-full overflow-x-hidden bg-white font-poppins">

      {/* ================= HERO ================= */}
      <section
        className="
          relative
          h-[939px]
          w-full
          overflow-hidden
          bg-fixed
          bg-cover
          bg-center

          max-xl:h-[820px]
          max-lg:h-[700px]
          max-md:h-[620px]
          max-sm:h-[560px]

          max-md:bg-scroll
        "
        style={{ backgroundImage: `url(${assets.homeBanner})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#f32956]/90 to-[#ff6815]/90 opacity-90" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            h-full
            w-full
            max-w-[1140px]
            flex-col
            justify-center
            px-4
            mt-9

            max-xl:max-w-[1050px]
            max-lg:max-w-[900px]
            max-md:px-5
            max-sm:px-4
            max-sm:mt-5
          "
        >
          <div>
            <h3
              className="
                mb-8
                text-[21px]
                font-bold
                text-white

                max-lg:text-[19px]
                max-md:mb-5
                max-md:text-[15px]
                max-sm:text-[14px]
              "
            >
              Because Only Together We Can
            </h3>

            <div
              className="
                mb-12
                h-[5px]
                w-[101px]
                bg-white

                max-lg:mb-9
                max-md:mb-7
                max-md:h-[4px]
                max-md:w-[60px]
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

              max-xl:max-w-[950px]
              max-xl:text-[85px]

              max-lg:max-w-[850px]
              max-lg:text-[72px]

              max-md:max-w-[700px]
              max-md:text-[50px]
              max-md:leading-[0.95]

              max-sm:max-w-full
              max-sm:text-[42px]
              max-sm:leading-[0.95]
            "
          >
            Build a World Where All Youth Are Safe, Strong & Valued
          </h1>

          <button
            className="
              mt-17
              h-[49px]
              w-[143.06px]
              rounded-4xl
              bg-white

              max-lg:mt-14

              max-md:mt-10
              max-md:h-[46px]
              max-md:w-[135px]

              max-sm:mt-8
              max-sm:h-[44px]
              max-sm:w-[130px]
              max-sm:text-[14px]
            "
          >
            Read More
          </button>
        </div>
      </section>

      {/* ================= WHO WE ARE ================= */}
      <section className="w-full bg-white pb-[80px] max-md:pb-[55px]">
        <div
          className="
            mx-auto
            w-full
            max-w-[1380px]
            px-5
            sm:px-6
            lg:px-8
          "
        >
          {/* Heading */}
          <h1
            className="
              mt-20
              text-center
              font-poppins
              text-[45px]
              font-bold
              text-[#151515]

              max-lg:mt-16
              max-md:mt-12
              max-md:text-[38px]

              max-sm:mt-10
              max-sm:text-[32px]
            "
          >
            Who We are ?
          </h1>

          <div
            className="
              mx-auto
              mt-[22px]
              h-[4px]
              w-[55px]
              rounded-full
              bg-[#ff5a00]

              max-sm:mt-[18px]
            "
          />

          {/* ================= MEMBERS ================= */}
          <div
            className="
              mt-[40px]
              grid
              grid-cols-4
              gap-[17px]

              max-xl:grid-cols-4
              max-lg:grid-cols-2
              max-lg:gap-5

              max-md:mt-8
              max-md:grid-cols-1
              max-md:gap-5

              max-sm:mt-7
            "
          >
            {/* ================= MEMBER 1 ================= */}
            <div
              className="
                group
                w-full
                max-w-[390px]
                justify-self-center
                overflow-hidden
                rounded-[24px]
                border
                border-gray-100
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="relative m-3 aspect-[1/1] overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="px-5 pb-5">
                <h2 className="text-center text-[24px] font-bold leading-tight text-[#151515]">
                  Mr. S.LAL
                </h2>

                <p className="mt-1 text-center text-[13px] font-medium text-[#777]">
                  (Managing Director)
                </p>

                <div className="mt-2 flex items-start gap-2">
                  <svg
                    className="mt-[2px] h-4 w-4 shrink-0 text-[#8B1E3F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <p className="break-all text-[12px] leading-5 text-[#666]">
                    panchsheelabhinavfoundation@gmail.com
                  </p>
                </div>

                <div className="mt-4">
                  <p
                    className="
                      overflow-hidden
                      text-[11.5px]
                      leading-[1.7]
                      text-[#555]
                      [display:-webkit-box]
                      [-webkit-box-orient:vertical]
                      [-webkit-line-clamp:3]
                    "
                  >
                    S. Lal, born on 1st July 1965, completed his primary
                    education in District Barabanki and holds a B.Sc. and B.Ed.
                    from Lucknow University. Since 1994, he has been teaching
                    Maths and Science at CBSE schools and coaching students,
                    while also engaging in community service through NGO
                    activities. From 2003 to 2009, he supported Self-Help Groups
                    (SHGs) in various capacities, including opening bank
                    accounts and promoting micro-insurance. In 2010, he was
                    empanelled by the Jute Board as a Cluster Development Agency
                    for two districts in Uttar Pradesh, focusing on jute bag
                    production, marketing, and training.
                  </p>
                </div>

                <a
                  href="/details/1"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#8B1E3F] transition-all duration-200 hover:gap-2"
                >
                  Read More

                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ================= MEMBER 2 ================= */}
            <div
              className="
                group
                w-full
                max-w-[390px]
                justify-self-center
                overflow-hidden
                rounded-[24px]
                border
                border-gray-100
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="relative m-3 aspect-[1/1] overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="px-5 pb-5">
                <h2 className="text-center text-[24px] font-bold leading-tight text-[#151515]">
                  Mr. S.LAL
                </h2>

                <p className="mt-1 text-center text-[13px] font-medium text-[#777]">
                  (Managing Director)
                </p>

                <div className="mt-2 flex items-start gap-2">
                  <svg
                    className="mt-[2px] h-4 w-4 shrink-0 text-[#8B1E3F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <p className="break-all text-[12px] leading-5 text-[#666]">
                    panchsheelabhinavfoundation@gmail.com
                  </p>
                </div>

                <div className="mt-4">
                  <p
                    className="
                      overflow-hidden
                      text-[11.5px]
                      leading-[1.7]
                      text-[#555]
                      [display:-webkit-box]
                      [-webkit-box-orient:vertical]
                      [-webkit-line-clamp:3]
                    "
                  >
                    S. Lal, born on 1st July 1965, completed his primary
                    education in District Barabanki and holds a B.Sc. and B.Ed.
                    from Lucknow University. Since 1994, he has been teaching
                    Maths and Science at CBSE schools and coaching students,
                    while also engaging in community service through NGO
                    activities. From 2003 to 2009, he supported Self-Help Groups
                    (SHGs) in various capacities, including opening bank
                    accounts and promoting micro-insurance. In 2010, he was
                    empanelled by the Jute Board as a Cluster Development Agency
                    for two districts in Uttar Pradesh, focusing on jute bag
                    production, marketing, and training.
                  </p>
                </div>

                <a
                  href="/details/2"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#8B1E3F] transition-all duration-200 hover:gap-2"
                >
                  Read More

                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ================= MEMBER 3 ================= */}
            <div
              className="
                group
                w-full
                max-w-[390px]
                justify-self-center
                overflow-hidden
                rounded-[24px]
                border
                border-gray-100
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="relative m-3 aspect-[1/1] overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="px-5 pb-5">
                <h2 className="text-center text-[24px] font-bold leading-tight text-[#151515]">
                  Mr. S.LAL
                </h2>

                <p className="mt-1 text-center text-[13px] font-medium text-[#777]">
                  (Managing Director)
                </p>

                <div className="mt-2 flex items-start gap-2">
                  <svg
                    className="mt-[2px] h-4 w-4 shrink-0 text-[#8B1E3F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>

                  <p className="break-all text-[12px] leading-5 text-[#666]">
                    panchsheelabhinavfoundation@gmail.com
                  </p>
                </div>

                <div className="mt-4">
                  <p
                    className="
                      overflow-hidden
                      text-[11.5px]
                      leading-[1.7]
                      text-[#555]
                      [display:-webkit-box]
                      [-webkit-box-orient:vertical]
                      [-webkit-line-clamp:3]
                    "
                  >
                    S. Lal, born on 1st July 1965, completed his primary
                    education in District Barabanki and holds a B.Sc. and B.Ed.
                    from Lucknow University. Since 1994, he has been teaching
                    Maths and Science at CBSE schools and coaching students,
                    while also engaging in community service through NGO
                    activities. From 2003 to 2009, he supported Self-Help Groups
                    (SHGs) in various capacities, including opening bank
                    accounts and promoting micro-insurance. In 2010, he was
                    empanelled by the Jute Board as a Cluster Development Agency
                    for two districts in Uttar Pradesh, focusing on jute bag
                    production, marketing, and training.
                  </p>
                </div>

                <a
                  href="/details/3"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#8B1E3F] transition-all duration-200 hover:gap-2"
                >
                  Read More

                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>

            {/* ================= MEMBER 4 ================= */}
            <div
              className="
                group
                w-full
                max-w-[390px]
                justify-self-center
                overflow-hidden
                rounded-[24px]
                border
                border-gray-100
                bg-white
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <div className="relative m-3 aspect-[1/1] overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              <div className="px-5 pb-5">
                <h2 className="text-center text-[24px] font-bold leading-tight text-[#151515]">
                  Mr. S.LAL
                </h2>

                <p className="mt-1 text-center text-[13px] font-medium text-[#777]">
                  (Managing Director)
                </p>

                <div className="mt-2 flex items-start gap-2">
                  <svg
                    className="mt-[2px] h-4 w-4 shrink-0 text-[#8B1E3F]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="1.8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2v10a2 2 0 002-2z"
                    />
                  </svg>

                  <p className="break-all text-[12px] leading-5 text-[#666]">
                    panchsheelabhinavfoundation@gmail.com
                  </p>
                </div>

                <div className="mt-4">
                  <p
                    className="
                      overflow-hidden
                      text-[11.5px]
                      leading-[1.7]
                      text-[#555]
                      [display:-webkit-box]
                      [-webkit-box-orient:vertical]
                      [-webkit-line-clamp:3]
                    "
                  >
                    S. Lal, born on 1st July 1965, completed his primary
                    education in District Barabanki and holds a B.Sc. and B.Ed.
                    from Lucknow University. Since 1994, he has been teaching
                    Maths and Science at CBSE schools and coaching students,
                    while also engaging in community service through NGO
                    activities. From 2003 to 2009, he supported Self-Help Groups
                    (SHGs) in various capacities, including opening bank
                    accounts and promoting micro-insurance. In 2010, he was
                    empanelled by the Jute Board as a Cluster Development Agency
                    for two districts in Uttar Pradesh, focusing on jute bag
                    production, marketing, and training.
                  </p>
                </div>

                <a
                  href="/details/4"
                  className="mt-3 inline-flex items-center gap-1 text-[12px] font-semibold text-[#8B1E3F] transition-all duration-200 hover:gap-2"
                >
                  Read More

                  <svg
                    className="h-3.5 w-3.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}
      <section className="w-full overflow-hidden">
        <WhatWeDo />
      </section>

      {/* ================= IMPACT STORIES ================= */}
      <section className="relative w-full bg-white">
        <div
          className="
            mx-auto
            w-full
            max-w-[1180px]
            px-5
            pt-[60px]
            pb-[110px]

            max-lg:pt-14
            max-lg:pb-20

            max-md:px-5
            max-md:pt-12
            max-md:pb-[65px]

            max-sm:px-4
            max-sm:pt-10
            max-sm:pb-[55px]
          "
        >
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
                font-[Poppins,sans-serif]
                text-[45px]
                font-bold
                leading-[1.2]
                text-[#171717]

                max-lg:text-[40px]
                max-md:text-[34px]
                max-sm:text-[30px]
              "
            >
              Impact Stories
            </h2>

            <div
              className="
                mx-auto
                mt-[22px]
                h-[4px]
                w-[52px]
                rounded-full
                bg-[#ff5b00]

                max-sm:mt-[18px]
              "
            />
          </div>

          {/* Stories */}
          <div
            className="
              mt-[60px]
              grid
              grid-cols-2
              gap-[28px]

              max-lg:gap-5
              max-md:mt-10
              max-md:grid-cols-1
              max-md:gap-5

              max-sm:mt-8
            "
          >
            {stories.map((story, index) => (
              <article
                key={index}
                className="
                  w-full
                  rounded-[24px]
                  bg-white
                  p-[30px]
                  shadow-md
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg

                  max-lg:p-6
                  max-md:p-6
                  max-sm:rounded-[20px]
                  max-sm:p-5
                "
              >
                {/* Quote Icon */}
                <div
                  className="
                    mb-[22px]
                    text-[#ff6900]

                    max-sm:mb-4
                  "
                >
                  <FaQuoteRight
                    size={48}
                    className="max-sm:h-9 max-sm:w-9"
                  />
                </div>

                {/* Title */}
                <h3
                  className="
                    mb-[20px]
                    min-h-[55px]
                    font-[Poppins,sans-serif]
                    text-[18px]
                    font-bold
                    leading-[1.4]
                    text-[#171717]

                    max-md:min-h-0
                    max-sm:mb-4
                    max-sm:text-[17px]
                  "
                >
                  {story.title}
                </h3>

                {/* Description */}
                <p
                  className="
                    font-[Poppins,sans-serif]
                    text-[14px]
                    font-normal
                    leading-[1.7]
                    text-[#555555]
                    text-justify

                    max-sm:text-[13px]
                    max-sm:leading-[1.65]
                  "
                >
                  {story.description}
                </p>

                {/* Read More */}
                <button
                  type="button"
                  className="
                    mt-[30px]
                    flex
                    h-[48px]
                    min-w-[150px]
                    items-center
                    justify-center
                    gap-[7px]
                    rounded-full
                    bg-[#f50070]
                    px-[24px]
                    font-[Poppins,sans-serif]
                    text-[13px]
                    font-medium
                    uppercase
                    leading-none
                    text-white
                    transition
                    duration-200
                    hover:bg-[#df0065]

                    max-sm:mt-6
                    max-sm:h-[44px]
                    max-sm:min-w-[140px]
                    max-sm:px-5
                    max-sm:text-[12px]
                  "
                >
                  <span>READ MORE</span>

                  <span className="text-[20px] font-normal leading-none max-sm:text-[18px]">
                    +
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section className="w-full overflow-hidden">
        <PartnersSlider />
      </section>

      {/* ================= DONATE ================= */}
      <section className="w-full overflow-hidden">
        <DonateSection />
      </section>
    </div>
  );
};

export default Home;