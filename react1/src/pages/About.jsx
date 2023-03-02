import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1> About</h1>
      <Link to={"/content"}>
        <button>To Content</button>
      </Link>{" "}
      <Link to={"/"}>
        <button>To Home</button>
      </Link>
    </div>
  );
};

export default About;
