import Layout from "../components/layouts/Layout";
// import NestedLayout from '../components/nested-layout'

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

// Translations
import serverSideTranslations from "../utils/serverSideTranslations";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

export default function Home() {
  return (
    <div className="index-bg ">
      <Head>
        <title>Изработка на сайт от нашите интернет паяци</title>
        <link rel="icon" href="/logos/web-spider.svg" />
        <meta
          name="description"
          // content="Strover Company изработва, поддържа и развива сайтове. Предлага услуги в сферата на дигиталният маркетинг, като включва SEO, създаване, поддържане и развиване на социални мрежи, брандиране и ребрандиране. За всичко което Ви трябва да е на едно място, на достъпна цена с прекрасно обслужване."
          // content="Strover Company изработва, поддържа и развива сайтове. Предлага услуги в дигиталния маркетинг, включително SEO, създаване, поддържане и развитие на социални мрежи, брандиране и ребрандиране. Всичко нужно на едно място, на достъпна цена и с отлично обслужване."
          content="Strover е компания, специализирана в уеб разработката. 
          Ние предлагаме широка гама от услуги, от проектиране и изграждане на нови уебсайтове до актуализиране и поддръжка на съществуващи."
        />
        <meta
          property="og:title"
          content="Strover Company | Изработка, поддръжка и развитие на всякакъв вид сайтове | SEO | Google Ads | Дигитален маркетинг"
        />
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
        <link rel="canonical" href="https://strover.bg/" />
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

Home.getLayout = (page) => (
  <Layout useTranslation={useTranslation}>{page}</Layout>
);

export const getServerSideProps = async ({ locale }) => {
  // Wrapping in Promis.all is not necessary, I use it simply so that if there are any other asynchronous operations, then not to use them through await and not to block each other's work
  const [translations] = await Promise.all([
    serverSideTranslations(locale, ["common", "home", "footer", "brands"]),
  ]);

  return {
    props: {
      ...translations,
    },
  };
};

// export async function getStaticProps({ locale }) {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale, ["common", "home", "footer"])),
//       // Will be passed to the page component as props
//     },
//   };
// }
