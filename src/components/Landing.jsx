import React, { useEffect, useState } from "react";
import { boy } from "../assets";
import { motion } from "framer-motion";
import { MoveRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Landing() {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setIsMounted(true);
    }, 1000);
  }, []);
  return (
    <section
      data-scroll
      data-scroll-speed="-.2"
      className="relative w-full min-h-[calc(100vh+40px)] flex justify-center items-center p-[40px] overflow-hidden"
    >
      {/* right short content */}
      <div className="landingDesc max-w-[250px] sm:max-w-[300px] flex flex-col gap-2">
        <p className="text-light sm:text-lg font-light leading-6">
          An full stack developer who covert coffee into code
        </p>
        <Link
          to="/projects"
          className="flex gap-3 items-center font-light text-peach"
        >
          Have a look to my creations
          <MoveRight />
        </Link>
      </div>
      {/* Cover Image */}
      <div className="absolute top-1/5 left-1/5 -translate-x-1/5 -translate-y-1/5 w-[450px] sm:w-[550px] mt-12">
        <img
          src={boy}
          alt="Cover Image"
          className="bg-cover object-cover w-full"
        />
      </div>
      {/* Gradient */}
      <div className="coverGradient absolute top-1/5 left-1/5 -translate-x-1/5 -translate-y-1/5 w-[200px] sm:w-[300px] h-[200px] sm:h-[300px] opacity-[30%] rounded-full z-[0] blur-3xl"></div>

      {/* Content */}
      <div className="flex flex-col items-center z-[20] w-full">
        <div className="overflow-hidden h-[11vw] mb-[2vw]">
          <div className="flex items-center">
            {isMounted &&
              "I am ali arman".split("").map((item, index) => {
                return (
                  <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: "150px" }}
                    animate={{ opacity: 1, y: "0px" }}
                    transition={{
                      ease: "linear",
                      duration: 0.5,
                      delay: index * 0.06,
                    }}
                    className={`text-[10vw] bebas text-light ${
                      item === " " && "ml-[1.5vw]"
                    }`}
                  >
                    {item}
                  </motion.h1>
                );
              })}
          </div>
        </div>
        {isMounted && (
          <div className="relative w-full flex justify-center">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ ease: "linear", duration: 1 }}
              className="flex w-full md:max-w-3xl absolute  flex-wrap justify-center px-5"
            >
              {"I am passionate about front end and also backend i can learn new thing faster delivering high-quality software that exceeds expectations"
                .split("")
                .map((item, index) => (
                  <p
                    key={index}
                    className={`text-zinc-400 font-light ${
                      item === " " && "ml-1"
                    }`}
                  >
                    {item}
                  </p>
                ))}
            </motion.div>
            <div className="flex md:max-w-3xl absolute w-full flex-wrap justify-center px-5">
              {"I am passionate about front end and also backend i can learn new thing faster delivering high-quality software that exceeds expectations"
                .split("")
                .map((item, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      ease: [0.61, 1, 0.88, 1],
                      duration: 0.3,
                      delay: index * 0.03,
                    }}
                    className={`text-light font-light ${
                      item === " " && "ml-1"
                    }`}
                  >
                    {item}
                  </motion.p>
                ))}
            </div>
          </div>
        )}
      </div>
      {/* Mouse */}
      <div className="group absolute left-1/2 bottom-32 w-[43px] h-[65px] border border-light rounded-full flex justify-center p-2 hover:bg-light transition-all cursor-pointer">
        <motion.span
          initial={{ y: 0 }}
          animate={{ y: "100%" }}
          transition={{
            ease: [0.37, 0, 0.63, 1],
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="w-[5px] h-[15px] bg-light rounded-full group-hover:bg-dark transition-all"
        ></motion.span>
      </div>
    </section>
  );
}
