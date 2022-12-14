// Next things
import Head from "next/head";

import Brands from "../components/Brands/ListBrands";

// Components
import AboutUs from "../components/indexPage/AboutUs";
import FirmsWhoTrust from "../components/indexPage/FirmsWhoTrust";
import HeroSection from "../components/indexPage/HeroSection";
import InfoAboutCompany from "../components/indexPage/InfoAboutCompany";
import MoreInfo from "../components/indexPage/MoreInfo/MoreInfo";
import Navigation from "../components/indexPage/Navigation";
import Services from "../components/indexPage/Services";

// Icons

export default function Home() {
  return (
    <div className="index-bg ">
      <Head>
        <title>Strover - Изработка на сайтове</title>
        <link rel="icon" href="/logos/web-spider.svg" />
        <meta
          name="description"
          content="Strover Company изработва, поддържа и развива сайтове. Предлага услуги в сферата на дигиталният маркетинг, като включва SEO, създаване, поддържане и развиване на социални мрежи, брандиране и ребрандиране. За всичко което Ви трябва да е на едно място, на достъпна цена с прекрасно обслужване."
        />
        <meta property="og:title" content="Strover Company" />
        <meta
          property="og:description"
          content="Strover Company изработва, поддържа и развива сайтове. Предлага услуги в сферата на дигиталният маркетинг, като включва SEO, създаване, поддържане и развиване на социални мрежи, брандиране и ребрандиране. За всичко което Ви трябва да е на едно място, на достъпна цена с прекрасно обслужване."
        />
        <meta
          property="og:image"
          content="https://www.linkpicture.com/q/STROVER-POST.jpg"
        />
        <meta property="og:url" content="https://strover.bg/" />
        <meta name="robots" content="index, follow" />

        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Navigation />

      <main className="relative mt-5">
        <HeroSection />
        <InfoAboutCompany />
        {/* <MoreInfo /> */}
        <AboutUs />
        <Services />
        <FirmsWhoTrust />
        <Brands
          logistics={true}
          digital={true}
          web={true}
          bg="bg-primaryBlue-900"
          py="sm:pt-24 pb-36 max-lg:py-20"
          totalLen={3}
        />
      </main>
    </div>
  );
}
