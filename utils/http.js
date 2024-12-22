import axios from "axios";

export const API_BASE_URL = "http://localhost:8000/wp-json";

export default axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
