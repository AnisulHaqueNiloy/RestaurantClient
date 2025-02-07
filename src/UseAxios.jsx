import axios from "axios";
import { useContext, useEffect } from "react";
import { AuthContext } from "./authprovider/AuthProvider";
import { useNavigate } from "react-router-dom";

const axiosInstance = axios.create({
  baseURL: "https://restaurant-server-rouge.vercel.app//", // Correct spelling
  withCredentials: true, // Ensure cookies are sent with requests
});

const UseAxios = () => {
  const { logout, user } = useContext(AuthContext);
  console.log(user);
  const navigate = useNavigate();
  useEffect(() => {
    axiosInstance.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        if (error.status === 401 || error.status === 403) {
          logout().then(() => {
            navigate("/login");
          });
        }
        return Promise.reject(error);
      }
    );
  }, []);
  return axiosInstance;
};

export default UseAxios;
