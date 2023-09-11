// export function Player({ player: { firstName, print } }) {
//   //   console.log(props);
//   return (
//     <div>
//       <h1>Player name is {firstName}</h1>
//       <button onClick={print}>Player Score</button>
//     </div>
//   );
// }

// PAUZA 8:53

export function Player(props) {
  console.log(props);
  return (
    <div>
      <h1>Player name is {props.igrac.firstName}</h1>
      <button onClick={props.igrac.print}>Player Score</button>
    </div>
  );
}
