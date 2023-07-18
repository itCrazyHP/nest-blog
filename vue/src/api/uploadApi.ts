import { http } from "@/plugins/axios";
export interface User{
    url:string,
}
function uploadImage(data:FormData) {
    return http.request<User>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url: 'upload/image',
        method:'post',
        data
    })
}
export default uploadImage