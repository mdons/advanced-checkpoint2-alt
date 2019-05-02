import CreateVehicle from "../components/CreateVehicle";
import { connect } from "react-redux";
import { createVehicle } from "../actions/index";

function mapDispatchToProps(dispatch) {
  return {
    createVehicle: vehicle => dispatch(createVehicle(vehicle))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(CreateVehicle);
