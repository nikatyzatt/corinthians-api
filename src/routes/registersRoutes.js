import express from "express";
import RegisterController from "../controllers/registersController.js";

const router = express.Router();

router
    .get("/cadastros", RegisterController.getAllRegisters)
    .get("/cadastros/busca", RegisterController.findRegister)
    .get("/cadastros/:id", RegisterController.getRegister)
    .post("/cadastros", RegisterController.addNewRegister)
    .put("/cadastros/:id", RegisterController.updateRegister)
    .delete("/cadastros/:id", RegisterController.deleteRegister)
export default router;