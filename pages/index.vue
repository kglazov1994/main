<template>
    <div class="page">
        <h2 class="page__title">Электротовары</h2>
        <Page :idpage="idPage" />
    </div>
</template>
<script>
export default {
    name: 'Index',
    data() {
        return {
            idPage: 'electrical',
        }
    },
}
</script>
