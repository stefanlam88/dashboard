"use client";
import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure } from "@headlessui/react";
import {
  MdOutlineSpaceDashboard,
  MdOutlineAnalytics,
  MdOutlineIntegrationInstructions,
  MdOutlineMoreHoriz,
  MdOutlineSettings,
  MdOutlineLogout,
} from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { FaRegComments } from "react-icons/fa";
import { BiMessageSquareDots } from "react-icons/bi";

function SideNavbar() {
  return (
<>

    <header>
    <header class="text-gray-600 body-font">
  <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span class="ml-3 text-xl">Tailblocks</span>
    </a>
    <nav class="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
      <a class="mr-5 hover:text-gray-900">First Link</a>
      <a class="mr-5 hover:text-gray-900">Second Link</a>
      <a class="mr-5 hover:text-gray-900">Third Link</a>
      <a class="mr-5 hover:text-gray-900">Fourth Link</a>
    </nav>
    <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Button
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </button>
  </div>
</header>
    {/* Navbar */}
    <nav
      className="flex  text-gray-950 flex-row flex-nowrap items-center justify-between mt-0 py-4 px-15 border-b border-gray-200 bg-white dark:bg-white dark:border-white"
      id="desktop-menu"
    >
      
      {/* logo */}
      <a className="flex items-center py-2 mr-4 text-xl" href="../index.html">
        <h2 className="text-2xl font-semibold text-gray-200 px-4 max-h-9 overflow-hidden">
          {/* <img class="inline-block w-7 h-auto ltr:mr-2 rtl:ml-2 -mt-1" src="../src/img/logo.png"> */}
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
          <span className="text-gray-950 dark:text-gray-950">Taildash</span>
        </h2>
      </a>
      {/* menu */}
      <ul className="flex ltr:ml-auto rtl:mr-auto mt-2">
        <li className="relative">
          <a
            href="/login"
            className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
          >
            <div className="relative inline-block">Login</div>
          </a>
        </li>
        <li className="relative">
          <a
            href="/register"
            className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
          >
            <div className="relative inline-block">Register</div>
          </a>
        </li>
      </ul>
    </nav>
    {/* End Navbar */}
  </header>

    <div>
      <Disclosure as="nav">
        <Disclosure.Button className=" mx-35 px-24 md:w-0 absolute top-4 lg:w-full right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-10 w-10"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <body className="font-sas text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-900">
          <div x-data="{ open: false}" className="wrapper overflow-x-hidden bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40"></div>
          <div id="sidebar-menu" x-description="Mobile menu" ></div>
        </body>
        <main className="pt-20 -mt-2">
          <div className="mx-auto p-2">
            <div className="flex flex-wrap flex-row">
              <div className="flex-shrink max-w-full px-4 w-full  text-black"></div>
            </div>
          </div>
        
        <div className="p-6 lg:w-full h-screen z-20 fixed top-0 -left-96 lg:left-0 lg:w-full  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col bg-white justify-start item-center">
            <h1 className="text-base px-4 text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 h-full">
              Virtual Dashboard
            </h1>
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-20 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSpaceDashboard className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Dashboard
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <CgProfile className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Profile
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <FaRegComments className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Comments
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineAnalytics className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Analytics
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <BiMessageSquareDots className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Messages
                </h3>
              </div>
              <div className="flex  mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineIntegrationInstructions className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Integration
                </h3>
              </div>
            </div>
            {/* setting  */}
            <div className=" my-4 border-b border-gray-100 pb-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineSettings className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Settings
                </h3>
              </div>
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineMoreHoriz className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  More
                </h3>
              </div>
            </div>
            {/* logout */}
            <div className=" my-4">
              <div className="flex mb-2 justify-start items-center gap-4 pl-5 border border-gray-200  hover:bg-gray-900 p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto">
                <MdOutlineLogout className="text-2xl text-gray-600 group-hover:text-white " />
                <h3 className="text-base text-gray-800 group-hover:text-white font-semibold ">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
        </main>
      </Disclosure>
    </div>
    </>
  );
}

export default SideNavbar;
