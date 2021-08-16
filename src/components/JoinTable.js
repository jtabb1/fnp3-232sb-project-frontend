import React from "react";
import { useEffect } from "react";
import { BASE_URL } from "../constraints/index.js";
// import { useState } from "react";
// import { useParams } from "react-router-dom";
// import Product from "./Product.js";
// import ProductForm from "./ProductForm.js";

export default function JoinTable() {

  // READ

  useEffect(() => {
    fetch(BASE_URL + "categories")
      .then((res) => res.json())
      .then((json) => console.log(json));
  }, []);

  return ( <div><p>Hello.</p></div> );

  /*
  const [category, setCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("ALL")

  const { id } = useParams();

  useEffect( () => {
    fetch(BASE_URL + "categories/" + id)
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, [id]);

  function uniquePrices() {
    const prices = category.products.map(product => product.price)
    const uniquePrices = [...new Set(prices)];
    return uniquePrices
  }

  function populatePriceOptions() {
      return uniquePrices().map(price => <option value={price}>{price}</option>)
  }

  function filteredProducts() {
    if (selectedPrice === "ALL") {
        return category.products
    }
    return category.products.filter(product => product.price === selectedPrice)
  }

  function handleSelectPrice(e) {
      setSelectedPrice(e.target.value)
  } 

  function createProduct(productDetails) {
    const newProduct = {
      ...productDetails,
      category_id: id,
    };

    fetch(BASE_URL + "/products", {
      method: "POST",
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((json) => {
        const newCategory = { ...category, products: [...category.products, json] };
        setCategory(newCategory);
      });
  }

  return (
    <div>
      {category && (
        <>
          <p>Category Name: {category.name}</p>
          <h3>Products</h3>
          <select value={selectedPrice} onChange={handleSelectPrice}>
              <option value="ALL">All Prices</option>
              {populatePriceOptions()}
          </select>
          {filteredProducts().map((product) => (
            <Product product={product} />
          ))}
          <h3>Add new Product</h3>
          <ProductForm createProduct={createProduct} />
        </>
      )}
    </div>
  );
  */

}
