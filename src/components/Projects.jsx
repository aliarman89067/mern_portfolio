import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye, Github } from "lucide-react";
import ScreenMatcher from "../utilities/ScreenMatcher";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Projects() {
  const [onAnimateLine, setOnAnimateLine] = useState(true);
  const [projectsData, setProjecstData] = useState([]);
  const [lineIndex, setLineIndex] = useState(0);
  const [onAnimateProject, setOnAnimateProject] = useState(true);
  const [projectIndex, setProjectIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [isDescription, setIsDescription] = useState(false);

  const isMedium = ScreenMatcher("(max-width: 1024px)");
  // API WORK
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get(
        "https://portfoliobackend89067.vercel.app/api/getThreeProjects",
        {
          withCredentials: true,
        }
      );
      setProjecstData(data);
    };
    fetchData();
  }, []);
  return (
    <section className="py-20 px-10 max-lg:gap-10 flex w-full flex-col min-h-screen overflow-x-hidden overflow-y-hidden">
      {/* Heading */}
      <h1 className="text-light bebas text-4xl mb-10 text-center">
        my awesome projects
      </h1>
      {projectsData.length > 0 &&
        projectsData.map((item, index) => {
          const isEven = Math.round(index % 2) == 0;
          return (
            <div
              key={index}
              className={`group relative w-full lg:w-1/2 h-[350px] lg:h-[25vw] ${
                isEven ? "lg:mr-auto" : "lg:ml-auto"
              } ${index === 0 ? " " : "lg:-mt-32"} flex items-center`}
            >
              {/* Line */}
              <motion.div
                initial={{ height: 2 }}
                whileInView={
                  onAnimateLine && lineIndex === index && { height: "100%" }
                }
                transition={{
                  ease: [0.65, 0, 0.35, 1],
                  duration: 1,
                  delay: index * 0.1,
                }}
                onAnimationComplete={() => {
                  setOnAnimateLine(true);
                  setLineIndex(index + 1);
                }}
                className={`absolute top-1/2 z-10 hidden lg:flex -translate-y-1/2 ${
                  isEven ? "left-10" : "right-10"
                } w-[2px] rounded-full bg-light/50 ${
                  isEven ? "mr-auto" : "ml-auto"
                } ${index === 0 ? " " : "mt-10 xl:-mt-[4.5vw]"}`}
              ></motion.div>
              {/* Project */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={
                  onAnimateProject &&
                  projectIndex === index && { width: "100%" }
                }
                transition={{
                  ease: "linear",
                  duration: 1,
                  delay: isMedium ? 0 : 0.9,
                }}
                onAnimationComplete={() => {
                  setOnAnimateProject(true);
                  setProjectIndex(index + 1);
                }}
                className={`relative w-full h-[350px] lg:h-[25vw] transition-all duration-200 ease-linear ${
                  isEven ? "dark-overlay-left" : "dark-overlay-right"
                } ${isEven ? "lg:mr-auto" : "lg:ml-auto"} ${
                  index === 0 ? " " : `lg:mt-20 xl:-mt-[9vw]`
                } ${isEven ? "lg:ml-10" : "lg:mr-10"} ${
                  isEven ? "lg:pr-5 xl:pr-10" : "lg:pl-5 xl:pl-10"
                }`}
                onMouseEnter={() => setCurrentIndex(index)}
                onMouseLeave={() => setCurrentIndex(null)}
              >
                {/* Description */}
                <div
                  onMouseEnter={() => setIsDescription(true)}
                  onMouseLeave={() => setIsDescription(false)}
                  className={`absolute z-[20] ${
                    isEven ? "top-4 lg:right-14" : "top-4 lg:left-14"
                  } max-lg:right-6 w-7 h-7 opacity-0 group-hover:opacity-[100%] rounded-full bg-light/50 flex justify-center items-center hover:bg-light/80 transition-all duration-200 ease-linear text-dark text-lg`}
                >
                  i
                </div>
                {/* Description Box */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={
                    isDescription && currentIndex === index
                      ? { opacity: 1, y: 0 }
                      : { opacity: 0, y: 10 }
                  }
                  transition={{ ease: "linear", duration: 0.2 }}
                  className={`absolute top-[5%] ${
                    isEven ? "lg:left-[92%]" : "lg:right-[92%]"
                  } max-lg:right-10 max-lg:top-7 ${
                    isDescription
                      ? "pointer-events-auto"
                      : "pointer-events-none"
                  } w-full max-w-[400px] md:max-w-xl p-3 rounded-md bg-light z-[100] opacity-0`}
                  onMouseEnter={() =>
                    isDescription
                      ? setIsDescription(true)
                      : setIsDescription(false)
                  }
                  onMouseLeave={() => setIsDescription(false)}
                >
                  <p className="text-dark text-sm">{item.description}</p>
                </motion.div>
                {/* Buttons */}
                <div className="absolute flex opacity-0 group-hover:opacity-[100%] gap-10 top-[70%] left-1/2 -translate-x-1/2 z-[20] transition-all duration-200 ease-linear">
                  <a target="_blank" href={item.githubLink}>
                    <div className="h-12 w-12 cursor-pointer rounded-full bg-light/50 flex justify-center items-center hover:bg-light/80 transition-all overflow-hidden">
                      <div className="w-full h-full rounded-full flex justify-center items-center hover:scale-110 transition-all">
                        <Github className="text-dark" />
                      </div>
                    </div>
                  </a>
                  <a target="_blank" href={item.projectLink}>
                    <div className="h-12 w-12 cursor-pointer rounded-full bg-light/50 flex justify-center items-center hover:bg-light/80 transition-all overflow-hidden">
                      <div className="w-full h-full rounded-full flex justify-center items-center hover:scale-110 transition-all">
                        <Eye className="text-dark" />
                      </div>
                    </div>
                  </a>
                </div>
                {/* Heading */}
                <div
                  className={`flex items-center absolute z-10 top-1/2 -translate-y-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 ${
                    isEven
                      ? "lg:right-0 lg:translate-x-1/3"
                      : "lg:left-0 lg:-translate-x-1/3"
                  }`}
                >
                  {item.title.split("").map((item, i) => (
                    <motion.h3
                      key={i}
                      initial={{ opacity: 0, y: 30, z: 10 }}
                      animate={
                        currentIndex === index
                          ? { opacity: 1, y: 0, z: 10 }
                          : { opacity: 0, y: 30, z: 10 }
                      }
                      transition={{
                        ease: [],
                        duration: 0.3,
                        delay: i * 0.06,
                      }}
                      style={{ textShadow: "0 0 10px rgba(0,0,0,.4)" }}
                      className={`text-6xl md:text-8xl bebas z-10 relative text-light font-bold ${
                        item === " " && "mx-2"
                      }`}
                    >
                      {item}
                    </motion.h3>
                  ))}
                </div>
                <div className="group w-full h-full rounded-md z-0 overflow-hidden">
                  <img
                    src={item.imageLink}
                    alt="Project Image"
                    className="w-full h-full ease-linear duration-200 transition-all object-cover"
                  />
                </div>
              </motion.div>
            </div>
          );
        })}
      <Link
        to="/projects"
        className="group relative px-6 py-3 rounded-md border border-light  bg-transparent max-w-fit mx-auto overflow-hidden my-10"
      >
        <p className="relative z-10 group-hover:text-dark transition-all duration-300 ease-linear">
          See more
        </p>
        <div className="absolute top-[100%] left-1/2 -translate-x-1/2 w-40 h-40 bg-light rounded-full group-hover:top-[-100%] transition-all duration-300 ease-linear z-0"></div>
      </Link>
    </section>
  );
}
