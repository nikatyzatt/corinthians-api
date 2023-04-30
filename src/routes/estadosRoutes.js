import express from "express";
import EstadoController from "../controllers/estadosController.js";

const router = express.Router();

router
    .get("/estados", EstadoController.listarEstados)
    .post("/estados", EstadoController.adicionarEstado)
    .get("/estados/:id", EstadoController.listarEstadoPorId )
    .put("/estados/:id", EstadoController.atualizarEstado)
    .delete("/estados/:id", EstadoController.excluirEstado)
export default router;