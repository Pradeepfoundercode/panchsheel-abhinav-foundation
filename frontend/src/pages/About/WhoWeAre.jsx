import React from "react";
import PartnersSlider from "../../components/common/PartnersSlider";
import { DonateSection } from "../../components/common";
import { assets } from "../../constants/data";

const WhoWeAre = () => {
  return (
    <div className="w-full font-['Poppins',sans-serif]">

      {/* ================= HERO SECTION ================= */}
      {/* ================= HERO SECTION ================= */}
<section
  className="
    relative
    h-[710px]
    w-full
    overflow-hidden
    bg-fixed
    bg-cover
    bg-center

    max-lg:h-[650px]
    max-lg:bg-scroll

    max-md:h-auto
    max-md:min-h-[620px]

    max-sm:min-h-[570px]
  "
  style={{
    backgroundImage: `url(${assets.whoWeAreBanner})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#f32956]/90 to-[#ff6815]/90 opacity-90" />

  {/* Content */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      min-h-full
      max-w-[1140px]
      flex-col
      justify-center
      px-4
      mt-4
      pb-10

      max-lg:px-8

      max-md:mt-0
      max-md:min-h-[620px]
      max-md:px-5
      max-md:py-[70px]

      max-sm:min-h-[570px]
      max-sm:px-4
      max-sm:py-[55px]
    "
  >
    <div>
      <h3
        className="
          mb-8
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
          mb-12
          h-[5px]
          w-[101px]
          bg-white

          max-lg:mb-9

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
        max-w-[1050px]
        font-amatic
        text-[95px]
        font-bold
        leading-[1]
        tracking-normal
        text-white
        uppercase

        max-lg:max-w-[900px]
        max-lg:text-[78px]

        max-md:max-w-full
        max-md:text-[52px]
        max-md:leading-[1.05]

        max-sm:text-[40px]
        max-sm:leading-[1.08]
      "
    >
      Across the Globe, We Are United in Our Dedication to Children’s Rights
    </h1>
  </div>
</section>

      {/* ================= WHO WE ARE ================= */}
     <section
  className="
    relative
    w-full
    bg-cover
    bg-center
    bg-fixed

    max-md:bg-scroll
  "
  style={{
    backgroundImage: `url(${assets.banner02})`,
  }}
>
  {/* Overlay */}
  <div className="absolute inset-0 bg-black/80" />

  {/* Content */}
  <div
    className="
      relative
      z-10
      mx-auto
      flex
      w-full
      max-w-[1050px]
      flex-col
      items-center
      px-5
      pt-[80px]
      pb-[80px]
      text-center

      max-lg:px-8
      max-lg:pt-[70px]
      max-lg:pb-[70px]

      max-md:px-5
      max-md:pt-[60px]
      max-md:pb-[60px]

      max-sm:px-4
      max-sm:pt-[50px]
      max-sm:pb-[50px]
    "
  >
    {/* Heading */}
    <h2
      className="
        mt-10
        text-[40px]
        font-[700]
        leading-[1.2]
        text-white

        max-lg:text-[36px]

        max-md:mt-6
        max-md:text-[32px]

        max-sm:mt-4
        max-sm:text-[28px]
      "
    >
      Who We Are
    </h2>

    {/* Orange Line */}
    <div
      className="
        mt-[30px]
        mb-[32px]
        h-[4px]
        w-[60px]
        shrink-0
        bg-[#ff5b00]

        max-md:mt-[25px]
        max-md:mb-[28px]

        max-sm:mt-[20px]
        max-sm:mb-[24px]
        max-sm:w-[50px]
      "
    />

    {/* Main Description */}
    <p
      className="
        w-full
        break-words
        text-[25px]
        font-[700]
        leading-[1.75]
        text-[#ee0962]
        text-justify

        max-lg:text-[23px]

        max-md:text-[20px]
        max-md:leading-[1.6]

        max-sm:text-[17px]
        max-sm:leading-[1.55]
      "
    >
      Panchsheel Abhinav Foundation for Child Rights Protection:
      Empowering Communities, Transforming Lives through Compassionate
      Care, Sustainable Development, and Holistic Support for a Brighter,
      Inclusive Future.
    </p>

    {/* Paragraphs */}
    <div
      className="
        mt-[26px]
        w-full
        break-words
        space-y-[16px]
        text-[16px]
        font-[400]
        leading-[1.8]
        text-white/85
        text-justify

        max-md:mt-[22px]
        max-md:text-[15px]
        max-md:leading-[1.7]

        max-sm:mt-[18px]
        max-sm:space-y-[14px]
        max-sm:text-[13.5px]
        max-sm:leading-[1.65]
      "
    >
      <p>
        At Panchsheel Abhinav Foundation, NGO for Child Rights
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
        expertise and heartfelt commitment to give those in need
        inspiring opportunities, thoughts, and basic utilities.
        Panchsheel Abhinav Foundation is a beacon of hope, initiating
        positive change and providing self-sustaining within communities.
      </p>

      <p>
        Through our work and efforts, we aim to make lasting and
        long-term change, building a bridge of access and more equitable
        future for all.
      </p>
    </div>

    {/* Read More */}
    <button
      type="button"
      className="
        mt-[80px]
        h-[42px]
        min-w-[130px]
        shrink-0
        cursor-pointer
        rounded-full
        bg-white
        px-[32px]
        text-[12px]
        font-[600]
        uppercase
        tracking-[2.5px]
        transition-all
        duration-200
        hover:bg-[#ff6a00]
        hover:text-white

        max-lg:mt-[60px]

        max-md:mt-[45px]

        max-sm:mt-[35px]
        max-sm:h-[40px]
        max-sm:min-w-[120px]
        max-sm:px-[25px]
        max-sm:text-[11px]
      "
    >
      READ MORE
    </button>
  </div>
</section>

      {/* ================= OUR APPROACH ================= */}
      <section className="w-full bg-white py-16 md:py-24">
        <div
          className="
            mx-auto
            max-w-[1240px]
            px-5

            md:px-8

            max-sm:px-4
          "
        >
          {/* Section Heading */}
          <div
            className="
              mb-12
              text-center

              md:mb-16

              max-sm:mb-10
            "
          >
            <h2
              className="
                text-[32px]
                font-[700]
                tracking-tight
                text-gray-900

                md:text-[38px]

                max-sm:text-[28px]
              "
            >
              Our Approach
            </h2>

            <div
              className="
                mx-auto
                mt-3.5
                h-[3px]
                w-[50px]
                bg-[#ff5b00]
              "
            />
          </div>

          {/* Main Grid */}
          <div
            className="
              grid
              grid-cols-1
              items-start
              gap-12

              lg:grid-cols-2
              lg:gap-16

              max-md:gap-10
            "
          >
            {/* LEFT COLUMN */}
            <div className="flex flex-col">
              <h3
                className="
                  mb-8
                  text-[26px]
                  font-[700]
                  leading-[1.3]
                  text-gray-900

                  md:text-[30px]

                  max-sm:mb-6
                  max-sm:text-[24px]
                "
              >
                Creating Safe and Inclusive Learning Spaces at Panchsheel
                Abhinav Foundation For Child Rights Protection
              </h3>

              <div className="space-y-6">
                {/* Item 1 */}
                <div>
                  <h4
                    className="
                      mb-2
                      text-[15px]
                      font-[700]
                      leading-snug
                      text-gray-900
                    "
                  >
                    Creating Safe Learning Environments at Panchsheel Abhinav
                    Foundation
                  </h4>

                  <p
                    className="
                      text-[13.5px]
                      leading-[1.75]
                      text-gray-600

                      max-sm:text-[13px]
                    "
                  >
                    At Panchsheel Abhinav Foundation For Child Rights
                    Protection we are dedicated to creating secure and
                    nurturing learning environments for children, especially
                    those with disabilities. Our focus is on ensuring their
                    safety and well-being, providing them with the resources
                    and support they need to learn, grow, and thrive. We foster
                    an atmosphere of inclusivity, respect, and empowerment to
                    help every child reach their full potential.
                  </p>
                </div>

                {/* Item 2 */}
                <div>
                  <h4
                    className="
                      mb-2
                      text-[15px]
                      font-[700]
                      leading-snug
                      text-gray-900
                    "
                  >
                    Being a Best NGO, Empowering Every Child through Inclusive
                    Education
                  </h4>

                  <p
                    className="
                      text-[13.5px]
                      leading-[1.75]
                      text-gray-600

                      max-sm:text-[13px]
                    "
                  >
                    Our programs at Panchsheel Abhinav Foundation For Child
                    Rights Protectionare specifically designed to be inclusive,
                    providing tailored support for children with disabilities.
                    We focus on empowering them with the tools and resources
                    needed to unlock their full potential. Through specialized
                    education, skill development, and a nurturing environment,
                    we ensure every child has the opportunity to thrive and
                    succeed.
                  </p>
                </div>

                {/* Item 3 */}
                <div>
                  <h4
                    className="
                      mb-2
                      text-[15px]
                      font-[700]
                      leading-snug
                      text-gray-900
                    "
                  >
                    Fostering Growth and Development in a Supportive Atmosphere
                  </h4>

                  <p
                    className="
                      text-[13.5px]
                      leading-[1.75]
                      text-gray-600

                      max-sm:text-[13px]
                    "
                  >
                    At Panchsheel Abhinav Foundation, NGO For Child Rights
                    Protection we prioritize creating environments where
                    children feel safe, valued, and empowered. Our goal is to
                    nurture their growth by providing the support and resources
                    they need to succeed. By fostering a sense of belonging
                    and confidence, we help each child realize their potential,
                    encouraging them to achieve their best in a caring and
                    inclusive atmosphere.
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div
              className="
                space-y-8

                md:space-y-10

                max-sm:space-y-8
              "
            >
              {/* Mission */}
              <div>
                <span
                  className="
                    mb-1.5
                    block
                    text-[13px]
                    font-[700]
                    text-gray-900
                  "
                >
                  01.
                </span>

                <h4
                  className="
                    mb-3
                    text-[17px]
                    font-[700]
                    text-gray-900

                    md:text-[18px]
                  "
                >
                  — Our Mission
                </h4>

                <p
                  className="
                    text-[13.5px]
                    leading-[1.75]
                    text-gray-600

                    max-sm:text-[13px]
                  "
                >
                  At Panchsheel Abhinav Foundation, NGO For Child Rights
                  Protection Best NGO our mission is to{" "}
                  <strong className="font-[700] text-gray-900">
                    empower
                  </strong>{" "}
                  and{" "}
                  <strong className="font-[700] text-gray-900">
                    uplift
                  </strong>{" "}
                  marginalized communities, with a strong emphasis on children
                  with disabilities. We are committed to{" "}
                  <strong className="font-[700] text-gray-900">
                    transforming lives
                  </strong>{" "}
                  by ensuring{" "}
                  <strong className="font-[700] text-gray-900">
                    access
                  </strong>{" "}
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

              {/* Vision */}
              <div>
                <span
                  className="
                    mb-1.5
                    block
                    text-[13px]
                    font-[700]
                    text-gray-900
                  "
                >
                  02.
                </span>

                <h4
                  className="
                    mb-3
                    text-[17px]
                    font-[700]
                    text-gray-900

                    md:text-[18px]
                  "
                >
                  — Our Vision
                </h4>

                <p
                  className="
                    text-[13.5px]
                    leading-[1.75]
                    text-gray-600

                    max-sm:text-[13px]
                  "
                >
                  Our vision at Panchsheel Abhinav Foundation For Child Rights
                  Protection is to create a{" "}
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

              {/* Story */}
              <div>
                <span
                  className="
                    mb-1.5
                    block
                    text-[13px]
                    font-[700]
                    text-gray-900
                  "
                >
                  03.
                </span>

                <h4
                  className="
                    mb-3
                    text-[17px]
                    font-[700]
                    text-gray-900

                    md:text-[18px]
                  "
                >
                  — Our Story
                </h4>

                <p
                  className="
                    text-[13.5px]
                    leading-[1.75]
                    text-gray-600

                    max-sm:text-[13px]
                  "
                >
                  Panchsheel Abhinav Foundation NGO For Child Rights Protection
                  has grown from a small initiative to a recognized leader in
                  empowering marginalized communities, especially children
                  with disabilities. Through impactful education, healthcare,
                  and empowerment programs, JJSSS has earned multiple
                  certifications and accolades for its excellence in social
                  welfare. The organization's dedication to inclusivity and
                  sustainable development continues to transform lives,
                  creating lasting change and opportunity for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PARTNERS ================= */}
      <section>
        <PartnersSlider />
      </section>

      {/* ================= DONATE ================= */}
      <section>
        <DonateSection />
      </section>
    </div>
  );
};

export default WhoWeAre;