<template>
    <div class="page">
        <div class="page__header">Последняя задача выполнена 10 марта</div>
        <Page :idpage="idPage" />
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Index',
    data() {
        return {
            idPage: 'electrical',
        }
    },
    computed: {
        ...mapState('sections', ['pages']),
        // Последняя законченная задача
        // lastTask() {
        //     const task = ''
        //     for (const key in this.pages) {
        //         this.pages[key].forEach((card) => {
        //             if (card.pageName === this.idPage && card.id === this.idPage + '3') {
        //                 card.cards.forEach((lastCard) => {
        //                     console.log(lastCard)
        //                 })
        //             }
        //         })
        //     }
        //     return task
        // },
    },
}
</script>
