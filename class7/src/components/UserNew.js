import { Location } from "./Location";
import { KorisnikContext } from "../index";
import React from "react";

export const UserNew = () => {
  const korisnik = React.useContext(KorisnikContext);
  console.log(korisnik);
  return (
    <div>
      <p>Name: {korisnik.name}</p>
      <p>Surname: {korisnik.surname}</p>
      <p>Job position: {korisnik.jobPosition}</p>
      <p>Hobby: {korisnik.hobby}</p>
      <Location />
    </div>
  );
};
