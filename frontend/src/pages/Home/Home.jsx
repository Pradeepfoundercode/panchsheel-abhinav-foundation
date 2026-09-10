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
    <div className="w-full bg-white font-poppins">
      <section
        className="relative h-[939px] w-full overflow-hidden bg-fixed bg-cover bg-center max-md:h-[620px] max-md:bg-scroll"
        style={{ backgroundImage: `url(${assets.homeBanner})` }}
      >
        <div className="absolute inset-0 opacity-90 bg-gradient-to-r from-[#f32956]/90  to-[#ff6815]/90" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1140px] flex-col justify-center px-4 max-md:px-5 mt-9">
          <div>
            <h3 className="mb-8 text-[21px] font-bold text-white max-md:mb-5 max-md:text-[15px]">
              Because Only Together We Can
            </h3>
            <div className="mb-12 h-[5px] w-[101px] bg-white max-md:mb-7 max-md:h-[4px] max-md:w-[60px]" />
          </div>

          <h1
            className="
          max-w-[1100px]
          h-[280px]
          font-amatic
          text-[100px]
          font-bold
         
          tracking-normal
          text-white
          uppercase
          max-md:text-[50px]
          max-md:leading-[0.95]
        "
          >
            Build a World Where All Youth Are Safe, Strong & Valued
          </h1>

          <button className=" bg-white h-[49px] w-[143.06px] rounded-4xl mt-17 ">
            Read More
          </button>
        </div>
      </section>

      <section className="w-full bg-white pb-[80px]">
        <div className="mx-auto w-full max-w-[1380px] ">
          {/* Heading */}
          <h1 className="mt-20 text-center font-poppins text-[45px] font-bold text-[#151515] max-md:text-[38px]">
            Who We are ?
          </h1>

          <div className="mx-auto mt-[22px] h-[4px] w-[55px] rounded-full bg-[#ff5a00]" />

          {/* 4 Members */}
          <div className="mt-[40px] grid grid-cols-4 gap-[17px] max-lg:grid-cols-2 max-md:mt-8 max-md:grid-cols-1">
            {/* 1 Members */}
            <div className="group w-full max-w-[390px] overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Image */}
              <div className="relative m-3 overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="w-full h-full object-cover "
                />

                {/* Small overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                {/* Name */}
                <h2 className="text-[24px] font-bold leading-tight text-[#151515] text-center">
                  Mr. S.LAL
                </h2>

                {/* Designation */}
                <p className="mt-1 text-[13px] font-medium text-[#777] text-center">
                  (Managing Director)
                </p>

                {/* Email */}
                <div className="flex items-start gap-2 mt-2">
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

                {/* Description */}
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

            {/* 2 Members */}
            <div className="group w-full max-w-[390px] overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Image */}
              <div className="relative m-3 overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="w-full h-full object-cover "
                />

                {/* Small overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                {/* Name */}
                <h2 className="text-[24px] font-bold leading-tight text-[#151515] text-center">
                  Mr. S.LAL
                </h2>

                {/* Designation */}
                <p className="mt-1 text-[13px] font-medium text-[#777] text-center">
                  (Managing Director)
                </p>

                {/* Email */}
                <div className="flex items-start gap-2 mt-2">
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

                {/* Description */}
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

                {/* Read More */}
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

            {/* 3 Members */}
            <div className="group w-full max-w-[390px] overflow-hidden rounded-[24px] border border-gray-100 bg-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
              {/* Image */}
              <div className="relative m-3 overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="w-full h-full object-cover "
                />

                {/* Small overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                {/* Name */}
                <h2 className="text-[24px] font-bold leading-tight text-[#151515] text-center">
                  Mr. S.LAL
                </h2>

                {/* Designation */}
                <p className="mt-1 text-[13px] font-medium text-[#777] text-center">
                  (Managing Director)
                </p>

                {/* Email */}
                <div className="flex items-start gap-2 mt-2">
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

                {/* Description */}
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

                {/* Read More */}
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

            {/* 4 Members */}
            <div className="group w-full max-w-[390px] overflow-hidden rounded-[24px] border border-gray-100 bg-white  transition-all duration-300 shadow-md hover:-translate-y-1 hover:shadow-lg">
              {/* Image */}
              <div className="relative m-3 overflow-hidden rounded-[20px] bg-gray-100">
                <img
                  src={assets.slalImage}
                  alt="Mr. S.LAL"
                  className="w-full h-full object-cover "
                />

                {/* Small overlay */}
                <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="px-5 pb-5">
                {/* Name */}
                <h2 className="text-[24px] font-bold leading-tight text-[#151515] text-center">
                  Mr. S.LAL
                </h2>

                {/* Designation */}
                <p className="mt-1 text-[13px] font-medium text-[#777] text-center">
                  (Managing Director)
                </p>

                {/* Email */}
                <div className="flex items-start gap-2 mt-2">
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

                {/* Description */}
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

                {/* Read More */}
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

      {/* <section className="w-full bg-white pb-6.5 ">
        <div className="mx-auto w-full max-w-[1240px] px-5">
          <h2 className="text-center text-[43px] font-bold leading-[1.3] text-[#151515] max-md:text-[32px]">
            Professional Experience
          </h2>

          <div className="mt-[35px] grid grid-cols-2 gap-[70px] max-md:grid-cols-1 max-md:gap-8">
            <div>
              <ul className="list-disc pl-[28px] text-[18px] leading-[1.55] text-[#151515]">
                <li className="font-bold">
                  Teaching Career (1994 – Present):
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      Began teaching Mathematics and Science at CBSE schools.
                    </li>
                    <li>
                      Simultaneously started coaching for Maths and Science.
                    </li>
                    <li>
                      Involved in educational NGO activities as a part-time
                      engagement.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Community Development & Social Initiatives:
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      <strong>2003–2009:</strong> Worked in support of Self-Help
                      Groups (SHGs), assisting in opening bank accounts,
                      promoting micro-insurance, and facilitating awareness
                      programs.
                    </li>
                    <li>
                      Participated in cultural activities and local community
                      awareness initiatives.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Jute Industry & Empowerment (2010 – 2015):
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      <strong>2010:</strong> Applied for and was empanelled by
                      the Jute Board as a{" "}
                      <strong>Cluster Development Agency</strong> for two
                      districts in Uttar Pradesh.
                    </li>
                    <li>
                      Facilitated the formation of Women SHGs (WSHGs), conducted
                      surveys, promoted jute bag production, and supported
                      marketing, exhibitions, and training programs.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Book Promotion & Cultural Contributions:
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      <strong>2015:</strong> Organized a{" "}
                      <strong>Book Fair</strong> at TD Degree College, Jaunpur,
                      Uttar Pradesh, focused on book promotion and cultural
                      activities.
                    </li>
                    <li>
                      Promoted <strong>Urdu language</strong> through the{" "}
                      <strong>Urdu Diploma Course</strong> starting from 2010.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Government Schemes & Social Welfare:
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      <strong>2015:</strong> Empanelled by the{" "}
                      <strong>Ministry of Udyog</strong> as{" "}
                      <strong>Udyam Mitra</strong> for promoting small and
                      medium enterprises.
                    </li>
                    <li>
                      <strong>2016–2017:</strong> Worked under the{" "}
                      <strong>National Child Labour Program (NCLP)</strong> and
                      engaged in various activities for child welfare.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>

            <div>
              <ul className="list-disc pl-[28px] text-[18px] leading-[1.55] text-[#151515]">
                <li>
                  <strong>2016:</strong> Started working with{" "}
                  <strong>National Trust, Ministry of Social Justice</strong>{" "}
                  for individuals with disabilities, including those with CP,
                  ID, Autism, and Multiple Disabilities. Focused on early
                  intervention for children under 10 years in Lucknow and
                  Barabanki.
                </li>

                <li className="mt-[3px] font-bold">
                  Disha Cum Vikas Scheme (2018 – 2023):
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      In April 2018, the <strong>National Trust Scheme</strong>{" "}
                      for children with disabilities merged into the{" "}
                      <strong>Disha Cum Vikas Scheme</strong> in Lucknow,
                      continuing until 2023.
                    </li>
                    <li>
                      This initiative focused on skill development and
                      intervention for beneficiaries with disabilities.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Road Safety & Health Programs (2021 – 2023):
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      Conducted a <strong>Road Safety Program</strong> and{" "}
                      <strong>Eye Testing for Highway Vehicle Drivers</strong>{" "}
                      in Lucknow (2021-2022).
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Teachers’ Training (2022 – 2023):
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      Organized <strong>Innovative Geometry Training</strong>{" "}
                      for teachers across three districts: Raebareli, Unnao, and
                      Sitapur.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Disability Advocacy & Documentation:
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      Working as a{" "}
                      <strong>
                        Member of the Divyangjan Rajya Salahkar Board
                      </strong>
                      , Lucknow, contributing to the advocacy of Persons with
                      Disabilities (PwDs).
                    </li>
                    <li>
                      Focused on documentation and advocacy for{" "}
                      <strong>Niramaya Health Claims</strong> and reimbursement
                      for PwD-related services.
                    </li>
                  </ul>
                </li>

                <li className="mt-[3px] font-bold">
                  Women Empowerment & PwD Support (2025 – Present):
                  <ul className="list-disc pl-[28px] font-normal">
                    <li>
                      Launched initiatives to empower women through{" "}
                      <strong>Women SHGs</strong> and support{" "}
                      <strong>PwDs</strong> in various capacities, particularly
                      in documentation, advocacy, and creating opportunities for
                      financial independence.
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-[85px] ml-7 h-[4.6px] w-[1140px] bg-[#eb9bc2] max-md:mx-0 max-md:w-full" />
        </div>
      </section> */}

      {/* <section className="w-full h-[757.38px] px-2.5 text-[15px] font-['Poppins'] font-sans max-md:h-auto">
        <div className="home-story-layout mx-auto flex w-[1140px] py-2.5 max-md:w-full max-md:flex-col">
          <div className="h-[737.38px] w-[570px] p-2.5 max-md:h-auto max-md:w-full">
            <div className="h-[696px] w-[550px] max-md:h-auto max-md:w-full">
              <p className="mb-[24px] font-poppins">
                "Panchsheel Abhinav Foundation in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p className="mb-[24px] font-poppins">
                "Panchsheel Abhinav Foundation in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p className="mb-[24px] font-poppins">
                "Panchsheel Abhinav Foundation in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p className="mb-[24px] font-poppins">
                "Panchsheel Abhinav Foundation in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p>&nbsp;</p>
            </div>
          </div>

          <div className="flex h-[737.38px] w-[570px] flex-col max-md:h-auto max-md:w-full">
            <div className="p-2.5">
              <img src={assets.img1} alt="" className="h-auto w-[100%]" />
            </div>
            <div className="p-2.5">
              <img src={assets.img2} alt="" className="h-[388px] w-[100%]" />
            </div>
          </div>
        </div>
      </section> */}

      <section>
        <WhatWeDo />
      </section>

      <section className="relative w-full bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-5 pt-[60px] pb-[110px]">
          {/* Heading */}
          <div className="text-center">
            <h2 className="font-[Poppins,sans-serif] text-[45px] font-bold leading-[1.2] text-[#171717] max-md:text-[34px]">
              Impact Stories
            </h2>

            <div className="mx-auto mt-[22px] h-[4px] w-[52px] rounded-full bg-[#ff5b00]" />
          </div>

          {/* Stories */}
          <div className="mt-[60px] grid grid-cols-2 gap-[28px] max-md:grid-cols-1">
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
          "
              >
                {/* Quote Icon */}
                <div className="mb-[22px] text-[#ff6900]">
                  <FaQuoteRight size={48} />
                </div>

                {/* Title */}
                <h3 className="mb-[20px] min-h-[55px] font-[Poppins,sans-serif] text-[18px] font-bold leading-[1.4] text-[#171717]">
                  {story.title}
                </h3>

                {/* Description */}
                <p className="font-[Poppins,sans-serif] text-[14px] font-normal leading-[1.7] text-[#555555] text-justify">
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
            "
                >
                  <span>READ MORE</span>
                  <span className="text-[20px] font-normal leading-none">
                    +
                  </span>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <PartnersSlider />
      </section>

      <section>
        <DonateSection />
      </section>
    </div>
  );
};

export default Home;
