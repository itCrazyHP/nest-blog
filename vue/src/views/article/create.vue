<template>
    <div>
        <el-select v-model="article.categoryId" value-key="" placeholder="请选择栏目">
            <el-option v-for="category in categories" :key="category.id" :label="category.title" :value="category.id"></el-option>
        </el-select>
        <el-input v-model="article.title" placeholder="请输入标题" clearable class="mb-2 mt-2"></el-input>
        <MarkdownEditor v-model="article.content" class=" pt-4" :height="300" placeholder="请输入markdown内容"/>
        <el-button type="primary" size="default" @click="onSubmit">保存提交</el-button>
    </div>
</template>

<script setup lang="ts">
import { CategoryModel } from '#/model';
import getAllCategory from '@/api/category';
import useArticle from '@/composables/useArticle';
import { ref } from 'vue';
    const {add} = useArticle()
    const article = ref(
        {title:'',
        content:'',
        categoryId:''}
        )

const categories = ref<CategoryModel[]>()
const res = await getAllCategory()
categories.value = res.data

const router = useRouter()
const onSubmit = async()=>{
    try {
        console.log(article.value);
        
        await add(article.value)
        router.push('/')
    } catch (error) {
        
    }

}
</script>

<style scoped lang="scss">

</style>