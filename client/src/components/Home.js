import React, { Component } from "react";
import ListOfVehiclesContainer from "../containers/ListOfVehiclesContainer";
import CreateVehiclesContainer from "../containers/CreateVehicleContainer";
import PropTypes from "prop-types";

class Home extends Component {
  componentDidMount() {
    fetch("/api/vehicles")
      .then(res => res.json())
      .then(vehicles => this.props.listVehicles(vehicles))
      .catch(() => this.props.listVehicles([]));
  }

  render() {
    return (
      <div>
        <CreateVehiclesContainer />
        <ListOfVehiclesContainer />
      </div>
    );
  }
}

Home.propTypes = {
  listVehicles: PropTypes.func
};

export default Home;
