import React from "react";
import { Link } from "react-router-dom";

const TeamMemberCard = ({ member }) => {
  return (
    <div
      className="
        group w-full overflow-hidden rounded-[24px]
        border border-gray-100 bg-white
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-[0_18px_45px_rgba(0,0,0,0.10)]
      "
    >
      {/* Image */}
      <div className="relative m-3 overflow-hidden rounded-[20px] bg-gray-100">
        <img
          src={member.image}
          alt={member.name}
          className="
            h-[300px] w-full object-cover object-top
            transition-transform duration-500
            group-hover:scale-[1.03]
          "
        />

        <div
          className="
            pointer-events-none absolute inset-x-0 bottom-0
            h-20 bg-gradient-to-t from-black/20 to-transparent
          "
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-5">

        {/* Name */}
        <h2 className="text-center text-[23px] font-bold leading-tight text-[#151515]">
          {member.name}
        </h2>

        {/* Designation */}
        <p className="mt-1 text-center text-[13px] font-medium text-[#777]">
          ({member.designation})
        </p>

        {/* Email */}
        <div className="mt-3 flex items-start gap-2">
          <svg
            className="mt-[2px] h-4 w-4 shrink-0 text-[#8B1E3F]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>

          <p className="break-all text-[12px] leading-5 text-[#666]">
            {member.email}
          </p>
        </div>

        {/* Description */}
        <p
          className="
            mt-4 overflow-hidden
            text-[12px] leading-[1.7] text-[#555]
            [display:-webkit-box]
            [-webkit-box-orient:vertical]
            [-webkit-line-clamp:3]
          "
        >
          {member.shortDescription}
        </p>

        {/* Read More */}
        <Link
          to={`/details/${member.id}`}
          className="
            mt-3 inline-flex items-center gap-1
            text-[12px] font-semibold text-[#8B1E3F]
            transition-all duration-200
            hover:gap-2
          "
        >
          Read More

          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default TeamMemberCard;