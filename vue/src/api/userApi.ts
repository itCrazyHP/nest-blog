import { http } from "@/plugins/axios";
export interface User{
    name:string,
    age:number,
    avatar:string,
    permissions:string[]
}
function info() {
    return http.request<User>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url: 'user/info',
    })
}
interface Login{
    token:string
}
export interface LoginData{
    name:string,
    password:string
}
function login(data: any) {
    return http.request<Login>({
        url: 'login',
        method:'post',
        data
    })
}
export default {login,info}