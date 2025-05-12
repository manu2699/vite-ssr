import { Routes, Route, NavLink } from "react-router";

import About from "./About";
import Home from "./Home";

import "./App.css";

// import reactLogo from "./assets/react.svg";

// const Card = lazy(() => import("./Card"));

function App() {
  return (
    <>
      <h4>Vite + React</h4>

      <nav>
        <NavLink to="/home" end>
          Home
        </NavLink>
        <NavLink to="/about" end>
          About
        </NavLink>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
