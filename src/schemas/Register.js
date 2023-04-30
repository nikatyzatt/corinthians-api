import mongoose from "mongoose";

const registerSchema = new mongoose.Schema (
    {
        id: {type: String},
        name: { type: String, required: true, uppercase: true},
        username: {type: String, required: true, unique: true, lowercase: true},
        team: {type: mongoose.Schema.Types.ObjectId, ref: "teams", required: true},
        createdAt: {type: Date, default: Date.now}
    },
    {
        versionKey: false
    }
)

const registers = mongoose.model("registers", registerSchema);

export default registers;