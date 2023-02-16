import React from "react";
import "./App.css";

const App = () => {
  const name = "Mg Mg";
  const arr = ["one", "two", "three", "four"];
  const info = () => {
    console.log("ok par");
  };

  return (
    <>
      <div className="card-app">
        {arr.map((item) => (
          <div className="card">
            <img
              src="https://i.pinimg.com/236x/8a/fb/fe/8afbfecaccbfef792a1a11ebbf0e891f.jpg"
              alt=""
            />
            <h2>Card Title </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              beatae harum cum quibusdam veritatis ratione.
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default App;
