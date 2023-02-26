<template>
    <div v-if="idpage === 'electrical'" class="page__content flex">
        <div v-if="electrical && electrical.length" class="sections flex">
            <div v-for="(sec, n) in electrical" :id="idpage + n" :key="n" class="sections__item">
                <Section :sections="sec" :idpage="idpage" />
            </div>
        </div>
        <div class="btn" @click="addSection(electrical.length)">
            <svg-icon class="plus" name="plus" width="18" height="18" />
            <div>Добавить столбец</div>
        </div>
    </div>

    <div v-else class="page__content flex">
        <div v-if="dishes && dishes.length" class="sections flex">
            <div v-for="(sec, n) in dishes" :id="idpage + n" :key="n" class="sections__item">
                <Section :sections="sec" :idpage="idpage" />
            </div>
        </div>
        <div class="btn" @click="addSection(dishes.length)">
            <svg-icon class="plus" name="plus" width="18" height="18" />
            <div>Добавить столбец</div>
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
        ...mapState('sections', ['electrical']),
        ...mapState('sections', ['dishes']),
    },
    methods: {
        addSection(id) {
            const section = {
                name: '',
                cards: [],
                id: this.idpage + id,
            }
            if (this.idpage === 'electrical') {
                this.$store.commit('sections/setElectrical', section)
            }
            if (this.idpage === 'dishes') {
                this.$store.commit('sections/setDishes', section)
            }
        },
    },
}
</script>
