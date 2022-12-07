import React, { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll } from "framer-motion";
import FixedForm from "../form/FixedForm";

export default function IdeasInWebsite({ isBox = true }) {
  const [form, openForm] = useState(false);

  const { scrollY } = useScroll();
  const [bgPos, setBgPos] = useState(0);
  useEffect(() => {
    return scrollY.onChange((latest) => {
      setBgPos(latest - 100);
    });
  }, []);
  return (
    <section>
      <motion.section
        className={` ${
          isBox && "box"
        } bg-primaryBlue-500  py-32 bg-[url('/icons/banner.png')] `}
        style={{
          backgroundPositionX: bgPos,
        }}
      >
        <div className="text-center ">
          <h3 className="text-2xl font-bold lg:text-4xl text-shadow">
            Превърнете идеите си в сайт!
          </h3>
          <motion.div className="mt-10">
            <motion.button
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.8 }}
              className="px-5 py-3 font-semibold rounded-lg shadow-lg lg:px-8 lg:py-5 lg:text-lg btn-bg-color"
              onClick={() => openForm(true)}
            >
              НАПРАВЕТЕ ЗАПИТВАНЕ СЕГА
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
      <section className="text-black">
        <AnimatePresence mode="wait" initial={false}>
          {form && (
            <FixedForm
              isOpen={form}
              setOpen={openForm}
              color="border-blue-50"
              btnColor="bg-blue-50"
              bgColor="bg-blue-200"
              number="+359 87 623 7725"
              scrollBarThumb="scrollbar-thumb-primaryBlue-150"
              scrollBarTrack="scrollbar-track-primaryBlue-500"
            />
          )}
        </AnimatePresence>
      </section>
    </section>
  );
}
