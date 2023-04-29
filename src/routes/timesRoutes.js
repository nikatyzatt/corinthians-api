import express from "express";
import TimeController from "../controllers/timesController.js";

const router = express.Router();

router
    .get("/times", TimeController.listarTimes)
    .get("/times/:id", TimeController.listarTimePorId )
    .post("/times", TimeController.adicionarTime)
    .put("/times/:id", TimeController.atualizarTime)
    .delete("/times/:id", TimeController.excluirTime)
export default router;