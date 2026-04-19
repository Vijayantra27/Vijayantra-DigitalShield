import express from "express";
import ingest from "./ingest.js";
import discovery from "./discovery.js";
import compare from "./compare.js";
import attribution from "./attribution.js";
import legal from "./legal.js";
import dashboard from "./dashboard.js";
import feedback from "./feedback.js";
import auth from "./auth.js";

const router = express.Router();

router.use("/ingest", ingest);
router.use("/discovery", discovery);
router.use("/compare", compare);
router.use("/attribution", attribution);
router.use("/legal", legal);
router.use("/dashboard", dashboard);
router.use("/feedback", feedback);
router.use("/auth", auth);

export default router;