import axios from "axios";

const axiosAPI = () => {
   
  if (typeof window === "undefined") return axios.create(); // SSR safeguard

  const token = localStorage.getItem("DBToken");

  const baseURL =
    window.location.hostname === "localhost"
      ? "http://localhost:5000/api"
      : "https://dhanbid-server.vercel.app/api"; // consistent path

  return axios.create({
    baseURL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

export default axiosAPI;



