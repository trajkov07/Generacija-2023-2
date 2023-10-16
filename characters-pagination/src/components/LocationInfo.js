import { useParams } from "react-router-dom";

export const LocationInfo = ({ location }) => {
  const { id } = useParams();
  const onelocation = location.find((place) => place.id === Number(id));

  return (
    <div>
      <h3>
        More information for <mark>{onelocation.name}</mark>
      </h3>
      <h5>Type: {onelocation.type}</h5>
      <h5>Dimension: {onelocation.dimension}</h5>
      <h6>Created: {onelocation.created}</h6>
    </div>
  );
};
