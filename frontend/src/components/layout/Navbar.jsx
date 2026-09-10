import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets, navLinks } from "../../constants/data";

const Navbar = () => {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLinkActive = (to) => {
    if (pathname === to) return true;

    if (
      to === "/ngo-for-disabled-children-in-lucknow" &&
      pathname === "/what-we-do"
    ) {
      return true;
    }

    if (
      to === "/our-services" &&
      (pathname === "/our-services" || pathname === "/services")
    ) {
      return true;
    }

    return false;
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      {/* ================= HEADER ================= */}
      <header className="h-[108.45px] w-full  bg-white font-poppins max-xl:h-[74px]">
        <div className="mx-auto h-full max-w-[1220px] px-5 max-xl:px-3">
          <div className="flex h-full w-full items-center justify-between">

            {/* ================= LOGO ================= */}
            <div className="flex w-[201.45px] items-center max-xl:w-auto">
              <Link to="/" onClick={closeMenu}>
                <img
                  src={assets.logo}
                  alt="JJSSS"
                  className="h-[70px] w-auto object-contain"
                />
              </Link>
            </div>

            {/* ================= RIGHT SIDE ================= */}
            <div className="flex h-full w-[978.55px] items-center justify-end max-xl:w-auto">

              {/* ================= DESKTOP NAV ================= */}
              <nav className="flex h-[77.8px] w-[720.6px] items-center justify-end pr-2.5 max-xl:hidden">
                {navLinks.map(({ label, to }) => {
                  const active = isLinkActive(to);

                  return (
                    <Link
                      key={label}
                      to={to}
                      className={`
                        flex
                        h-[69.75px]
                        items-center
                        px-[14px]
                        font-poppins
                        text-[14px]
                        font-normal
                        leading-normal
                        whitespace-nowrap
                        transition-colors
                        ${
                          active
                            ? "text-[#EE0979]"
                            : "text-black hover:text-[#EE0979]"
                        }
                      `}
                    >
                      {label}
                    </Link>
                  );
                })}
              </nav>

              {/* ================= DONATE BUTTON ================= */}
              <div className="h-[44.6px] w-[171.45px] pl-2.5 max-xl:hidden">
                <Link to="/donate">
                  <button
                    type="button"
                    className="
                      flex
                      h-full
                      w-[171.45px]
                      cursor-pointer
                      items-center
                      justify-center
                      rounded-full
                      bg-[#EE0979]
                      px-[35px]
                      py-[14px]
                      font-poppins
                      text-[15px]
                      font-normal
                      leading-normal
                      text-white
                      transition-colors
                      hover:bg-[#CE0066]
                    "
                  >
                    DONATE NOW
                  </button>
                </Link>
              </div>

              {/* ================= MOBILE MENU BUTTON ================= */}
              <button
                type="button"
                aria-label="Toggle navigation menu"
                aria-expanded={menuOpen}
                onClick={() => setMenuOpen((open) => !open)}
                className="
                  hidden
                  h-[26px]
                  w-[26px]
                  items-center
                  justify-center
                  bg-[#ED0875]
                  p-0
                  max-xl:flex
                "
              >
                <span className="flex flex-col gap-[3px]">
                  <span className="h-[2px] w-[11px] bg-white" />
                  <span className="h-[2px] w-[11px] bg-white" />
                  <span className="h-[2px] w-[11px] bg-white" />
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <div
          className={`
            absolute
            left-0
            right-0
            top-[74px]
            z-50
            border-b
            border-[#f4dce5]
            bg-white
            shadow-md
            xl:hidden
            ${menuOpen ? "block" : "hidden"}
          `}
        >
          <nav className="flex flex-col px-4 py-3 font-poppins">
            {navLinks.map(({ label, to }) => {
              const active = isLinkActive(to);

              return (
                <Link
                  key={label}
                  to={to}
                  onClick={closeMenu}
                  className={`
                    border-b
                    border-[#f4dce5]
                    px-2
                    py-3
                    text-[14px]
                    font-normal
                    last:border-b-0
                    ${
                      active
                        ? "text-[#EE0979]"
                        : "text-black hover:text-[#EE0979]"
                    }
                  `}
                >
                  {label}
                </Link>
              );
            })}

            {/* Mobile Donate */}
            <Link
              to="/donate"
              onClick={closeMenu}
              className="
                mt-3
                rounded-full
                bg-[#EE0979]
                px-5
                py-3
                text-center
                font-poppins
                text-[14px]
                font-normal
                text-white
              "
            >
              DONATE NOW
            </Link>
          </nav>
        </div>
      </header>

      {/* ================= BOTTOM TICKER ================= */}
      <div className="flex h-[31.3px]  border-b border-t border-[#f4dce5] w-full items-center justify-center  bg-white font-poppins max-xl:hidden">
        <div className="mx-auto h-full w-[1240px] px-5">
          <div className="grid h-full w-[1200px] grid-cols-2 items-center gap-[20px]">

            <div className="h-full w-[732.93px]">
              <aside className="h-full w-[285.85px] px-2.5">
                <marquee className="h-6 w-[265.85px] text-[14px]">
                  Panchsheel Abhinav Foundation
                </marquee>
              </aside>
            </div>

            <div className="h-full w-[447.08px]" />

          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;