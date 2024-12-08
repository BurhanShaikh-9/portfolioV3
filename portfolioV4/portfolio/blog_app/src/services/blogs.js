import {baseUrl} from './constants'
import AxiosSettings from './axiosInterceptor';

export const BlogService = () => {
    const { axiosInstance } = AxiosSettings()

    // const getSingleAdmin = (id) => {
    //     return axiosInstance.get(`${baseUrl}/single-admin/${id}`);
    // };    

    const getAllBlogs = () => {
        return axiosInstance.get(`${baseUrl}/blogs`);
    };    
    const postBlog = (data) => {
        return axiosInstance.post(`${baseUrl}/blogs`, data);
    };

  

  

    return { postBlog, getAllBlogs }
}