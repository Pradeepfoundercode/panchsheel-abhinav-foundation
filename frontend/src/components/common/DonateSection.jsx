
import React, { useState } from "react";
import banner03 from "../../assets/banner/banner-03.webp";

const DonateSection = ({
  heading = "Donate",
  accountNumber = "50200073307332",
  ifscCode = "HDFC0001907",
  description = "Your donation to Panchsheel Abhinav Foundation empowers children with disabilities, providing them education, healthcare, and opportunities to thrive. Help create lasting change today!",
  buttonLabel = "DONATE",
  onDonateClick,
  backgroundImg,
}) => {
  const bgImage = backgroundImg || banner03;

  const [copied, setCopied] = useState("");

  const handleCopy = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);

      setTimeout(() => {
        setCopied("");
      }, 2000);
    } catch (error) {
      console.error("Failed to copy:", error);
    }
  };

  return (
    <section
      className="relative min-h-[700px] w-full bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
    
      <div className="absolute inset-0 bg-black/20" />

     
      <div className="relative z-10 mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 py-[82px] max-md:py-[65px]">

      
        <h2 className="font-poppins text-[37px] font-bold leading-[1.2] text-white max-md:text-[32px]">
          {heading}
        </h2>

        
        <div className="mt-[24px] text-center text-white">

         
          <p className="font-poppins text-[27px] font-extrabold uppercase tracking-[1px] leading-[1.2] max-md:text-[21px]">
            ACCOUNT NUMBER
          </p>

          <div className="mt-[8px] flex items-center justify-center gap-[10px]">
            <p className="font-poppins text-[35px] font-extrabold tracking-[2px] leading-[1.2] max-md:text-[23px]">
              {accountNumber}
            </p>

            <button
              type="button"
              onClick={() => handleCopy(accountNumber, "account")}
              aria-label="Copy account number"
              className="group flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full  bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#151515] max-md:h-[32px] max-md:w-[32px]"
            >
              {copied === "account" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[17px] w-[17px]"
                >
                  <rect
                    width="13"
                    height="13"
                    x="8"
                    y="8"
                    rx="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"
                  />
                </svg>
              )}
            </button>
          </div>

        
          <p className="mt-[23px] font-poppins text-[27px] font-extrabold uppercase tracking-[1px] leading-[1.2] max-md:text-[21px]">
            IFSC CODE
          </p>

          <div className="mt-[8px] flex items-center justify-center gap-[10px]">
            <p className="font-poppins text-[35px] font-extrabold tracking-[2px] leading-[1.2] max-md:text-[23px]">
              {ifscCode}
            </p>

            <button
              type="button"
              onClick={() => handleCopy(ifscCode, "ifsc")}
              aria-label="Copy IFSC code"
              className="group flex h-[36px] w-[36px] shrink-0 items-center justify-center rounded-full  bg-white/10 text-white backdrop-blur-sm transition-all duration-200 hover:bg-white hover:text-[#151515] max-md:h-[32px] max-md:w-[32px]"
            >
              {copied === "ifsc" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  className="h-[18px] w-[18px]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="h-[17px] w-[17px]"
                >
                  <rect
                    width="13"
                    height="13"
                    x="8"
                    y="8"
                    rx="2"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

     
        <div className="mt-[27px] h-[4px] w-[48px] rounded-full bg-white" />

       
        <p className="mt-[19px] text-center font-poppins text-[28px] font-extrabold uppercase tracking-[1px] leading-[1.2] text-white max-md:text-[21px]">
          SUPPORT US TODAY
        </p>

        
        <p className="mt-[7px] text-center font-poppins text-[22px] font-semibold leading-[1.3] text-white max-md:text-[17px]">
          and Transform a Child’s Future!
        </p>

        <p className="mt-[15px] max-w-[560px] text-center font-poppins text-[15px] font-normal leading-[24px] text-[#eeeeee] max-md:max-w-[90%] max-md:text-[14px] max-md:leading-[22px]">
          {description}
        </p>

       
        <button
          type="button"
          onClick={onDonateClick}
          className="
            mt-[27px]
            flex
            h-[44px]
            min-w-[125px]
            cursor-pointer
            items-center
            justify-center
            rounded-full
            bg-white
            px-[32px]
            font-poppins
            text-[13px]
            font-semibold
            uppercase
            tracking-[2px]
            text-[#151515]
            shadow-[0_5px_18px_rgba(0,0,0,0.12)]
            transition-all
            duration-200
            hover:-translate-y-[2px]
            hover:bg-[#f50070]
            hover:text-white
            hover:shadow-[0_8px_22px_rgba(0,0,0,0.18)]
          "
        >
          {buttonLabel}
        </button>
      </div>
    </section>
  );
};

export default DonateSection;

