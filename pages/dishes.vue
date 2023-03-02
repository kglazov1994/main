<template>
    <div class="page">
        <div class="page__header">Последняя задача выполнена 10 марта</div>
        <Page :idpage="idPage" />
    </div>
</template>
<script>
export default {
    name: 'Index',
    data() {
        return {
            idPage: 'dishes',
        }
    },
}
</script>
