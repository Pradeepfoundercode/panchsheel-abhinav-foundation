import React from "react";

import { DonateSection } from "../../components/common";
import nationalTrustLogo from "../../assets/partners/partner.webp";
import msmeLogo from "../../assets/partners/4-1.webp";
import ncstcLogo from "../../assets/partners/1-1.webp";
import nhaiLogo from "../../assets/partners/2-1.webp";
import fcraLogo from "../../assets/partners/logo-fcra.webp";
import njbLogo from "../../assets/partners/National-jute-board-logo.webp";
import nbtLogo from "../../assets/partners/nbt-logo.webp";
import udyamMitraLogo from "../../assets/partners/udhyami-mitra-logo.webp";
import { assets, galleryImages } from "../../constants/data";

const OurPartnersPage = () => {
  const partnerList = [
    {
      id: 1,
      name: "The National Trust",
      image: nationalTrustLogo,
      description:
        "The National Trust is a statutory body established to promote and protect the rights and well-being of persons with disabilities in India. It provides various services, including educational support, healthcare, vocational training, and financial aid, to empower individuals with disabilities. The organization works to ensure equal opportunities and an inclusive society for people with disabilities.",
    },
    {
      id: 2,
      name: "MSME – Micro Small & Medium Enterprises",
      image: msmeLogo,
      description:
        "MSMEs are vital for economic growth, creating jobs, fostering innovation, and boosting exports. Supported by government initiatives, they promote entrepreneurship and regional development, contributing significantly to GDP and inclusive progress.",
    },
    {
      id: 3,
      name: "NCSTC – The National Council for Science & Technology Communication",
      image: ncstcLogo,
      description:
        "The National Council for Science and Technology Communication (NCSTC) aims to promote scientific awareness and its widespread use for societal development. Engaging in science popularization, education, and communication, fostering a culture of science and technology among the public, NCSTC seeks through outreach programs, training, and material dissemination to advance a science communication system and address societal challenges.",
    },
    {
      id: 4,
      name: "NHAI – National Highway Authority of India",
      image: nhaiLogo,
      description:
        "NHAI focuses on developing, maintaining, and managing India's national highways, ensuring safe, efficient, and seamless transportation. It aims to enhance connectivity, support economic growth, and improve road infrastructure across the country.",
    },
    {
      id: 5,
      name: "FCRA – Foreign Contribution (Regulation) Act (2010)",
      image: fcraLogo,
      description:
        "The Foreign Contribution (Regulation) Act (FCRA) regulates the receipt and utilization of foreign donations and transparency of information related to foreign contributions received by individuals and organizations. It regulates how foreign contributions are used to protect national interests, providing public access for transparency and clarity and standardization in their financial records. The FCRA aims to protect national interests, prevent unauthorized foreign influence, and ensure that funds are used for socio-economic and public development.",
    },
    {
      id: 6,
      name: "National Jute Board",
      image: njbLogo,
      description:
        "The National Jute Board (NJB) is an Indian government organization that promotes the development of the jute industry. It focuses on improving the quality of jute production, supporting farmers and small entrepreneurs, helping farmers, producers, and workers in the jute sector. It also drives initiatives for sustainable jute use in various industries and encouraging exports worldwide.",
    },
    {
      id: 7,
      name: "National Book Trust",
      image: nbtLogo,
      description:
        "The National Book Trust (NBT) is an autonomous organization under the Government of India, dedicated to promoting books and literature. It publishes a wide range of books in various languages, organizes national book fairs and exhibitions, and runs literacy events to encourage reading habits across the country. It also supports the translation of Indian literature and making quality literature accessible to all audiences.",
    },
    {
      id: 8,
      name: "Udyam Mitra",
      image: udyamMitraLogo,
      description:
        "Udyam Mitra is an initiative by the Government of India, aimed at providing support to MSMEs and entrepreneurs. It offers a platform for guidance, mentorship, and resources to help individuals start and grow their businesses. The program focuses on promoting entrepreneurship, especially in rural and underserved areas. Udyam Mitra helps entrepreneurs access financial assistance, training, and marketing support, driving business development.",
    },
  ];
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
        <div className="absolute inset-0 bg-gradient-to-r from-[#f32956]/70 to-[#ff6815]/70" />

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
              Panchsheel Abhinav Foundation
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
            These Are the Heroes with the Passion to Transform Their Communities
          </h1>
        </div>
      </section>

      <section className="w-full bg-[#fafafa] py-16 md:py-24">
        <div className="mx-auto w-full max-w-[1180px] px-5">
          {/* Section Heading */}
          <div className="text-center">
            <h2 className="text-[34px] md:text-[40px] font-[700] text-[#181818] leading-[1.2]">
              Our Partners
            </h2>

            <div className="mx-auto mt-[18px] h-[4px] w-[50px] rounded-full bg-[#ff5b00]" />
          </div>

          {/* Partner Cards */}
          <div className="mt-[55px] md:mt-[70px] flex flex-col gap-6 md:gap-7">
            {partnerList.map((partner) => (
              <div
                key={partner.id}
                className="
            group
            flex flex-col md:flex-row
            items-center md:items-center
            gap-7 md:gap-10
            rounded-xl
            border border-[#e9e9e9]
            bg-white
            p-6 sm:p-7 md:p-8
            shadow-sm
            transition-all duration-300 ease-in-out
            hover:-translate-y-1
            
            hover:shadow-md
          "
              >
                {/* Logo Box */}
                <div
                  className="
              flex h-[160px] w-[200px]
              sm:h-[170px] sm:w-[220px]
              md:h-[180px] md:w-[230px]
              shrink-0 items-center justify-center
              rounded-lg
              border border-[#eeeeee]
              bg-[#fafafa]
              p-5
              transition-all duration-300
              
              
            "
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className="
                max-h-full max-w-full
                object-contain
                transition-transform duration-300
                group-hover:scale-[1.04]
              "
                  />
                </div>

                {/* Partner Details */}
                <div className="flex flex-grow flex-col text-center md:text-left">
                  <h3
                    className="
                mb-3
                text-[18px] md:text-[20px]
                font-[700]
                leading-[1.35]
                text-[#181818]
                
              "
                  >
                    {partner.name}
                  </h3>

                  <p
                    className="
                text-[13.5px] md:text-[14px]
                font-[400]
                leading-[1.8]
                text-[#444]
                text-justify
              "
                  >
                    {partner.description}
                  </p>
                </div>
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
