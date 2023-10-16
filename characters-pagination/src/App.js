import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import { Characters } from "./components/Characters";
import { useEffect, useState } from "react";
import { Pagination } from "./components/Pagination";
import { API_URL } from "./utils/constants";
import { LocationInfo } from "./components/LocationInfo";
import { EpisodeDetails } from "./components/EpisodeDetails";

function App() {
  // curentPage e ona sto ni oznacuva na koja strana se naogame
  const [currentPage, setCurrentPage] = useState(1);
  const [apiData, setApiData] = useState({});

  useEffect(() => {
    console.log("FETCHING DATA WITH PAGE: " + currentPage);
    fetch(API_URL + "/character?page=" + currentPage)
      .then((res) => res.json())
      .then((result) => setApiData(result))
      .catch((err) => alert(err));
  }, [currentPage]);

  return (
    <div className="App">
      <h1>
        RICK AND MORTY{" "}
        <Link className="link" to="/character">
          CHARACTERS
        </Link>
      </h1>

      <Routes>
        <Route path="/character" element={<Characters apiData={apiData} />} />
      </Routes>

      <Pagination
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        apiData={apiData}
      />
    </div>
  );
}

export default App;
