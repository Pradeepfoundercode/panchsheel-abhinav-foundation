import React, { useEffect, useRef, useState } from "react";
import { partnerSlider } from "../../constants/data";

const PartnersSlider = () => {
  const { visibleSlides, images } = partnerSlider;

  const sliderImages = [...images, ...images, ...images];

  const viewportRef = useRef(null);

  const [slideWidth, setSlideWidth] = useState(220);
  const [slidesVisible, setSlidesVisible] = useState(visibleSlides);
  const [currentIndex, setCurrentIndex] = useState(visibleSlides);
  const [isTransition, setIsTransition] = useState(true);

  useEffect(() => {
    const updateSlider = () => {
      if (!viewportRef.current) return;

      const width = viewportRef.current.clientWidth || 1100;

      const nextVisibleSlides =
        width < 640 ? 1 : width < 1024 ? 3 : visibleSlides;

      const nextSlideWidth = width / nextVisibleSlides;

      setSlidesVisible(nextVisibleSlides);
      setSlideWidth(nextSlideWidth);

      setIsTransition(false);
      setCurrentIndex(nextVisibleSlides);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransition(true);
        });
      });
    };

    updateSlider();

    window.addEventListener("resize", updateSlider);

    return () => {
      window.removeEventListener("resize", updateSlider);
    };
  }, [visibleSlides]);

  const nextSlide = () => {
    if (!isTransition) return;

    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    if (!isTransition) return;

    setCurrentIndex((prev) => prev - 1);
  };

  const handleTransitionEnd = () => {
    if (currentIndex >= images.length * 2) {
      setIsTransition(false);
      setCurrentIndex(slidesVisible);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransition(true);
        });
      });
    }

    if (currentIndex < slidesVisible) {
      setIsTransition(false);
      setCurrentIndex(images.length + slidesVisible - 1);

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setIsTransition(true);
        });
      });
    }
  };

  return (
    <section
      className="
        h-[580.9px]
        w-full
        overflow-hidden
        bg-black
        text-[15px]

        max-lg:h-[540px]
        max-md:h-[480px]
        max-sm:h-[440px]
      "
    >
      <div
        className="
          h-full
          w-full
          pt-[110px]
          pb-[90px]

          max-lg:pt-[85px]
          max-lg:pb-[70px]

          max-md:pt-[60px]
          max-md:pb-[70px]

          max-sm:pt-[45px]
          max-sm:pb-[50px]
        "
      >
        <div
          className="
            mx-auto
            h-[380.9px]
            w-[1140px]

            max-xl:w-[1100px]
            max-lg:w-full
            max-lg:px-8

            max-md:h-auto
            max-md:w-full
            max-md:px-4

            max-sm:px-3
          "
        >
          {/* Heading */}
          <div className="h-[48.1px] w-full">
            <h1
              className="
                m-0
                text-center
                text-[37px]
                font-bold
                leading-[48.1px]
                text-white

                max-lg:text-[34px]
                max-md:text-[30px]
                max-md:leading-[40px]

                max-sm:text-[28px]
                max-sm:leading-[36px]
              "
            >
              Partners
            </h1>
          </div>

          {/* Orange Line */}
          <div
            className="
              my-5
              h-[44.8px]
              w-full

              max-sm:my-4
            "
          >
            <div className="flex h-[24.8px] w-full justify-center py-2.5">
              <div className="h-[4.8px] w-[50px] bg-orange-400" />
            </div>
          </div>

          {/* Slider */}
          <div
            ref={viewportRef}
            className="
              relative
              mx-auto
              h-[208px]
              w-[1100px]

              max-xl:w-full
              max-lg:w-full

              max-md:h-[190px]
              max-sm:h-[180px]
            "
          >
            {/* White Slider Area */}
            <div
              className="
                absolute
                inset-0
                h-[208px]
                w-full
                overflow-hidden
                bg-white

                max-md:h-[190px]
                max-sm:h-[180px]
              "
            >
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex h-full ${
                  isTransition
                    ? "transition-transform duration-700 ease-in-out"
                    : ""
                }`}
                style={{
                  width: `${sliderImages.length * slideWidth}px`,
                  transform: `translateX(-${
                    currentIndex * slideWidth
                  }px)`,
                }}
              >
                {sliderImages.map((logo, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      h-[208px]
                      flex-shrink-0
                      items-center
                      justify-center

                      max-md:h-[190px]
                      max-sm:h-[180px]
                    "
                    style={{
                      width: `${slideWidth}px`,
                    }}
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="
                        max-h-[180px]
                        max-w-[190px]
                        object-contain

                        max-lg:max-h-[165px]
                        max-lg:max-w-[175px]

                        max-md:max-h-[150px]
                        max-md:max-w-[160px]

                        max-sm:max-h-[135px]
                        max-sm:max-w-[145px]
                      "
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* ================= PREVIOUS ARROW ================= */}
            <button
              type="button"
              onClick={prevSlide}
              aria-label="Previous partner"
              className="
                absolute
                top-1/2
                z-50
                flex
                h-[50px]
                w-[30px]
                -translate-y-1/2
                items-center
                justify-center
                text-white

                -left-[35px]

                max-lg:-left-[6px]
                max-lg:text-[#222222]

                max-md:left-[4px]
                max-md:h-[45px]
                max-md:w-[28px]
                max-md:text-[#222222]

                max-sm:left-[3px]
                max-sm:h-[42px]
                max-sm:w-[25px]
              "
            >
              <span
                className="
                  block
                  text-[42px]
                  font-light
                  leading-none

                  max-md:text-[38px]
                  max-sm:text-[35px]
                "
              >
                ‹
              </span>
            </button>

            {/* ================= NEXT ARROW ================= */}
            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next partner"
              className="
                absolute
                top-1/2
                z-50
                flex
                h-[50px]
                w-[30px]
                -translate-y-1/2
                items-center
                justify-center
                text-white

                -right-[35px]

                max-lg:-right-[6px]
                max-lg:text-[#222222]

                max-md:right-[4px]
                max-md:h-[45px]
                max-md:w-[28px]
                max-md:text-[#222222]

                max-sm:right-[3px]
                max-sm:h-[42px]
                max-sm:w-[25px]
              "
            >
              <span
                className="
                  block
                  text-[42px]
                  font-light
                  leading-none

                  max-md:text-[38px]
                  max-sm:text-[35px]
                "
              >
                ›
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;