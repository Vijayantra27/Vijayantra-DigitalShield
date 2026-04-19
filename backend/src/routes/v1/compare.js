import express from "express";
import { compare } from "../../controllers/compareController.js";
const r = express.Router();
r.get("/", compare);
export default r;