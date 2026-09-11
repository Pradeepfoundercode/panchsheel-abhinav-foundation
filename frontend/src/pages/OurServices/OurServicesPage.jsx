import React, { useState } from "react";
import { MdZoomOutMap } from "react-icons/md";
import { DonateSection } from "../../components/common";
import { serviceList, galleryImages } from "../../constants/data";

const OurServicesPage = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="w-full bg-[#ffffff] font-['Poppins',sans-serif] text-[#151515]">

      <section className="w-full bg-[#ffffff] py-12 md:py-16">
  <div className="mx-auto w-full max-w-[1200px] px-5 sm:px-6">

    <div className="mb-12 text-center md:mb-16">
      <h2 className="text-[34px] font-[700] leading-[1.2] text-[#181818] md:text-[40px]">
        Our Services
      </h2>

      <div className="mx-auto mt-[18px] h-[4px] w-[50px] bg-[#ff5b00]" />
    </div>

    <div className="flex flex-col space-y-14 md:space-y-16">
      {serviceList.map((service, index) => (
        <div
          key={service.id}
          className="
            flex
            w-full
            flex-col
            items-center
            justify-between
            gap-8

            lg:flex-row
            lg:items-start
            lg:gap-12
          "
        >
       
          <div
            className="
              flex
              w-full
              flex-col
              justify-center

              lg:w-[54%]
            "
          >
            <h3
              className="
                mb-4
                text-[20px]
                font-[700]
                leading-[1.3]
                text-[#181818]

                sm:text-[22px]

                md:text-[21px]
              "
            >
              {service.title}
            </h3>

            <p
              className="
                text-left
                text-[13.5px]
                font-[400]
                leading-[1.75]
                text-[#333333]

                sm:text-[14px]

                md:text-[15px]
              "
            >
              {service.description}
            </p>
          </div>

      
          <div
            className="
              flex
              w-full
              items-center
              justify-center

              lg:w-[46%]
            "
          >
            <div
              className="
                w-full
                max-w-[500px]
                overflow-hidden
                rounded-xs
                border
                border-gray-100
                bg-[#f5f5f5]
                shadow-xs
                aspect-[16/10]
              "
            >
              <img
                src={service.image}
                alt={service.imageAlt}
                className="
                  h-full
                  w-full
                  object-cover
                  rounded-lg
                "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>

   
      {/* <section className="w-full  pb-16 pt-8 md:pb-20 md:pt-10">
        <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-6 lg:px-8">

          <div className="mx-auto mb-12 w-full max-w-[1140px] text-center md:mb-14">

            <div className="mb-8 h-[4.8px] w-full bg-[#333333]" />

            <h1
              className="
                font-roboto
                text-[30px]
                font-extrabold
                text-[#c44884]

                sm:text-[32px]

                md:text-[33px]
              "
            >
              Gallery
            </h1>

            <div className="mt-8 h-[4.8px] w-full bg-[#333333]" />

          </div>

         
          <div
            className="
              mx-auto
              grid
              w-full
              max-w-[1100px]
              grid-cols-1
              gap-x-8
              gap-y-10

              sm:grid-cols-2

              lg:grid-cols-3
              lg:gap-x-10
              lg:gap-y-12
            "
          >
            {Array.from({ length: 6 }).map((_, partIndex) => {
              const startIndex = partIndex * 12;

              const partImages = galleryImages.slice(
                startIndex,
                startIndex + 12
              );

              return (
                <div
                  key={partIndex}
                  className="
                    grid
                    grid-cols-4
                    gap-3

                    sm:gap-3.5

                    md:gap-4
                  "
                >
                  {partImages.map((image, imageIndex) => (
                    <button
                      key={imageIndex}
                      type="button"
                      onClick={() => setSelectedImage(image)}
                      className="
                        group
                        relative
                        aspect-square
                        w-full
                        cursor-pointer
                        overflow-hidden
                        bg-white
                        p-0
                      "
                    >
                      <img
                        src={image}
                        alt={`Gallery Image ${
                          startIndex + imageIndex + 1
                        }`}
                        className="
                          h-full
                          w-full
                          object-cover
                          transition-transform
                          duration-300
                          group-hover:scale-105
                        "
                        loading="lazy"
                      />

                    
                      <span
                        className="
                          absolute
                          inset-0
                          flex
                          items-center
                          justify-center
                          bg-black/0
                          opacity-0
                          transition-all
                          duration-300
                          group-hover:bg-black/30
                          group-hover:opacity-100
                        "
                      >
                        <span
                          className="
                            flex
                            h-8
                            w-8
                            items-center
                            justify-center
                            rounded-full
                           
                            text-white
                            shadow
                            
                          "
                        >
                          <MdZoomOutMap size={25} />

                        </span>
                      </span>
                    </button>
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {selectedImage && (
        <div
          className="
            fixed
            inset-0
            z-[9999]
            flex
            items-center
            justify-center
            bg-black/80
            p-4
            sm:p-5
          "
          onClick={() => setSelectedImage(null)}
        >

          {/* Close Button */}
          <button
            type="button"
            onClick={() => setSelectedImage(null)}
            className="
              absolute
              right-4
              top-3
              cursor-pointer
              text-[38px]
              font-light
              leading-none
              text-white

              sm:right-7
              sm:top-5
              sm:text-[40px]
            "
            aria-label="Close preview"
          >
            &times;
          </button>

          <img
            src={selectedImage}
            alt="Gallery Preview"
            className="
              max-h-[90vh]
              max-w-[92vw]
              object-contain

              sm:max-w-[90vw]
            "
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

     
      <DonateSection />

    </div>
  );
};

export default OurServicesPage;