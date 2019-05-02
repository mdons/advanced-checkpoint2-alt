const mongoose = require("mongoose");
const { Vehicle } = require("./schemas");

const VehicleModel = mongoose.model("Vehicle", Vehicle);

module.exports = {
  VehicleModel
};
