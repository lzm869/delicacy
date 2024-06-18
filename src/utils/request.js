import axios from 'axios'
//创建axois对象
const service = axios.create({
    baseURL:'http://localhost:4000'
});
//请求拦截器（前端向后端发请求）
service.interceptors.request.use(config =>{
    return config;
}, error=>{
    Promise.reject(error);
}
);
//响应拦截器（后端响应前端请求）
service.interceptors.response.use(
    (response) => {
        console.log(response)
        return response.data;
    },
    eror =>{
        error.response && ELMssage.error(error.response.data)
        return Promise.reject(new Error(error.response.data))
    }
)
export default service