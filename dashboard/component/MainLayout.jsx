import React from "react";
import MainHeader from "./MainHeader";
import Link from "next/link";
import { AiOutlineHome, AiOutlineClose } from "react-icons/ai";
import { GrProjects } from "react-icons/gr";
import { FaAngleRight, FaCheck, FaCheckDouble } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { SiHelpscout, SiSinglestore } from "react-icons/si";
const MainLayout = ({ children }) => {
  return (
    <div className="bg-gray-700 w-screen min-h-screen">
      <MainHeader />
      <div className="flex justify-start items-start">
        <aside className="bg-white rounded-lg w-60 p-4">
          <ul>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <AiOutlineHome className="mr-2" />
              <Link href="/">Home</Link>
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <GrProjects className="mr-2" />
              <h3 className="flex-1">Projects</h3>
              <FaAngleRight />
            </li>

            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <FaCheck className="mr-2" />
                <h3 className="flex-1">Singular</h3>
                <FaAngleRight />
              </div>
             
            </li>
            <li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <FaCheckDouble className="mr-2" />
                <h3 className="flex-1">Complex</h3>
                <FaAngleRight />
              </div>
             
            </li><li className="flex flex-col justify-start items-start hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <div className="w-full flex flex-row justify-start items-center">
                <FaCheck className="mr-2" />
                <h3 className="flex-1">Singular</h3>
                <FaAngleRight />
              </div>
             
            </li>

            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <SiHelpscout className="mr-2" />
              <Link href="/about-us">About us</Link>
            </li>
            <li className="flex justify-start items-center hover:bg-blue-200 hover:text-blue-800 rounded-xl p-2">
              <FiPhoneCall className="mr-2" />
              <Link href="/contact-us">Contact us</Link>
            </li>

          </ul>
        </aside>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
};

export default MainLayout;
