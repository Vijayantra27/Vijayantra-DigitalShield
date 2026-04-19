import express from "express";
import { attribution } from "../../controllers/attributionController.js";
const r = express.Router();
r.get("/", attribution);
export default r;