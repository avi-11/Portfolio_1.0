import { Routes, Route, Link } from "react-router-dom";
import "./assets/main.css";
import Home from "./components/Home";
import Work from "./components/Work";

import "./App.css";
import resume from "./Resume.pdf";
import { useState } from "react";

function App() {
  const [dark,setDark]=useState(false);
  return (
    <div className={dark?"bg-black h-screen":"bg-white h-screen"}>
      <header className={dark?"text-white py-5":"py-5"}>
        <nav className="flex justify-between items-center">
          <Link to="/" className="font-extrabold text-lg tracking-wider">
            Av.11
          </Link>
          <div className="flex items-center font-semibold gap-x-1">
            <button className="py-1 px-3 cursor-pointer">
              <a target="_blank" rel="noreferrer" href={resume}>
                Resume
              </a>
            </button>
            <button className="py-1 px-3 cursor-pointer">
              <Link to="/work">Work</Link>
            </button>
            <i onClick={(e)=>setDark(!dark)} class="py-1 px-3 cursor-pointer fa-solid fa-moon"></i>
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work" element={<Work />} />
      </Routes>
    </div>
  );
}

export default App;
