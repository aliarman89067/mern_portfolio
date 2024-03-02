import Greeting from "./components/Greeting";
import Landing from "./components/Landing";
import Navbar from "./components/Navbar";
import LocomotiveScroll from "locomotive-scroll";
import Skills from "./components/Skills";
import Marquee from "./components/Marquee";
import Projects from "./components/Projects";
import { Routes, Route } from "react-router-dom";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AllProjects from "./components/AllProjects";

export default function App() {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className="w-full min-h-screen bg-dark text-light overflow-x-hidden overflow-y-auto">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Landing />
              <Greeting />
              <Skills />
              <Marquee />
              <Projects />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* TODO:Add actuall all projects component */}
        <Route path="/projects" element={<AllProjects />} />
      </Routes>
    </div>
  );
}
