import axios from 'axios'
declare module "axios" {
    interface AxiosResponse<T = any> {
      errorinfo: null;
      // 这里追加你的参数
      token:string
    }
    export function create(config?: AxiosRequestConfig): AxiosInstance;
}

//创建axios实例
const request = axios.create({
    baseURL:'http://127.0.0.1:8888/api',
    timeout:5000,
})
//请求拦截
request.interceptors.request.use((config)=>{
    config.headers = config.headers||{}
    if(localStorage.getItem('token')){
        config.headers.token = localStorage.getItem('token')||""
    }
    return config
})
//响应拦截
request.interceptors.response.use((res)=>{
    console.log(res);
    const code:number = res.data.code
    if(code!==200){
        return Promise.reject(res.data)
    }
    return res.data
},(err)=>{
    console.log(err);
})

export default request