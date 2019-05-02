const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;
const { VehicleModel } = require("../../mongo/models");

const list = () => {
  return VehicleModel.find({});
};

const create = vehicle => {
  return VehicleModel.create(vehicle);
};

const remove = id => {
  return VehicleModel.deleteOne({ _id: id });
};

const show = id => {
  return VehicleModel.findOne({ _id: ObjectId(id) });
};

module.exports = { list, create, remove, show };
