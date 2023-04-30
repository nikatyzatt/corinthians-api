import mongoose from "mongoose";

const timeSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true, unique: true, uppercase: true},
    estado: {type: String, ref: "estados", required: true, uppercase: true },
    createdAt: {type: Date, default: Date.now}
  },
  {
    versionKey: false
  }
)

const times = mongoose.model("times", timeSchema)

export default times;