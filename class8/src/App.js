import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";

// install react router
// npm i react-router-dom --save

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            {
              // to ni kazuva koe treba da bide naseto url
            }
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/books">Books</Link>
          </li>
          {/* <li> THIS SHOULD NOT BE USED
            <a href="/books">Books with anchor</a>
          </li> */}
        </ul>
      </nav>

      <Routes>
        {
          // path e vsusnost kako kje izgleda naseto url
          // element e sto kje se pokaze na ekran
        }
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BookList />} />
      </Routes>
    </div>
  );
}

export default App;
