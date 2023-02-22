<template>
    <div class="breadcumbs flex-c">
        <div class="breadcumbs__item">
            <nuxt-link to="/">Главная</nuxt-link>
        </div>
        <div v-for="(crumb, i) in crumbs" :key="i" class="breadcumbs__item">
            <nuxt-link :to="crumb.url">{{ crumb.name }}</nuxt-link>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Breadcrumbs',
    props: {
        crumbs: {
            type: Array,
            default() {
                return []
            },
        },
    },
}
</script>
