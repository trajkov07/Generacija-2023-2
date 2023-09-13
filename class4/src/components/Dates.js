import { useState } from "react";

export const Dates = () => {
  // we must always set new array in the state
  // this is a must for every type
  const [dates, setDates] = useState([]);

  const addDate = () => {
    // creating object from the current date
    let date = new Date().toString();
    // ... spread operator
    // site postoecki dati sto gi imame vo dates gi kopirame i stavame
    // vo novata niza newDates
    var newDates = [...dates];

    // ja dodavame novata data
    newDates.push(date);
    console.log(newDates);
    console.log(dates);
    // gi setirame dates zaedno so novata data
    setDates(newDates);
  };

  return (
    <div>
      <h1>My Favourite Dates</h1>
      {dates.map((date, i) => {
        return <p key={i}>{date}</p>;
      })}
      <button onClick={addDate}>Add Date</button>
    </div>
  );
};
