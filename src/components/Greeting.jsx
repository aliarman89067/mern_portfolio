import React, { useState } from "react";
import { laptop, portrait } from "../assets";
import { motion, scroll } from "framer-motion";

export default function Greeting() {
  const [xValue, setXValue] = useState(0);
  scroll((progress) => {
    setXValue(Math.round(progress * 200));
  });
  return (
    <section
      data-scroll
      data-scroll-speed=".1"
      className=" bg-light w-full min-h-screen flex items-center justify-center"
    >
      <div className="relative w-[400px] md:w-[700px] lg:w-[800px] translate-y-10">
        <img src={laptop} alt="laptop" className="bg-cover w-full" />
        <div className="absolute w-[300px] md:w-[524px] lg:w-[600px] h-[192px] md:h-[327px] lg:h-[377px] bg-dark top-[10px] md:top-[23px] lg:top-6 left-1/2 -translate-x-[50%] rounded-md overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: -xValue }}
            transition={{ ease: "linear", duration: 0.3 }}
            className="absolute top-1/2 left-1/2 -translate-y-[50%] -translate-x-[50%] text-light sm:text-2xl z-[10]"
          >
            <p>Nice to Meet You!</p>
          </motion.div>
          <div
            data-scroll
            data-scroll-speed=".4"
            className="relative -top-[150px] sm:-top-[300px] z-0"
          >
            <img
              src={portrait}
              alt="Portrait"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
