import React from "react";




import { DonateSection, HeroBanner } from "../../components/common";
import { assets } from "../../constants/data";



const ContactPage = () => {
  return (
    <div className="w-full font-['Poppins',sans-serif] bg-white text-[#151515]">
      
      <section
                    className="relative h-[570px] w-full overflow-hidden bg-scroll bg-cover bg-center max-md:h-[620px] max-md:bg-scroll"
                    style={{ backgroundImage: `url(${assets.banner04})` }}
                  >
                    <div className="absolute inset-0 opacity-90 bg-gradient-to-r from-[#f32956]/90  to-[#ff6815]/90" />
            
                    <div className="relative z-10 mx-[190px] flex h-full max-w-[1140px] flex-col justify-center px-4 max-md:px-5 mt-18">
                      <div>
                        <h3 className="mb-7 text-[20px] font-bold text-white max-md:mb-5 max-md:text-[15px]">
                          JEEVAN JYOTI SAMAJ SEWA SANSTHAN
                        </h3>
                        <div className="mb-10 h-[5px] w-[101px] bg-white max-md:mb-7 max-md:h-[4px] max-md:w-[60px]" />
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
                     
Contact Us
                      </h1>
            
                      
                    </div>
                  </section>

       <section className="h-[700px] w-full bg-white max-md:h-auto max-md:min-h-[420px]">
      <div className="ml-[249px] pt-[21px] max-md:ml-0 max-md:px-5">
        <p className="m-0 text-[18px] leading-[27px] font-bold text-black">
          S. Lal (MD)
        </p>

        <p className="m-0 text-[18px] leading-[27px] font-bold text-black">
          Contact no. – 7651931577
        </p>

        <p className="m-0 text-[18px] leading-[27px] font-bold text-black">
          Mail at – jeevanjyoti.sss@gmail.com
        </p>

        <p className="m-0 text-[18px] leading-[27px] font-bold text-black">
          Address – 3/560 Ruchikhand 1st Saleh Nagar , Sharda Nagar Lucknow
          226002
        </p>
      </div>
    </section>

      

      
      <DonateSection />
    </div>
  );
};

export default ContactPage;
