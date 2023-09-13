import PropTypes from "prop-types";

export const User = (props) => {
  console.log(props);
  return (
    <>
      {!props.shouldShowUser ? (
        <div>
          <h1>User:</h1>
          <p>Name: {props.user.name}</p>
          <p>Adress: {props.user.adress}</p>
          <p>Age:{props.user.age}</p>
        </div>
      ) : (
        <div>
          <h1>User1:</h1>
          <p>Name: {props.user1.name}</p>
          <p>Adress: {props.user1.adress}</p>
          <p>Age:{props.user1.age}</p>
        </div>
      )}
    </>
  );
};

User.propTypes = {
  user: PropTypes.object,
  user1: PropTypes.object,
  shouldShowUser: PropTypes.bool,
};

User.defaultProps = {
  shouldShowUser: false,
  user: { name: "John Doe", adress: "Leninova", age: 55 },
};

// PAUZA DO 20:55

// First we need to install PropTypes: npm install prop-types --save
// Then we need to import them in the component: import PropTypes from "prop-types";
// And then we can use them in the format above

// ComponentName.propTypes = {nameOfProp: PropTypes.[typeOfProp]}
// for DefaultProps the format is
// ComponentName.defaultProps = {nameOfProp: [Value of prop]}

// ZA DOMASNA
// Da napraime komponenta student koja kje ima ime/prezime / index
// neka ovaa komponenta gi pokazuva studentite vo nekoja tabela
// i taa lista da se prakja kako props od app.js
// da prakame pokraj listata uste property koe kje bide nekoj
// semestar i neka toj semestar se pokazuva na ekranot vo nekoj
// h1 element vednas posle tabelata

// Da stavime PropTypes na listata od studenti i neka taa lista bide
// required, neka ima propTypes i za semestarot

// Ako slucajno semestarot ne e praten, sekogas da se ispisuva
// tekstot zimski
