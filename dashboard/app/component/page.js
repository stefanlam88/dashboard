
export default function Component() {
    return (
        <>
    //

            Template Name: Taildash - Tailwind Dashboard Admin Template
            Author: Aribudin
            Website: https://www.tailwinddashboard.com
            Contact: support@tailwinddashboard.com
            Purchase: https://themes.tailwindtemplate.net/taildash
            License: You must have a valid license purchased only from official store (the above link) in order to legally use the theme for your project.

            doctype html
            html(lang='en', dir='ltr')
            head
            //  Required meta tags 
            meta(charset='UTF-8')
            meta(http-equiv='X-UA-Compatible', content='IE=edge')
            meta(name='viewport', content='width=device-width,initial-scale=1,shrink-to-fit=no')
            //  Title  
            title Taildash | Tailwind Dashboard Template
            meta(name='description', content='Tailwind Dashboard Template')
            //  Development css (used in all pages) 
            link#stylesheet(rel='stylesheet', href='src/css/style.css')
		//  Production css (used in all pages)
		//  <link rel="stylesheet" href="dist/css/style.css">
		// start::Customizer Stylesheets (Only for demo purpose)
                link(rel='stylesheet', href='src/css/customizer.css')
                // end::Customizer Stylesheets (Only for demo purpose)
                //  google font 
                link(href='https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap', rel='stylesheet')
                //  Favicon  
                link(rel='icon', href='src/img/favicon.png')
                body.font-sans.text-base.font-normal.text-gray-600.dark:text-gray-400.dark:bg-gray-900
                //  wrapper 
                a.relative(href='#')
                h2.text-2xl.font-semibold.text-gray-200.px-4.max-h-9.overflow-hidden.hidden-compact
				//  <img class="inline-block w-7 h-auto ltr:mr-2 rtl:ml-2 -mt-1" src="src/img/logo.png">
                    svg.inline-block.w-7.h-7.ltr:mr-2.rtl:ml-2.-mt-1(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 300.000000 300.000000')
                    g(transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)', fill='currentColor', stroke='none')
                    path.text-pink-500(d='M1225 2825 c-546 -115 -959 -534 -1065 -1080 -28 -147 -28 -373 0
                    -520 81 -419 350 -774 728 -964 115 -58 120 -58 65 3 -27 29 -65 84 -85 122
                    -68 131 -90 236 -89 428 0 229 44 470 167 923 41 149 74 275 74 278 0 4 -102
                    5 -227 3 -198 -4 -236 -7 -290 -25 -35 -12 -63 -18 -63 -14 0 4 22 43 49 87
                    58 93 123 157 177 175 22 6 124 14 234 16 l195 5 33 112 c91 305 200 431 405
                    465 43 7 31 9 -73 9 -94 1 -152 -5 -235 -23z')
                    path.text-indigo-500(d='M1695 2763 c-48 -77 -122 -231 -179 -375 -25 -65 -46 -120 -46 -123
                    0 -7 995 -6 1069 1 34 4 61 12 61 18 0 6 -30 46 -65 88 -170 201 -426 361
                    -687 428 -110 29 -111 28 -153 -37z')
                    path.text-indigo-500(d='M2660 2104 c-33 -36 -54 -47 -120 -67 -21 -6 -256 -12 -595 -16
                    l-560 -6 -51 -180 c-62 -215 -116 -445 -144 -608 -74 -435 -37 -655 124 -740
                    62 -32 189 -30 274 5 174 72 337 212 410 353 l20 40 24 -50 c32 -70 32 -162
                    -1 -229 -48 -97 -216 -250 -383 -347 -86 -51 -170 -85 -261 -109 l-69 -17 94
                    -6 c469 -33 947 205 1214 605 229 342 291 790 163 1173 -24 70 -76 192 -94
                    217 -10 16 -14 14 -45 -18z')
                    span.text-gray-700.dark:text-gray-200 Taildash
                    h2.text-3xl.font-semibold.mx-auto.logo-compact.hidden
				//  <img class="inline-block w-7 h-auto -mt-1" src="src/img/logo.png">
                        svg.inline-block.w-7.h-7.-mt-1(xmlns='http://www.w3.org/2000/svg', viewBox='0 0 300.000000 300.000000')
                        g(transform='translate(0.000000,300.000000) scale(0.100000,-0.100000)', fill='currentColor', stroke='none')
                        path.text-pink-500(d='M1225 2825 c-546 -115 -959 -534 -1065 -1080 -28 -147 -28 -373 0
                        -520 81 -419 350 -774 728 -964 115 -58 120 -58 65 3 -27 29 -65 84 -85 122
                        -68 131 -90 236 -89 428 0 229 44 470 167 923 41 149 74 275 74 278 0 4 -102
                        5 -227 3 -198 -4 -236 -7 -290 -25 -35 -12 -63 -18 -63 -14 0 4 22 43 49 87
                        58 93 123 157 177 175 22 6 124 14 234 16 l195 5 33 112 c91 305 200 431 405
                        465 43 7 31 9 -73 9 -94 1 -152 -5 -235 -23z')
                        path.text-indigo-500(d='M1695 2763 c-48 -77 -122 -231 -179 -375 -25 -65 -46 -120 -46 -123
                        0 -7 995 -6 1069 1 34 4 61 12 61 18 0 6 -30 46 -65 88 -170 201 -426 361
                        -687 428 -110 29 -111 28 -153 -37z')
                        path.text-indigo-500(d='M2660 2104 c-33 -36 -54 -47 -120 -67 -21 -6 -256 -12 -595 -16
                        l-560 -6 -51 -180 c-62 -215 -116 -445 -144 -608 -74 -435 -37 -655 124 -740
                        62 -32 189 -30 274 5 174 72 337 212 410 353 l20 40 24 -50 c32 -70 32 -162
                        -1 -229 -48 -97 -216 -250 -383 -347 -86 -51 -170 -85 -261 -109 l-69 -17 94
                        -6 c469 -33 947 205 1214 605 229 342 291 790 163 1173 -24 70 -76 192 -94
                        217 -10 16 -14 14 -45 -18z')
                        //  Sidebar menu 
                        ul#side-menu.w-full.float-none.flex.flex-col.font-medium.ltr:pl-1.5.rtl:pr-1.5(x-data='{selected:1}')
			//  dropdown
			//  <i class="ltr:mr-2 rtl:ml-2 fas fa-home"></i>
                        span Dashboards
                        //  caret 
                        span.inline-block.ltr:float-right.rtl:float-left
				//  <i class="transform transition duration-300 fas fa-chevron-down" :class="{'rotate-0': selected == 1, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 1) }"></i>
			//  dropdown menu
                    ul.block.rounded.rounded-t-none.top-full.z-50.ltr:pl-7.rtl:pr-7.py-0.5.ltr:text-left.rtl:text-right.mb-1.font-normal(x-show='selected == 1', x-transition:enter='transition-all duration-200 ease-out', x-transition:enter-start='transform opacity-0 scale-95', x-transition:enter-end='transform opacity-100 scale-100')
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index.html') CMS
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-analytics.html') Analytics
                    li.relative
                    a.text-indigo-500.dark:text-gray-300.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-ecommerce.html') Ecommerce
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-projects.html') Projects
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-crm.html') CRM
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-hosting.html') Hosting
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-saas.html') Saas
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-sales.html') Sales
                    li.relative
                    a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='index-marketing.html') Marketing
                    li
                    a.block.py-2.5.px-6.hover:text-indigo-500.dark:hover:text-gray-300(href='calendar.html')
                    svg.inline-block.h-4.w-4.ltr:mr-2.rtl:ml-2.bi.bi-calendar4-week(xmlns='http://www.w3.org/2000/svg', fill='currentColor', viewBox='0 0 16 16')
                    path(d='M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z')
                    path(d='M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-2 3a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1zm-3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z')
					//  <i class="mr-2 fas fa-calendar-alt"></i>
                    span Calendar
                    //  dropdown 
                    li.relative
                    a.block.py-2.5.px-6.hover:text-indigo-500.dark:hover:text-gray-300(:class='{ \'text-indigo-500 dark:text-gray-300\': selected == 2 }', @click='selected !== 2 ? selected = 2 : selected = null', href='javascript:;')
                    svg.inline-block.h-4.w-4.ltr:mr-2.rtl:ml-2.bi.bi-shop(xmlns='http://www.w3.org/2000/svg', fill='currentColor', viewBox='0 0 16 16')
                    path(d='M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h1v-5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v5h6V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zM4 15h3v-5H4v5zm5-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3zm3 0h-2v3h2v-3z')
					//  <i class="mr-2 fas fa-store"></i>
                    span Ecommerce
                    //  caret 
                    | 
fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>


					//  <i class="transform transition duration-300 fas fa-chevron-down" :class="{'rotate-0': selected == 2, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 2) }"></i>
				//  dropdown menu
                ul.block.rounded.rounded-t-none.top-full.z-50.ltr:pl-7.rtl:pr-7.py-0.5.ltr:text-left.rtl:text-right.mb-1.font-normal(x-show='selected == 2', x-transition:enter='transition-all duration-200 ease-out', x-transition:enter-start='transform opacity-0 scale-95', x-transition:enter-end='transform opacity-100 scale-100')
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/product.html') Products
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/product-detail.html') Product Details
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/order.html') Orders
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/order-detail.html') Order Details
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/customers.html') Customers
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/cart.html') Shopping Cart
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/checkout.html') Checkout
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/seller.html') Sellers
                li.relative
                a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='ecommerce/invoice.html') Invoice
                //  dropdown 
                li.relative
                a.block.py-2.5.px-6.hover:text-indigo-500.dark:hover:text-gray-300(:class='{ \'text-indigo-500 dark:text-gray-300\': selected == 3 }', @click='selected !== 3 ? selected = 3 : selected = null', href='javascript:;')
                svg.inline-block.h-4.w-4.ltr:mr-2.rtl:ml-2.bi.bi-briefcase(xmlns='http://www.w3.org/2000/svg', fill='currentColor', viewBox='0 0 16 16')
                path(d='M6.5 1A1.5 1.5 0 0 0 5 2.5V3H1.5A1.5 1.5 0 0 0 0 4.5v8A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-8A1.5 1.5 0 0 0 14.5 3H11v-.5A1.5 1.5 0 0 0 9.5 1h-3zm0 1h3a.5.5 0 0 1 .5.5V3H6v-.5a.5.5 0 0 1 .5-.5zm1.886 6.914L15 7.151V12.5a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5V7.15l6.614 1.764a1.5 1.5 0 0 0 .772 0zM1.5 4h13a.5.5 0 0 1 .5.5v1.616L8.129 7.948a.5.5 0 0 1-.258 0L1 6.116V4.5a.5.5 0 0 1 .5-.5z')
					//  <i class="mr-2 fas fa-suitcase"></i>
                span Projects
                //  caret 
                span.inline-block.ltr:float-right.rtl:float-left
                svg.transform.transition.duration-300.mt-1.5.bi.bi-chevron-down(xmlns='http://www.w3.org/2000/svg', fill='currentColor', :class='{ \'rotate-0\': selected == 3, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 3) }', width='.8rem', height='.8rem', viewBox='0 0 16 16')
                path(fill-rule='evenodd', d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
						//  <i class="transform transition duration-300 fas fa-chevron-down" :class="{'rotate-0': selected == 3, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 3) }"></i>
				//  dropdown menu
            ul.block.rounded.rounded-t-none.top-full.z-50.ltr:pl-7.rtl:pr-7.py-0.5.ltr:text-left.rtl:text-right.mb-1.font-normal(x-show='selected == 3', x-transition:enter='transition-all duration-200 ease-out', x-transition:enter-start='transform opacity-0 scale-95', x-transition:enter-end='transform opacity-100 scale-100')
            li.relative
            a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='project/list.html') List
            li.relative
            a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='project/detail.html') Detail
            li.relative
            a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='project/kanban.html') Kanban
            li.relative
            a.block.w-full.py-2.px-6.clear-both.whitespace-nowrap.hover:text-indigo-500.dark:hover:text-gray-300(href='project/create.html') Create
            //  dropdown 
            li.relative
            a.block.py-2.5.px-6.hover:text-indigo-500.dark:hover:text-gray-300(:class='{ \'text-indigo-500 dark:text-gray-300\': selected == 4 }', @click='selected !== 4 ? selected = 4 : selected = null', href='javascript:;')
            svg.inline-block.h-4.w-4.ltr:mr-2.rtl:ml-2.bi.bi-file-earmark-richtext(xmlns='http://www.w3.org/2000/svg', fill='currentColor', viewBox='0 0 16 16')
            path(d='M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z')
            path(d='M4.5 12.5A.5.5 0 0 1 5 12h3a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm0-2A.5.5 0 0 1 5 10h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.639-3.708 1.33.886 1.854-1.855a.25.25 0 0 1 .289-.047l1.888.974V8.5a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V8s1.54-1.274 1.639-1.208zM6.25 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5z')
					//  <i class="mr-2 fas fa-file"></i>
            span Pages
            //  caret 
            span.inline-block.ltr:float-right.rtl:float-left
            svg.transform.transition.duration-300.mt-1.5.bi.bi-chevron-down(xmlns='http://www.w3.org/2000/svg', fill='currentColor', :class='{ \'rotate-0\': selected == 4, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 4) }', width='.8rem', height='.8rem', viewBox='0 0 16 16')
            path(fill-rule='evenodd', d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
						//  <i class="transform transition duration-300 fas fa-chevron-down" :class="{'rotate-0': selected == 4, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 4) }"></i >
        //  dropdown menu 
        ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 4', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative(x - data='{ open: false }', @keydown.escape.stop = 'open = false', @click.away = 'open = false')
						a#auth.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(@click = 'open = !open', aria - haspopup='true', x - bind: aria - expanded='open', href = 'javascript:;')
        |
        Authentication

    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': open, \'ltr:-rotate-90 rtl:rotate-90\': !open }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': open, 'ltr:-rotate-90 rtl:rotate-90': !open }"></i> 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='open', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', role = 'menu', aria - orientation='vertical', aria - labelledby='auth')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/register-basic.html') Register basic
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/register-cover.html') Register cover
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/register-ilustration.html') Register ilustration
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/login-basic.html') Login basic
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/login-cover.html') Login cover
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/login-ilustration.html') Login ilustration
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/forgot-password.html') Forgot password
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/confirm-email.html') Confirm email
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/change-password.html') Change password
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'authentication/logout-page.html') Logout page
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-profile.html') Profile
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-service.html') Services
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-faq.html') Faq
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-pricing.html') Pricing
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-maintenance.html') Maintenance
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-404.html') 404
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'pages-starter.html') Starter
    li
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'landing.html')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - window - sidebar(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M2.5 4a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1zm2-.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm1 .5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1z')
    path(d = 'M2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v2H1V3a1 1 0 0 1 1-1h12zM1 13V6h4v8H2a1 1 0 0 1-1-1zm5 1V6h9v7a1 1 0 0 1-1 1H6z')
					//  <i class="mr-2 fas fa-window-maximize"></i> 
					span Landing page
    //  dropdown 
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500 dark:text-gray-300\': selected == 5 }', @click = 'selected !== 5 ? selected = 5 : selected = null', href = 'javascript:;')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - layout - sidebar - inset(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M14 2a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h12zM2 1a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2z')
    path(d = 'M3 4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4z')
					//  <i class="mr-2 fas fa-columns"></i> 
					span Layout
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': selected == 5, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 5) }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': selected == 5, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 5) }"></i> 
    //  dropdown menu 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 5', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'layout-sidedark.html') Side Dark
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'layout-dark.html') Dark mode
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'layout-rtl.html') RTL mode
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'layout-compact.html') Compact
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'layout-topnav.html') Top Navbar
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'layout-preloader.html') Preloader
    //  dropdown 
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500 dark:text-gray-300\': selected == 6 }', @click = 'selected !== 6 ? selected = 6 : selected = null', href = 'javascript:;')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - layers(xmlns = 'http://www.w3.org/2000/svg', width = '16', height = '16', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8.235 1.559a.5.5 0 0 0-.47 0l-7.5 4a.5.5 0 0 0 0 .882L3.188 8 .264 9.559a.5.5 0 0 0 0 .882l7.5 4a.5.5 0 0 0 .47 0l7.5-4a.5.5 0 0 0 0-.882L12.813 8l2.922-1.559a.5.5 0 0 0 0-.882l-7.5-4zm3.515 7.008L14.438 10 8 13.433 1.562 10 4.25 8.567l3.515 1.874a.5.5 0 0 0 .47 0l3.515-1.874zM8 9.433 1.562 6 8 2.567 14.438 6 8 9.433z')
					//  <i class="mr-2 fas fa-layer-group"></i> 
					span Components
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': selected == 6, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 6) }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': selected == 6, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 6) }"></i> 
    //  dropdown menu 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 6', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/accordion.html') Accordion
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/alerts.html') Alerts
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/avatar.html') Avatar
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/badge.html') Badge
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/breadcrumb.html') Breadcrumb
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/buttons.html') Buttons
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/card.html') Card
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/carousel.html') Carousel
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/collapse.html') Collapse
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/devices.html') Devices
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/dropdowns.html') Dropdowns
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/grid.html') Grid
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/list-group.html') List Group
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/lightbox.html') Lightbox
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/map.html') Map
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/modal.html') Modal
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/navbar.html') Navbar
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/notification.html') Notification
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/offcanvas.html') Offcanvas
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/pagination.html') Pagination
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/popovers.html') Popovers
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/progress.html') Progress
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/ribbon.html') Ribbon
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/scrollbar.html') Scrollbar
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/spinners.html') Spinners
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/sweetalert.html') Sweet alert
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/tabs.html') Tabs
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'components/tooltips.html') Tooltips
    li
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'widgets.html')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - columns - gap(xmlns = 'http://www.w3.org/2000/svg', width = '16', height = '16', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M6 1v3H1V1h5zM1 0a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1H1zm14 12v3h-5v-3h5zm-5-1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5zM6 8v7H1V8h5zM1 7a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H1zm14-6v7h-5V1h5zm-5-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1h-5z')
					//  <i class="mr-2 fas fa-window-maximize"></i> 
					span Widgets
    //  dropdown 
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500 dark:text-gray-300\': selected == 7 }', @click = 'selected !== 7 ? selected = 7 : selected = null', href = 'javascript:;')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - card - list(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z')
    path(d = 'M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z')
					//  <i class="mr-2 fas fa-list-alt"></i> 
					span Forms
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': selected == 7, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 7) }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': selected == 7, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 7) }"></i> 
    //  dropdown menu 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 7', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/basic.html') Basic Form
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/datepicker.html') Datepicker
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/editor.html') Editor
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/input-tags.html') Input tags
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/uploader.html') Uplader
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/validation.html') Validation
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'forms/layout.html') Layout
    //  dropdown 
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500 dark:text-gray-300\': selected == 8 }', @click = 'selected !== 8 ? selected = 8 : selected = null', href = 'javascript:;')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - blockquote - right(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M2.5 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1h-6zm0 3a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1h-11zm10.113-5.373a6.59 6.59 0 0 0-.445-.275l.21-.352c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.326-.182.569-.182h.281a1.686 1.686 0 0 0-.123-.498 1.379 1.379 0 0 0-.252-.37 1.94 1.94 0 0 0-.346-.298zm-2.168 0A6.59 6.59 0 0 0 10 6.352L10.21 6c.122.074.272.17.452.287.18.117.35.26.51.428.156.164.289.351.398.562.11.207.164.438.164.692 0 .36-.072.65-.216.873-.145.219-.385.328-.721.328-.215 0-.383-.07-.504-.211a.697.697 0 0 1-.188-.463c0-.23.07-.404.211-.521.137-.121.327-.182.569-.182h.281a1.749 1.749 0 0 0-.117-.492 1.402 1.402 0 0 0-.258-.375 1.94 1.94 0 0 0-.346-.3z')
					//  <i class="mr-2 fas fa-file-alt"></i> 
					span Content
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': selected == 8, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 8) }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': selected == 8, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 8) }"></i> 
    //  dropdown menu 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 8', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'content/typography.html') Typography
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'content/tables.html') Tables
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'content/images.html') Images
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'content/embed-video.html') Embed video
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'content/icons.html') Icons
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'charts.html')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - bar - chart - line(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M11 2a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v12h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1v-3a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v3h1V7a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v7h1V2zm1 12h2V2h-2v12zm-3 0V7H7v7h2zm-5 0v-3H2v3h2z')
					//  <i class="mr-2 fas fa-chart-bar"></i> 
					span Charts
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'file-manager.html')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - folder(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M.54 3.87.5 3a2 2 0 0 1 2-2h3.672a2 2 0 0 1 1.414.586l.828.828A2 2 0 0 0 9.828 3h3.982a2 2 0 0 1 1.992 2.181l-.637 7A2 2 0 0 1 13.174 14H2.826a2 2 0 0 1-1.991-1.819l-.637-7a1.99 1.99 0 0 1 .342-1.31zM2.19 4a1 1 0 0 0-.996 1.09l.637 7a1 1 0 0 0 .995.91h10.348a1 1 0 0 0 .995-.91l.637-7A1 1 0 0 0 13.81 4H2.19zm4.69-1.707A1 1 0 0 0 6.172 2H2.5a1 1 0 0 0-1 .981l.006.139C1.72 3.042 1.95 3 2.19 3h5.396l-.707-.707z')
					//  <i class="mr-2 fas fa-folder"></i> 
					span File Manager
    //  dropdown 
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500 dark:text-gray-300\': selected == 9 }', @click = 'selected !== 9 ? selected = 9 : selected = null', href = 'javascript:;')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - file - text(xmlns = 'http://www.w3.org/2000/svg', width = '16', height = '16', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M5 4a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm-.5 2.5A.5.5 0 0 1 5 6h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zM5 8a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zm0 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1H5z')
    path(d = 'M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z')
					//  <i class="mr-2 fas fa-book"></i> 
					span Documentation
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': selected == 9, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 9) }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': selected == 9, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 9) }"></i> 
    //  dropdown menu 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 9', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'docs/introduction.html') Introduction
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'docs/tools.html') Tools
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'docs/customize.html') Customize
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'docs/rtl.html') RTL Direction
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'docs/credits.html') Credits
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = 'docs/changelog.html') Changelog
    //  dropdown 
    li.relative
    a.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500 dark:text-gray-300\': selected == 10 }', @click = 'selected !== 10 ? selected = 10 : selected = null', href = 'javascript:;')
    svg.inline - block.h - 4.w - 4.ltr: mr - 2.rtl: ml - 2.bi.bi - list - nested(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M4.5 11.5A.5.5 0 0 1 5 11h10a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm-2-4A.5.5 0 0 1 1 3h10a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5z')
					//  <i class="mr-2 fas fa-stream"></i> 
					span Multi Level
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': selected == 10, \'ltr:-rotate-90 rtl:rotate-90\': !(selected == 10) }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': selected == 10, 'ltr:-rotate-90 rtl:rotate-90': !(selected == 10) }"></i> 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='selected == 10', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100')
    li.relative(x - data='{ open: false }', @keydown.escape.stop = 'open = false', @click.away = 'open = false')
						a#mobiledrop - 91.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500\': open }', @click = 'open = !open', aria - haspopup='true', x - bind: aria - expanded='open', href = 'javascript:;')
        |
        Second Level

    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': open, \'ltr:-rotate-90 rtl:rotate-90\': !open }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': open, 'ltr:-rotate-90 rtl:rotate-90': !open }"></i> 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='open', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', role = 'menu', aria - orientation='vertical', aria - labelledby='mobiledrop-91')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = '#') Item 1
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = '#') Item 2
    li.relative(x - data='{ open: false }', @keydown.escape.stop = 'open = false', @click.away = 'open = false')
						a#mobiledrop - 92.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500\': open }', @click = 'open = !open', aria - haspopup='true', x - bind: aria - expanded='open', href = 'javascript:;')
        |
        Third Level

    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': open, \'ltr:-rotate-90 rtl:rotate-90\': !open }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': open, 'ltr:-rotate-90 rtl:rotate-90': !open }"></i> 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='open', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', role = 'menu', aria - orientation='vertical', aria - labelledby='mobiledrop-92')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = '#') Item 1
    li.relative(x - data='{ open: false }', @keydown.escape.stop = 'open = false', @click.away = 'open = false')
								a#mobiledrop - 93.block.py - 2.5.px - 6.hover: text - indigo - 500.dark: hover: text - gray - 300(: class= '{ \'text-indigo-500\': open }', @click = 'open = !open', aria - haspopup='true', x - bind: aria - expanded='open', href = 'javascript:;')
									span Item 2
    //  caret 
    span.inline - block.ltr: float - right.rtl: float - left
    svg.transform.transition.duration - 300.mt - 1.5.bi.bi - chevron - down(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', : class= '{ \'rotate-0\': open, \'ltr:-rotate-90 rtl:rotate-90\': !open }', width = '.8rem', height = '.8rem', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z')
    //  <i class="transform transition duration-300 fas fa-chevron-down" :class="{ 'rotate-0': open, 'ltr:-rotate-90 rtl:rotate-90': !open }"></i> 
    ul.block.rounded.rounded - t - none.top - full.z - 50.ltr: pl - 7.rtl: pr - 7.py - 0.5.ltr: text - left.rtl: text - right.mb - 1.font - normal(x - show='open', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', role = 'menu', aria - orientation='vertical', aria - labelledby='mobiledrop-93')
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = '#') Item 2.1
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500.dark: hover: text - gray - 300(href = '#') Item 2.2
        //  Banner 
        .px - 4.box - banner
            .my - 8.p - 4.text - center.bg - gray - 300.dark: bg - gray - 700.bg - opacity - 50.rounded - lg
    h4.font - bold.inline - block.mb - 2 Sales Report
        .mb - 3.text - sm.
					
					Monthly sales report is ready for download!

        .grid
					a.py - 2.px - 4.inline - block.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - pink - 500.border.border - pink - 500.hover: text - white.hover: bg - pink - 600.hover: ring - 0.hover: border - pink - 600.focus: bg - pink - 600.focus: border - pink - 600.focus: outline - none.focus: ring - 0(href = '#', target = '_blank') Download
        //  end banner 
        .flex.flex - col.ltr: ml - 64.rtl: mr - 64.min - h - screen.transition - all.duration - 500.ease -in -out(x - bind: aria - expanded='open', : class= '{ \'ltr:ml-64 ltr:-mr-64 md:ltr:ml-0 md:ltr:mr-0 rtl:mr-64 rtl:-ml-64 md:rtl:mr-0 md:rtl:ml-0\': open, \'ltr:ml-0 ltr:mr-0 md:ltr:ml-64 rtl:mr-0 rtl:ml-0 md:rtl:mr-64\': !(open) }')
    //  Navbar 
    nav.z - 50.fixed.flex.flex - row.flex - nowrap.items - center.justify - between.mt - 0.py - 2.ltr: left - 0.md: ltr: left - 64.ltr: right - 0.rtl: right - 0.md: rtl: right - 64.rtl: left - 0.px - 6.bg - white.dark: bg - gray - 800.shadow - sm.transition - all.duration - 500.ease -in -out#desktop - menu(: class= '{ \'ltr:left-64 ltr:-right-64 md:ltr:left-0 md:ltr:right-0 rtl:right-64 rtl:-left-64 md:rtl:right-0 md:rtl:left-0\': open, \'ltr:left-0 ltr:right-0 md:ltr:left-64 rtl:right-0 rtl:left-0 md:rtl:right-64\': !(open) }')
				//  sidenav button
				button#navbartoggle.inline - flex.items - center.justify - center.text - gray - 800.hover: text - gray - 600.dark: text - gray - 300.dark: hover: text - gray - 200.focus: outline - none.focus: ring - 0(type = 'button', aria - controls='sidebar-menu', @click = 'open = !open', aria - expanded='false', x - bind: aria - expanded='open.toString()')
    span.sr - only Mobile menu
    svg.hidden.h - 8.w - 8(x - description='Icon open', x - state: on = 'Menu open', x - state: off = 'Menu closed', : class= '{ \'block\': open, \'hidden\': !(open) }', xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path.hidden.md: block(fill - rule='evenodd', d = 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z')
    path.md: hidden(d = 'M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z')
    svg.block.h - 8.w - 8(x - description='Icon closed', x - state: on = 'Menu open', x - state: off = 'Menu closed', : class= '{ \'hidden\': open, \'block\': !(open) }', xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path.md: hidden(fill - rule='evenodd', d = 'M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z')
    path.hidden.md: block(d = 'M2 10.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z')
    //  <i class="text-2xl fas fa-bars"></i> 
    //  Search 
    form.hidden.sm: inline - block.md: hidden.lg: inline - block.mx - 5
        .flex.flex - wrap.items - stretch.w - full.relative
    input.flex - shrink.flex - grow.max - w - full.leading - 5.relative.text - sm.py - 2.px - 4.ltr: rounded - l.rtl: rounded - r.text - gray - 800.bg - gray - 100.overflow - x - auto.focus: outline - none.border.border - gray - 100.focus: border - gray - 200.focus: ring - 0.dark: text - gray - 400.dark: bg - gray - 700.dark: border - gray - 700.dark: focus: border - gray - 600(type = 'text', placeholder = 'Search…', aria - label='Search')
        .flex.- mr - px
    button.flex.items - center.py - 2.px - 4.ltr: -ml - 1.rtl: -mr - 1.ltr: rounded - r.rtl: rounded - l.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(type = 'button')
    svg.w - 5.h - 5(xmlns = 'http://www.w3.org/2000/svg', viewBox = '0 0 24 24', fill = 'none', stroke = 'currentColor', stroke - width='2', stroke - linecap='round', stroke - linejoin='round')
    circle(cx = '11', cy = '11', r = '8')
    line(x1 = '21', y1 = '21', x2 = '16.65', y2 = '16.65')
    //  <i class="fas fa-search"></i> 
    //  menu 
    ul.flex.ltr: ml - auto.rtl: mr - auto.mt - 2
    //  Customizer (Only for demo purpose) 
    li.relative(x - data='{ open: false }')
    a.py - 3.px - 4.flex.text - sm.rounded - full.focus: outline - none(href = 'javascript:;', aria - controls='mobile-canvas', @click = 'open = !open', aria - expanded='false', x - bind: aria - expanded='open.toString()')
    span.sr - only Customizer
    svg.block.h - 6.w - 6(x - description='Icon closed', x - state: on = 'Menu open', x - state: off = 'Menu closed', xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z')
    path(d = 'M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z')
        //  <i class="text-2xl fas fa-cog"></i> 
        //  Right Offcanvas 
        .fixed.w - full.h - full.inset - 0.z - 50#mobile - canvas(x - description='Mobile menu', x - show='open', style = 'display: none;')
    //  bg open 
    span.fixed.bg - gray - 900.bg - opacity - 70.w - full.h - full.inset - x - 0.top - 0
							nav#mobile - nav.flex.flex - col.ltr: right - 0.rtl: left - 0.w - 72.fixed.top - 0.bg - white.dark: bg - gray - 800.h - full.overflow - auto.z - 40.scrollbars.show(x - show='open', @click.away = 'open=false', x - description='Mobile menu', role = 'menu', aria - orientation='vertical', aria - labelledby='navbartoggle', x - transition: enter = 'transform transition-transform duration-300', x - transition: enter - start='ltr:translate-x-full rtl:-translate-x-full', x - transition: enter - end='translate-x-0', x - transition: leave = 'transform transition-transform duration-300', x - transition: leave - start='translate-x-0', x - transition: leave - end='ltr:translate-x-full rtl:-translate-x-full')
        .p - 6.bg - indigo - 500.text - gray - 100.border - b.border - gray - 200.dark: border - gray - 700
            .flex.flex - row.justify - between
    h3.text - md.font - bold Customizer
    button.inline - block.w - 4.h - 4(@click = 'open = false', type = 'button')
    svg.inline - block.text - gray - 100.bi.bi - x - lg#x - lg(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M1.293 1.293a1 1 0 011.414 0L8 6.586l5.293-5.293a1 1 0 111.414 1.414L9.414 8l5.293 5.293a1 1 0 01-1.414 1.414L8 9.414l-5.293 5.293a1 1 0 01-1.414-1.414L6.586 8 1.293 2.707a1 1 0 010-1.414z')
        //  <i class="fas fa-times"></i> 
        .py - 3.px - 6.border - b.border - gray - 200.dark: border - gray - 700
    p.text - base.text - semibold Color Scheme
        .flex.flex - row
            .relative.inline - block.w - 8.py - 3.mt - 0.5.ltr: mr - 3.rtl: ml - 3.align - middle.select - none.transition.duration - 200.ease -in
                input#lightdark.toggle - checkbox.absolute.block.w - 5.h - 5.rounded - full.bg - white.dark: bg - gray - 900.border - 2.dark: border - gray - 700.appearance - none.cursor - pointer(type = 'checkbox', name = 'lightdark')
    label.toggle - label.block.overflow - hidden.h - 5.rounded - full.bg - gray - 300.dark: bg - gray - 700.cursor - pointer(for= 'lightdark')
        p.text - sm.text - gray - 500.self - center Light and Dark
            .py - 3.px - 6.border - b.border - gray - 200.dark: border - gray - 700
    p.text - base.text - semibold Sidebar Color
        .flex.flex - row
            .relative.inline - block.w - 8.py - 3.mt - 0.5.ltr: mr - 3.rtl: ml - 3.align - middle.select - none.transition.duration - 200.ease -in
                input#sidecolor.toggle - checkbox.absolute.block.w - 5.h - 5.rounded - full.bg - white.dark: bg - gray - 900.border - 2.dark: border - gray - 700.appearance - none.cursor - pointer(type = 'checkbox', name = 'sidecolor')
    label.toggle - label.block.overflow - hidden.h - 5.rounded - full.bg - gray - 300.dark: bg - gray - 700.cursor - pointer(for= 'sidecolor')
        p.text - sm.text - gray - 500.self - center Light and Dark
            .py - 3.px - 6.border - b.border - gray - 200.dark: border - gray - 700
    p.text - base.text - semibold Direction
        .flex.flex - row
            .relative.inline - block.w - 8.py - 3.mt - 0.5.ltr: mr - 3.rtl: ml - 3.align - middle.select - none.transition.duration - 200.ease -in
                input#rtlmode.toggle - checkbox.absolute.block.w - 5.h - 5.rounded - full.bg - white.dark: bg - gray - 900.border - 2.dark: border - gray - 700.appearance - none.cursor - pointer(type = 'checkbox', name = 'rtlmode')
    label.toggle - label.block.overflow - hidden.h - 5.rounded - full.bg - gray - 300.dark: bg - gray - 700.cursor - pointer(for= 'rtlmode')
        p.text - sm.text - gray - 500.self - center LTR and RTL
            .py - 3.px - 6.border - b.border - gray - 200.dark: border - gray - 700
    p.text - base.text - semibold Layout
        .relative.mb - 3
    a.inline - block.py - 2.px - 2.5.mt - 2.rounded.text - sm.text - gray - 500.bg - gray - 100.dark: bg - gray - 900.dark: bg - opacity - 20.dark: hover: bg - opacity - 60.hover: text - indigo - 500.hover: bg - gray - 200.self - center(href = 'index.html') Default
    a.inline - block.py - 2.px - 2.5.mt - 2.rounded.text - sm.text - gray - 500.bg - gray - 100.dark: bg - gray - 900.dark: bg - opacity - 20.dark: hover: bg - opacity - 60.hover: text - indigo - 500.hover: bg - gray - 200.self - center(href = 'layout-compact.html') Compact
    a.inline - block.py - 2.px - 2.5.mt - 2.rounded.text - sm.text - gray - 500.bg - gray - 100.dark: bg - gray - 900.dark: bg - opacity - 20.dark: hover: bg - opacity - 60.hover: text - indigo - 500.hover: bg - gray - 200.self - center(href = 'layout-topnav.html') Topnav
    #customcolor.py - 3.px - 6.border - b.border - gray - 200.dark: border - gray - 700
    p.text - base.text - semibold Primary Color
        .relative.my - 3
    #custred.inline - block.p - 3.ltr: mr - 1.5.rtl: ml - 1.5.bg - red - 500.hover: opacity - 90.rounded - full.cursor - pointer(title = 'red')
    #custyellow.inline - block.p - 3.ltr: mr - 1.5.rtl: ml - 1.5.bg - yellow - 500.hover: opacity - 90.rounded - full.cursor - pointer(title = 'yellow')
    #custgreen.inline - block.p - 3.ltr: mr - 1.5.rtl: ml - 1.5.bg - green - 500.hover: opacity - 90.rounded - full.cursor - pointer(title = 'green')
    #custblue.inline - block.p - 3.ltr: mr - 1.5.rtl: ml - 1.5.bg - blue - 500.hover: opacity - 90.rounded - full.cursor - pointer(title = 'blue')
    #custpurple.inline - block.p - 3.ltr: mr - 1.5.rtl: ml - 1.5.bg - purple - 500.hover: opacity - 90.rounded - full.cursor - pointer(title = 'purple')
    #custpink.inline - block.p - 3.ltr: mr - 1.5.rtl: ml - 1.5.bg - pink - 500.hover: opacity - 90.rounded - full.cursor - pointer(title = 'pink')
    #custindigo.inline - block.cursor - pointer(title = 'reset color')
    svg.bi.bi - arrow - counterclockwise(xmlns = 'http://www.w3.org/2000/svg', width = '16', height = '16', fill = 'currentColor', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z')
    path(d = 'M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z')
        .pt - 6.px - 6
            .flex.justify - between.items - center.relative.bg - yellow - 100.text - yellow - 900.p - 3.rounded - lg.mb - 4(x - data='{ open: true }', x - show='open')
    div
        |
        How to apply ? please read the documentation on
    a.underline.font - semibold(href = 'docs/customize.html') Customize page
    button(type = 'button', @click = 'open = false')
    span.text - 2xl ×
    //  <i class="fas fa-times"></i> 
    //  End Customizer (Only for demo purpose) 
    //  messages 
    li.relative(x - data='{ open: false }')
    a.py - 3.px - 4.flex.text - sm.rounded - full.focus: outline - none#messages(href = 'javascript:;', @click = 'open = ! open')
        .relative.inline - block
    svg.w - 6.h - 6.bi.bi - envelope(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z')
    //  <i class="text-2xl fas fa-envelope"></i> 
    span.flex.justify - center.absolute.- top - 2.ltr: -right - 1.rtl: -left - 1.text - center.bg - pink - 500.px - 1.text - white.rounded - full.text - xs
    span.align - self - center 3
        .w - 72.origin - top - right.absolute.ltr: -right - 36.md: ltr: right - 0.rtl: -left - 36.md: rtl: left - 0.rounded.top - full.z - 50.py - 0.5.ltr: text - left.rtl: text - right.bg - white.dark: bg - gray - 800.border.dark: border - gray - 700.shadow - md(x - show='open', @click.away = 'open = false', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', x - transition: leave = 'transition-all duration-200 ease-in', x - transition: leave - start='transform opacity-100 scale-100', x - transition: leave - end='transform opacity-0 scale-95', style = 'display: none;')
            .p - 3.font - normal.border - b.border - gray - 200.dark: border - gray - 700
                .relative
                .font - bold Messages
                    .absolute.top - 0.ltr: right - 0.rtl: left - 0(x - data='{ open: false }')
    a.inline - block.ltr: mr - 2.rtl: ml - 2(@click = 'open = ! open', href = 'javascript:;', title = 'Search message')
    svg.inline - block.w - 4.h - 4.bi.bi - search(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z')
        //  <i class="fas fa-search"></i> 
        .origin - top - right.absolute.ltr: right - 0.rtl: left - 0.bg - white.dark: bg - gray - 700.z - 10.rounded(x - show='open', @click.away = 'open = false', style = 'min-width:16rem')
    form.inline - block.w - full
        .flex.flex - wrap.items - stretch.w - full.relative
    input.flex - shrink.flex - grow.max - w - full.leading - 5.relative.text - sm.py - 2.px - 4.ltr: rounded - l.rtl: rounded - r.text - gray - 800.bg - gray - 100.overflow - x - auto.focus: outline - none.border.border - gray - 100.focus: border - gray - 200.focus: ring - 0.dark: text - gray - 400.dark: bg - gray - 700.dark: border - gray - 700.dark: focus: border - gray - 600(type = 'text', placeholder = 'Search messages…', aria - label='Search')
        .flex.- mr - px
    button.flex.items - center.py - 2.px - 4.ltr: -ml - 1.rtl: -mr - 1.ltr: rounded - r.rtl: rounded - l.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(type = 'button')
    svg.w - 5.h - 5(xmlns = 'http://www.w3.org/2000/svg', viewBox = '0 0 24 24', fill = 'none', stroke = 'currentColor', stroke - width='2', stroke - linecap='round', stroke - linejoin='round')
    circle(cx = '11', cy = '11', r = '8')
    line(x1 = '21', y1 = '21', x2 = '16.65', y2 = '16.65')
    //  <i class="fas fa-search"></i> 
    a.inline - block.ltr: mr - 2.rtl: ml - 2(href = '#', title = 'Mark all as read')
    svg.inline - block.w - 4.h - 4.bi.bi - envelope - open(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8.47 1.318a1 1 0 0 0-.94 0l-6 3.2A1 1 0 0 0 1 5.4v.818l5.724 3.465L8 8.917l1.276.766L15 6.218V5.4a1 1 0 0 0-.53-.882l-6-3.2zM15 7.388l-4.754 2.877L15 13.117v-5.73zm-.035 6.874L8 10.083l-6.965 4.18A1 1 0 0 0 2 15h12a1 1 0 0 0 .965-.738zM1 13.117l4.754-2.852L1 7.387v5.73zM7.059.435a2 2 0 0 1 1.882 0l6 3.2A2 2 0 0 1 16 5.4V14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V5.4a2 2 0 0 1 1.059-1.765l6-3.2z')
    //  <i class="fas fa-envelope-open"></i> 
    a.inline - block.ltr: mr - 2.rtl: ml - 2(href = '#', title = 'New message')
    svg.inline - block.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
        //  <i class="fas fa-edit"></i> 
        .max - h - 60.overflow - y - auto.scrollbars.show
    a(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: bg - gray - 900.dark: bg - opacity - 40.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100.bg - gray - 50
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .relative
    img.h - 10.w - 10.rounded - full.mx - auto(src = 'src/img/avatar/avatar2.png', alt = 'Daniel Esteban')
    span.flex.justify - center.absolute.- bottom - 0.5.ltr: right - 2.rtl: left - 2.text - center.bg - green - 500.border.border - white.w - 3.h - 3.rounded - full(title = 'online')
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - sm.font - bold Daniel Esteban
                .text - gray - 500.text - sm.mt - 1 What do you think about this project ?
											.text - gray - 500.text - sm.mt - 1 12m ago
    a(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: bg - gray - 900.dark: bg - opacity - 40.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100.bg - gray - 50
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .relative
    img.h - 10.w - 10.rounded - full.mx - auto(src = 'src/img/avatar/avatar3.png', alt = 'Carlos Garcia')
    span.flex.justify - center.absolute.- bottom - 0.5.ltr: right - 2.rtl: left - 2.text - center.bg - pink - 500.border.border - white.w - 3.h - 3.rounded - full(title = 'busy')
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - sm.font - bold Carlos Garcia
                .text - gray - 500.text - sm.mt - 1 Hello, how are you friends ?
											.text - gray - 500.text - sm.mt - 1 30m ago
    a(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: bg - gray - 900.dark: bg - opacity - 40.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100.bg - gray - 50
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .relative
    img.h - 10.w - 10.rounded - full.mx - auto(src = 'src/img/avatar/avatar4.png', alt = 'Steven Rey')
    span.flex.justify - center.absolute.- bottom - 0.5.ltr: right - 2.rtl: left - 2.text - center.bg - gray - 500.border.border - white.w - 3.h - 3.rounded - full(title = 'offline')
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - sm.font - bold Steven Rey
                .text - gray - 500.text - sm.mt - 1 Thank you for your help today.
											.text - gray - 500.text - sm.mt - 1 4h ago
    a(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .relative
    img.h - 10.w - 10.rounded - full.mx - auto(src = 'src/img/avatar/avatar.png', alt = 'Roman Davis')
    span.flex.justify - center.absolute.- bottom - 0.5.ltr: right - 2.rtl: left - 2.text - center.bg - gray - 500.border.border - white.w - 3.h - 3.rounded - full(title = 'offline')
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - sm.font - bold Roman Davis
                .text - gray - 500.text - sm.mt - 1 Do you have time ? I want to call you.
											.text - gray - 500.text - sm.mt - 1 5h ago
        .p - 3.text - center.font - normal
    a.hover: underline(href = '#') Show all Messages
    //  notification 
    li.relative(x - data='{ open: false }')
    a.py - 3.px - 4.flex.text - sm.rounded - full.focus: outline - none#notify(href = 'javascript:;', @click = 'open = ! open')
        .relative.inline - block
    svg.w - 6.h - 6.bi.bi - bell(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z')
    //  <i class="text-2xl fas fa-bell"></i> 
    span.flex.justify - center.absolute.- top - 2.ltr: -right - 1.rtl: -left - 1.text - center.bg - pink - 500.px - 1.text - white.rounded - full.text - xs
    span.align - self - center 1
        .w - 72.origin - top - right.absolute.ltr: right - 0.rtl: left - 0.rounded.top - full.z - 50.py - 0.5.ltr: text - left.rtl: text - right.bg - white.dark: bg - gray - 800.border.dark: border - gray - 700.shadow - md(x - show='open', @click.away = 'open = false', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', x - transition: leave = 'transition-all duration-200 ease-in', x - transition: leave - start='transform opacity-100 scale-100', x - transition: leave - end='transform opacity-0 scale-95', style = 'display: none;')
            .p - 3.font - normal.border - b.border - gray - 200.dark: border - gray - 700
                .relative
                .font - bold Notifications
                    .absolute.top - 0.ltr: right - 0.rtl: left - 0
    a.inline - block.ltr: mr - 2.rtl: ml - 2(href = '#', title = 'Clear all')
    svg.inline - block.w - 4.h - 4.bi.bi - trash(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z')
    path(fill - rule='evenodd', d = 'M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z')
        //  <i class="fas fa-trash-alt"></i> 
        .max - h - 60.overflow - y - auto.scrollbars.show
    a.relative(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: bg - gray - 900.dark: bg - opacity - 40.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100.bg - gray - 50
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .flex.justify - center.mx - auto.w - 8.h - 8.rounded - full.bg - indigo - 500.text - white
    svg.self - center.w - 4.h - 4.bi.bi - calendar4 - event(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v1h14V3a1 1 0 0 0-1-1H2zm13 3H1v9a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V5z')
    path(d = 'M11 7.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1z')
        //  <i class="self-center fas fa-calendar"></i> 
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - sm.font - bold Event will coming
                .text - gray - 500.text - sm.mt - 1 Meeting with Mr.John Navas at: 10.00Am
                    .text - gray - 500.text - sm.mt - 1 1h ago
    a.relative(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .flex.justify - center.mx - auto.w - 8.h - 8.rounded - full.bg - indigo - 500.text - white
    svg.self - center.w - 4.h - 4.bi.bi - hand - thumbs - up(xmlns = 'http://www.w3.org/2000/svg', width = '16', height = '16', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z')
        //  <i class="self-center fas fa-thumbs-up"></i> 
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - gray - 500.text - sm.mt - 1
    b.text - gray - 600.dark: text - gray - 400 Daniel
        | like your post:
    b.text - gray - 600.dark: text - gray - 400 Hello World!
        .text - gray - 500.text - sm.mt - 1 3h ago
    a.relative(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .flex.justify - center.mx - auto.w - 8.h - 8.rounded - full.bg - indigo - 500.text - white
    svg.self - center.w - 4.h - 4.bi.bi - hdd - stack(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M14 10a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1h12zM2 9a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-1a2 2 0 0 0-2-2H2z')
    path(d = 'M5 11.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM14 3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12zM2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2z')
    path(d = 'M5 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm-2 0a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z')
        //  <i class="self-center fas fa-server"></i> 
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - sm.font - bold Server maintenance
                .text - gray - 500.text - sm.mt - 1 Server maintenance at:07.00Am
                    .text - gray - 500.text - sm.mt - 1 8h ago
    a.relative(href = '#')
        .flex.flex - wrap.flex - row.items - center.border - b.border - gray - 200.dark: border - gray - 700.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.py - 2.hover: bg - gray - 100
            .flex - shrink.max - w - full.px - 2.w - 1 / 4.text - center
                .flex.justify - center.mx - auto.w - 8.h - 8.rounded - full.bg - indigo - 500.text - white
    svg.self - center.w - 4.h - 4.bi.bi - chat - left(xmlns = 'http://www.w3.org/2000/svg', width = '16', height = '16', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z')
        //  <i class="self-center fas fa-comment"></i> 
        .flex - shrink.max - w - full.px - 2.w - 3 / 4
            .text - gray - 500.text - sm.mt - 1
    b.text - gray - 600.dark: text - gray - 400 Carlos
        | comment in your post:
    b.text - gray - 600.dark: text - gray - 400 Hello World!
        .text - gray - 500.text - sm.mt - 1 1d ago
            .p - 3.text - center.font - normal
    a.hover: underline(href = '#') Show all Notifications
    //  profile 
    li.relative(x - data='{ open: false }')
    a.px - 3.flex.text - sm.rounded - full.focus: outline - none#user - menu - button(href = 'javascript:;', @click = 'open = ! open')
        .relative
    img.h - 10.w - 10.rounded - full.border.border - gray - 700.bg - gray - 700(src = 'src/img/avatar/avatar.png', alt = 'avatar')
    span.flex.justify - center.absolute.- bottom - 0.5.ltr: right - 1.rtl: left - 1.text - center.bg - green - 500.border.border - white.w - 3.h - 3.rounded - full(title = 'online')
    span.hidden.md: block.ltr: ml - 1.rtl: mr - 1.self - center Ari Budin
    ul.origin - top - right.absolute.ltr: right - 0.rtl: left - 0.rounded.top - full.z - 50.py - 0.5.ltr: text - left.rtl: text - right.bg - white.dark: bg - gray - 800.border.dark: border - gray - 700.shadow - md(x - show='open', @click.away = 'open = false', x - transition: enter = 'transition-all duration-200 ease-out', x - transition: enter - start='transform opacity-0 scale-95', x - transition: enter - end='transform opacity-100 scale-100', x - transition: leave = 'transition-all duration-200 ease-in', x - transition: leave - start='transform opacity-100 scale-100', x - transition: leave - end='transform opacity-0 scale-95', style = 'min-width:12rem;display: none;')
    li.relative
        .flex.flex - wrap.flex - row.- mx - 4.px - 3.py - 4.items - center
            .flex - shrink.max - w - full.px - 4.w - 1 / 3
    img.h - 10.w - 10.rounded - full(src = 'src/img/avatar/avatar.png', alt = 'Ari Budin')
        .flex - shrink.max - w - full.px - 4.w - 2 / 3.ltr: pl - 1.rtl: pr - 1
            .font - bold
    a.text - gray - 800.dark: text - gray - 300.hover: text - indigo - 500(href = '#') Ari Budin
        .text - gray.text - sm.mt - 1 Professional Front end developer.
            li.relative
    hr.border - t.border - gray - 200.dark: border - gray - 700.my - 0
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500(href = '#')
    svg.inline.ltr: mr - 2.rtl: ml - 2.w - 4.h - 4.bi.bi - gear(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z')
    path(d = 'M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z')
        //  <i class="mr-2 fas fa-cog"></i> 
        | Settings & Privacy

    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500(href = '#')
    svg.inline.ltr: mr - 2.rtl: ml - 2.w - 4.h - 4.bi.bi - question - circle(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z')
    path(d = 'M5.255 5.786a.237.237 0 0 0 .241.247h.825c.138 0 .248-.113.266-.25.09-.656.54-1.134 1.342-1.134.686 0 1.314.343 1.314 1.168 0 .635-.374.927-.965 1.371-.673.489-1.206 1.06-1.168 1.987l.003.217a.25.25 0 0 0 .25.246h.811a.25.25 0 0 0 .25-.25v-.105c0-.718.273-.927 1.01-1.486.609-.463 1.244-.977 1.244-2.056 0-1.511-1.276-2.241-2.673-2.241-1.267 0-2.655.59-2.75 2.286zm1.557 5.763c0 .533.425.927 1.01.927.609 0 1.028-.394 1.028-.927 0-.552-.42-.94-1.029-.94-.584 0-1.009.388-1.009.94z')
        //  <i class="mr-2 fas fa-question-circle"></i> 
        | Help & Support

    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500(href = '#')
    svg.inline.ltr: mr - 2.rtl: ml - 2.w - 4.h - 4.bi.bi - translate(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M4.545 6.714 4.11 8H3l1.862-5h1.284L8 8H6.833l-.435-1.286H4.545zm1.634-.736L5.5 3.956h-.049l-.679 2.022H6.18z')
    path(d = 'M0 2a2 2 0 0 1 2-2h7a2 2 0 0 1 2 2v3h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-3H2a2 2 0 0 1-2-2V2zm2-1a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H2zm7.138 9.995c.193.301.402.583.63.846-.748.575-1.673 1.001-2.768 1.292.178.217.451.635.555.867 1.125-.359 2.08-.844 2.886-1.494.777.665 1.739 1.165 2.93 1.472.133-.254.414-.673.629-.89-1.125-.253-2.057-.694-2.82-1.284.681-.747 1.222-1.651 1.621-2.757H14V8h-3v1.047h.765c-.318.844-.74 1.546-1.272 2.13a6.066 6.066 0 0 1-.415-.492 1.988 1.988 0 0 1-.94.31z')
        //  <i class="mr-2 fas fa-language"></i> 
        | Change Language

    li.relative
    hr.border - t.border - gray - 200.dark: border - gray - 700.my - 0
    li.relative
    a.block.w - full.py - 2.px - 6.clear - both.whitespace - nowrap.hover: text - indigo - 500(href = '#')
    svg.inline.ltr: mr - 2.rtl: ml - 2.w - 4.h - 4.bi.bi - box - arrow -in -right(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(fill - rule='evenodd', d = 'M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0v-2z')
    path(fill - rule='evenodd', d = 'M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z')
        //  <i class="mr-2 fas fa-sign-out-alt"></i> 
        | Sign out

    //  End Navbar 
    main.pt - 20. - mt - 2
        .mx - auto.p - 2
            //  row 
            .flex.flex - wrap.flex - row
            .flex - shrink.max - w - full.px - 4.w - full
    p.text - xl.font - bold.mt - 3.mb - 5 Ecommerce
        .flex - shrink.max - w - full.px - 4.w - full.sm: w - 1 / 2.lg: w - 1 / 4.mb - 6
            .bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
                .pt - 6.px - 6.relative.text - sm.font - semibold(x - data='{ tooltips: false }')
                    |
                    Total Orders

                        .ltr: float - right.rtl: float - left.text - green - 500(x - on: mouseover = 'tooltips = true', x - on: mouseleave = 'tooltips = false')
                            |
                            +12 %

										.absolute.top - auto.bottom - full.mb - 3(x - show.transition.origin.top='tooltips', style = 'display: none;')
                                .z - 40.w - 32.p - 2. - mb - 1.text - sm.leading - tight.text - white.bg - black.rounded - lg.shadow - lg.text - center.
												
												Since last month

        .absolute.transform.- rotate - 45.p - 1.w - 1.bg - black.bottom - 0. - mb - 2.ltr: ml - 6.rtl: mr - 6
            .flex.flex - row.justify - between.px - 6.py - 4
                .self - center.w - 14.h - 14.rounded - full.text - pink - 500.bg - pink - 100.dark: bg - pink - 900.dark: bg - opacity - 40.relative.text - center
    svg.absolute.top - 1 / 2.left - 1 / 2.transform.- translate - y - 1 / 2. - translate - x - 1 / 2.w - 8.h - 8.bi.bi - cart3(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z')
    h2.self - center.text - 3xl 421
        .px - 6.pb - 6
    a.hover: text - indigo - 500.text - sm(href = '#') View more...
						.flex - shrink.max - w - full.px - 4.w - full.sm: w - 1 / 2.lg: w - 1 / 4.mb - 6
        .bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
            .pt - 6.px - 6.relative.text - sm.font - semibold(x - data='{ tooltips: false }')
                |
                Total Sales

                    .ltr: float - right.rtl: float - left.text - green - 500(x - on: mouseover = 'tooltips = true', x - on: mouseleave = 'tooltips = false')
                        |
                        +15 %

										.absolute.top - auto.bottom - full.mb - 3(x - show.transition.origin.top='tooltips', style = 'display: none;')
                            .z - 40.w - 32.p - 2. - mb - 1.text - sm.leading - tight.text - white.bg - black.rounded - lg.shadow - lg.text - center.
												
												Since last month

        .absolute.transform.- rotate - 45.p - 1.w - 1.bg - black.bottom - 0. - mb - 2.ltr: ml - 6.rtl: mr - 6
            .flex.flex - row.justify - between.px - 6.py - 4
                .self - center.w - 14.h - 14.rounded - full.text - yellow - 500.bg - yellow - 100.dark: bg - yellow - 900.dark: bg - opacity - 40.relative.text - center
    svg.absolute.top - 1 / 2.left - 1 / 2.transform.- translate - y - 1 / 2. - translate - x - 1 / 2.w - 8.h - 8.bi.bi - credit - card(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v1h14V4a1 1 0 0 0-1-1H2zm13 4H1v5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V7z')
    path(d = 'M2 10a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-1z')
    h2.self - center.text - 3xl
										span $
        | 31K
            .px - 6.pb - 6
    a.hover: text - indigo - 500.text - sm(href = '#') View more...
						.flex - shrink.max - w - full.px - 4.w - full.sm: w - 1 / 2.lg: w - 1 / 4.mb - 6
        .bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
            .pt - 6.px - 6.relative.text - sm.font - semibold(x - data='{ tooltips: false }')
                |
                New Customers

                    .ltr: float - right.rtl: float - left.text - pink - 500(x - on: mouseover = 'tooltips = true', x - on: mouseleave = 'tooltips = false')
                        |
                        -5 %

										.absolute.top - auto.bottom - full.mb - 3(x - cloak, x - show.transition.origin.top='tooltips')
                            .z - 40.w - 32.p - 2. - mb - 1.text - sm.leading - tight.text - white.bg - black.rounded - lg.shadow - lg.text - center.
												
												Since last month

        .absolute.transform.- rotate - 45.p - 1.w - 1.bg - black.bottom - 0. - mb - 2.ltr: ml - 6.rtl: mr - 6
            .flex.flex - row.justify - between.px - 6.py - 4
                .self - center.w - 14.h - 14.rounded - full.text - green - 500.bg - green - 100.dark: bg - green - 900.dark: bg - opacity - 40.relative.text - center
    svg.absolute.top - 1 / 2.left - 1 / 2.transform.- translate - y - 1 / 2. - translate - x - 1 / 2.w - 8.h - 8.bi.bi - person(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z')
    h2.self - center.text - 3xl 1.2K
        .px - 6.pb - 6
    a.hover: text - indigo - 500.text - sm(href = '#') View more...
						.flex - shrink.max - w - full.px - 4.w - full.sm: w - 1 / 2.lg: w - 1 / 4.mb - 6
        .bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
            .pt - 6.px - 6.relative.text - sm.font - semibold(x - data='{ tooltips: false }')
                |
                Users Online
    span.ltr: float - right.rtl: float - left.w - 2.h - 2.rounded - full.bg - green - 500.mt - 1.animate - pulse
        .flex.flex - row.justify - between.px - 6.py - 4
            .self - center.w - 14.h - 14.rounded - full.text - indigo - 500.bg - indigo - 100.dark: bg - indigo - 900.dark: bg - opacity - 40.relative.text - center
    svg.absolute.top - 1 / 2.left - 1 / 2.transform.- translate - y - 1 / 2. - translate - x - 1 / 2.w - 8.h - 8.bi.bi - people(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z')
    h2.self - center.text - 3xl 602
        .px - 6.pb - 6
    a.hover: text - indigo - 500.text - sm(href = '#') View more...
					//  row 
					.flex.flex - wrap.flex - row
        .flex - shrink.max - w - full.px - 4.w - full.lg: w - 1 / 2.mb - 6
            //  visitor 
            .p - 6.bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.mb - 6
                .flex.flex - row.justify - between.pb - 6
                    .flex.flex - col
    h3.text - base.font - bold Monthly Sales
    span.text - gray - 500.text - sm Monthly Traffic and Sales
        .relative(x - data='{ open: false }')
    button.text - gray - 500.hover: text - gray - 600.dark: hover: text - gray - 400.transition - colors.duration - 200.focus: outline - none.hover: outline - none(@click = 'open = ! open')
    svg.w - 6.h - 6.bi.bi - three - dots(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z')
        .origin - top - right.absolute.ltr: right - 0.rtl: left - 0.rounded.rounded - t - non.bg - white.dark: bg - gray - 800.z - 10.border.border - gray - 200.dark: border - gray - 700(x - show='open', @click.away = 'open = false', style = 'min-width:12rem')
    a.block.px - 3.py - 2.hover: bg - gray - 100.focus: bg - gray - 100.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.dark: focus: bg - gray - 900(href = '#') Daily
    a.block.px - 3.py - 2.hover: bg - gray - 100.focus: bg - gray - 100.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.dark: focus: bg - gray - 900(href = '#') Weekly
    a.block.px - 3.py - 2.hover: bg - gray - 100.focus: bg - gray - 100.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.dark: focus: bg - gray - 900(href = '#') Yearly
        .relative
    canvas.max - w - 100#BarChart
        //  Paid ads 
        .p - 6.bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg
            .relative
    table.table - sm.text - sm.ltr: text - left.rtl: text - right.w - full
    thead
    tr.border - b.dark: border - gray - 700
    th.

        Platform

    th.

        Visitors

    th.
													
													Ads budget

    tbody
    tr
    td.
													
													Facebook Ads

    td.
													
													1, 520

    td
        .flex.items - center
    span.ltr: mr - 2.rtl: ml - 2 78 %
														.relative.w - full
            .overflow - hidden.h - 2.text - xs.flex.rounded.bg - indigo - 300
                .shadow - none.flex.flex - col.text - center.whitespace - nowrap.text - white.justify - center.bg - indigo - 500(style = 'width:78%').


                    tr
    td.
													
													Google Ads

    td.
													
													980

    td
        .flex.items - center
    span.ltr: mr - 2.rtl: ml - 2 65 %
														.relative.w - full
            .overflow - hidden.h - 2.text - xs.flex.rounded.bg - pink - 300
                .shadow - none.flex.flex - col.text - center.whitespace - nowrap.text - white.justify - center.bg - pink - 500(style = 'width:65%').


                    tr
    td.
													
													Microsoft Ads

    td.
													
													540

    td
        .flex.items - center
    span.ltr: mr - 2.rtl: ml - 2 55 %
														.relative.w - full
            .overflow - hidden.h - 2.text - xs.flex.rounded.bg - yellow - 300
                .shadow - none.flex.flex - col.text - center.whitespace - nowrap.text - white.justify - center.bg - yellow - 500(style = 'width:55%').


                    tr
    td.
													
													Tiktok Ads

    td.
													
													350

    td
        .flex.items - center
    span.ltr: mr - 2.rtl: ml - 2 40 %
														.relative.w - full
            .overflow - hidden.h - 2.text - xs.flex.rounded.bg - gray - 400
                .shadow - none.flex.flex - col.text - center.whitespace - nowrap.text - white.justify - center.bg - gray - 700(style = 'width:40%').
																	
																	
						.flex - shrink.max - w - full.px - 4.w - full.lg: w - 1 / 2.mb - 6
        .p - 6.bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
            .flex.flex - row.justify - between.pb - 6
                .flex.flex - col
    h3.text - base.font - bold Traffic Source
    span.text - gray - 500.text - sm Monthly traffic source
        .relative(x - data='{ open: false }')
    button.text - gray - 500.hover: text - gray - 600.dark: hover: text - gray - 400.transition - colors.duration - 200.focus: outline - none.hover: outline - none(@click = 'open = ! open')
    svg.w - 6.h - 6.bi.bi - three - dots(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z')
        .origin - top - right.absolute.ltr: right - 0.rtl: left - 0.rounded.rounded - t - non.bg - white.dark: bg - gray - 800.z - 10.border.border - gray - 200.dark: border - gray - 700(x - show='open', @click.away = 'open = false', style = 'min-width:12rem')
    a.block.px - 3.py - 2.hover: bg - gray - 100.focus: bg - gray - 100.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.dark: focus: bg - gray - 900(href = '#') Daily
    a.block.px - 3.py - 2.hover: bg - gray - 100.focus: bg - gray - 100.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.dark: focus: bg - gray - 900(href = '#') Weekly
    a.block.px - 3.py - 2.hover: bg - gray - 100.focus: bg - gray - 100.dark: hover: bg - gray - 900.dark: hover: bg - opacity - 20.dark: focus: bg - gray - 900(href = '#') Yearly
        .relative.mx - auto.text - center.w - full.sm: w - 2 / 3.lg: w - full
    canvas.max - w - 100#DoughnutChart
        //  row 
        .flex.flex - wrap.flex - row
            //  revenue 
            .flex - shrink.max - w - full.px - 4.w - full.lg: w - 2 / 3.mb - 6
                .p - 6.bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
                    .flex.flex - row.justify - between.pb - 6
                        .flex.flex - col
    h3.text - base.font - bold Revenue
    span.text - gray - 500.font - semibold.text - sm
        | Today's Earning: 
    span.text - green - 500 $1, 570.30
        .relative
    canvas.max - w - 100#LineChart
        //  product 
        .flex - shrink.max - w - full.px - 4.w - full.lg: w - 1 / 3.mb - 6
            .p - 6.bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
                .mb - 2
    table.table - sm.text - sm.ltr: text - left.rtl: text - right.w - full
    thead
    tr.border - b.dark: border - gray - 700
    th.
													
													Best Seller

    th.

        Sales

    tbody
    tr
    td
    a.hover: text - indigo - 500(href = '#')
        .flex.items - center
            .flex - shrink - 0.h - 10.w - 10
    img.h - 10.w - 10.rounded - full(src = 'src/img/products/product1.jpg', alt = 'product images')
        .ltr: ml - 4.rtl: mr - 4
            .leading - 5.
																	
																	Nike Women's Race Running Shoe

        .text - xs.leading - 5.text - gray - 500.
																	
																	Women shoes

    td
        .leading - 5.text - green - 700 $4, 345
    tr
    td
    a.hover: text - indigo - 500(href = '#')
        .flex.items - center
            .flex - shrink - 0.h - 10.w - 10
    img.h - 10.w - 10.rounded - full(src = 'src/img/products/product2.jpg', alt = 'product images')
        .ltr: ml - 4.rtl: mr - 4
            .leading - 5.
																	
																	Nike Womens Free RN Flyknit 2018

        .text - xs.leading - 5.text - gray - 500.
																	
																	Women shoes

    td
        .leading - 5.text - green - 700 $3, 235
    tr
    td
    a.hover: text - indigo - 500(href = '#')
        .flex.items - center
            .flex - shrink - 0.h - 10.w - 10
    img.h - 10.w - 10.rounded - full(src = 'src/img/products/product3.jpg', alt = 'product images')
        .ltr: ml - 4.rtl: mr - 4
            .leading - 5.
																	
																	Nike Women's Sneaker Running Shoes

        .text - xs.leading - 5.text - gray - 500.
																	
																	Women shoes

    td
        .leading - 5.text - green - 700 $1, 545
    tr
    td
    a.hover: text - indigo - 500(href = '#')
        .flex.items - center
            .flex - shrink - 0.h - 10.w - 10
    img.h - 10.w - 10.rounded - full(src = 'src/img/products/product4.jpg', alt = 'product images')
        .ltr: ml - 4.rtl: mr - 4
            .leading - 5.
																	
																	Nike Women's Gymnastics Tennis Shoes

        .text - xs.leading - 5.text - gray - 500.
																	
																	Women shoes

    td
        .leading - 5.text - green - 700 $1,045
            //  row 
            .flex.flex - wrap.flex - row
                .flex - shrink.max - w - full.px - 4.w - full.mb - 6
                    .p - 6.bg - white.dark: bg - gray - 800.rounded - lg.shadow - lg.h - full
                        .flex.flex - row.justify - between.pb - 2
                            .flex.flex - col
    h3.text - base.font - bold Latest Orders
        .overflow - x - auto
    table.table - sorter.table - bordered - bottom.w - full.text - gray - 500.dark: text - gray - 400
    thead
    tr.bg - gray - 200.dark: bg - gray - 900.dark: bg - opacity - 40
    th.
													
													Order ID

    th.hidden.lg: table - cell.

        Customer

    th.

        Status

    th.hidden.lg: table - cell.
													
													Date Added

    th.

        Total

    th(data - sortable='false').

        Action

    tbody.text - sm
    tr
    td
        .leading - 5.uppercase #inv12637
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.
															
															John Thomas

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, USA

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - pink - 100.text - pink - 700.dark: bg - opacity - 80.rounded - full Paid
    td.hidden.lg: table - cell
        .leading - 5 May 09, 2025
    td
        .leading - 5.font - bold.text - green - 700 $79
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12636
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Daniel

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.
															
															San Francisco, USA

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - purple - 100.text - purple - 700.dark: bg - opacity - 80.rounded - full Processing
    td.hidden.lg: table - cell
        .leading - 5 May 09, 2025
    td
        .leading - 5.font - bold.text - green - 700 $119
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12635
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.
															
															Vinjay Khan

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.
															
															New Delhi, India

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - yellow - 100.text - yellow - 700.dark: bg - opacity - 80.rounded - full Packing
    td.hidden.lg: table - cell
        .leading - 5 May 09, 2025
    td
        .leading - 5.font - bold.text - green - 700 $58
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12634
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.
															
															David Arya

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            Jakarta, Indonesia

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - green - 100.text - green - 700.dark: bg - opacity - 80.rounded - full Shipped
    td.hidden.lg: table - cell
        .leading - 5 May 09, 2025
    td
        .leading - 5.font - bold.text - green - 700 $79
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12633
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.
															
															William Stone

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            London, UK

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 09, 2025
    td
        .leading - 5.font - bold.text - green - 700 $158
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12632
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Danile

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $128
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12631
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Romano

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $98
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12630
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Yonanda

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $138
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12629
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Danile

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $128
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12628
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Romano

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $98
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12627
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Yonanda

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $138
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12626
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Danile

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $128
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12625
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Romano

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $98
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    tr
    td
        .leading - 5.uppercase #inv12624
    td.hidden.lg: table - cell
        .flex.flex - wrap.flex - row.items - center
            .leading - 5.font - bold.text - gray - 900.dark: text - gray - 300.flex - shrink.max - w - full.w - full.mb - 1.

    Yonanda

        .italic.leading - 5.text - gray - 500.flex - shrink.max - w - full.w - full.

            California, US

    td
        .inline - block.leading - tight.text - center.font - semibold.py - 1.px - 3.bg - gray - 100.text - gray - 700.dark: bg - opacity - 80.rounded - full Complete
    td.hidden.lg: table - cell
        .leading - 5 May 08, 2025
    td
        .leading - 5.font - bold.text - green - 700 $138
    td.text - center
    a.py - 2.px - 3.text - center.mb - 3.rounded.leading - 5.text - gray - 100.bg - indigo - 500.border.border - indigo - 500.hover: text - white.hover: bg - indigo - 600.hover: ring - 0.hover: border - indigo - 600.focus: bg - indigo - 600.focus: border - indigo - 600.focus: outline - none.focus: ring - 0(href = '#')
    svg.inline.w - 4.h - 4.bi.bi - pencil - square(xmlns = 'http://www.w3.org/2000/svg', fill = 'currentColor', viewBox = '0 0 16 16')
    path(d = 'M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z')
    path(fill - rule='evenodd', d = 'M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z')
    footer.bg - white.dark: bg - gray - 800.p - 6.shadow - sm
        .mx - auto
            .flex.flex - wrap.flex - row.- mx - 4
            .flex - shrink.max - w - full.px - 4.w - full.md: w - 1 / 2.text - center.md: ltr: text - left.md: rtl: text - right
    ul.ltr: pl - 0.rtl: pr - 0
    li.inline - block.ltr: mr - 3.rtl: ml - 3
    a.hover: text - indigo - 500(href = '#') Support
    li.inline - block.ltr: mr - 3.rtl: ml - 3
    a.hover: text - indigo - 500(href = '#') Help Center
    li.inline - block.ltr: mr - 3.rtl: ml - 3
    a.hover: text - indigo - 500(href = '#') Privacy
    li.inline - block.ltr: mr - 3.rtl: ml - 3
    a.hover: text - indigo - 500(href = '#') Terms of Service
        .flex - shrink.max - w - full.px - 4.w - full.md: w - 1 / 2.text - center.md: ltr: text - right.md: rtl: text - left
    p.mb - 0.mt - 3.md: mt - 0
    a.hover: text - indigo - 500(href = 'index.html') Tailnet
        |  | All right reserved

    // start::Global javascript (used in all pages)
    script(src = 'vendors/alpinejs/dist/cdn.min.js')
    //  core js 
    script(src = 'vendors/flatpickr/dist/flatpickr.min.js')
    //  input date 
    script(src = 'vendors/flatpickr/dist/plugins/rangePlugin.js')
    //  input range date 
    script(src = 'vendors/@yaireo/tagify/dist/tagify.min.js')
    //  input tags 
    script(src = 'vendors/pristinejs/dist/pristine.min.js')
    //  form validation 
    script(src = 'vendors/simple-datatables/dist/umd/simple-datatables.js')
    // sort table
    // end::Global javascript (used in all pages)
    //  Minify Global javascript (for production purpose) 
    //  <script src="dist/js/scripts.js"></script> 
    // start::Demo javascript ( initialize global javascript )
    script(src = 'src/js/demo.js')
    script(src = 'vendors/chart.js/dist/chart.min.js')
    //  charts 
    //  chart config 
    script(src = 'src/js/chart/ecommerce.js')
    // start::Customizer js ( Only for demo purpose )
    script(src = 'src/js/customizer.js')
        </>
        )
}

