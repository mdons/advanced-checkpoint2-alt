import { connect } from "react-redux";
import VehicleItem from "../components/VehicleItem";
import { deleteVehicle } from "../actions/index";

const mapDispatchToProps = dispatch => {
  return {
    deleteVehicle: id => dispatch(deleteVehicle(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(VehicleItem);
