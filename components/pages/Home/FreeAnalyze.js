import React from "react";
import BGv2 from "../../SVG/BGv2";
import Inputs from "./FreeAnalyzeInputs"
import Image from "next/image";
const FreeAnalyze = () => {
  return (
      <section className="relative w-screen min-h-screen ">
      
        <div class="absolute top-0 left-0 z-10"><BGv2/></div>
        <section className="container relative z-20 flex-col min-h-screen text-center flex-center">
          <div className="relative">
            <h1 className="text-3xl font-bold text-center xl:text-5xl">
              <span className="tracking-wide ">Безплатен анализ на  </span>
              <span className="text-primary-100">вашия уебсайт</span>
            </h1>
        <div className="absolute -right-2 -top-44 opacity-60"><div className="relative h-44 w-44"><Image src="/homeIcons/research.png" fill alt="free analyzing" /></div></div>
          </div>
          <p className="balance max-lg:text-sm max-w-5xl mt-4 text-lg">Ще получите анализ на вашия уебсайт напълно безплатно като проверим скоростта, оценките на Google, SEO оптимизацията и покриване на изискванията за оптимален код и дизайн. </p>
          <div className="grid items-center justify-center gap-10 mt-10">
          <Inputs/>
          </div>
        </section>
      </section>

  );
};

export default FreeAnalyze;
