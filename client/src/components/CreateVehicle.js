import React, { Component } from "react";
import PropTypes from "prop-types";

class CreateVehicle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      make: "",
      model: "",
      license: "",
      color: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    fetch("/api/vehicles", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    })
      .then(res => res.json())
      .then(result => this.props.createVehicle(result))
      .then(() => {
        this.setState({
          type: "",
          make: "",
          model: "",
          license: "",
          color: ""
        });
      })
      .catch(err => console.log("error posting new vehicle", err));
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Type:
            <input
              type="text"
              id="type"
              value={this.state.type}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Make:
            <input
              type="text"
              id="make"
              value={this.state.make}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Model:
            <input
              type="text"
              id="model"
              value={this.state.model}
              onChange={this.handleChange}
            />
          </label>
          <label>
            License:
            <input
              type="text"
              id="license"
              value={this.state.license}
              onChange={this.handleChange}
            />
          </label>
          <label>
            Color:
            <input
              type="text"
              id="color"
              value={this.state.color}
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Submit Vehicle</button>
        </form>
      </div>
    );
  }
}

CreateVehicle.propTypes = {
  createVehicle: PropTypes.func
};

export default CreateVehicle;
