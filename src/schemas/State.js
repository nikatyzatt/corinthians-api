import mongoose from "mongoose";

const stateSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true, unique: true, uppercase: true},
    createdAt: {type: Date, default: Date.now}
  },
  {
    versionKey: false
  }
);

const states = mongoose.model('states', stateSchema);

export default states;