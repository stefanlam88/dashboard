"use client"
export default function forgot(){
    <>

  {/* Required meta tags */}
  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  {/* Title  */}
  <title>Taildash | Tailwind Admin Template</title>
  <meta name="description" content="Tailwind Admin Template" />
  {/* Development css (used in all pages) */}
  <link rel="stylesheet" id="stylesheet" href="../src/css/style.css" />
  {/* Production css (used in all pages) */}
  {/* <link rel="stylesheet" href="../dist/css/style.css"> */}
  {/*start::Vendor Stylesheets (only on this page)*/}
  <link rel="stylesheet" href="../src/css/customizer.css" />
  {/*end::Vendor Stylesheets (only on this page)*/}
  {/* google font */}
  <link
    href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
    rel="stylesheet"
  />
  {/* Favicon  */}
  <link rel="icon" href="../src/img/favicon.png" />
  {/* preloader */}
  <div className="preloader loaded-success fixed inset-0 bg-gray-100 dark:bg-gray-900">
    <div className="absolute left-1/2 top-1/2 transform -translate-y-1/2">
      <div className="relative mx-auto my-12">
        <div className="inline-block">
          <svg
            className="animate-spin h-8 w-8 text-indigo-500"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx={12}
              cy={12}
              r={10}
              stroke="currentColor"
              strokeWidth={4}
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
          {/* <i class="text-3xl text-indigo-500 fas fa-circle-notch fa-spin"></i> */}
        </div>
      </div>
    </div>
  </div>
  <header>
    {/* Navbar */}
    <nav
      className="flex flex-row flex-nowrap items-center justify-between mt-0 py-4 px-6 border-b border-gray-200 bg-white dark:bg-gray-800 dark:border-gray-800"
      id="desktop-menu"
    >
      {/* logo */}
      <a className="flex items-center py-2 mr-4 text-xl" href="../page.js">
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
          <span className="text-gray-700 dark:text-gray-200">Taildash</span>
        </h2>
      </a>
      {/* menu */}
      <ul className="flex ltr:ml-auto rtl:mr-auto mt-2">
        <li className="relative">
          <a
            href="login-basic.js"
            className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
          >
            <div className="relative inline-block">Login</div>
          </a>
        </li>
        <li className="relative">
          <a
            href="register-basic.js"
            className="py-3 px-4 flex hover:text-indigo-500 focus:outline-none"
          >
            <div className="relative inline-block">Register</div>
          </a>
        </li>
      </ul>
    </nav>
    {/* End Navbar */}
  </header>
  <main>
    {/* =========={ login }==========  */}
    <div
      id="login-area"
      className="relative py-12 bg-gray-100 dark:bg-gray-900 dark:bg-opacity-40"
    >
      <div className="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {/* login form */}
          <div className="max-w-full w-full md:w-2/3 lg:w-1/2 px-6 sm:px-12">
            <div className="relative">
              <div className="p-6 sm:py-8 sm:px-12 rounded-lg bg-white dark:bg-gray-800 shadow-xl">
                <form id="login-form">
                  <h1 className="text-2xl leading-normal mb-6 font-bold text-gray-800  dark:text-gray-300 text-center">
                    Reset Password
                  </h1>
                  <hr className="block w-12 h-0.5 mx-auto my-5 bg-gray-700 border-gray-700" />
                  <p className="text-gray-500 mb-6">
                    Enter your email address and we'll send you an email with
                    instructions to reset your password.
                  </p>
                  <div className="mb-6">
                    <input
                      name="email"
                      className="w-full leading-5 relative py-2 px-4 rounded text-gray-800 bg-white border border-gray-300 overflow-x-auto focus:outline-none focus:border-gray-400 focus:ring-0 dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700 dark:focus:border-gray-600"
                      placeholder="Email address"
                      defaultValue=""
                      aria-label="email"
                      type="email"
                      required=""
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="py-2 px-4 inline-block text-center mb-3 rounded leading-5 text-gray-100 bg-indigo-500 border border-indigo-500 hover:text-white hover:bg-indigo-600 hover:ring-0 hover:border-indigo-600 focus:bg-indigo-600 focus:border-indigo-600 focus:outline-none focus:ring-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        className="inline-block w-4 h-4 ltr:mr-2 rtl:ml-2 bi bi-key"
                        viewBox="0 0 16 16"
                      >
                        <path d="M0 8a4 4 0 0 1 7.465-2H14a.5.5 0 0 1 .354.146l1.5 1.5a.5.5 0 0 1 0 .708l-1.5 1.5a.5.5 0 0 1-.708 0L13 9.207l-.646.647a.5.5 0 0 1-.708 0L11 9.207l-.646.647a.5.5 0 0 1-.708 0L9 9.207l-.646.647A.5.5 0 0 1 8 10h-.535A4 4 0 0 1 0 8zm4-3a3 3 0 1 0 2.712 4.285A.5.5 0 0 1 7.163 9h.63l.853-.854a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.793-.793-1-1h-6.63a.5.5 0 0 1-.451-.285A3 3 0 0 0 4 5z" />
                        <path d="M4 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                      </svg>
                      Reset Password
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* End login */}
  </main>
  <footer className="bg-white p-6 border-t border-gray-200 dark:bg-gray-800 dark:border-gray-800">
    <div className="mx-auto px-4">
      <div className="flex flex-wrap flex-row -mx-4">
        <div className="flex-shrink max-w-full px-4 w-full md:w-1/2 text-center md:ltr:text-left md:rtl:text-right">
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
          <p className="mb-0 mt-3 md:mt-0">
            <a href="../page.js" className="hover:text-indigo-500">
              Tailnet
            </a>{" "}
            | All right reserved
          </p>
        </div>
      </div>
    </div>
  </footer>
  {/*start::Global javascript (used in all pages)*/}
  {/* core js */}
  {/* input date */}
  {/* input range date */}
  {/* input tags */}
  {/* form validation */}
  {/*sort table*/}
  {/*end::Global javascript (used in all pages)*/}
  {/* Minify Global javascript (for production purpose) */}
  {/*  */}
  {/*start::Demo javascript ( initialize global javascript )*/}
  {/*start::Customizer js ( Only for demo purpose )*/}
</>

}