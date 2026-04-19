import express from "express";
const r = express.Router();
r.post("/login", (req, res) => res.json({ token: "demo" }));
export default r;