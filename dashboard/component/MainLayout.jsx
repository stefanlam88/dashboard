"use client";
import React, { useContext } from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { FaAngleRight, FaCheck, FaCheckDouble , FaWpforms } from "react-icons/fa";
import { RxComponentBoolean } from "react-icons/rx";
import { RiPagesLine , RiLayout5Line } from "react-icons/ri";
import { TbLayoutDashboard } from "react-icons/tb";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { IoStatsChartSharp , IoDocumentTextOutline } from "react-icons/io5";
import { CgFolder } from "react-icons/cg";

import { TfiBag } from "react-icons/tfi";
import {CiViewTimeline } from "react-icons/ci";
import { BsCalendar4Week, BsShop , BsLayoutSidebarInset } from "react-icons/bs";
import { MenuContext } from "../context/MenuContext";
const MainLayout = ({ children }) => {
  const { open, toggle } = useContext(MenuContext);


  const closeSeideBarHandler = () => {
    toggle();
  };

  return (
    <div className=" w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">

        <aside
          className={`bg-white top-4 left-4 lg:fixed lg:block lg:top-16 lg:left-8 rounded-lg overflow-hidden transition-all duration-200 ${
            open ? "w-60 p-4 block fixed" : "w-0 hidden"
          } lg:w-60 lg:p-4 max-lg:z-20 shadow-sm`}
        >
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
            {/* menu */}
            <ul className="flex ltr:ml-auto rtl:mr-auto mt-2"></ul>
          </nav>

          {/* End Navbar */}
        </header>
        <div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 ${Menu.gap ? "mt-9" : "mt-2"} ${ index === 0 && "bg-light-white"} `}>
              <img src={`./src/assets/${Menu.src}.png`} />
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
          ))}
        </ul>
        
      </div>
        </div>
          <ul>
            <li className="flex justify-end items-center lg:hidden">
              <AiOutlineClose
                onClick={closeSeideBarHandler}
                className="text-red-500 hover:text-red-800 cursor-pointer"
              />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/" onClick={closeSeideBarHandler}>
                Home
              </Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome
                className="mr-2"
                style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>
                Dashboard
              </h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <BsCalendar4Week
                className="mr-2"
                style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>
                Calendar
              </h3>
              <FaAngleRight />
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <BsShop style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Ecommerce</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <TfiBag  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Projects</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <RiPagesLine  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Pages</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <RiLayout5Line  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Landing page</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <BsLayoutSidebarInset  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Layout</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <RxComponentBoolean  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Components</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <TbLayoutDashboard style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Widgets</h3>
              <FaAngleRight />
            </li>{" "}
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FaWpforms  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Forms</h3>
              <FaAngleRight />
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <MdOutlineLibraryBooks  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Content</h3>
                <FaAngleRight />
              </div>
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <IoStatsChartSharp  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Charts</h3>
                <FaAngleRight />
              </div>
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <CgFolder style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>File Manager</h3>
                <FaAngleRight />
              </div>
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <IoDocumentTextOutline  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Documentation</h3>
                <FaAngleRight />
              </div>
            </li><li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <CiViewTimeline  style={{ marginRight: "10px" }}
              />
              <h3 className="flex-1" style={{ paddingLeft: "10px" }}>Multi Level</h3>
                <FaAngleRight />
              </div>
            </li>
          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
