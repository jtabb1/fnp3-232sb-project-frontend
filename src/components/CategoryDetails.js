import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import Product from "./Product.js";
import ProductForm from "./ProductForm.js";

export default function CategoryDetails() {
  const [category, setCategory] = useState(null);
  const [selectedPrice, setSelectedPrice] = useState("ALL")

  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + "categories/" + id)
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, [id]);

  // DELETE

  function deleteProduct(product) {
    fetch(BASE_URL + "products/" + product.id, {
      method: "DELETE",
    });
    // console.log(category);
    const newProducts = category.products.filter((g) => g.id !== product.id);
    const newCategory = {...category};
    newCategory["products"] = newProducts;
    // console.log(newCategory);
    setCategory(newCategory);
  }

  
  function uniquePrices() {
    const prices = category.products.map(product => product.price)
    const uniquePrices = [...new Set(prices)];
    return uniquePrices
  }

  function populatePriceOptions() {
      return uniquePrices().map(price => <option key={price} value={price}>{price}</option>)
  }

  function filteredProducts() {
    if (selectedPrice === "ALL") {
        return category.products
    }
    return category.products.filter(product => parseInt(product.price) === parseInt(selectedPrice) )
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
        <div className="container mt-5 mb-5">
          <div className="d-flex justify-content-center row">
            <div className="col-md-10">

              <p>Category Name: {category.name}</p>
              <h3>Products</h3>
              <select value={selectedPrice} onChange={handleSelectPrice}>
                  <option value="ALL">All Prices</option>
                  {populatePriceOptions()}
              </select>
              {filteredProducts().map((product) => (
                <Product key={product.id} product={product} deleteProduct={deleteProduct}/>
              ))}
              <h3>Add new Product</h3>
              <ProductForm createProduct={createProduct} />

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
