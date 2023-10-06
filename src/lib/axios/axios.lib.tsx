import axios from 'axios';

// Create an instance of Axios with custom configurations
const axiosInstance = axios.create({
    baseURL: "https://staging-biz.coinprofile.co/v3",
    headers: {
        'Content-Type': 'application/json',
        // You can add other headers as needed, such as authentication tokens
    },
});

// Optional: You can add request interceptors for global configuration
axiosInstance.interceptors.request.use(
    (config) => {
        // Modify the request config here (e.g., add an authentication token)
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Optional: You can add response interceptors for global configuration
axiosInstance.interceptors.response.use(
    (response) => {
        // Modify the response data here
        return response;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
