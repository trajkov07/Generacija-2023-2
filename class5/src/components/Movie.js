import { useState, useEffect } from "react";

export const Movie = () => {
  //   const [counter, setCounter] = useState(0);
  const [movie1Votes, setMovie1Votes] = useState(0);
  const [movie2Votes, setMovie2Votes] = useState(0);

  useEffect(() => {
    console.log("Voting");
    if (movie1Votes === 5) {
      console.log("Interstellar wins");
    }

    if (movie2Votes === 5) {
      console.log("Hypnotic wins");
    }
  }, [movie1Votes]);

  return (
    <div>
      <h1>Welcome to our voting app</h1>
      {/* <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h3>Counter: {counter}</h3> */}
      <div>
        <img
          src="https://nypost.com/wp-content/uploads/sites/2/2014/11/interstellar1a.jpg?quality=75&strip=all"
          style={{ width: 150, height: 150 }}
        />
        <br />
        <button
          onClick={() => {
            setMovie1Votes(movie1Votes + 1);
          }}
        >
          Vote
        </button>
        <h2>Interstelar votes: {movie1Votes}</h2>
        <br />
        <br />
      </div>
      <div>
        <img
          src="https://m.media-amazon.com/images/M/MV5BNmNmNWNiMjUtZmYyMC00OWVhLThmMTItNjkxYzU4Yzk2NTdlXkEyXkFqcGdeQXVyMDc5ODIzMw@@._V1_FMjpg_UX1000_.jpg"
          style={{ width: 150, height: 150 }}
        />
        <br />
        <button
          onClick={() => {
            setMovie2Votes(movie2Votes + 1);
          }}
        >
          Vote
        </button>
        <h2>Hypnotic votes {movie2Votes}</h2>
      </div>
    </div>
  );
};
