import logo from "./logo.svg";
import "./App.css";
import { User } from "./components/User";
import React from "react";
import { Homepage } from "./components/Homepage";
import { UserInfo } from "./components/UserInfo";
import { User2Context } from "./uttils/User2Context";

// this is the creation of the context
export const UserContext = React.createContext();

// export const User2Context = React.createContext();

function App() {
  const user = {
    name: "Martin",
    surname: "Trajkov",
    jobPosition: "Developer",
    hobby: "Movies",
    city: "Skopje",
    street: "Jane Sandanski",
    number: 222,
  };

  return (
    <div className="App">
      {/* <h1>Hello from class 7</h1> */}
      {/* <UserContext.Provider value="Laura">
        <User />
      </UserContext.Provider> */}
      {/* <KorisnikContext.Provider value={user}> */}
      {
        // we must use value in the provider it is reserved word
      }
      <User2Context.Provider value={{ theme: "dark", font: 22, role: "ADMIN" }}>
        <Homepage />
        <UserInfo />
      </User2Context.Provider>
      {/* </KorisnikContext.Provider> */}
    </div>
  );
}

export default App;
