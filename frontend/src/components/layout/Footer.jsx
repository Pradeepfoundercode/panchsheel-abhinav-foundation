import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-white border-y">
     
      <div className="mx-auto flex w-full max-w-[1400px] h-[138px] items-center justify-between px-[40px]">
       
        <p className=" text-[15px]  font-poppins text-[#333] ">
          <span className=" text-[#151515] font-poppins">Copyright</span> &copy; {currentYear}{" "}
          <span className=" text-[#151515] font-poppins">PANCHSHELL ABHINAV FOUNDATION</span>
        </p>

        
        <p className=" text-[15px] font-[400] font-poppins text-[#333]">
          <span className="text-[#151515] font-poppins">Powered by</span>{" "}
          <span className="  text-[#151515] font-poppins">PANCHSHELL ABHINAV FOUNDATION</span>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
