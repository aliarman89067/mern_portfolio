import React, { useState } from "react";
import { motion, scroll } from "framer-motion";

export default function Marquee() {
  const [scrollValue, setScrollValue] = useState(0);
  const [scrollValue2, setScrollValue2] = useState(0);
  scroll((progress) => {
    setScrollValue(Math.round(progress * 1500));
    setScrollValue2(Math.round(progress * 600));
  });
  return (
    <section className="relative w-full h-screen bg-light overflow-hidden">
      {/* one */}
      <motion.div
        initial={{ x: "-50px", rotate: 20 }}
        whileInView={{ x: -scrollValue, rotate: 20 }}
        transition={{ ease: "linear" }}
        className={`absolute p-6 rounded-e-sm bg-dark top-[50%]`}
      >
        <h1 className="text-8xl font-bold text-light bebas whitespace-nowrap">
          Next section is my projects section i am so excited to show you Next
          section is my projects section i am so excited to show you
        </h1>
      </motion.div>

      {/* two */}
      <motion.div
        initial={{ x: "0%", rotate: -15 }}
        whileInView={{ x: scrollValue2, rotate: -15 }}
        transition={{ ease: "linear" }}
        className={`absolute p-6 rounded-e-sm bg-dark top-[10%]`}
      >
        <h1 className="text-8xl font-bold text-light bebas whitespace-nowrap">
          Next section is my projects section i am so excited to show you Next
          section is my projects section i am so excited to show you
        </h1>
      </motion.div>
      {/* three */}
      <motion.div
        initial={{ x: "0%", rotate: -5 }}
        whileInView={{ x: -scrollValue, rotate: -5 }}
        transition={{ ease: "linear" }}
        className={`absolute p-6 rounded-e-sm bg-dark top-1/2`}
      >
        <h1 className="text-8xl font-bold text-light bebas whitespace-nowrap">
          Next section is my projects section i am so excited to show you Next
          section is my projects section i am so excited to show you
        </h1>
      </motion.div>
    </section>
  );
}
