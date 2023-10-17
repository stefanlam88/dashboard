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
    

      <footer className="bg-white dark:bg-gray-800 p-6 shadow-sm absolute bottom-0 right-0">
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
          <div>
            
         
                       
          <div>
            
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
