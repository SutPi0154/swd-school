import React from "react";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Content from "./pages/Content";
import Home from "./pages/Home";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/content" element={<Content />} />
      </Routes>
    </div>
  );
};

export default App;
