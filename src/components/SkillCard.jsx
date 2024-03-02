import { motion } from "framer-motion";
import React from "react";

export default function SkillCard({ data }) {
  let number = 1;
  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      transition={{ ease: [0.61, 1, 0.88, 1], duration: 0.5, delay: 0.5 }}
      className="flex flex-col bg-light rounded-md h-[260px] overflow-hidden"
    >
      {data.map((item, index) => {
        return (
          <div key={index} className="flex flex-col gap-4">
            {index === 0 && (
              <div className="w-full bg-zinc-200 h-10">
                <div className="bg-light px-4 w-fit h-full text-lg text-dark flex items-center gap-2">
                  <img
                    src={item.icon}
                    alt="icons"
                    className="w-5 h-5 object-cover"
                  />
                  <p className="text-sm font-medium">{item.heading}</p>
                </div>
              </div>
            )}
            {index !== 0 && (
              <div
                className={`text-dark px-4 flex items-center ${
                  index === 1 && "mt-3"
                }`}
              >
                <p className="mr-3 text-[#1E3860] text-sm">{number++}</p>
                <p className="text-sm">{item.text}</p>
              </div>
            )}
          </div>
        );
      })}
    </motion.div>
  );
}
