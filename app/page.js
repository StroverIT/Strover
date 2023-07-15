
import "../styles/globals.css";

// Animation wrapper
import PageWrapper from "../components/Animated/PageWrapper"
// Pages
import HeroSection from "../components/pages/Home/HeroSection"
import Services from "../components/pages/Home/Services"
import WhyUs from "../components/pages/Home/WhyUs"
import FreeAnalyze from "../components/pages/Home/FreeAnalyze"
import Blog from "../components/pages/Home/Blog"





export const metadata = {
  title: "Изработка на онлайн магазин от нашите интернет паяци",
  description: "Strover е компания, специализирана в уеб разработката. Ние предлагаме широка гама от услуги, от проектиране и изграждане на нови уебсайтове до актуализиране и поддръжка на съществуващи.",
};

export default async function Home() {

  return (
    <PageWrapper>
      <main className="relative w-screen min-h-screen">
      
        <HeroSection/>
        <Services/>
        <WhyUs/>
        <FreeAnalyze/>
        <Blog/>
        {/* bg-[#375694] */}
          {/* Q&A */}
      
          {/* REVIEWS */}
          {/* <section className="relative z-10 min-h-screen px-48 ml-24 break-words min-w-screen ">
          <div className="py-10 text-center">
              <h2 className="text-3xl font-medium">Ревюта от клиенти</h2>
              <p className="mt-2 text-blue">
               <Link href="https://g.page/r/CbxkIKpAnUE0EBM">Виж всички</Link>
              </p>
            </div>
            <Reviews />
          </section> */}
      
      </main>
    </PageWrapper>
  );
}
