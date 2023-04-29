import mongoose from "mongoose"

mongoose.connect("mongodb+srv://nikoletyzatt:senhaMongo@alura-nodejs.gdabyvz.mongodb.net/corinthians-api");

let db = mongoose.connection;

export default db;