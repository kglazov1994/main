<template>
    <footer class="footer">
        <div class="container">{{ year }}</div>
    </footer>
</template>
<script>
export default {
    name: 'Footer',
    data() {
        return {
            year: new Date().getFullYear(),
        }
    },
}
</script>
<style lang="less">
.footer {
    background: #ccc;
    padding: 20px;
    text-align: center;
}
</style>
