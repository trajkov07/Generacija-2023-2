import React, { useState } from "react";
import { Cars } from "./Cars";

//* Definirame niza na avtomobili koi se dostapni za prodazba
// Sekoj avtomobil ima "id", "brand"(marka) i "quantity"(kolicina na dostapni avtomobili)
export const CarMarket = () => {
  const initialCarsForSale = [
    { id: 1, brand: "BMW", quantity: 5 },
    { id: 2, brand: "AUDI", quantity: 3 },
    { id: 3, brand: "Ford", quantity: 2 },
  ];

  //* Go koristite "useState" za cuvanje na sostojbata na komponentata
  // "carsForSale" ke sodrzi lista na avtomobili za prodazba, "ownedCars" ke sodrzi lista na avtomobili koi se kupeni, a "newBrand" ke go cuva tekstot od vneseniot nov brend na avtomobil
  const [carsForSale, setCarsForSale] = useState(initialCarsForSale);
  const [ownedCars, setOwnedCars] = useState([]);
  const [newBrand, setNewBrand] = useState("");

  //* Koga korisnikot ke vnese tekst na poleto "Enter new Brand", ovaa f-ja go azurira sostojbata "newBrand" so vrednosta na vneseniot tekst
  const handleNewBrandChange = (e) => {
    setNewBrand(e.target.value);
  };

  //* Koga korisnikot ke klikne na kopceto "Add New Brand" se sozdava nov objekt "newCar" so "id", "brand" go koristi veneseniot tekst za noviot brend, a "quantity" e postaveno na 1
  // Potoa se azurira sostojbata "carsForSale", so noviot avtomobil i se resetira "newBrand"
  const handleAddNewBrand = () => {
    // da proverime dali postoi kolata no po brand name

    const newCar = { id: carsForSale.length + 1, brand: newBrand, quantity: 1 };
    // go dodavame noviot objekt vo nizata na avtomobili za prodazba
    setCarsForSale([...carsForSale, newCar]);
    // go setirame poleto za nov brand na prazno
    setNewBrand("");
  };

  const handleBuy2 = (car) => {
    // treba da ja izminime listata i da go namalime quantity
    // na cars for sale
    // da ja izminime owned cars nizata i dokolu postoi da dodademe
    // quantity, a dokolku ne da go dodademe celiot objekt
  };

  //* Koga korisnikot ke klikne na kopceto "Buy" se azurira sostojbata "carsForSale" za da se namali kolicinata na dostapni avtomobili
  // Ako veke postoi kupen avtomonil so istiot "id", se zgolemuva kolicinata na kupeni avtomobili, inaku se dodava nov kupen avtomobil vo "ownedCars"
  const handleBuy = (car) => {
    // ja vrtime nizata na avtomobili za prodavanje i gi stavame vo nova niza site avtomobili
    // osven onoj sto bil kupen (ova go znaeme preku negovoto id), na kupeniot avtomobil
    // samo mu go namaluvame negovoto quantity
    const updatedCarsForSale = carsForSale.map((c) =>
      c.id === car.id ? { ...c, quantity: c.quantity - 1 } : c
    );

    // ja updejtame listata na avtomobili koj se na prodazba
    setCarsForSale(updatedCarsForSale);

    // preku find metodot probuvame da vidime dali avtomobilot sto se kupuva vekje go imame
    // vo nizata owned cars, odnosno dali vekje ednas sme go kupile
    const ownedCar = ownedCars.find((c) => c.id === car.id);

    if (ownedCar) {
      // ako vekje ednas sme go kupile togas zgolemuvame samo quantity
      // odnosno velime sega go imame toj brand uste ednas
      ownedCar.quantity += 1;
    } else {
      // ako dosega nemame kupeno avtomobil od toj brand togas go dodavame vo
      // listata so kupeni avtomobili
      // ...ownedCars gi mapira site dosegasni avtomobili a , {id: car.id, brand: car.brand, quantity: 1}
      // go dodava noviot avtomobil
      setOwnedCars([
        ...ownedCars,
        { id: car.id, brand: car.brand, quantity: 1 },
      ]);
    }
  };

  //* Koga korisnikot ke klikne na kopceto "Sell" se azurira sostojbata "ownedCars" za da se namali kolicinata na kupeni avtomobili
  const handleSell = (car) => {
    // preku map metodot gi vrtime site avtomobili i gi stavame vo nova niza
    // no onoj sto e prodaden, ako e ispolnet uslovot po id (c.id === car.id)
    // go menuvame odnosno mu namaluvame quantity
    const updatedOwnedCars = ownedCars.map((c) =>
      c.id === car.id ? { ...c, quantity: c.quantity - 1 } : c
    );

    console.log(updatedOwnedCars);

    // ova e proverka dokolku imame nekoj avtomobil koj nema quantity
    const checkWhetherZero = updatedOwnedCars.filter((c) => c.quantity > 0);

    console.log(checkWhetherZero);
    // ja setirame updejtiranata lista na avtomobili koj gi imame vo owned cars
    setOwnedCars(checkWhetherZero);
  };

  const addQuantity = (car) => {
    // ja vrtime nizata na avtomobili za prodavanje i gi stavame vo nova niza site avtomobili
    // osven onoj sto bil kliknat za add quantity (ova go znaeme preku negovoto id), na toj avtomobil
    // samo mu go zgolemuvame negovoto quantity
    const updatedCarsForSale = carsForSale.map((c) =>
      c.id === car.id ? { ...c, quantity: c.quantity + 1 } : c
    );

    // ja updejtame listata na avtomobili koj se na prodazba
    setCarsForSale(updatedCarsForSale);
  };

  return (
    <div>
      <h1>Cars for Sell</h1>
      <input
        type="text"
        placeholder="Enter new Brand"
        value={newBrand}
        onChange={handleNewBrandChange}
      />
      <button onClick={handleAddNewBrand}>Add New Brand</button>

      <Cars
        listOfCars={carsForSale}
        carTrade={handleBuy}
        trade="Buy"
        addQuantity={addQuantity}
      />

      <h1>Owned cars</h1>
      <Cars listOfCars={ownedCars} carTrade={handleSell} trade="Sell" />
    </div>
  );
};
