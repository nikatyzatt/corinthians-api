import mongoose from "mongoose";

const estadoSchema = new mongoose.Schema(
  {
    id: {type: String},
    nome: {type: String, required: true, unique: true, uppercase: true},
  },
  {
    versionKey: false
  }
);

const estados = mongoose.model('estados', estadoSchema);

export default estados;