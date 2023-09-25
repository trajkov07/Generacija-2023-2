import { KorisnikContext } from "../index";
import React from "react";
export const Location = () => {
  const location = React.useContext(KorisnikContext);

  return (
    <div>
      <h1>Location:</h1>
      <p>City: {location.city}</p>
      <p>Street: {location.street}</p>
      <p>Number: {location.number}</p>
    </div>
  );
};
