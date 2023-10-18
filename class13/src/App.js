import logo from "./logo.svg";
import "./App.css";
import { Nav } from "./components/Nav";
import { Routes, Route, Navigate } from "react-router-dom";
import { LocalWeather } from "./components/LocalWeather";
import { Cities } from "./components/Cities";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/local-weather" />} />
        <Route path="/search-cities" element={<Cities />} />
        <Route path="/local-weather" element={<LocalWeather />} />
      </Routes>
    </div>
  );
}

export default App;
