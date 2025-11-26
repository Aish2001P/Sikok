
"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <>
      {/* HEADER */}
      <section className="fixed top-0 left-0 w-full bg-[#070707] z-50 shadow-sm lg:px-[60px] px-[20px] lg:pt-[20px] pt-[20px] lg:pb-[10px] pb-[10px]">
        <div className="flex justify-between items-center">
          <Link href="/">
            <Image
              src="/image/sikok.svg"
              className="lg:w-60 w-40"
              alt="Sikok"
              width={1830}
              height={1830}
            />
          </Link>

          <button
            onClick={() => setOpenMenu(true)}
            className="text-white uppercase lg:text-[2vw] text-[4vw] tracking-[3px]"
          >
            MENU
          </button>
        </div>
      </section>

      {/* FULLSCREEN MEGA MENU */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-black text-white z-[60] transition-all duration-500 
        ${openMenu ? "opacity-100 visible" : "opacity-0 invisible"}
        `}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={() => setOpenMenu(false)}
          className="absolute top-10 right-10 text-white text-sm tracking-[3px]"
        >
          CLOSE
        </button>

        {/* MENU CONTENT */}
        <div className="flex flex-col gap-10 h-full justify-center pl-[10vw] font-[bo]">
          <Link
            href="/about"
            className="lg:text-[9vw] text-[9vw] leading-none !text-[#fff]"
          >
            ABOUT
          </Link>

          <Link
            href="/contact"
            className="lg:text-[9vw] text-[9vw] leading-none !text-[#fff] lg:pt-10 pt-2"
          >
            CONTACT
          </Link>

          <Link
            href="/vip"
            className="lg:text-[9vw] text-[9vw] leading-none !text-[#fff] pt-10 lg:pt-10 pt-2"
          >
            VIP ACCESS
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
