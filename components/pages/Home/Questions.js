import React from 'react';
import AllQuestions from "../../../app/Questions";
import QuestionImage from "../../Animated/QuestionImage"

const Questions = () => {
    return (
        <section className="relative z-10 flex flex-col justify-center min-h-[80vh] px-48 ml-24 break-words min-w-screen ">
         <QuestionImage/>
        <div className="py-10 text-center ">
          <h2 className="text-4xl font-medium">Често задавани въпроси</h2>
          <p className="mt-3 mb-10">
            Често задавани въпроси от клиенти, преди съвместна работа
          </p>
        </div>
        <AllQuestions />
      </section>
    );
}

export default Questions;
