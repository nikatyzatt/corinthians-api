import mongoose from "mongoose";

const teamSchema = new mongoose.Schema(
  {
    id: {type: String},
    name: {type: String, required: true, unique: true, uppercase: true},
    state_id: {type: mongoose.Schema.Types.ObjectId, required: true, uppercase: true },
    createdAt: {type: Date, default: Date.now}
  },
  {
    versionKey: false
  }
)

const teams = mongoose.model("teams", teamSchema)

export default teams;