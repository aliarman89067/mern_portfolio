import React from "react";
import { boy2 } from "../assets/index";
import { motion } from "framer-motion";
import { skillsData } from "../utilities/data";
import SkillCard from "./SkillCard";

export default function Skills() {
  let description =
    "I am a full stack developer specialized in MERN (MongoDB, Express.js, React.js, Node.js) stack, with proficiency in Next.js for server-side rendering. With a strong foundation in frontend and backend technologies, I deliver robust web applications from conception to deployment, ensuring scalability, performance, and a seamless user experience.";
  return (
    <div className="w-full min-h-screen flex flex-col items-center px-10 md:px-20 py-10">
      {/* Heading */}
      <h1 className="text-light bebas text-4xl mb-10">Skills that i have</h1>
      {/* Content Container */}
      <div className="grid grid-cols-[1fr] lg:grid-cols-[2fr,1fr] w-full">
        {/* Left Section */}
        <div className="h-screen w-full lg:border-r border-light pr-10 pt-10">
          <div className="w-full grid grid-cols-[1fr,1fr] gap-5 sm:gap-10">
            {skillsData.map((item, index) => (
              <SkillCard data={item} key={index} />
            ))}
          </div>
        </div>
        {/* Right Section */}
        <div className="relative h-screen w-full pl-10 max-lg:hidden">
          <div className="w-full h-full flex justify-center items-center">
            <p className="z-10 text-sm leading-[24px]">{description}</p>
          </div>
          <div
            data-scroll
            data-scroll-speed=".1"
            className="absolute top-0 right-0 "
          >
            <img src={boy2} alt="boy" className="w-full bg-cover scale-125" />
          </div>
        </div>
      </div>
    </div>
  );
}
