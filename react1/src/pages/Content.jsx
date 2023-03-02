import React from "react";
import { Link } from "react-router-dom";

const Content = () => {
  return (
    <div>
      <h1>Content</h1>
      <Link to={"/about"}>
        <button> to about</button>
      </Link>
      <Link to={"/"}>
        <button> to home</button>
      </Link>
    </div>
  );
};

export default Content;
