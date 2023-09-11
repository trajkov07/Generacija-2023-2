export function Sport3(props) {
  console.log(props);
  return (
    <div>
      {/* <h1>My name is Vedran!</h1>
      <p>My favourite sport is Table Tenis!</p> */}
      {props.sports.map((object, index) => {
        console.log(index);
        console.log(object);
        return (
          <div key={index}>
            <h1>My name is {object.name}</h1>
            <p>My favourite sport is {object.sport}</p>
          </div>
        );
      })}
    </div>
  );
}
