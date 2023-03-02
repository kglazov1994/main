<template>
    <header class="header">
        <div class="header__left">
            <div class="header__up flex-c">
                <div class="header__page">Электротовары {{ pageName }}</div>
                <div class="header__work">В работе</div>
            </div>
            <div class="header__down"></div>
        </div>
        <div class="header__right"></div>
    </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Header',
    computed: {
        ...mapState('sections', ['pages']),
        pageName() {
            let name = ''
            for (const key in this.pages) {
                console.log(key)
                name = key
            }
            return name
        },
        // mounted() {
        //     const elements = document.querySelectorAll('.nuxt-link-active')
        //     console.log(elements)
        //     return elements
        // },
    },
}
</script>
<style lang="less">
.header {
    text-align: center;
    background: @basecolor;
    padding: 20px;
    &__up {
        gap: 14px;
    }
    &__page {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #333;
    }
}
</style>
