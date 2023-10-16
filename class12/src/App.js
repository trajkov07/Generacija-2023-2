import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import { Cake } from "./components/Cake";

function App() {
  return (
    <div className="App">
      <h1>Redux part II</h1>
      <Nav />
      <Routes>
        <Route path="/cake" element={<Cake />} />
      </Routes>
    </div>
  );
}

export default App;
