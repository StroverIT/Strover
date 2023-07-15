"use client"
import React, {useEffect, useRef} from "react";

const PromoCountDown = () => {


  const countToDate = new Date("June 28, 2023 00:00:00").setDate(new Date("June 28, 2023 00:00:00").getDate());
 
  return (
    <section className="relative m-0 bg-gradient-to-b from-mostlyBlackBlue to-veryDarkBlue font-redHatText">
      <section className="flex flex-col items-center justify-center w-full h-full">
        <h3 className="mt-16 text-2xl font-semibold text-center text-white uppercase xl:mb-10 xl:text-3xl">Оставащо време до края на промоцията</h3>
        {/* <!--Time--> */}
        <div className="max-xl:grid max-xl:grid-cols-2 flex justify-center items-center gap-[40px]">
          {/* <!--DAYS--> */}
         <TestComp countToDate={countToDate} type="days" text="Дни"/>
          {/* <!--HOURS--> */}
         <TestComp countToDate={countToDate} type="hours" text="Часове"/>
          
          {/* <!--MINUTES--> */}
         <TestComp countToDate={countToDate} type="minutes" text="Минути"/>
          
          {/* <!--Seconds--> */}
          <TestComp countToDate={countToDate} type="seconds" text="Секунди"/>
      
        </div>
      </section>
    </section>
  );
};

export default PromoCountDown;

function TestComp({countToDate, type,text}){
  console.log(countToDate);
  
  const dataRef = useRef(null) 

  useEffect(()=>{
    const interval =  setInterval(() => {
      const currentDate = new Date();
      const timeBetweenDates = Math.ceil((countToDate - currentDate) / 1000);
      flipAllcard(timeBetweenDates, type);
    }, 250);
    return ()=>{
      clearInterval(interval)
    }
  },[])

  /*Populate the cards with the data coming from the Declared Time*/
  function flipAllcard(time, type) {
    let flipData, flagMe
    switch (type) {
      case "seconds":
        flipData = time % 60;
        flagMe = true
        break;
        case "minutes":
          flipData = Math.floor(time / 60) % 60;

          break
          case "hours":
            flipData = Math.floor(time / 3600) % 24;

            break
            case "days":
              flipData = Math.floor(time / 86400);

              break
    
    }

    flip(dataRef.current, flipData, flagMe);
  }

  /*Flip animation function for the cards*/
  function flip(flipcard, newNumber, flag) {
    const cardTop = flipcard.querySelector("[data-card-top]");
    const startNumber = cardTop ? parseInt(cardTop.textContent, 10) : 0;

    const cardBot = flipcard.querySelector("[data-card-bot]"),
      topFlip = flipcard.querySelector("[data-flip-top]"),
      botFlip = flipcard.querySelector("[data-flip-bot]"),
      topFlipNum = flipcard.querySelector("[data-flip-top-num]"),
      botFlipNum = flipcard.querySelector("[data-flip-bot-num]");

    if (newNumber === startNumber) return;

    const displayStartNum = String(startNumber).padStart(2, "0");

    const displayNewNum = String(newNumber).padStart(2, "0");

    // if (flag) console.log("displayStartNum", displayStartNum, displayNewNum);

    const anim = (el, event, callback) => {
      const handler = () => {
        el.removeEventListener(event, handler);
        callback();
      };

      el.addEventListener(event, handler);
    };

    cardTop.textContent = displayStartNum;
    cardBot.textContent = displayStartNum;
    topFlipNum.textContent = displayStartNum;
    botFlipNum.textContent = displayNewNum;

    topFlip.classList.add("flip-card-top");
    botFlip.classList.add("flip-card-bottom");

    anim(topFlip, "animationstart", () => {
      cardTop.textContent = displayNewNum;
    });

    anim(topFlip, "animationend", () => {
      topFlipNum.innerText = displayNewNum;
      topFlip.classList.remove("flip-card-top");
    });

    anim(botFlip, "animationend", () => {
      cardBot.textContent = displayNewNum;
      botFlip.classList.remove("flip-card-bottom");
    });
  }

  return(
     <div className="flex flex-col-reverse items-center justify-center space-y-10">
            <p className="mt-[30px] text-2xl text-white font-bold">
              {text}
            </p>
            <div className="flex items-center justify-center">
              <div
                className="flex flex-col text-softRed space-y-[1px] rounded-xl container-shadow"
                ref={dataRef}
              >
                {/* <!--Top--> */}
                <span
                  className="relative xl:w-[180px] xl:h-[90px] w-[140px] h-[80px] bg-slightlyDarkerDesBlue overflow-hidden
                         rounded-tl-xl rounded-tr-xl flex justify-center items-end text-7xl xl:text-8xl"
                >
                  <div className="absolute flex items-end justify-start w-full h-full">
                    <div className="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div>
                  </div>
                  <div className="absolute flex items-end justify-end w-full h-full">
                    <div className="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div>
                  </div>
                  <span className="translate-y-[35px] xl:translate-y-[46px]" data-card-top>
                    09
                  </span>
                  {/* <!--FlipTop--> */}
                  <span
                    className="absolute xl:w-[180px] xl:h-[90px] w-[140px] h-[80px] bg-slightlyDarkerDesBlue overflow-hidden
                             rounded-tl-xl rounded-tr-xl flex justify-center items-end text-7xl xl:text-8xl top-flip-shadow"
                    data-flip-top
                  >
                    <div className="absolute flex items-end justify-start w-full h-full">
                      <div className="w-[10px] h-[8px] rounded-tr-full bg-veryDarkBlue"></div>
                    </div>
                    <div className="absolute flex items-end justify-end w-full h-full">
                      <div className="w-[10px] h-[8px] rounded-tl-full bg-veryDarkBlue"></div>
                    </div>
                    <span
                      className="translate-y-[35px] xl:translate-y-[46px]"
                      data-flip-top-num
                      data-card-top
                    >
                      00
                    </span>
                  </span>
                </span>
                {/* <!--Bottom--> */}
                <span
                  className="relative xl:w-[180px] xl:h-[90px] w-[140px] h-[80px] bg-darkDesaturatedBlue overflow-hidden 
                        rounded-bl-xl rounded-br-xl flex justify-center items-end text-7xl xl:text-8xl bottom-flip-shadow"
                >
                  <div className="absolute flex items-start justify-start w-full h-full">
                    <div className="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div>
                  </div>
                  <div className="absolute flex items-start justify-end w-full h-full">
                    <div className="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div>
                  </div>
                  <span className="-translate-y-[45px] xl:-translate-y-[45px]" data-card-bot>
                    00
                  </span>
                  {/* <!--FlipBottom--> */}
                  <span
                    className="absolute xl:w-[180px] xl:h-[90px] w-[140px] h-[80px] bg-darkDesaturatedBlue overflow-hidden 
                            rounded-bl-xl rounded-br-xl flex justify-center items-end text-7xl xl:text-8xl bottom-flip-shadow"
                    data-flip-bot
                  >
                    <div className="absolute flex items-start justify-start w-full h-full">
                      <div className="w-[10px] h-[8px] rounded-br-full bg-veryDarkBlue"></div>
                    </div>
                    <div className="absolute flex items-start justify-end w-full h-full">
                      <div className="w-[10px] h-[8px] rounded-bl-full bg-veryDarkBlue"></div>
                    </div>
                    <span className="-translate-y-[45px] xl:-translate-y-[45px]" data-flip-bot-num>
                      00
                    </span>
                  </span>
                </span>
              </div>
            </div>
          </div>
  )
}