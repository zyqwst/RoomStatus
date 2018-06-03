import axios from "axios"
import Vue from "vue"

axios.interceptors.request.use(config => {
    
    return config;
})

axios.interceptors.response.use(response =>{
    let result = response.data
    if(!result){
        result = {
            status:-1,
            msg:'数据请求失败'
        }
    }
    switch(result.status){
        case 1:
            return result
            break;
        default:
            
    }

    let err = new Error(result.msg)
    err.data = result
    err.response = response
    throw err

},
    err =>{
        return Promise.reject(err);
    }
)

export default axios;