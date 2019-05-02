import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const del = (id, props) => {
  fetch(`/api/vehicles/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json"
    }
  }).then(() => props.deleteVehicle(id));
};

const VehicleItem = props => (
  <li>
    <div>
      {props.vehicle.type}: {props.vehicle.make} {props.vehicle.model}
    </div>
    <Link to={`/vehicles/${props.vehicle._id}`}>details</Link>
    <button onClick={() => del(props.vehicle._id, props)} type="submit">
      delete
    </button>
  </li>
);

VehicleItem.propTypes = {
  vehicle: PropTypes.object,
  deleteVehicle: PropTypes.func
};

export default VehicleItem;
