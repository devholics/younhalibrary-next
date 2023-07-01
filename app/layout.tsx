import './globals.css'

import React, { Suspense } from 'react'

import { Inter } from 'next/font/google'
import Script from 'next/script'

import * as gtm from './_lib/gtm'
import { NavigationEvents } from './_components/navigation-events'
import Navbar from './_components/navbar'
import Footer from './_components/footer'
// import { WebVitals } from './_components/web-vitals'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Younha Library',
    description: 'Collection of links to photos and videos',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ko">
            <Script
                id="ga-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','${gtm.GTM_ID}');
                    `,
                }}
            />
            <body className={`${inter.className} dark:text-slate-300 dark:bg-slate-800`}>
                <noscript>
                    <iframe
                        src={`https://www.googletagmanager.com/ns.html?id=${gtm.GTM_ID}`}
                        className="hidden invisible"
                        height="0"
                        width="0"
                    ></iframe>
                </noscript>
                {/*<WebVitals />*/}

                <Navbar />
                {children}
                <Footer />

                <Suspense fallback={null}>
                    <NavigationEvents />
                </Suspense>
            </body>
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${gtm.GTM_ID}`}
            />
        </html>
    )
}
