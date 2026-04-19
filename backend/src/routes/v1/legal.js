import express from "express";
import { legal } from "../../controllers/legalController.js";
const r = express.Router();
r.get("/", legal);
export default r;