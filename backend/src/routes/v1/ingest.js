import express from "express";
import { ingest } from "../../controllers/ingestController.js";
const r = express.Router();
r.post("/", ingest);
export default r;