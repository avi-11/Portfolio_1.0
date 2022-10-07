import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <h3 className="mb-6 font-bold color-blue text-xl">Experience</h3>
      <div className="flex flex-col space-y-4 bg-white p-4 rounded-xl">
      <Link className="space-x-4 flex items-center font-medium" to="/">
          <span className="flex-none">DSC KIET</span>
          <span className="flex-shrink w-full border-t border-dashed border-zinc-400"></span>
          <span className="flex-none opacity-90">Web Lead</span>
          <span className="flex-none opacity-50 font-normal">Jul '22</span>
        </Link>
        <Link className="space-x-4 flex items-center font-medium" to="/">
          <span className="flex-none">DSC KIET</span>
          <span className="flex-shrink w-full border-t border-dashed border-zinc-400"></span>
          <span className="flex-none opacity-90">Core Member</span>
          <span className="flex-none opacity-50 font-normal">jan '22</span>
        </Link>
        <Link className="space-x-4 flex items-center font-medium" to="/">
          <span className="flex-none">DSC KIET</span>
          <span className="flex-shrink w-full border-t border-dashed border-zinc-400"></span>
          <span className="flex-none opacity-90">UI/UX designer</span>
          <span className="flex-none opacity-50 font-normal">Aug '21</span>
        </Link>
        
      </div>
      <h3 className="mt-12 mb-6 font-bold text-lg color-blue-400">Projects</h3>
      <div className="flex flex-col space-y-4">
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span>NFT Marketplace</span>
            <span>🚀</span>
          </div>
          <a
            className="flex gap-x-2 items-center mt-0.5"
            href="https://audionft-marketplace-4cb5be1w4-geekcoderraj.vercel.app/"
          >
            <i class="fa-solid fa-link"></i>
            <span className="opacity-60">audionft-marketplace.vecel.app</span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span>Quiz App</span>
            <span>🚀</span>
          </div>
          <a
            className="flex gap-x-2 items-center mt-0.5"
            href="https://quiz-app-jet.vercel.app/"
          >
            <i class="fa-solid fa-link"></i>
            <span className="opacity-60">wordle-black-six.vercel</span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span>Wordle</span>
            <span>🚀</span>
          </div>
          <a
            className="flex gap-x-2 items-center mt-0.5"
            href="https://wordle-black-six.vercel.app/"
          >
            <i class="fa-solid fa-link"></i>
            <span className="opacity-60">Quiz-App.vecel.app</span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span>Tech Geekz (ongoing)</span>
            <span>🚀</span>
          </div>
          <a
            className="flex gap-x-2 items-center mt-0.5"
            href="https://github.com/avi-11/tech-geekz-frontend-1"
          >
            <i class="fa-solid fa-link"></i>
            <span className="opacity-60">tech_geekz.github.com</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Work;
