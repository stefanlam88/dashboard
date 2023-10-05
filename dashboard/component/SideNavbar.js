"use client";
import React from "react";
import Head from "next/head";
import Script from "next/script";

function SideNavbar() {
  return (
    <>
      <Head>
        {/* Required meta tags */}
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {/* Title  */}
        <title>Taildash | Tailwind Dashboard Template</title>
        <meta name="description" content="Tailwind Dashboard Template" />
        {/* Development css (used in all pages) */}
        <link rel="stylesheet" id="stylesheet" href="src/css/style.css" />
        {/* Production css (used in all pages) */}
        {/* <link rel="stylesheet" href="dist/css/style.css"> */}
        {/*start::Customizer Stylesheets (Only for demo purpose)*/}
        <link rel="stylesheet" href="src/css/customizer.css" />
        {/*end::Customizer Stylesheets (Only for demo purpose)*/}
        {/* google font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Favicon  */}
        <link rel="icon" href="src/img/favicon.png" />
      </Head>
      
      <div className="font-sans text-base font-normal text-gray-600 dark:text-gray-400 dark:bg-gray-900">

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
