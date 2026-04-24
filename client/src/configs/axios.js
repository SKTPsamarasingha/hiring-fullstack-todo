import axios from 'axios';
import {SERVER_API_URL} from "./envConfigs.js";


export const API_INSTANCE = axios.create({
    baseURL: SERVER_API_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },

})


API_INSTANCE.interceptors.response.use(
    (response) => {
        return response?.data;
    },
    (error) => {
        const customError = {
            ...(error.response?.data || {message: "Network Error"}),
            statusCode: error.response?.status || 500,
            config: error.config,
        };
        return Promise.reject(customError);
    }
);