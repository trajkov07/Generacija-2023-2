import { Link } from "react-router-dom";

export const BookList = () => {
  return (
    <>
      <h1>Book List</h1>
      <Link to="/books/1">Book 1</Link>
      <br />
      <Link to="/books/2">Book 2</Link>
      <br />
      <br />
      <Link to="/books/new">New book</Link>
    </>
  );
};
