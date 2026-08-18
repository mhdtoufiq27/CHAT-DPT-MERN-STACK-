import axios from "axios";

const API_BASE_URL = "http://localhost:5000/api";

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Attach JWT token or Guest ID header
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("chatdpt_token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  let guestId = localStorage.getItem("chatdpt_guest_id");
  if (!guestId) {
    guestId = "guest_" + Math.random().toString(36).substring(2, 9);
    localStorage.setItem("chatdpt_guest_id", guestId);
  }
  config.headers["x-guest-id"] = guestId;

  return config;
});

export default api;
