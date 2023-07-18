import Axios from './axios'

const http = new Axios({//基本配置对应axios.create
    baseURL:'/api',
    timeout:1000000,
    headers:{}
})
export {http}
