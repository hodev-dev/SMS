import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

const LOCAL = "https://localhost:7110/api/v1/";
const SERVER = "http://172.16.136.102:8080/api/v1/";

interface Axios {
    v1: AxiosInstance,
}
const api: Axios = {
    v1: axios.create({
        baseURL: LOCAL,
        timeout: 8000,
        headers: {
            Accept: "*/*",
            'Content-Type': 'application/json',
        },
    }),
};

const onSuccess = (response: AxiosResponse) => {
    return response;
};

const onError = (error: AxiosError) => {
    return Promise.reject(error);
};

api.v1.interceptors.response.use(onSuccess, onError);


export default api;