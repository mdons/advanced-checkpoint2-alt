import React from "react";
import PropTypes from "prop-types";
import VehicleItemContainer from "../containers/VehicleItemContainer";

const ListOfVehicles = props => (
  <div>
    <h2>Vehicles:</h2>
    <ul>
      {props.vehicles.map(vehicle => (
        <VehicleItemContainer vehicle={vehicle} key={vehicle._id} />
      ))}
    </ul>
  </div>
);

ListOfVehicles.propTypes = {
  vehicles: PropTypes.array
};

export default ListOfVehicles;
