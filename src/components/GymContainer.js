import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constraints/index.js";
import Gym from "./Gym.js";
import GymForm from "./GymForm.js";
import '../styles/GymContainer.css'

export default function GymContainer() {
  const [gyms, setGyms] = useState(null);

  // READ

  useEffect(() => {
    fetch(BASE_URL + "gyms")
      .then((res) => res.json())
      .then((json) => setGyms(json));
  }, []);

  function populateGyms() {
    console.log(gyms);
    return gyms.map((gym) => (
      <Gym gym={gym} deleteGym={deleteGym} updateGym={updateGym} key={gym.id} />
    ));
  }

  // CREATE

  function createGym(gym) {
    fetch(BASE_URL + "gyms", {
      method: "POST",
      body: JSON.stringify(gym),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((json) => setGyms([...gyms, json]));

    // PESSIMISTIC RENDERING
  }

  // UPDATE

  function updateGym(gym) {
    fetch(BASE_URL + "gyms/" + gym.id, {
      method: "PATCH",
      body: JSON.stringify(gym),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });

    // OPTIMISTIC RENDERING

    const newGyms = gyms.map((g) => {
      if (g.id === gym.id) {
        g = gym;
      }
      return g;
    });
    setGyms(newGyms);
  }

  // DELETE

  function deleteGym(gym) {
    fetch(BASE_URL + "gyms/" + gym.id, {
      method: "DELETE",
    });
    const newGyms = gyms.filter((g) => g.id !== gym.id);
    setGyms(newGyms);
  }

  return (
    <div>
      <h2 className="gyms-header">All Gyms</h2>
      <div className="gym-container">{gyms && populateGyms()}</div>
      <GymForm createGym={createGym} />
    </div>
  );
}
