// Next things
import Head from "next/head";
import Image from "next/legacy/image";
import Brands from "../components/Brands/ListBrands";

// Components
import AboutUs from "../components/indexPage/AboutUs";
import FirmsWhoTrust from "../components/indexPage/FirmsWhoTrust";
import HeroSection from "../components/indexPage/HeroSection";
import MoreInfo from "../components/indexPage/MoreInfo/MoreInfo";
import Navigation from "../components/indexPage/Navigation";
import Services from "../components/indexPage/Services";

// Icons

export default function Home() {
  return (
    <div className="index-bg ">
      <Head>
        <title>Strover</title>
        <meta
          name="description"
          content="Изработка и поддръжка на уебсайтове, създаване на социални мрежи, развитие на бизнеси в онлайн пространството"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation />

      <main className="relative mt-5">
        <HeroSection />
        {/* <MoreInfo /> */}
        <AboutUs />
        <Services />
        <FirmsWhoTrust />
        <Brands
          logistics={true}
          digital={true}
          web={true}
          bg="bg-brands-index-color"
          py="sm:py-56 max-sm:pb-24 max-lg:py-20"
          totalLen={3}
        />
      </main>
    </div>
  );
}
