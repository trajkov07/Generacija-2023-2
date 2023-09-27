import { useParams } from "react-router-dom";

export const Book = () => {
  const bookList = [{}];

  // ova id e ona sto se naoga vo app.js vo dinamickata ruta za book
  const { id } = useParams();

  return <h1>Book {id}</h1>;
};
