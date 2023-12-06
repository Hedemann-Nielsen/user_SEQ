import express from "express";
import UserController from "../controller/user.controller.js";
import { sequelize } from "../config/db.sequelize.js";

const router = express.Router();
const controller = new UserController();

//henter alle bruger
router.get("/api/user", (req, res) => {
	controller.list(req, res);
});

//henter detaljer på bestemt bruger id
router.get("/api/user/:id([0-9]*)", (req, res) => {
	controller.get(req, res);
});

//opretter en bruger
router.post("/api/user", (req, res) => {
	controller.create(req, res);
});

//opdatere en bruger
router.put("/api/user", (req, res) => {
	controller.update(req, res);
});

//sletter en bruger
router.delete("/api/user/:id([0-9]*)", (req, res) => {
	controller.delete(req, res);
});

export { router as UserRouter };
