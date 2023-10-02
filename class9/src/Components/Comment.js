import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";

export const Comment = () => {
  const { id } = useParams();

  const [comment, setComment] = useState(undefined);

  useEffect(() => {
    fetch(`${API_URL}/comments/${id}`)
      .then((res) => res.json())
      .then((result) => setComment(result))
      .catch((err) => alert(err));
  }, []);

  return (
    <div>
      <h1>Single comment</h1>
      {comment ? (
        <div>
          <span>Id: {comment.id}</span>
          <p>Name: {comment.name}</p>
          <p>Email: {comment.email}</p>
          <p>Body: {comment.body}</p>
        </div>
      ) : (
        <h1>Loading comment</h1>
      )}
    </div>
  );
};
