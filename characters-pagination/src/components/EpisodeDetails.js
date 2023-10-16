import { useParams } from "react-router-dom";

export const EpisodeDetails = ({ episode }) => {
  const { id } = useParams();
  const characterEpisodes = episode.find((ep) => ep.id === Number(id));

  return (
    <div>
      <ul>
        <div>
          <li className="episodes">Name: {characterEpisodes.name}</li>
          <h6>Air date: {characterEpisodes.air_date}</h6>
        </div>
      </ul>
    </div>
  );
};
