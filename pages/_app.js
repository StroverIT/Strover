import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

import Script from "next/script";
import { useEffect, useState } from "react";
import Cookie from "../components/Banners/Cookie";

function MyApp({ Component, pageProps }) {
  const [isCookie, setIsCookie] = useState(false);

  useEffect(() => {
    const isFound = localStorage.getItem("iknowyou");

    if (!isFound) {
      setTimeout(() => {
        setIsCookie(true);
      }, 5000);
    }
  }, []);
  const cookieHandler = () => {
    localStorage.setItem("iknowyou", "true");
    setIsCookie(false);
  };
  return (
    <>
      {" "}
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script strategy="afterInteractive" id="my-script">
        {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
    page_path: window.location.pathname,
    });
`}
      </Script>
      <Script strategy="afterInteractive" id="messenger">
        {`   
      


  var chatbox = document.getElementById('fb-customer-chat');
  chatbox.setAttribute("page_id", 104601222403056);
  chatbox.setAttribute("attribution", "biz_inbox");


<!-- Your SDK code -->

  window.fbAsyncInit = function() {
    FB.init({
      xfbml            : true,
      version          : 'v15.0'
    });
  };

  (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = 'https://connect.facebook.net/en_US/sdk/xfbml.customerchat.js';
    fjs.parentNode.insertBefore(js, fjs);
  }(document, 'script', 'facebook-jssdk'));
`}
      </Script>
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
      <div id="fb-root"></div>
      <div id="fb-customer-chat" className="fb-customerchat"></div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
      <Cookie setIsCookie={cookieHandler} isCookie={isCookie} />
    </>
  );
}

export default MyApp;
