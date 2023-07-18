import { ArticleModel } from "#/model"
import {addArticle, getArticle, getArticleList, updateArticle} from "@/api/article"

export default ()=>{
    const pageResult = ref<ResponsePageResult<ArticleModel[]>>()
    let categoryId: null = null
    const article = ref<ArticleModel>()
    const all =async(page=1,cid?:any)=>{
        if(cid) categoryId = cid
        pageResult.value = await getArticleList(page,categoryId)
    }
    const find = async(id:number)=>{
        article.value = (await getArticle(id)).data
        
    }
    const add = async(article:Record<string,any>)=>{
        return addArticle(article)
    }
    const update = async(data:Record<string,any>)=>{
        console.log(data);
        
        return updateArticle(data)
    }
    return {all,pageResult,find,article,add,update}
}