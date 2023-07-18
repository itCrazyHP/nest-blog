<template>
    <main>
         <section v-for="article of pageResult?.data" :key="article.id">
            <router-link :to="{name:'article.show',params:{id:article.id}}">
                {{ article.title }}
            </router-link>
            <aside @click="$router.push({name:'category.index',params:{cid:article.categoryId}})">
                {{ article.category.title }}
            </aside>
        </section>
        <el-pagination
        @current-change="all"
        :page-sizes="[20,40,80,100]"
        :page-size="pageResult?.meta.page_row"
        :total="pageResult?.meta.total"
        background
        >

        </el-pagination>
    </main>
   
</template>

<script setup lang="ts">
import useArticle from '@/composables/useArticle';

const {cid} = defineProps<{
    cid?:any
}>()
const {all,pageResult} = useArticle()

await all(1,cid)
</script>

<style scoped lang="scss">

    main{
    @apply pt-8;
    section{
        @apply mt-5 flex justify-between items-center;
        a{
            @apply bg-slate-100 text-gray-600 py-2 px-3 block mb-2;
        }
    }
    aside{
        @apply text-xs p-2 text-gray-500 font-bold cursor-pointer;
    }
}
</style>