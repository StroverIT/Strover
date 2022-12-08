/* eslint-disable @next/next/inline-script-id */

import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Strover</title>
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
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
