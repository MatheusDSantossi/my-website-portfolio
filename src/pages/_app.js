// src/pages/_app.js
import '@/styles/globals.css';
import { Montserrat } from "next/font/google";
import Head from 'next/head';
import NavBar from '../components/NavBar';

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-mont",  
//   weight: ["300", "400", "500", "600", "700"],
//   style: "normal",
//   display: "swap",
});

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Head>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={`${montserrat.variable} font-mont`} bg-light w-full min-h-screen>
                <NavBar/>
                <Component {...pageProps} />
            </main>
        </>        
    );
};

export default MyApp;
