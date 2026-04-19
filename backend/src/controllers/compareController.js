import { callML } from "../services/pythonBridgeService.js";

export const compare = async (req, res) => {
  const result = await callML("/compare");
  res.json(result);
};