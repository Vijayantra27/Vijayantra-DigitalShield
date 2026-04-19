import axios from "axios";

export const callML = async (endpoint) => {
  const res = await axios.get(`http://localhost:8000${endpoint}`);
  return res.data;
};