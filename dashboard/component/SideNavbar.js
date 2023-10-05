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
  <footer></footer>
  
   
    </>
  )
}

export default SideNavbar;
