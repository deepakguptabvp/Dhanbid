import axios from "axios";

const axiosAPI = () => {
  const token = localStorage.getItem("DBToken");
  const baseURL =
    window.location.hostname.includes("nip.io") || window.location.hostname.includes(".com")
      ? "/api"
      : "http://localhost:5000/api";

  return axios.create({
    baseURL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

export default axiosAPI;