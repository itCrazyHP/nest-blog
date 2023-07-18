import { ArticleModel, CategoryModel } from "#/model";
import { http } from "@/plugins/axios";
import { Record } from "@icon-park/vue-next";

function getArticleList(page=1,cid?:any) {
    const url = `article?page=${page}&`+(cid?`category=${cid}`:'')
    return http.request<ArticleModel[],ResponsePageResult<ArticleModel[]>>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url,
        method:'get',
    })
}
function getArticle(id:number){
    return http.request<ArticleModel>({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url:`article/${id}`,
        method:'get',
    })
}
export function addArticle(data:Record<string,any>){
    return http.request({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url:`article`,
        method:'post',
        data
    })
}

export function updateArticle(data:Record<string,any>){
    return http.request({//调用request方法 <ResponseResult<User>> ResponseResult对应ResponseResult.d.ts User对应上边
        url:`article/${data.id}`,
        method:'patch',
        data
    })
}
export {getArticleList,getArticle}