export function Sport(props) {
  console.log(props);
  const name = props.name;
  const sport = props.sport;

  return (
    <div>
      <h1>My name is {name}!</h1>
      <p>My favourite sport is {sport}.</p>
    </div>
  );
}