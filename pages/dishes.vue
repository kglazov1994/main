<template>
    <div class="page">
        <h2 class="page__title">Посуда-Сити</h2>
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
