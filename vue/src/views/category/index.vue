<template>
    <ArticleList :cid="route.params.cid" :key="+route.params.cid"></ArticleList>
</template>

<script setup lang="ts">
import {useRoute} from 'vue-router'
const route = useRoute()
</script>

<style scoped lang="scss">

</style>