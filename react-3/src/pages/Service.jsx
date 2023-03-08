import React from "react";
import { useLocation } from "react-router-dom";

const Service = () => {
  const location = useLocation();
  console.log(location);
  return (
    <div>
      {/* <h2>{location.state ? location.state.text : null}</h2> */}
      <h1>{location.state?.text}</h1>
    </div>
  );
};

export default Service;
