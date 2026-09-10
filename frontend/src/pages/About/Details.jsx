import React from "react";
import { useParams } from "react-router-dom";
import { members } from "../../constants/data";
import { HiOutlineMail } from "react-icons/hi";

function Details() {
  const { id } = useParams();

  const member = members[id] || members[1];

  return (
    <section className="w-full bg-white pb-[80px]">
      <div className="mx-auto w-full max-w-[1212px] px-4 md:px-0">

        <div className="home-profile-layout mt-[40px] flex items-start max-md:mt-8 max-md:flex-col">

          {/* ================= IMAGE ================= */}
          <div className="h-[660.23px] w-[489.06px] shrink-0 overflow-hidden rounded-2xl max-md:h-auto max-md:w-full">
            <img
              src={member.image}
              alt={member.name}
              className="block h-[660.23px] w-[489.06px] rounded-2xl object-cover max-md:h-auto max-md:w-full"
            />
          </div>

          {/* ================= CONTENT ================= */}
          <div className="ml-[33px] w-[550px] shrink-0 max-md:ml-0 max-md:mt-8 max-md:w-full">

            {/* Name */}
            <h2 className="text-[40px] font-bold leading-[1.2] tracking-[-0.5px] text-[#151515] max-md:text-[32px]">
              {member.name}
            </h2>

            {/* Designation */}
            <p className="mt-[4px] max-w-[520px] text-[18px] font-normal leading-[1.55] text-[#555] max-md:text-[16px]">
              {member.designation}
            </p>

            {/* Email */}
            <div className="mt-[18px] inline-flex items-center gap-3.5 rounded-lg bg-[#f7f7f7] px-3 py-2 text-[16px] text-[#333]">
              <HiOutlineMail className="text-[20px] text-[#8B1E3F]" />
              <span>{member.email}</span>
            </div>

            {/* Small divider */}
            <div className="my-[15px] h-px w-full bg-[#e9e9e9]" />

            {/* Description */}
            <div className="text-[16.3px] font-normal leading-[1.65] text-[#333] max-md:text-[15px]">
              {member.description}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default Details;