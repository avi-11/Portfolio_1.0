import React from "react";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <div>
      <h3 className="mb-6">Experience</h3>
      <div className="flex flex-col space-y-4">
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
        <Link className="space-x-4 flex items-center font-medium" to="/">
          <span className="flex-none">DSC KIET</span>
          <span className="flex-shrink w-full border-t border-dashed border-zinc-400"></span>
          <span className="flex-none opacity-90">Frontend Dev</span>
          <span className="flex-none opacity-50 font-normal">May '21</span>
        </Link>
      </div>
      <h3 className="mt-12 mb-6 font-medium">Projects</h3>
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
            <span className="opacity-60">Quiz-App.vecel.app</span>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex justify-between items-center">
            <span>Nasa Space Quiz</span>
            <span>🚀</span>
          </div>
          <a
            className="flex gap-x-2 items-center mt-0.5"
            href="https://avi-11.github.io/Nasa_Hackathon_SpaceQuest/gameH.html"
          >
            <i class="fa-solid fa-link"></i>
            <span className="opacity-60">
              Nasa_Hackathon_SpaceQuest.github.io
            </span>
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
