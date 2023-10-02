import logo from "./logo.svg";
import "./App.css";
import { Route, Routes, Link, useRoutes, NavLink } from "react-router-dom";
import { Home } from "./components/Home";
import { BookList } from "./components/BookList";
import { Book } from "./components/Book";
import { NewBook } from "./components/NewBook";
import { NotFound } from "./components/NotFound";
import { BookLayout } from "./components/BookLayout";
import "./css/style.css";

// install react router
// npm i react-router-dom --save

function App() {
  // se sto moze da se napravi so Routes vo jsx, moze da se napravi
  // i so javascript element
  let element = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
    {
      path: "/books",
      element: <BookLayout />,
      children: [
        {
          index: true,
          element: <BookList />,
        },
      ],
    },
  ]);

  return (
    <div className="App">
      {
        // react ni dozvoluva da imame poveke ruti so isti paths
      }
      {/* <Routes>
        <Route path="/books/new" element={<h1>Some Extra content</h1>} />
      </Routes> */}
      <nav>
        <ul>
          <li>
            {
              // to ni kazuva koe treba da bide naseto url
            }
            <Link to="/" replace>
              Home
            </Link>
          </li>
          <li>
            <NavLink
              style={({ isActive }) => {
                return isActive ? { color: "red" } : { color: "blue" };
              }}
              to="/"
            >
              Home with Navlink
            </NavLink>
          </li>
          <li>
            <Link to="/books" reloadDocument>
              Books
            </Link>
          </li>
          <li>
            <NavLink to="/books">Books with navLink</NavLink>
          </li>
          {/* <li> THIS SHOULD NOT BE USED
            <a href="/books">Books with anchor</a>
          </li> */}
        </ul>
      </nav>
      {/* {element} */}
      <Routes>
        {
          // path e vsusnost kako kje izgleda naseto url
          // element e sto kje se pokaze na ekran
          // ako imame : togas rutata e dinamicka
        }
        <Route path="/" element={<Home />} />
        {/* <Route path="/books" element={<BookList />} />
        <Route path="/books/:id" element={<Book />} />
        <Route path="/books/new" element={<NewBook />} /> */}
        {
          // BookLayout kje se pokazuva na site ruti sto pocnuvaat
          // so /books, child rutite bi se pokazuvale preku
          // OUTLET-ot sto go imame vo BookLayout
        }
        <Route path="/books" element={<BookLayout />}>
          <Route index element={<BookList />} />
          <Route path=":id" element={<Book />} />
          <Route path="new" element={<NewBook />} />
        </Route>
        {
          // * znaci dokolku ruterot ne fati nikoja od
          // rutite sto ni se definirani, togas kje ja ispecati taa
        }
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;

// PAUZA DO 21:03
