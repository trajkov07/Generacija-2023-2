import { useState } from "react";
import { Link } from "react-router-dom";

export const Characters = ({ apiData }) => {
  const [locationDetails, setLocationDetails] = useState(false);
  const [showEpisodes, setShowEpisodes] = useState(false);

  return (
    <div>
      <div className="main-container">
        {apiData &&
          apiData.results &&
          apiData.results.map((character) => (
            <div className="character-container" key={character.id}>
              <h2>
                {character.id}. {character.name}
              </h2>
              <img
                className="character-img"
                src={character.image}
                alt="characterImg"
              />
              <h3>Status: {character.status}</h3>

              <h3>
                Location:{" "}
                <Link
                  className="link"
                  onClick={() => setLocationDetails(!locationDetails)}
                >
                  {character.location.name}
                </Link>
              </h3>
            </div>
          ))}
      </div>
      <hr />
    </div>
  );
};
