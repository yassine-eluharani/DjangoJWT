import React from "react";

const Card = ({ products }) => {
  return (
    <div className="bg-red-500">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} width="50" height="50" />
          <p>{product.name}</p>
          <p>{product.price}</p>
          <p>{product.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default Card;
