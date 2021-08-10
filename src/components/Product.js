import React from "react";

export default function Product({ product }) {
  return (
    <div>
      <p>Name: {product.name}</p>
      <p>Focus: {product.focus}</p>
    </div>
  );
}
