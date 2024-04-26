import axios from 'axios'

const baseURL = 'http://127.0.0.1:8000/'

const AxiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 5000,
    headers:{
        "Content-Type": "application/json",
        accept: "application/json"
    }
}) 

AxiosInstance.interceptors.request.use(
    (config) =>{
        const token = localStorage.getItem('Token')

        if(token){
            config.headers.Authorization = `Token ${token}`
        }
        else{
            config.headers.Authorization = ``
        }
        return config;
    }
)

AxiosInstance.interceptors.response.use(
    (response) =>{
        return response
    },
    (error) =>{
        
    }
)

export default AxiosInstance;