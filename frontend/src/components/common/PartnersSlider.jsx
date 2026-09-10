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
      const width = viewportRef.current?.clientWidth || 1100;
      const nextVisibleSlides = width < 640 ? 1 : width < 1024 ? 3 : visibleSlides;
      const nextSlideWidth = width / nextVisibleSlides;
      setSlidesVisible(nextVisibleSlides);
      setSlideWidth(nextSlideWidth);
      setCurrentIndex(nextVisibleSlides);
      setIsTransition(false);
      requestAnimationFrame(() => setIsTransition(true));
    };

    updateSlider();
    window.addEventListener("resize", updateSlider);
    return () => window.removeEventListener("resize", updateSlider);
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
        requestAnimationFrame(() => setIsTransition(true));
      });
    }

    if (currentIndex < slidesVisible) {
      setIsTransition(false);
      setCurrentIndex(images.length + slidesVisible - 1);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setIsTransition(true));
      });
    }
  };

  return (
    <section className="h-[580.9px] w-full overflow-hidden bg-black text-[15px] max-md:h-[480px]">
      <div className="h-full w-full pt-[110px] pb-[90px] max-md:pt-[60px] max-md:pb-[70px]">
        <div className="mx-auto h-[380.9px] w-[1140px] max-md:w-full max-md:px-4">
          <div className="h-[48.1px] w-full">
            <h1 className="m-0 text-center text-[37px] font-bold leading-[48.1px] text-white max-md:text-[30px]">
              Partners
            </h1>
          </div>

          <div className="my-5 h-[44.8px] w-full">
            <div className="flex h-[24.8px] w-full justify-center py-2.5">
              <div className="h-[4.8px] w-[50px] bg-orange-400" />
            </div>
          </div>

          <div
            ref={viewportRef}
            className="relative mx-auto h-[208px] w-[1100px] max-md:w-full"
          >
            <div className="absolute inset-0 h-[208px] w-[1100px] overflow-hidden bg-white max-md:w-full">
              <div
                onTransitionEnd={handleTransitionEnd}
                className={`flex h-[208px] ${isTransition ? "transition-transform duration-700 ease-in-out" : ""}`}
                style={{
                  width: `${sliderImages.length * slideWidth}px`,
                  transform: `translateX(-${currentIndex * slideWidth}px)`,
                }}
              >
                {sliderImages.map((logo, index) => (
                  <div
                    key={index}
                    className="flex h-[208px] flex-shrink-0 items-center justify-center"
                    style={{ width: `${slideWidth}px` }}
                  >
                    <img
                      src={logo}
                      alt={`Partner ${index + 1}`}
                      className="max-h-[180px] max-w-[190px] object-contain max-md:max-h-[150px] max-md:max-w-[160px]"
                    />
                  </div>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={prevSlide}
              className="absolute -left-[35px] top-1/2 z-20 flex h-[50px] w-[30px] -translate-y-1/2 items-center justify-center text-white max-md:-left-1"
            >
              <span className="text-[42px] font-light leading-none">‹</span>
            </button>

            <button
              type="button"
              onClick={nextSlide}
              className="absolute -right-[35px] top-1/2 z-20 flex h-[50px] w-[30px] -translate-y-1/2 items-center justify-center text-white max-md:-right-1"
            >
              <span className="text-[42px] font-light leading-none">›</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersSlider;
