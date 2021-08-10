import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../constraints/index.js";
import Product from "./Product.js";
import ProductForm from "./ProductForm.js";

export default function GymDetails() {
  const [gym, setGym] = useState(null);
  const [selectedFocus, setSelectedFocus] = useState("ALL")

  const { id } = useParams();

  useEffect(() => {
    fetch(BASE_URL + "gyms/" + id)
      .then((res) => res.json())
      .then((json) => setGym(json));
  }, [id]);

  function uniqueFocuses() {
    const focuses = gym.gym_members.map(product => product.focus)
    const uniqueFocuses = [...new Set(focuses)];
    return uniqueFocuses
  }

  function populateFocusOptions() {
      return uniqueFocuses().map(focus => <option value={focus}>{focus}</option>)
  }

  function filteredProducts() {
    if (selectedFocus === "ALL") {
        return gym.gym_members
    }
    return gym.gym_members.filter(product => product.focus === selectedFocus)
  }

  function handleSelectFocus(e) {
      setSelectedFocus(e.target.value)
  } 

  function createProduct(productDetails) {
    const newProduct = {
      ...productDetails,
      gym_id: id,
    };

    fetch(BASE_URL + "/gym_members", {
      method: "POST",
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((json) => {
        const newGym = { ...gym, gym_members: [...gym.gym_members, json] };
        setGym(newGym);
      });
  }

  return (
    <div>
      {gym && (
        <>
          <p>Gym Name: {gym.name}</p>
          <p>Gym Location: {gym.location}</p>
          <h3>Gym Members</h3>
          <select value={selectedFocus} onChange={handleSelectFocus}>
              <option value="ALL">All Focuses</option>
              {populateFocusOptions()}
          </select>
          {filteredProducts().map((product) => (
            <Product product={product} />
          ))}
          <h3>Add new Gym Member</h3>
          <ProductForm createProduct={createProduct} />
        </>
      )}
    </div>
  );
}
