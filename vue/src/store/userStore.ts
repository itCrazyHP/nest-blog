import { defineStore } from 'pinia'
import { useRouter } from 'vue-router'
import { RouteRecordNormalized } from 'vue-router'
import userApi, {User} from '@/api/userApi'

export default defineStore('user',{
    state:()=>{
        return {
          info:{} as null | User
        }
    },
    actions:{
        async getUserInfo(){//在路由守卫中调用
            const res = await userApi.info()             
            this.info = res.data
        },
    }
})

