<template>
    <div>
        <div v-for="(page, pageName) in pages" :key="pageName" class="pages">
            <div v-if="pageName === idpage" class="page__content flex">
                <div v-if="page && page.length" class="sections flex">
                    <div v-for="(sec, n) in page" :id="pageName + n" :key="n" class="sections__item">
                        <Section :sections="sec" :idpage="pageName" />
                    </div>
                </div>
                <div class="btn" @click="addSection(page.length, pageName)">
                    <svg-icon class="plus" name="plus" width="18" height="18" />
                    <div>Добавить столбец</div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Page',
    props: {
        idpage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {}
    },
    computed: {
        ...mapState('sections', ['pages']),
    },
    methods: {
        addSection(id, pageName) {
            const section = {
                name: '',
                cards: [],
                id: this.idpage + id,
                pageName: this.idpage,
            }
            this.$store.commit('sections/setSection', { val: section, pageName })
        },
    },
}
</script>
