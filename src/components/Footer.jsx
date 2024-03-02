import React from "react";
import { ArrowUp, Facebook, Github, Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  const scrollHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <section className="flex items-center justify-between px-10 md:px-20 py-16">
      <h1 className="text-xl font-semibold">ALI_ARMAN</h1>
      <div className="flex items-center gap-4">
        <a
          target="_blank"
          href="https://www.facebook.com/profile.php?id=61556723557522"
        >
          <div className="relative group w-10 h-10 rounded-full bg-light flex justify-center items-center cursor-pointer">
            <Facebook className="text-dark w-5 h-5 group-hover:scale-[115%] transition-all" />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.instagram.com/code_athic/?next=%2F"
        >
          <div className="relative group w-10 h-10 rounded-full bg-light flex justify-center items-center cursor-pointer">
            <Instagram className="text-dark w-5 h-5 group-hover:scale-[115%] transition-all" />
          </div>
        </a>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/ali-arman-08507524a/"
        >
          <div className="relative group w-10 h-10 rounded-full bg-light flex justify-center items-center cursor-pointer">
            <Linkedin className="text-dark w-5 h-5 group-hover:scale-[115%] transition-all" />
          </div>
        </a>
        <a target="_blank" href="https://github.com/aliarman89067">
          <div className="relative group w-10 h-10 rounded-full bg-light flex justify-center items-center cursor-pointer">
            <Github className="text-dark w-5 h-5 group-hover:scale-[115%] transition-all" />
          </div>
        </a>
      </div>
      <div
        onClick={scrollHandler}
        className="w-10 h-10 rounded-full bg-light flex justify-center items-center cursor-pointer"
      >
        <ArrowUp className="text-dark w-5 h-5" />
      </div>
    </section>
  );
}
