import { Routes, Route, Link } from "react-router-dom";
import "./assets/main.css";
import Home from "./components/Home";
import Work from "./components/Work";

import "./App.css";
import resume from "./Resume.pdf";

function App() {
  return (
    <div>
      <header className="py-5">
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
            <i class="py-1 px-3 cursor-pointer fa-solid fa-moon"></i>
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
