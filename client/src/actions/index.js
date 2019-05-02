export function listVehicles(vehicles) {
  console.log("list vehicles", vehicles);
  return {
    type: "LIST_VEHICLES",
    value: vehicles
  };
}

export function createVehicle(vehicle) {
  console.log("create vehicle", vehicle);
  return {
    type: "CREATE_VEHICLE",
    value: vehicle
  };
}

export function deleteVehicle(id) {
  console.log("delete vehicle", id);
  return {
    type: "DELETE_VEHICLE",
    value: id
  };
}
