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