import React from "react";
import { HERO_CONTENT } from "./../constants/index";
import profilepic from "./../assets/profilepic.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col lg:items-start">
            <h1 className="pb-16 text-6xl tracking-tight font-thin lg:mt-16 lg:text-7xl text-center lg:text-left ">
              Jahangir Naseer
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-center lg:text-left text-3xl tracking-tight text-transparent">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter ">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center ">
            <img
              className="rounded-full sm:w-90"
              src={profilepic}
              alt="Jahangir Naseer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
