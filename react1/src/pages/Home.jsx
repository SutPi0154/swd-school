import React from "react";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <NavLink to={"/about"}>
        <button>to about</button>
      </NavLink>
      <Link to={"/content"}>
        {" "}
        <button>to content</button>
      </Link>
      <Link to={"/about"}>
        <button> to About</button>
      </Link>
    </div>
  );
};

export default Home;
