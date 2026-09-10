import React from 'react';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="w-full bg-white"
      
    >
      {/* Inner container — 1440px wide, 140px tall */}
      <div
        className="mx-auto flex w-full max-w-[1440px] h-[138px] items-center justify-between px-[40px]"
        
      >
        {/* Left — Copyright */}
        <p className=" text-[18px] font-[400] text-[#333]">
          Copyright &copy; {currentYear}{' '}
          <span className=" text-[#151515]">JEEVANJYOTI</span>
        </p>

        {/* Right — Powered by */}
        <p className=" text-[18px] font-[400] text-[#333]">
          Powered by{' '}
          <span className=" text-[#151515]">JEEVANJYOTI</span>
        </p>
      </div>
      
    </footer>
  );
}

export default Footer;
