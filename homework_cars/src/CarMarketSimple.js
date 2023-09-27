import { useState } from "react";
import { Cars } from "./Cars";

export const CarMarketSimple = () => {
  const [cars, setCars] = useState([
    { id: 1, brand: "BMW" },
    { id: 2, brand: "AUDI" },
    { id: 3, brand: "Ford" },
  ]);

  const [ownedCars, setOwnedCars] = useState([]);

  const [newBrand, setNewBrand] = useState("");

  function addNewBrand() {
    let newObject = {
      id: cars.length + 1,
      brand: newBrand,
    };

    setCars([...cars, newObject]);
    setNewBrand("");
  }

  function carBuy(car) {
    setOwnedCars([...ownedCars, car]);
  }

  function sellCar(car) {
    setOwnedCars([...ownedCars.filter((ownedCar) => ownedCar.id !== car.id)]);
  }

  return (
    <div id="app">
      <hr />

      <h1>Cars for sell</h1>

      <input
        type="text"
        placeholder="Enter new brand"
        value={newBrand}
        onChange={(e) => {
          setNewBrand(e.target.value);
        }}
      />
      <button onClick={addNewBrand}>Add New Brand</button>

      <Cars listOfCars={cars} carTrade={carBuy} trade="Buy" />
      <hr />
      <h1>Owned cars</h1>
      <Cars listOfCars={ownedCars} carTrade={sellCar} trade="Sell" />
    </div>
  );
};
