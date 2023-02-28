<template lang="">
    <div v-if="idpage === 'electrical'" class="section">
        <div class="section__header flex">
            <div v-if="sections.name !== ''" class="section__title">{{ sections.name }}</div>
            <div v-else class="flex">
                <input v-model="sectionName" type="text" Placeholder="Название раздела" class="section__input" />
                <div class="btn" @click="nameAdd()">Назвать</div>
            </div>
            <div class="section__addcards" @click="addCard(sections.id)">+</div>
        </div>
        <div v-for="(cr, i) in sections.cards" :key="i" class="cards">
            <Card :cr="cr" :sections="sections" :idpage="idpage" />
        </div>

        <!-- <draggable
            v-model="sections.cards"
            class="list-group"
            tag="div"
            v-bind="dragOptions"
            :move="onMove"
            @start="isDragging = true"
            @end=";(isDragging = false), idUpdate()"
        >
            <transition-group type="transition" :name="'flip-list'">
                <div v-for="(cr, i) in sections.cards" :key="i" class="cards">
                    <Card :cr="cr" :sections="sections" :idpage="idpage" />
                </div>
            </transition-group>
        </draggable> -->
    </div>
    <!-- <div v-else class="section">
        <div @click="addCard(sections.id)">Добавить карточку</div>
        <div v-if="sections.name !== ''">{{ sections.name }}</div>
        <div v-else class="flex">
            <input v-model="sectionName" type="text" Placeholder="Название раздела" />
            <div class="btn" @click="nameAdd()">Назвать</div>
        </div>
        <div v-for="(cr, i) in cardsDishes" :key="i" class="cards">
            <div v-if="cr.sectionId === sections.id" class="card">
                Карточка {{ cr.sectionId }}
                <UiModal v-model="isModalCall" class="call-order" :open="isModalCall" position="top right">
                    <div class="modal-card">
                        <div class="flex">
                            <input :id="'name-' + cr.id" type="text" />
                            <div class="btn" @click="nameCard('name-' + cr.id)">Назвать</div>
                        </div>
                        <div v-if="cr.name" class="modal-card__name">{{ cr.name }}</div>
                    </div>
                </UiModal>
            </div>
        </div>
    </div> -->
</template>
<script>
import { mapState } from 'vuex'
// import draggable from 'vuedraggable'
export default {
    name: 'Section',
    // components: {
    //     draggable,
    // },
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
    computed: {
        ...mapState('sections', ['cardsElectrical']),
        ...mapState('sections', ['cardsDishes']),
        dragOptions() {
            return {
                animation: 0,
                group: 'description',
                disabled: !this.editable,
                ghostClass: 'ghost',
            }
        },
        // currentTask() {
        //     return this.currentCard
        // },
    },
    // watch: {
    //     isDragging(newValue) {
    //         if (newValue) {
    //             this.delayedDragging = true
    //             return
    //         }
    //         this.$nextTick(() => {
    //             this.delayedDragging = false
    //         })
    //     },
    // },
    methods: {
        // onMove({ relatedContext, draggedContext }) {
        //     const relatedElement = relatedContext.element
        //     const draggedElement = draggedContext.element
        //     this.currentCard = draggedElement
        //     return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        // },
        // idUpdate() {
        //     console.log(this.currentTask)
        // },
        nameAdd() {
            if (this.sectionName !== null) {
                this.name = true
            }
            this.$store.commit('sections/addNameElectrical', { id: this.sections.id, name: this.sectionName })
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
            }
            if (this.idpage === 'electrical') {
                this.$store.commit('sections/setCardElectrical', card)
            }
            if (this.idpage === 'dishes') {
                this.$store.commit('sections/setCardDishes', card)
            }
        },
    },
}
</script>
