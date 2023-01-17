import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./components/Day7/Home";
import NotFound from "./components/Day7/NotFound";
import About from "./components/Day7/About";
import Contact from "./components/Day7/Contact";
import PostDetails from "./components/Day7/PostDetails";

import "./App.css";

const App = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="/dfghjk">UnKnown Link</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/posts/:id" element={<PostDetails />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
