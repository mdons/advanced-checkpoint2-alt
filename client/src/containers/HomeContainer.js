import { connect } from "react-redux";
import Home from "../components/Home";
import { listVehicles } from "../actions";

const mapDispatchToProps = dispatch => {
  return {
    listVehicles: vehicles => dispatch(listVehicles(vehicles))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(Home);
