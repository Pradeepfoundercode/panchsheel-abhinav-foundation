import React from "react";
import banner03 from "../../assets/banner/banner-03.webp";
import scannerImg from "../../assets/scanner/Screenshot-2026-07-08-at-10.44.06.webp";

const DonateSection = ({
  heading = "Donate",
  upiId = "jjsss@ucobank",
  description = "Your donation to Jeevan Jyoti Sama Sewa Sansthan empowers children with disabilities, providing them education, healthcare, and opportunities to thrive. Help create lasting change today!",
  buttonLabel = "DONATE",
  onDonateClick,
  backgroundImg,
  scannerImage,
}) => {
  const bgImage = backgroundImg || banner03;
  const qrImage = scannerImage || scannerImg;

  return (
    <section
      className="relative h-[1242.63px] w-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${bgImage})`,
      
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/1" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full  max-w-[1440px] flex-col items-center justify-center px-4 py-[96.5px]">

        {/* Heading */}
        <h2 className="font-poppins text-[37px] font-bold  text-white">
          {heading}
        </h2>

        {/* QR */}
        <div className="mt-[16.5px] w-[600px]">
          <img
            src={qrImage}
            alt="UPI QR Code Scanner"
            className="block h-[602.3px] w-full object-contain"
          />
        </div>

        {/* Divider */}
        <div className="mt-[25px] h-[6px] w-[50px] bg-white" />

        {/* UPI Label */}
        <p className="mt-[20px] font-poppins text-[37px] font-extrabold uppercase tracking-[2px] text-white">
          OR PAY TO UPI ID
        </p>

        {/* UPI ID */}
        <p className="mt-[6px] font-poppins text-[37px] font-extrabold text-white">
          UPI ID:
          <span className="">
            {upiId}
          </span>
        </p>
        <p>Support Us Today and Transform a Child’s Future!</p>

        {/* Description */}
        <p className="mt-[16px] max-w-[540px] text-center font-poppins text-[15px] font-normal text-[#e7e7e7]">
          {description}
        </p>

        {/* Button */}
        <button
          type="button"
          onClick={onDonateClick}
          className="
            mt-[32px]
            h-[42px]
            min-w-[120px]
            cursor-pointer
            rounded-full
         bg-white
           
            px-[32px]
            font-poppins
            text-[13px]
            font-semibold
            uppercase
            tracking-[2px]
           
            transition-all
            duration-200
            hover:bg-[#f50070]
            hover:text-white
          "
        >
          {buttonLabel}
        </button>

      </div>
    </section>
  );
};

export default DonateSection;