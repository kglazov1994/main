<template>
    <div v-if="cr.sectionId === sections.id" class="card" @click="isModalCall = true">
        <div v-if="cr.name" class="card__header flex">
            <svg-icon class="card__check" name="check" width="15" height="15" />
            <div class="card__name">{{ cr.name }}</div>
        </div>

        <div v-else class="card__name card__name--not">Напишите название задачи...</div>
        <div v-if="cr.executor.length" class="card__executor flex">
            <svg-icon v-if="ex === ''" class="card__userphoto" name="user" width="30" height="30" />
            <img v-else :src="ex" alt="" />
            <div class="card__executor-name">{{ cr.executor }}</div>
        </div>
        <svg-icon v-else class="card__userpic" name="user" width="30" height="30" />
        <UiModal v-model="isModalCall" class="call-order" :open="isModalCall" position="top right">
            <div class="modal-card">
                <div v-if="cr.name" class="modal-card__name">{{ cr.name }}</div>
                <div v-else class="flex">
                    <input :id="'name-' + cr.id" type="text" />
                    <div class="btn" @click="nameCard('name-' + cr.id, cr.cardId)">Назвать</div>
                </div>
                <div class="modal-card__info">
                    <div class="modal-card__item flex">
                        <div class="modal-card__h6">Исполнитель</div>
                        <div v-if="cr.executor !== ''" class="modal-card__executor">
                            <img v-if="ex !== ''" :src="ex" alt="" />
                            {{ cr.executor }}
                        </div>
                        <div v-else class="modal-card__executor">
                            <input :id="'executor-' + cr.id" type="text" />
                            <div class="btn" @click="executorCard('executor-' + cr.id, cr.cardId)">
                                Добавить исполнителя
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </UiModal>
    </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
    name: 'Card',
    props: {
        sections: {
            type: Object,
            required: true,
        },
        cr: {
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
            isModalCall: false,
            executors: [
                {
                    name: 'Вадим',
                    photo: '/img/1.webp',
                },
                {
                    name: 'Фёдор',
                    photo: '/img/2.webp',
                },
                {
                    name: 'Антон',
                    photo: '/img/3.webp',
                },
                {
                    name: 'Иван',
                    photo: '/img/4.webp',
                },
            ],
        }
    },
    computed: {
        ...mapState('sections', ['cardsElectrical']),
        ...mapState('sections', ['cardsDishes']),
        ex() {
            let photo = ''
            this.executors.forEach((executor) => {
                if (executor.name === this.cr.executor) {
                    photo = executor.photo
                }
            })
            return photo
        },
    },
    methods: {
        nameAdd() {
            if (this.sectionName !== null) {
                this.name = true
            }
            this.$store.commit('sections/addNameElectrical', { id: this.sections.id, name: this.sectionName })
        },
        nameCard(id, cardId) {
            const name = document.getElementById(id).value
            if (this.idpage === 'electrical') {
                this.$store.commit('sections/addNameCardElectrical', { val: name, id: cardId })
            }
        },
        executorCard(id, cardId) {
            const executor = document.getElementById(id).value
            if (this.idpage === 'electrical') {
                this.$store.commit('sections/addExecutorCardElectrical', { val: executor, id: cardId })
            }
        },
    },
}
</script>
