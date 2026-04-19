import express from "express";
import { dashboard } from "../../controllers/dashboardController.js";
const r = express.Router();
r.get("/", dashboard);
export default r;