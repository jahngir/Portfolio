import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiWordpressLine } from "react-icons/ri";
import { FaShopify } from "react-icons/fa";
import { RiNodejsLine } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-7xl text-cyan-400 sm:text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiWordpressLine className="text-7xl text-white sm:text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <FaShopify className="text-7xl text-green-500 sm:text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNodejsLine className="text-7xl text-green-500 sm:text-4xl" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <SiMongodb className="text-7xl text-green-500 sm:text-4xl" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
