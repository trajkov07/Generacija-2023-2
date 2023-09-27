import React from "react";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export const Cars = ({ listOfCars, carTrade, trade, addQuantity }) => {
  return (
    <div>
      <ol>
        {listOfCars.map((car, i) => {
          return (
            <li key={i}>
              <span>
                {car.quantity || car.quantity === 0
                  ? `${car.brand} - ${car.quantity} available`
                  : car.brand}
              </span>
              <button onClick={() => carTrade(car)}>{trade}</button>
              {addQuantity && (
                <button onClick={() => addQuantity(car)}>Add quantity</button>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
};
