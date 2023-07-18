import { cacheEnum } from "@/enum/cacheEnum";
import store from "./store";
import userApi, { LoginData } from "@/api/userApi";
import router from "@/router";
import userStore from "@/store/userStore"

export  async function login(form:LoginData) {
    const token = (await userApi.login(form)).data.token
    // const res = await userApi.login(form)
    // console.log(res);
    
    store.set(cacheEnum.TOKEN_NAME,{ token },100000000)
    const routeName = store.get(cacheEnum.REDIRECT_ROUTE_NAME)??'home'
    
    router.push({ name: 'article.index' })
}

export function isLogin(){
    return Boolean(store.get(cacheEnum.TOKEN_NAME))
}

export function logout() {
    store.remove(cacheEnum.TOKEN_NAME)
    router.push('/')
    userStore().info=null
}