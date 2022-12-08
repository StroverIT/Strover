/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/inline-script-id */

import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import { Partytown } from "@builder.io/partytown/react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Strover</title>
        <Partytown debug={true} forward={["dataLayer.push"]} />

        <link rel="icon" href="/logos/web-spider.svg" />
        <meta
          name="description"
          content="Изработка и поддръжка на сайтове, създаване на социални мрежи, развитие на бизнеси в онлайн пространството"
        />
        <meta property="og:title" content="Strover Company" />
        <meta
          property="og:description"
          content="Изработка и поддръжка на сайтове, създаване на социални мрежи, развитие на бизнеси в онлайн пространството"
        />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/STROVER-POST.jpg"
        />
        <meta property="og:url" content="https://strover.bg/" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          type="text/partytown"
          async
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname,
    });`,
          }}
        />
        <script
          type="text/partytown"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer',${process.env.GTM_ID});
               `,
          }}
        />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
