
/* eslint-disable no-undef */
import { authKey } from "@/contents/authKey";
import { getFromCookies } from "@/utils/cookies-store";
import axios from "axios";

// Create an instance of axios
const instance = axios.create();

// Set default headers for POST requests to specify content type as JSON
instance.defaults.headers.post["Content-Type"] = "application/json";

// Set default headers to specify that the client accepts JSON responses
instance.defaults.headers["Accept"] = "application/json";

// Set a default timeout of 60 seconds for all requests
instance.defaults.timeout = 60000;

// Add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before the request is sent
    const accessToken = getFromCookies(authKey);
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lies within the range of 2xx causes this function to trigger
    // Do something with response data
    return response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx causes this function to trigger
    // Do something with response error
    const responseObject = {
      statusCode: error?.response?.status || 500,
      message: error?.response?.data?.message || "Something went wrong!",
    };
    return Promise.reject(responseObject);
  }
);

// Export the axios instance to make it available for use in other parts of the application
export { instance };
