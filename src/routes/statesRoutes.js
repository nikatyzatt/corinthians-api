import express from "express";
import StateController from "../controllers/statesController.js";

const router = express.Router();

router
    .get("/estados", StateController.getAllStates)
    .get("/estados/:id", StateController.getState)
    .post("/estados", StateController.addNewState)
    .put("/estados/:id", StateController.updateState)
    .delete("/estados/:id", StateController.deleteState)
export default router;