<template>
    <main>
        <ArticleList/>
    </main>
</template>

<script setup lang="ts">
import useArticle from '@/composables/useArticle'
const {all,pageResult} = useArticle()

await all()



    



</script>

<style lang="scss" scoped>


</style>