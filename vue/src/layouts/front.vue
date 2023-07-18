<template>
    <main class="front">
        <div class="log" @click="$router.push('/')">
            <img src="/images/logo.png" class="w-[500px] cursor-pointer" alt="">
        </div>
        <nav>
            <section>
                <div v-for="category in categories" :key="category.id" @click="$router.push({name:'category.index',params:{cid:category.id}})">
                    {{ category.title }}
                </div>
            </section>
            <section>
            <el-button type="primary" size="default">管理文章</el-button>
            <el-button type="success" size="default" @click="$router.push({name:'article.create'})">发表文章</el-button>
            </section>
        </nav>
        
        <router-view></router-view>
    </main>
</template>

<script setup lang="ts">
import {  CategoryModel } from '#/model';
import getAllCategory from '@/api/category';
import useArticle from '@/composables/useArticle'

const {all:getArticleList} = useArticle()
const categories = ref<CategoryModel[]>()
const res = await getAllCategory()
categories.value = res.data



</script>

<style scoped lang="scss">
main.front{
    @apply bg-white shadow-md mt-5 m-auto md:w-[1000px] p-5 rounded-md;
    nav{
        @apply flex justify-between items-center;
        section {
            display: flex;
            @apply gap-2 items-center mt-3;
            div{
                       @apply bg-slate-400 text-gray-700 py-2 px-3 cursor-pointer hover:shadow-lg duration-300;
            }
     
        }
    }
}
</style>