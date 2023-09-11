import logo from "./logo.svg";
import "./App.css";
import { Sport } from "./components/Sport";
import { Sport2 } from "./components/Sport2";
import { Sport3 } from "./components/Sport3";
import { Player } from "./components/Player";

function App() {
  let sportsAndPeople = [
    { name: "Martin", sport: "Football" },
    { name: "Laura", sport: "Tenis" },
    { name: "Vedran", sport: "Table Tenis" },
    { name: "Bobi", sport: "Handbal" },
  ];

  let player = {
    firstName: "Martin",
    score: 5,
    print: function () {
      // when we use `` we can write regular strings and inside
      // if we want to use javascript we use ${}
      console.log(`name: ${player.firstName} - score: ${player.score}`);
    },
  };

  // console.log(player);
  return (
    <div className="App">
      <h1>Hello from React props</h1>
      {/* <Sport name="Martin" sport="Football" /> */}
      {/* <Sport name="Laura" sport="Tenis" />
      <Sport name="Vedran" sport="Table Tenis" /> */}
      {/* <Sport />
      <Sport2 />
      <Sport3 /> */}
      {/* <Sport2 name="Laura" sport="Tenis" /> */}
      {/* {sportsAndPeople.map((object) => {
        return <Sport name={object.name} sport={object.sport} />;
      })} */}
      {/* <Sport3 sports={sportsAndPeople} /> */}
      <Player player={player} />
    </div>
  );
}

export default App;
