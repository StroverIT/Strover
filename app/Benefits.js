"use client";

import React, { useEffect } from "react";

import BenefitsHomeData from "../data/BenefitsHomeData";
import Card from "./Card";

import { useAnimate, useInView, stagger } from "framer-motion";

const Benefits = () => {
  const [container, animate] = useAnimate();
  const isInView = useInView(container);

  useEffect(() => {
    if (isInView) {
      animate(
        "section",
        { y: ["10vw", "0vw"], opacity: ["0%", "100%"] },
        { duration: 0.3, delay: stagger(0.1), ease: [0.32, 0.23, 0.4, 0.9] }
      );
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);
  return (
    <div className="container grid gap-4 mt-4 xl:gap-10 xl:mt-10 xl:grid-cols-2" ref={container}>
      {BenefitsHomeData.map((item) => {
        return (
          <Card
            title={item.title}
            paragraph={item.paragraph}
            key={item.title}
            icon={item.icon}
            imageUrl={item.imageUrl}
          />
        );
      })}
    </div>
  );
};

export default Benefits;
