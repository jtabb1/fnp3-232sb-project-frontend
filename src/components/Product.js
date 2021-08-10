import React from "react";

export default function Product({ product }) {
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Price: {product.price}</p>
    </div>
  );
}
