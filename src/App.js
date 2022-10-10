import { Routes, Route, Link } from "react-router-dom";
import "./assets/main.css";
import Home from "./components/Home";
import Work from "./components/Work";

import "./App.css";
import resume from "./Resume.pdf";
import { useState } from "react";

function App() {
  const [dark,setDark]=useState(false);
  const [view,setView]=useState(false)
  return (
    <div>
      <header className={dark?"text-white py-5 bg-blue-700 px-4 rounded-lg m-2":"px-4 rounded-lg m-2 bg-white py-5"}>
        <nav className="flex justify-between items-center mb-4">
          <Link to="/" className="font-bold text-lg tracking-wider bg-blue rounded-lg text-lg p-2">
            Avi-11
          </Link>
          <div className="flex items-center font-semibold gap-x-1">
            <button className="py-1 px-3 cursor-pointer font-bold">
              <a target="_blank" rel="noreferrer" href={resume}>
                Resume
              </a>
            </button>
            <button className="py-1 px-3 cursor-pointer font-bold
            ">
              <Link to="/work">Work</Link>
            </button>
            {dark?<i onClick={(e)=>setDark(!dark)} class="py-1 px-3 cursor-pointer fa-solid fa-sun hover:scale:50"></i>:<i onClick={(e)=>setDark(!dark)} class="py-1 px-3 cursor-pointer fa-solid fa-moon hover:scale-50"></i>}
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
