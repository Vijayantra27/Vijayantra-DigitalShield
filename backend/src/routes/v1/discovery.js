import express from "express";
import { discover } from "../../controllers/discoveryController.js";
const r = express.Router();
r.get("/", discover);
export default r;