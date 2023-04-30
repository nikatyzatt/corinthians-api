import express from "express";
import TeamController from "../controllers/teamsController.js";

const router = express.Router();

router
    .get("/times", TeamController.getAllTeams)
    .get("/times/busca", TeamController.findTeam)
    .get("/times/:id", TeamController.getTeam)
    .post("/times", TeamController.addNewTeam)
    .put("/times/:id", TeamController.updateTeam)
    .delete("/times/:id", TeamController.deleteTeam)
export default router;