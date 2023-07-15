"use client";

import React, { useState } from "react";
import QuestionsHomeData from "../data/QuestionsHomeData";

const Questions = () => {

    const lastIndex = QuestionsHomeData.length - 1
  return (
    <>
      {QuestionsHomeData.map((question, index) => {
        return (
          <div key={index}>
            <Question
              title={question.title}
              index={index}
              paragraph={question.paragraph}
              lastIndex={lastIndex}
            />
          </div>
        );
      })}
    </>
  );
};

export default Questions;


const Question = ({ title, paragraph, lastIndex, index }) => {
  const [isOpen, setOpen] = useState(index != 0 ? false : true);

  return (
    <div>
      <h2 className={`${isOpen ? "bg-blue text-white" : ""}`}>
        <button
          type="button"
          className={`flex items-center justify-between w-full p-5 font-medium text-left text-gray-500 border ${!lastIndex && "border-b-0"} border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-blue hover:text-white dark:hover:bg-gray-800`}
          data-accordion-target="#accordion-collapse-body-2"
          aria-expanded="false"
          aria-controls="accordion-collapse-body-2"
          onClick={() => setOpen(!isOpen)}
        >
          <span className="xl:text-lg">{title}</span>
          <svg
            data-accordion-icon
            className="w-6 h-6 shrink-0"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
      </h2>
      <div
        id="accordion-collapse-body-2"
        className={`${!isOpen  && "hidden"}`}
        aria-labelledby="accordion-collapse-heading-2"
      >
        <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
          {/* whitespace-pre */}
          <p className="px-2 mb-2 text-left text-gray-500 dark:text-gray-400">{paragraph}</p>
          {/* <p className="text-gray-500 dark:text-gray-400">
            Check out the{" "}
            <a
              href="https://flowbite.com/figma/"
              className="text-blue-600 dark:text-blue-500 hover:underline"
            >
              Figma design system
            </a>{" "}
            based on the utility classes from Tailwind CSS and components from
            Flowbite.
          </p> */}
        </div>
      </div>
    </div>
  );
};


