import { Link } from "react-router-dom";
export const Navigation = () => {
  return (
    <ul>
      <li>
        <Link to="/comments">Comments</Link>
      </li>
      <li>
        <Link to="/posts">Posts</Link>
      </li>
    </ul>
  );
};
