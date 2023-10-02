import { useOutletContext, useParams } from "react-router-dom";

export const Book = () => {
  const bookList = [{}];

  // ova id e ona sto se naoga vo app.js vo dinamickata ruta za book
  const { id } = useParams();
  const obj = useOutletContext();
  console.log(obj);

  return (
    <h1>
      Book {id} - genre: {obj.genre} - located on shelf number {obj.shelf}
    </h1>
  );
};
