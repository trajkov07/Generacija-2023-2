import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake";
import { Comments } from "./components/Comments";

function App() {
  return (
    <div className="App">
      <h1>Redux part II</h1>
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
