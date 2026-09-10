import React from "react";
import PartnersSlider from "../../components/common/PartnersSlider";
import { DonateSection } from "../../components/common";
import { assets } from "../../constants/data";

const WhoWeAre = () => {
  return (
    <div className="w-full font-['Poppins',sans-serif]">
      <section
        className="relative h-[710px] w-full overflow-hidden bg-fixed bg-cover bg-center max-md:h-[620px] max-md:bg-scroll"
        style={{ backgroundImage: `url(${assets.whoWeAreBanner})` }}
      >
        <div className="absolute inset-0 opacity-90 bg-gradient-to-r from-[#f32956]/90  to-[#ff6815]/90" />

        <div className="relative z-10 mx-auto flex h-full max-w-[1140px] flex-col justify-center px-4 max-md:px-5 mt-4">
          <div>
            <h3 className="mb-8 text-[20px] font-bold text-white max-md:mb-5 max-md:text-[15px]">
              Jeevan Jyoti Samaj Sewa Sansthan Best NGO
            </h3>
            <div className="mb-12 h-[5px] w-[101px] bg-white max-md:mb-7 max-md:h-[4px] max-md:w-[60px]" />
          </div>

          <h1
            className="
              max-w-[1050px]
              h-[280px]
              font-amatic
              text-[95px]
              font-bold
             
              tracking-normal
              text-white
              uppercase
              max-md:text-[50px]
              max-md:leading-[0.95]
            "
          >
           Across the Globe, We Are United in Our Dedication to Children’s Rights
          </h1>

          
        </div>
      </section>

      <section
        className="relative w-full bg-cover bg-center bg-fixed overflow-hidden"
        style={{
          backgroundImage: `url(${assets.banner02})`,
          height: "clamp(760px, 75vw, 1083.05px)",
        }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(70, 20, 5, 0.82)" }}
        />

        <div className="relative z-10 mx-auto flex h-full max-w-[900px] flex-col items-center justify-center px-5 text-center">
          <h2 className="text-[36px] font-[700] text-white leading-[1.2]">
            Who We Are
          </h2>

          <div className="mt-[18px] mb-[32px] h-[4px] w-[50px] bg-[#ff5b00]" />

          <p className="text-[15px] font-[700] leading-[1.75] text-[#ff7a30]">
            Jeevan Jyoti Sama Sewa Sansthan NGO for Child Rights Protection:
            Empowering Communities, Transforming Lives through Compassionate
            Care, Sustainable Development, and Holistic Support for a Brighter,
            Inclusive Future.
          </p>

          <div className="mt-[26px] space-y-[16px] text-[13.5px] font-[400] leading-[1.8] text-white/85">
            <p>
              At Jeevan Jyoti Sama Sewa Sansthan, NGO for Child Rights
              Protection, we are a passionate, dedicated organization committed
              to making a meaningful difference in the lives of those we serve.
              Our mission is founded on the principles of compassion,
              inclusivity, sustainable development, celebrating diversity, and
              wellness, and has benefitted underprivileged communities.
            </p>
            <p>
              We envision a society where every individual, regardless of
              background, has access to the opportunities and resources
              necessary for a better life. By collaborating with stakeholders,
              we focus on empowerment, education, health maintenance, and child
              welfare, this is recognition to be awarded.
            </p>
            <p>
              Our dedicated team of professionals and volunteers combine their
              expertise and heartfelt commitment to give those in need inspiring
              opportunities, thoughts, and basic utilities. Jeevan Jyoti Sama
              Sewa Sansthan is a beacon of hope, initiating positive change and
              providing self-sustaining within communities.
            </p>
            <p>
              Through our work and efforts, we aim to make lasting and long-term
              change, building a bridge of access and more equitable future for
              all.
            </p>
          </div>

          <button
            type="button"
            className="mt-[38px] h-[42px] min-w-[130px] rounded-full border border-white/50 bg-transparent px-[32px] text-[12px] font-[600] uppercase tracking-[2.5px] text-white transition-all duration-200 hover:bg-white hover:text-[#5a1e0a] cursor-pointer"
          >
            READ MORE
          </button>
        </div>
      </section>

      <section className="w-full bg-white py-16 md:py-24">
        <div className="mx-auto max-w-[1240px] px-5 md:px-8">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-[32px] md:text-[38px] font-[700] text-gray-900 tracking-tight">
              Our Approach
            </h2>
            <div className="mt-3.5 h-[3px] w-[50px] bg-[#ff5b00] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="flex flex-col">
              <h3 className="text-[26px] md:text-[30px] font-[700] text-gray-900 leading-[1.3] mb-8">
                Creating Safe and Inclusive Learning Spaces at Jeevan Jyoti Sama
                Sewa Sansthan NGO For Child Rights Protection
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-[15px] font-[700] text-gray-900 mb-2 leading-snug">
                    Creating Safe Learning Environments at Jeevan Jyoti Sama
                    Sewa Sansthan
                  </h4>
                  <p className="text-[13.5px] text-gray-600 leading-[1.75]">
                    At Jeevan Jyoti Sama Sewa Sansthan, NGO For Child Rights
                    Protection we are dedicated to creating secure and nurturing
                    learning environments for children, especially those with
                    disabilities. Our focus is on ensuring their safety and
                    well-being, providing them with the resources and support
                    they need to learn, grow, and thrive. We foster an
                    atmosphere of inclusivity, respect, and empowerment to help
                    every child reach their full potential.
                  </p>
                </div>

                <div>
                  <h4 className="text-[15px] font-[700] text-gray-900 mb-2 leading-snug">
                    Being a Best NGO, Empowering Every Child through Inclusive
                    Education
                  </h4>
                  <p className="text-[13.5px] text-gray-600 leading-[1.75]">
                    Our programs at Jeevan Jyoti Sama Sewa Sansthan NGO For
                    Child Rights Protectionare specifically designed to be
                    inclusive, providing tailored support for children with
                    disabilities. We focus on empowering them with the tools and
                    resources needed to unlock their full potential. Through
                    specialized education, skill development, and a nurturing
                    environment, we ensure every child has the opportunity to
                    thrive and succeed.
                  </p>
                </div>

                <div>
                  <h4 className="text-[15px] font-[700] text-gray-900 mb-2 leading-snug">
                    Fostering Growth and Development in a Supportive Atmosphere
                  </h4>
                  <p className="text-[13.5px] text-gray-600 leading-[1.75]">
                    At Jeevan Jyoti Sama Sewa Sansthan, NGO For Child Rights
                    Protection we prioritize creating environments where
                    children feel safe, valued, and empowered. Our goal is to
                    nurture their growth by providing the support and resources
                    they need to succeed. By fostering a sense of belonging and
                    confidence, we help each child realize their potential,
                    encouraging them to achieve their best in a caring and
                    inclusive atmosphere.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-8 md:space-y-10">
              <div>
                <span className="block text-[13px] font-[700] text-gray-900 mb-1.5">
                  01.
                </span>
                <h4 className="text-[17px] md:text-[18px] font-[700] text-gray-900 mb-3">
                  — Our Mission
                </h4>
                <p className="text-[13.5px] text-gray-600 leading-[1.75]">
                  At Jeevan Jyoti Sama Sewa Sansthan, NGO For Child Rights
                  Protection Best NGO our mission is to{" "}
                  <strong className="font-[700] text-gray-900">empower</strong>{" "}
                  and{" "}
                  <strong className="font-[700] text-gray-900">uplift</strong>{" "}
                  marginalized communities, with a strong emphasis on children
                  with disabilities. We are committed to{" "}
                  <strong className="font-[700] text-gray-900">
                    transforming lives
                  </strong>{" "}
                  by ensuring{" "}
                  <strong className="font-[700] text-gray-900">access</strong>{" "}
                  to education, healthcare, and social welfare. Through{" "}
                  <strong className="font-[700] text-gray-900">
                    compassionate, impactful
                  </strong>{" "}
                  initiatives, we create a more{" "}
                  <strong className="font-[700] text-gray-900">
                    inclusive society
                  </strong>
                  , providing equal opportunities, fostering{" "}
                  <strong className="font-[700] text-gray-900">
                    self-reliance
                  </strong>
                  , and shaping a{" "}
                  <strong className="font-[700] text-gray-900">
                    brighter, more equitable future
                  </strong>{" "}
                  for all.
                </p>
              </div>

              <div>
                <span className="block text-[13px] font-[700] text-gray-900 mb-1.5">
                  02.
                </span>
                <h4 className="text-[17px] md:text-[18px] font-[700] text-gray-900 mb-3">
                  — Our Vision
                </h4>
                <p className="text-[13.5px] text-gray-600 leading-[1.75]">
                  Our vision at Jeevan Jyoti Sama Sewa Sansthan NGO For Child
                  Rights Protection is to create a{" "}
                  <strong className="font-[700] text-gray-900">
                    world of equality and empowerment
                  </strong>{" "}
                  where every individual, regardless of background or ability,
                  has the opportunity to thrive. We strive to be a beacon of{" "}
                  <strong className="font-[700] text-gray-900">
                    hope and change
                  </strong>
                  , shaping a society that values{" "}
                  <strong className="font-[700] text-gray-900">
                    inclusivity, compassion
                  </strong>
                  , and{" "}
                  <strong className="font-[700] text-gray-900">
                    sustainable development
                  </strong>
                  . Through our transformative efforts, we aim to{" "}
                  <strong className="font-[700] text-gray-900">
                    break barriers, uplift lives
                  </strong>
                  , and ensure a future where all children, especially those
                  with disabilities, can lead{" "}
                  <strong className="font-[700] text-gray-900">
                    fulfilled, independent
                  </strong>
                  , and{" "}
                  <strong className="font-[700] text-gray-900">
                    meaningful lives
                  </strong>
                  .
                </p>
              </div>

              <div>
                <span className="block text-[13px] font-[700] text-gray-900 mb-1.5">
                  03.
                </span>
                <h4 className="text-[17px] md:text-[18px] font-[700] text-gray-900 mb-3">
                  — Our Story
                </h4>
                <p className="text-[13.5px] text-gray-600 leading-[1.75]">
                  Jeevan Jyoti Sama Sewa Sansthan (JJSSS) NGO For Child Rights
                  Protection has grown from a small initiative to a recognized
                  leader in empowering marginalized communities, especially
                  children with disabilities. Through impactful education,
                  healthcare, and empowerment programs, JJSSS has earned
                  multiple certifications and accolades for its excellence in
                  social welfare. The organization's dedication to inclusivity
                  and sustainable development continues to transform lives,
                  creating lasting change and opportunity for all.
                </p>
              </div>
            </div>
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

export default WhoWeAre;
