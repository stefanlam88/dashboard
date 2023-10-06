"use client";
import React from "react";
import Script from "next/script";
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
      <div>hii

      <Disclosure as="nav">
        <Disclosure.Button className=" mx-35 px-24 md:w-0 absolute top-4 lg:w-full right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-10 w-10"
            aria-hidden="true"
          />
        </Disclosure.Button>
        
        <main className="pt-20 -mt-2">
          <div className="mx-auto p-2">
            <div className="flex flex-wrap flex-row">
              <div className="flex-shrink max-w-full px-4 w-full  text-black"></div>
            </div>
          </div>
        
        <div className="p-60 lg:w-full h-screen z-20 fixed top-0 -left-96 lg:left-0 lg:w-full  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col bg-white justify-start item-center">
            
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

      <footer className="bg-white dark:bg-gray-800 p-6 shadow-sm">
        <div className="mx-auto">
          <div className="flex flex-wrap flex-row -mx-4">
            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right">
              {/* footer menu */}
              <ul className="ltr:pl-0 rtl:pr-0">
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Support
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Help Center
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Privacy
                  </a>
                </li>
                <li className="inline-block ltr:mr-3 rtl:ml-3">
                  <a className="hover:text-indigo-500" href="#">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-right md:rtl:text-left">
              {/* copyright text */}
              <p className="mb-0 mt-3 md:mt-0">
                <a href="index.html" className="hover:text-indigo-500">
                  Tailnet
                </a>
                | All right reserved
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Script src="vendors/alpinejs/dist/cdn.min.js"></Script>
      <Script src="vendors/flatpickr/dist/flatpickr.min.js"></Script>
      <Script src="vendors/flatpickr/dist/plugins/rangePlugin.js"></Script>
      <Script src="vendors/@yaireo/tagify/dist/tagify.min.js"></Script>
      <Script src="vendors/pristinejs/dist/pristine.min.js"></Script>
      <Script src="vendors/simple-datatables/dist/umd/simple-datatables.js"></Script>
      <Script src="dist/js/scripts.js"></Script>
      <Script src="src/js/demo.js"></Script>
      <Script src="vendors/chart.js/dist/chart.min.js"></Script>
      <Script src="src/js/chart/cms.js"></Script>
      <Script src="vendors/jsvectormap/dist/js/jsvectormap.min.js"></Script>
      <Script src="vendors/jsvectormap/dist/maps/world.js"></Script>
      <Script src="src/js/vendor.js"></Script>
      <Script src="src/js/customizer.js"></Script>
    </>
  );
}

export default SideNavbar;
