<template lang="">
    <div class="section">
        {{ idpage }}
        <div class="section__header flex">
            <div v-if="sections.name !== ''" class="section__title">{{ sections.name }}</div>
            <div v-else class="flex">
                <input v-model="sectionName" type="text" Placeholder="Название раздела" class="section__input" />
                <div class="btn" @click="nameAdd()">Назвать</div>
            </div>
            <div class="section__options flex-c">
                <div class="section__addcards" @click="addCard(sections.id)">
                    <svg-icon name="plusSm" width="15" height="15" />
                </div>
                <div class="section__addcards">
                    <svg-icon name="dotLine" width="11" height="11" />
                </div>
            </div>
        </div>
        <div class="cards-section" @drop.prevent="drop()" @dragenter.prevent @dragover.prevent>
            <div v-for="(cr, i) in sections.cards" :key="i" class="cards">
                <Card :cr="cr" :sections="sections" :page="idpage" />
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Section',
    props: {
        sections: {
            type: Object,
            required: true,
        },
        idpage: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            sectionName: null,
            name: false,
            editable: true,
            isDragging: false,
            delayedDragging: false,
            currentCard: {},
        }
    },
    methods: {
        drop() {
            this.$store.commit('sections/drop', this.sections.id)
        },
        nameAdd() {
            if (this.sectionName !== null) {
                this.name = true
            }
            this.$store.commit('sections/addOptionsSection', { id: this.sections.id, sectionName: this.sectionName })
        },
        addCard(id) {
            const card = {
                sectionId: this.sections.id,
                id: 'c' + id,
                cardId: 'card' + Math.floor(Math.random() * 101),
                name: '',
                executor: '',
                deadline: '',
                project: '',
                description: '',
                subtasks: [],
                comments: [],
                currentTime: '',
                allTime: '',
                dragprocess: false,
            }
            this.$store.commit('sections/addOptionsSection', card)
        },
    },
}
</script>
