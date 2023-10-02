import logo from "./logo.svg";
import "./App.css";
import { Navigation } from "./Components/Navigation";
import { Routes, Route } from "react-router-dom";
import { Posts } from "./Components/Posts";
import { Comments } from "./Components/Comments";
import { Comment } from "./Components/Comment";

function App() {
  return (
    <div className="App">
      <h1>I am learning API's</h1>
      <Navigation />
      <Routes>
        <Route path="/comments" element={<Comments />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/single-comment/:id" element={<Comment />} />
      </Routes>
    </div>
  );
}

export default App;
