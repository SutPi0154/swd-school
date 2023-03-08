import { useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Content from "./pages/Content";
import Navbar from "./components/Navbar";
import Error from "./pages/Error";

function App() {
  // const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/content" element={<Content />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
