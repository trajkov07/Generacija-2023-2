import PropTypes from "prop-types";

export const Car = ({ vehicles }) => {
  console.log(vehicles);
  return (
    <div>
      <h3>Our Garage!</h3>
      <table border={1}>
        <thead>
          <tr>
            <th>Brand</th>
            <th>Model</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {vehicles.map((vehicle, i) => {
            return (
              <tr key={i}>
                <td>{vehicle.brand}</td>
                <td>{vehicle.model}</td>
                <td>{vehicle.year}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

Car.propTypes = {
  vehicles: PropTypes.arrayOf(PropTypes.object).isRequired,
};
