import { useEffect, useState } from "react";
import { API_URL } from "../Uttils/constants";

export const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/posts`)
      .then((res) => res.json())
      .then((result) => setPosts(result));
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.length > 0 ? (
        posts.map((post) => {
          return (
            <div key={post.id}>
              <p>ID: {post.id}</p>
              <p>Title: {post.title}</p>
              <p>Body: {post.body}</p>
              <hr />
            </div>
          );
        })
      ) : (
        <h1>Loading your posts!!!</h1>
      )}
    </div>
  );
};
