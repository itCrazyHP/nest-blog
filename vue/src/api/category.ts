import { CategoryModel } from "#/model";
import { http } from "@/plugins/axios";

function getAllCategory() {
    return http.request<CategoryModel[]>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url: 'category',
        method:'get',
    })
}
export default getAllCategory