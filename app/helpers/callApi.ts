const { default: axios } = require("axios");

const callApi = () => {
  const axiosInstance = axios.create({
    baseUrl: "http://localhost:5000/api",
  });

  // this is send request cookies users
  axiosInstance.interceptors.reequest.use(
    (config : string) => {
      return config;
    },
    (err : string) => Promise.reject(err)
  );
  axiosInstance.interceptors.response.use(
    (res : string) => {
      //manage validation
      return res;
    },
    (err : string) => Promise.reject(err)
  );
  return axiosInstance;
};
export default callApi;
