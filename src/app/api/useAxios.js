import axios from "axios";

const axiosAPI = () => {
  const token = localStorage.getItem("DBToken");
  const baseURL =
    window.location.hostname!=="localhost"
      ? "https://dhanbid-server.vercel.app/"
      : "http://localhost:5000/api";

  return axios.create({
    baseURL,
    headers: token ? { Authorization: `Bearer ${token}` } : {},
  });
};

export default axiosAPI;