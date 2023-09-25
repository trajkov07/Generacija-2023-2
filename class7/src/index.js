import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

export const KorisnikContext = React.createContext();

const user = {
  name: "Martin",
  surname: "Trajkov",
  jobPosition: "Developer",
  hobby: "Movies",
  city: "Skopje",
  street: "Jane Sandanski",
  number: 222,
};

root.render(
  <React.StrictMode>
    <KorisnikContext.Provider value={user}>
      <App />
    </KorisnikContext.Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
