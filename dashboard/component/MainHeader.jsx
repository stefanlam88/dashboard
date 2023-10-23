"use client";
import React, { useContext, useState } from "react";

import { FaBars } from "react-icons/fa";
import { MenuContext } from "../context/MenuContext";
import { FaSearch, FaEnvelope, FaRegBell } from "react-icons/fa";
const MainHeader = () => {
  const [open, setOpen] = useState(false);

  const showProfile = () => {
    // alert("helloo")
    setOpen(!open);
  };

  const { toggle } = useContext(MenuContext);
  return (
    <div className="bg-white flex justify-between items-center px-10  h-12 mb-3  ">
      <div>
        {" "}
        <header>
          {/* Navbar */}
          <nav
            className="flex  text-gray-950 flex-row flex-nowrap items-center justify-between mt-0 py-4 px-15 border-b border-gray-200 bg-white dark:bg-white dark:border-white"
            id="desktop-menu"
          >
            {/* logo */}
            <a
              className="flex items-center py-2 mr-4 text-xl"
              href="../index.html"
            >
              <h2 className="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden">
                {/* <img className=-"inline-block w-7 h-auto ltr:mr-2 rtl:ml-2 -mt-1" src="../src/img/logo.png"> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="inline-block w-7 h-7 ltr:mr-2 rtl:ml-2 -mt-1"
                  viewBox="0 0 300.000000 300.000000"
                >
                  <g
                    transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
                    fill="currentColor"
                    stroke="none"
                  >
                    <path
                      className="text-pink-500"
                      d="M1225 2825 c-546 -115 -959 -534 -1065 -1080 -28 -147 -28 -373 0
          -520 81 -419 350 -774 728 -964 115 -58 120 -58 65 3 -27 29 -65 84 -85 122
          -68 131 -90 236 -89 428 0 229 44 470 167 923 41 149 74 275 74 278 0 4 -102
          5 -227 3 -198 -4 -236 -7 -290 -25 -35 -12 -63 -18 -63 -14 0 4 22 43 49 87
          58 93 123 157 177 175 22 6 124 14 234 16 l195 5 33 112 c91 305 200 431 405
          465 43 7 31 9 -73 9 -94 1 -152 -5 -235 -23z"
                    />
                    <path
                      className="text-indigo-500"
                      d="M1695 2763 c-48 -77 -122 -231 -179 -375 -25 -65 -46 -120 -46 -123
          0 -7 995 -6 1069 1 34 4 61 12 61 18 0 6 -30 46 -65 88 -170 201 -426 361
          -687 428 -110 29 -111 28 -153 -37z"
                    />
                    <path
                      className="text-indigo-500"
                      d="M2660 2104 c-33 -36 -54 -47 -120 -67 -21 -6 -256 -12 -595 -16
          l-560 -6 -51 -180 c-62 -215 -116 -445 -144 -608 -74 -435 -37 -655 124 -740
          62 -32 189 -30 274 5 174 72 337 212 410 353 l20 40 24 -50 c32 -70 32 -162
          -1 -229 -48 -97 -216 -250 -383 -347 -86 -51 -170 -85 -261 -109 l-69 -17 94
          -6 c469 -33 947 205 1214 605 229 342 291 790 163 1173 -24 70 -76 192 -94
          217 -10 16 -14 14 -45 -18z"
                    />
                  </g>
                </svg>
                <span className="text-gray-950 dark:text-gray-950">
                  Taildash
                </span>
              </h2>
            </a>
            <div className="flex items-center rounded-[5px]">
              <input
                type="text"
                className="bg-[#F8F9FC] h-[40px] border-solid border-2 border-[#000] mx-[10px] outline-black-900 pl-[13px] w-[330px] rounded-[8px] placeholder:text-[14px] leading-[20px] font-normal"
                placeholder="Search for..."
              />

              <div className="bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px] ">
              <div style={{ width: '5px' }}></div> 
                <FaSearch color="black" />
              </div>
            </div>
            <div className="flex items-center gap-[20px]">
              <div className="flex items-center gap-[25px] border-r-[1px] pr-[25px]">
              <div style={{ width: '300px' }}></div> 
                <FaRegBell />
                <div style={{ width: '15px' }}></div> 
                <FaEnvelope />
              </div>
              <div
                className="flex items-center gap-[30px] relative "
                onClick={showProfile}
              >
                <div style={{ width: '15px' }}></div> 
                <p>Douglas McGee</p>
                <div className="h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40">
                 
                </div>

                {open && (
                  <div className="bg-white border h-[120px] w-[150px] absolute bottom-[-135px] z-20 right-0 pt-[15px] pl-[15px] space-y-[10px]">
                    <p className="cursor-pointer hover:text-[blue] font-semibold">
                      Profile
                    </p>
                    <p className="cursor-pointer hover:text-[blue] font-semibold">
                      Settings
                    </p>
                    <p className="cursor-pointer hover:text-[blue] font-semibold">
                      Log out
                    </p>
                  </div>
                )}
              </div>
            </div>
            {/* menu */}
            <ul className="flex ltr:ml-auto rtl:mr-auto mt-2"></ul>
          </nav>
          {/* End Navbar */}
        </header>
      </div>
      <div onClick={toggle}>
        <FaBars className="cursor-pointer" />
      </div>
    </div>
  );
};
export default MainHeader;
