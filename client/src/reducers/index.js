import { combineReducers } from "redux";

function vehicles(state = [], action) {
  const newState = [...state];
  switch (action.type) {
    case "LIST_VEHICLES":
      return action.value;
    case "CREATE_VEHICLE":
      newState.push(action.value);
      return newState;
    case "DELETE_VEHICLE":
      const index = newState.findIndex(v => v._id === action.value);
      newState.splice(index, 1);
      return newState;
    default:
      return state;
  }
}

const rootReducer = combineReducers({
  vehicles
});
export default rootReducer;
