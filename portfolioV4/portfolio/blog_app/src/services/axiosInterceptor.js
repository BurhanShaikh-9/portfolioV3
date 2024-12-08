import axios from 'axios';
import { baseUrl } from './constants'; 

const AxiosSettings = () => {
    const axiosInstance = axios.create({
        baseURL: baseUrl, 
        maxBodyLength: Infinity,
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            // Get the token from localStorage
            const token = localStorage.getItem('authToken');

            // Check if it's not a login API request, add the token to the header
            if (token && !config.url.includes('/login')) {
                config.headers['Authorization'] = `Bearer ${token}`;
            }

            // Return the updated config
            return config;
        },
        (error) => {
            return Promise.reject(error);
        }
    );

    // Add response interceptor
    axiosInstance.interceptors.response.use(
        (response) => {
            return response;
        },
        (error) => {
            // Handle response error
            console.log(error, 'error axios interceptor');
            return Promise.reject(error);
        }
    );

    return { axiosInstance };
};

export default AxiosSettings;
