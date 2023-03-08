import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Child from "./Child";

const Home = () => {
  const navigate = useNavigate();
  const handler = () => {
    navigate("/about");
  };
  const refe = useRef();
  const nav = useNavigate();
  const [count, setCount] = useState();
  const click = () => {
    nav("/service", { state: { text: refe.current.value } });
    console.log(refe.current.value);
  };
  return (
    <div>
      <h1 className=" text-red-100">Min ga lar par</h1>
      {/* <button onClick={handler}>click</button> */}
      {count}
      <input type="text" ref={refe} />
      <button onClick={click}>click</button>
      <Child />
    </div>
  );
};

export default Home;
