import ListOfVehicles from "../components/ListOfVehicles";
import { connect } from "react-redux";

function mapStateToProps(store) {
  return {
    vehicles: store.vehicles
  };
}

export default connect(
  mapStateToProps,
  null
)(ListOfVehicles);
