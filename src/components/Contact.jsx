import React, { useState } from "react";
import { laptop } from "../assets";
import { SendHorizonal } from "lucide-react";
import Lottie from "lottie-react";
import thankYou from "../assets/thank-you.json";

export default function Contact() {
  const [isSend, setIsSend] = useState(false);
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIsSend(true);
    setTimeout(() => {
      setIsSend(false);
    }, 2000);
  };
  return (
    <section className="w-full min-h-screen bg-light flex justify-center items-center overflow-hidden">
      <div className="relative max-xl:hidden w-[90%] md:w-[80%] lg:w-[60%] translate-y-8">
        <div
          className={`absolute top-[4%] left-[12.5%] w-[75%] h-[63%] ${
            isSend ? "bg-white" : "bg-dark"
          } rounded-md transition-all duration-200`}
        >
          {isSend ? (
            <div className="w-full h-full flex justify-center items-center p-20">
              <Lottie
                animationData={thankYou}
                loop={false}
                autoPlay={true}
                className="w-full h-full"
              />
            </div>
          ) : (
            <form
              onSubmit={handleFormSubmit}
              className="flex flex-col w-full h-full gap-1 justify-center items-center p-10"
            >
              <label className="flex flex-col w-full">
                <p className="text-lg text-light max-md:hidden">Name</p>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full p-2 rounded-md bg-light border border-zinc-300 outline-none text-dark"
                />
              </label>
              <label className="flex flex-col w-full">
                <p className="text-lg text-light max-md:hidden">Email</p>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full p-2 rounded-md bg-light border border-zinc-300 outline-none text-dark"
                />
              </label>
              <label className="flex flex-col w-full">
                <p className="text-lg text-light max-md:hidden">Message</p>
                <textarea
                  placeholder="Enter your message"
                  className="w-full p-2 rounded-md bg-light border border-zinc-300 outline-none text-dark h-16 md:h-24 resize-none"
                ></textarea>
              </label>
              <button
                type="submit"
                className="group w-full mt-2 p-1 md:p-2 rounded-md bg-light text-dark flex items-center gap-1 justify-center text-lg font-medium cursor-pointer"
              >
                Send
                <SendHorizonal className="w-5 h-5 group-hover:translate-x-2 transition-all" />
              </button>
            </form>
          )}
        </div>
        <img src={laptop} alt="Laptop" className="w-full" />
      </div>
      <div className="flex flex-col w-full xl:hidden">
        <h1 className="text-dark bebas text-4xl mb-10 text-center">
          contact us
        </h1>
        <form
          onSubmit={handleFormSubmit}
          className="flex flex-col w-full h-full gap-3 justify-center items-center p-10 lg:p-20"
        >
          <label className="flex flex-col w-full">
            <p className="text-lg text-dark ">Name</p>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full p-2 rounded-md bg-light border border-zinc-300 outline-none text-dark"
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-lg text-dark ">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 rounded-md bg-light border border-zinc-300 outline-none text-dark"
            />
          </label>
          <label className="flex flex-col w-full">
            <p className="text-lg text-dark ">Message</p>
            <textarea
              placeholder="Enter your message"
              className="w-full p-2 rounded-md bg-light border border-zinc-300 outline-none text-dark h-16 md:h-24 resize-none"
            ></textarea>
          </label>
          <button
            type="submit"
            className="group w-full mt-2 p-2 rounded-md bg-dark text-light flex items-center gap-1 justify-center text-lg font-medium cursor-pointer"
          >
            Send
            <SendHorizonal className="w-5 h-5 group-hover:translate-x-2 transition-all" />
          </button>
        </form>
      </div>
    </section>
  );
}
