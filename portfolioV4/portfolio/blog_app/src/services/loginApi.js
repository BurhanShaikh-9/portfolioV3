import {baseUrl} from './constants'
import AxiosSettings from './axiosInterceptor';

export const loginService = () => {
    const { axiosInstance } = AxiosSettings()

    const login = (data) => {
        return axiosInstance.post(`${baseUrl}/login`, data);
    };  

    return { login }
}