<template>
    <main>
        <h1>{{ article?.title }}
        <el-button type="danger" size="default" v-if="isLogin()" @click="$router.push({name:'article.update',params:{id:article?.id}})">编辑</el-button>
        </h1>
        
        <time>
            发表时间:{{ article?.createdAt }} &nbsp;&nbsp;&nbsp;&nbsp;
            更新时间:{{ article?.updatedAt }}
        </time>
        <div v-html="article?.content"></div>
        
    </main>
</template>

<script setup lang="ts">
import useArticle from '@/composables/useArticle'
import { isLogin } from '@/utils/user';
const {find,article} = useArticle()
const route=useRoute()
await find(+route.params.id)

</script>

<style scoped lang="scss">
main{
    h1{
        @apply mb-4 border-b border-gray-500 pb-3 mt-8 text-2xl text-gray-600;
    }
    p{
        @apply text-gray-500;
    }
}
</style>