export function Player({ player: { firstName, print } }) {
  //   console.log(props);
  return (
    <div>
      <h1>Player name is {firstName}</h1>
      <button onClick={print}>Player Score</button>
    </div>
  );
}

// Pauza do 8:53

// export function Player(props) {
//     //   console.log(props);
//     return (
//       <div>
//         <h1>Player name is {props.player.firstName}</h1>
//         <button onClick={props.player.print}>Player Score</button>
//       </div>
//     );
//   }
