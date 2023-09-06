import "./css/example.css";
import { AppClass } from "./AppClass";
import { Hello } from "./components/Hello";
import { HelloInDeutch } from "./components/HelloInDeutch";

// creating application - npx create-react-app [name_of_the_app]
// for starting , navigate to newly created folder with command cd name_off_the_app
// then execute npm start

// how to start application which is not generated by me
// navigate to the app folder, execute command npm install
// and then execute npm start

// this is functional component
function App() {
  let number = 10;

  const element = <h1>Hello from javascript react</h1>;

  function toUpperCaseName(user) {
    return user.name.toUpperCase();
  }

  const student = {
    name: "Martin",
    lastName: "Trajkov",
    image: "https://thispersondoesnotexist.com/",
  };

  function print() {
    console.log("I was clicked");
  }

  // jsx e sintaksna ektenzija na javascript, no toa ne e nitu
  // javascript, nitu html no ja ima mokjta i funkcionalnostite
  // na dvete
  // when we want to use javscript in jsx we use {} brackets

  // PAUZA DO 8:59

  // Da kreirame funkcionalna komponenta kade vo nekoi html elementi
  // kje gi stavite vasite 3 hobia
  // a potoa da kreirame druga komponenta vo koja kje go stavite
  // vaseto omileno hoby

  // Da kreirame i treta komponenta kade kje imame nekoj tekst
  // koj kje bide eve slika od moeto omileno hoby
  // da ima slika od hobito
  // da stavime css vnatre da toj tekst e oboen vo nekoja razlicna boja
  // i normalno slikata da ni bide vo razmer i toj css da bide
  // importiran od nekoj nadvoresen css file
  // koga kje pomineme so mouse-ot vrz slikata da ispecatime vo
  // konzola nekoj tekst (hello there!!!)

  return (
    <div className="App">
      {/* <h1 className="react-hello">Hello from React!</h1> */}
      {/* <p>5+5</p>
      <p>{5 + 5 + number} result from this should be 20</p>
      {element} */}
      {/* <h1>Hello, {toUpperCaseName("martin")}</h1> */}
      <h1>Hello, {toUpperCaseName(student)}</h1>
      <a target="blank" href="http://google.com">
        Google
      </a>
      <img src={student.image} style={{ width: 300, height: 300 }}></img>
      {/* <button onClick={print}>Click me</button> */}
      {/* <AppClass /> */}
      <Hello />
      <HelloInDeutch />
    </div>
  );
}

export default App;
