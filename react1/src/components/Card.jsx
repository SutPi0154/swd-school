import React from "react";

const Card = ({product}) => {
  return (
    <>
      <div style={{ width: "18rem" }} key={product.id} className="card p-4">
        <div className="card-body">
          <img src={product.image} alt="" height="100px" />
          <h4 className="text-truncate mt-5 mb-3">{product.title}</h4>
          <p className="text-truncate">{product.description}</p>
          <button className="btn btn-primary  text-center ">Add To Cart</button>
        </div>
      </div>
    </>
  );
};

export default Card;
