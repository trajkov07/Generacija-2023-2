// we are sending props inside Sport2 arguments
// but we are using destrucuring and we imediatly have the variables
export function Sport2({ name, sport }) {
  return (
    <div>
      <h1>My name is {name}!</h1>
      <p>My favourite sport is {sport}!</p>
    </div>
  );
}
