import { useState } from "react";
import { Link, Outlet, useSearchParams } from "react-router-dom";

export const BookLayout = () => {
  // const [number, setNumber] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams({ n: 3 });
  console.log(searchParams);
  const number = searchParams.get("n");
  const firstName = searchParams.get("name");
  return (
    <>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <Link to={`/books/${number}`}>Book {number}</Link>
      <br />
      <br />
      <Link to="/books/new">New book</Link>
      <br />
      <input
        type="number"
        value={number}
        onChange={(e) => setSearchParams({ n: e.target.value })}
      />
      <h1>{firstName}</h1>
      {
        // OUTLET se koristi za prikaz na konkretnite komponenti
        // koj se prikazuvaat posle spodeluvaniot UI
      }
      <Outlet context={{ shelf: "3B", genre: "Thriller" }} />
    </>
  );
};
