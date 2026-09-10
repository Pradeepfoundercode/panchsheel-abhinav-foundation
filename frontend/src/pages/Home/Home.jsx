import React from "react";

import WhatWeDo from "../../components/common/WhatWeDo";
import { assets, stories } from "../../constants/data";
import PartnersSlider from "../../components/common/PartnersSlider";
import { DonateSection } from "../../components/common";
import { FaQuoteRight } from "react-icons/fa";

const Home = () => {
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


          <button className=" bg-white h-[49px] w-[143.06px] rounded-4xl mt-17 ">Read More</button>
        </div>
      </section>

      <section className="w-full bg-white pb-[80px]">
        <div className="mx-auto w-full max-w-[1212px]">
          <h1 className="text-center text-[60px] font-bold text-[#151515] max-md:text-[38px] font-poppins mt-2" >
            Who We are ?
          </h1>

          <div className="home-profile-layout mt-[40px] flex items-start max-md:mt-8 max-md:flex-col">
            <div className="h-[660.23px] w-[489.06px] shrink-0 max-md:h-auto max-md:w-full">
              <img
                src={assets.slalImage}
                alt="Mr. S.LAL"
                className="block h-[660.23px] w-[489.06px] object-cover max-md:h-auto max-md:w-full"
              />
            </div>

            <div className="ml-[33px] h-[660.23px] w-[550px] shrink-0 overflow-hidden max-md:ml-0 max-md:mt-8 max-md:h-auto max-md:w-full">
              <h2 className="text-[40px] font-bold text-[#151515] max-md:text-[32px]">
                Mr. S.LAL
              </h2>

              <p className="mt-[5px] text-[18px] font-normal leading-[1.6] text-[#151515]">
                (Managing Director) JeevanJyoti Samaj Sewa Sansthan
              </p>

              <p className="mt-[18px] text-[18px] font-normal leading-[1.6] text-[#151515] max-md:text-[16px]">
                Email:-jeevanjyoti.sss@gmail.com
              </p>

              <p className="my-[24px] text-[16.3px] font-normal leading-[1.49] text-[#151515] text-justify max-md:text-[15px]">
                S. Lal, born on 1st July 1965, completed his primary education
                in District Barabanki and holds a B.Sc. and B.Ed. from Lucknow
                University. Since 1994, he has been teaching Maths and Science
                at CBSE schools and coaching students, while also engaging in
                community service through NGO activities. From 2003 to 2009, he
                supported Self-Help Groups (SHGs) in various capacities,
                including opening bank accounts and promoting micro-insurance.
                In 2010, he was empanelled by the Jute Board as a Cluster
                Development Agency for two districts in Uttar Pradesh, focusing
                on jute bag production, marketing, and training. He organized a
                book fair in 2015 at TD Degree College, Jaunpur, and promoted
                Urdu language education through a diploma course. Between 2016
                and 2017, he worked with the National Child Labour Program and
                began supporting individuals with disabilities under the
                National Trust Ministry of Social Justice. He managed the Disha
                Cum Vikas Scheme from 2018 to 2023, providing early intervention
                for children with disabilities. Additionally, he conducted road
                safety and eye testing programs for highway drivers in
                2021-2022, and organized innovative geometry teacher training in
                2022-2023. Currently, he is serving as a Board Member of The
                National Trust and is also a member of the Divyangjan Rajya
                Salahkar Board, advocating for persons with disabilities, while
                also focusing on empowering women through SHGs and providing
                support for PwDs.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white pb-6.5 ">
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
      </section>

      <section className="w-full h-[757.38px] px-2.5 text-[15px] font-['Poppins'] font-sans max-md:h-auto">
        <div className="home-story-layout mx-auto flex w-[1140px] py-2.5 max-md:w-full max-md:flex-col">
          <div className="h-[737.38px] w-[570px] p-2.5 max-md:h-auto max-md:w-full">
            <div className="h-[696px] w-[550px] max-md:h-auto max-md:w-full">
              <p className="mb-[24px] font-poppins">
                "Jeevan Jyoti <span className="text-[#f50070]">Samaj</span> Sewa
                Sansthan, NGO in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p className="mb-[24px] font-poppins">
                "Jeevan Jyoti Samaj Sewa
                Sansthan, NGO in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p className="mb-[24px] font-poppins">
                "Jeevan Jyoti Samaj Sewa
                Sansthan, NGO in Lucknow is dedicated to addressing social
                issues, with a special focus on supporting children with
                intellectual disabilities, autism, and cerebral palsy (CP). We
                provide comprehensive care, educational resources, and
                empowerment programs to enhance their quality of life and foster
                inclusivity within society."
              </p>
              <p className="mb-[24px] font-poppins">
                "Jeevan Jyoti samaj Sewa
                Sansthan, NGO in Lucknow is dedicated to addressing social
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
      </section>

      <div className="mx-auto w-full max-w-[1240px] px-5">
        <div className="mt-[15px] mb-[25.5px] ml-7 h-[4.6px] w-[1140px] bg-[#eb9bc2] max-md:mx-0 max-md:w-full" />
      </div>

      <section>
        <WhatWeDo />
      </section>

      <section className="relative w-full  bg-white">
        <div className="mx-auto w-full max-w-[1180px] px-0 pt-[19px] pb-[120px]">
          <div className="text-center">
            <h2 className="font-[Poppins,sans-serif] text-[37px] font-[700] leading-[1.2] text-[#171717]">
              Impact Stories
            </h2>

            <div className="mx-auto mt-[36px] h-[4px] w-[52px] bg-[#ff5b00]" />
          </div>

          <div className="mt-[70px] mx-10 grid grid-cols-2  gap-x-[40px] max-md:grid-cols-1 max-md:gap-12">
            {stories.map((story, index) => (
              <article key={index} className="w-full">
                <div className="h-[70px] font-[Arial,sans-serif] text-[125px] font-[900] leading-[0.72] text-[#ff6900]">
                <FaQuoteRight size={70}/>
                </div>

                <h3 className="mt-[20px] min-h-[70px] max-w-[545px]  text-[16px] font-[700]  text-[#171717]">
                  {story.title}
                </h3>

                <p className="mt-[40px] max-w-[550px] text-[15px] font-[400]  text-[#222] text-justify">
                  {story.description}
                </p>

                <button
                  type="button"
                  className="mt-[48px] flex h-[53px] min-w-[176px] items-center justify-center gap-[7px] rounded-full bg-[#f50070] px-[28px] font-[Poppins,sans-serif] text-[14px] font-[500] uppercase leading-none text-white transition duration-200 hover:bg-[#df0065]"
                >
                  <span>READ MORE</span>
                  <span className="text-[22px] font-[400] leading-none">+</span>
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
