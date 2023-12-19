import './css/style.css'

import {Inter} from 'next/font/google'
import Script from 'next/script'

import Header from '@/components/ui/header'
import Banner from '@/components/banner'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

export const metadata = {
    title: "Phortal",
    description: 'Upload pictures of your face and generate AI images!',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-6WMRZ04BFL"/>
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-6WMRZ04BFL');
        `}
        </Script>
        <Script>
            {
                `
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "k50826ykid");
        `
            }
        </Script>
        <body className={`${inter.variable} font-inter antialiased bg-white text-gray-900 tracking-tight`}>
        <div className="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">
            <Header/>
            {children}
            <Banner/>
        </div>
        </body>
        </html>
    )
}
