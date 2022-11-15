import "../styles/globals.css";
import Layout from "../components/layouts/Layout";
import Head from "next/head";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <ToastContainer />
    </>
  );
}

export default MyApp;
