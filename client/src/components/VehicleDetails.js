import React, { Component } from "react";
import PropTypes from "prop-types";

class VehicleDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vehicle: {},
      isLoaded: false
    };
  }

  componentDidMount() {
    const vehicleId = this.props.match.params.id;
    fetch(`/api/vehicles/${vehicleId}`)
      .then(res => res.json())
      .then(vehicle =>
        this.setState({
          vehicle,
          isLoaded: true
        })
      );
  }

  render() {
    return (
      <div>
        {!this.state.isLoaded ? (
          <h2>loading...</h2>
        ) : (
          <ul>
            <li>{this.state.vehicle.type}</li>
            <li>{this.state.vehicle.make}</li>
            <li>{this.state.vehicle.model}</li>
            <li>{this.state.vehicle.color}</li>
            <li>{this.state.vehicle.license}</li>
          </ul>
        )}
      </div>
    );
  }
}

VehicleDetails.propTypes = {
  match: PropTypes.object
};

export default VehicleDetails;
