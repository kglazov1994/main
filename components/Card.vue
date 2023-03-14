<template>
    <div
        v-if="cr.sectionId === sections.id"
        draggable="true"
        class="card"
        :class="dragstartCard ? 'dragprocess' : ''"
        @dragstart="dragStart(cr.cardId)"
        @dragend="dragEnd(cr.cardId)"
    >
        <div v-if="cr.name" class="card__header flex">
            <div class="card__header-name flex">
                <svg-icon
                    class="card__check"
                    :name="cr.sectionId === page + '3' ? 'check-complete' : 'check'"
                    width="15"
                    height="15"
                    @click="complete()"
                />
                <div class="card__name">{{ cr.name }}</div>
            </div>
            <svg-icon name="burger-small" width="34" height="34" @click="isModalCall = true" />
        </div>

        <div v-else class="card__header flex">
            <div class="card__header-name flex">
                <input
                    :id="'name-' + cr.id"
                    v-model="taskName"
                    type="text"
                    placeholder="Напишите название задачи..."
                    class="card__name card__name--not"
                />
                <div v-if="taskName !== ''" class="btn" @click="optionsCard('name-' + cr.id, cr.cardId, 'name')">+</div>
            </div>
        </div>
        <div class="card__info flex-c">
            <div class="card__left">
                <div v-if="cr.executor.length" class="card__executor">
                    <svg-icon v-if="ex === ''" class="card__userphoto" name="user" width="30" height="30" />
                    <img v-else :src="ex" alt="" />
                </div>
                <svg-icon v-else class="card__userpic" name="user" width="30" height="30" />
            </div>
            <div class="card__right flex-c">
                <div class="card__times">
                    <div class="card__timer">
                        <span v-if="Math.trunc((allTime / 60 / 60) % 60) < 10">0</span
                        >{{ Math.trunc((allTime / 60 / 60) % 60) }}:<span v-if="Math.trunc((allTime / 60) % 60) < 10"
                            >0</span
                        >{{ Math.trunc((allTime / 60) % 60) }}ч. / 10ч.
                    </div>
                    <div class="card__data-time">
                        <div v-if="cr.deadline">
                            до
                            <span :class="new Date(cr.deadline) < new Date() ? 'red' : ''">
                                {{
                                    new Intl.DateTimeFormat('ru', { month: 'long', day: 'numeric' }).format(
                                        new Date(cr.deadline)
                                    )
                                }}
                            </span>
                        </div>
                    </div>
                </div>

                <div class="card__subtasks flex-c">
                    <div
                        v-if="cr.subtasks.length"
                        class="card__subtask flex-c"
                        :class="tasks ? 'card__subtask--open' : ''"
                        @click="tasks = !tasks"
                    >
                        <div>{{ cr.subtasks.length }}</div>
                        <svg-icon name="task" width="13" height="12" />
                    </div>
                    <div
                        class="card__timer"
                        :class="cr.sectionId === 'electrical3' ? 'disabled' : ''"
                        @click=";(start = !start), start ? timerStart() : timerStop(cr.cardId, 'allTime')"
                    >
                        <svg-icon :name="start ? 'pause' : 'play'" width="18" height="18" />
                    </div>
                </div>
            </div>
        </div>
        <div v-if="cr.subtasks.length && tasks" class="card__subtasks-list">
            <div
                v-for="(subtask, i) in cr.subtasks"
                :key="i"
                class="card__subtasks-item flex-c"
                :class="subtask.complete === 1 ? 'complete' : ''"
                @click="subtaskComplete(subtask.value, cr.cardId)"
            >
                <svg-icon
                    class="card__check"
                    :name="subtask.complete === 1 ? 'check-complete' : 'check'"
                    width="15"
                    height="15"
                />
                <div>{{ subtask.value }}</div>
            </div>
            <div v-if="subtasksCard" class="card__subtasks-item flex-c">
                <svg-icon class="card__check" name="check" width="15" height="15" />
                <input :id="'subtask-' + cr.id" type="text" placeholder="Подзадача" />
                <div class="btn" @click="addSubtask('subtask-' + cr.id, cr.cardId)">
                    <svg-icon class="plus" name="plus" width="18" height="18" />
                </div>
            </div>
            <div class="btn btn--start" @click="subtasksCard = true">
                <svg-icon class="plus" name="plus" width="18" height="18" />
                <div>Добавить подзадачу</div>
            </div>
        </div>

        <UiModal v-model="isModalCall" class="call-order" :open="isModalCall" position="top right">
            <div class="modal-card">
                <div class="modal-card__header flex-c">
                    <div
                        class="modal-card__header-left flex-c"
                        :class="cr.sectionId === 'electrical3' ? 'disabled' : ''"
                    >
                        <div
                            class="modal-card__work"
                            @click=";(start = !start), start ? timerStart() : timerStop(cr.cardId, 'allTime')"
                        >
                            <svg-icon :name="start ? 'pause' : 'play'" width="18" height="18" />
                            <div v-if="start">В работе</div>
                            <div v-else>Работать над задачей</div>
                        </div>
                        <div>
                            <span v-if="Math.trunc((allTime / 60 / 60) % 60) < 10">0</span
                            >{{ Math.trunc((allTime / 60 / 60) % 60) }}:<span
                                v-if="Math.trunc((allTime / 60) % 60) < 10"
                                >0</span
                            >{{ Math.trunc((allTime / 60) % 60) }}ч. / 10ч.
                        </div>
                    </div>
                    <div class="modal-card__header-right flex-c">
                        <div
                            v-if="cr.sectionId === 'electrical3'"
                            class="modal-card__complete modal-card__complete--end"
                        >
                            Завершено
                        </div>
                        <div v-else class="modal-card__complete" @click="complete(), (isModalCall = false)">
                            <svg-icon name="complete" width="18" height="18" />
                            <div class="">Завершить задачу</div>
                        </div>
                        <svg-icon class="modal-card__complete-icon" name="copy" width="30" height="30" />
                        <svg-icon name="collapse" width="30" height="30" @click="isModalCall = false" />
                    </div>
                </div>
                <div v-if="cr.name" class="modal-card__name">{{ cr.name }}</div>
                <div v-else class="flex">
                    <input :id="'name-' + cr.id" type="text" placeholder="Название задачи" />
                    <div class="btn" @click="optionsCard('name-' + cr.id, cr.cardId, 'name')">Назвать</div>
                </div>
                <div class="modal-card__info">
                    <div class="modal-card__item flex">
                        <div class="modal-card__h6">Исполнитель</div>
                        <div v-if="cr.executor !== ''" class="modal-card__executor">
                            <img v-if="ex !== ''" :src="ex" alt="" />
                            {{ cr.executor }}
                        </div>
                        <div v-else class="modal-card__executor">
                            <input :id="'executor-' + cr.id" type="text" placeholder="Имя исполнителя" />
                            <div class="btn" @click="optionsCard('executor-' + cr.id, cr.cardId, 'executor')">
                                <svg-icon class="plus" name="plus" width="18" height="18" />
                                <div>Добавить</div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-card__item flex">
                        <div class="modal-card__h6">Дата</div>
                        <div v-if="cr.deadline !== ''" class="modal-card__executor">
                            <svg-icon name="date" width="28" height="28" />
                            <span :class="new Date(cr.deadline) < new Date() ? 'red' : ''">
                                {{
                                    new Intl.DateTimeFormat('ru', { dateStyle: 'medium' }).format(new Date(cr.deadline))
                                }}
                            </span>
                        </div>
                        <div v-else class="modal-card__executor">
                            <svg-icon name="date" width="28" height="28" />
                            <input
                                :id="'deadline-' + cr.id"
                                v-imask="mask"
                                type="text"
                                placeholder="Нет даты"
                                @accept="onAccept"
                                @complete="onComplete"
                            />
                            <div class="btn" @click="deadlineCard('deadline-' + cr.id, cr.cardId)">
                                <svg-icon class="plus" name="plus" width="18" height="18" />
                                <div>Добавить</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-card__item flex">
                        <div class="modal-card__h6">Проект</div>
                        <div v-if="cr.project !== ''" class="modal-card__executor">
                            {{ cr.project }}
                        </div>
                        <div v-else class="modal-card__executor">
                            <input :id="'project-' + cr.id" type="text" placeholder="Добавить проект" />
                            <div class="btn" @click="optionsCard('project-' + cr.id, cr.cardId, 'project')">
                                <svg-icon class="plus" name="plus" width="18" height="18" />
                                <div>Добавить</div>
                            </div>
                        </div>
                    </div>

                    <div class="modal-card__item flex">
                        <div class="modal-card__h6 modal-card__h6--start">Описание</div>
                        <div v-if="cr.description !== ''" class="modal-card__executor">
                            {{ cr.description }}
                        </div>
                        <div v-else class="modal-card__executor modal-card__executor--column">
                            <textarea
                                :id="'description-' + cr.id"
                                placeholder="Добавьте описание к этой задаче..."
                            ></textarea>
                            <div class="btn" @click="optionsCard('description-' + cr.id, cr.cardId, 'description')">
                                <svg-icon class="plus" name="plus" width="18" height="18" />
                                <div>Добавить</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-card__subtasks">
                    <div class="modal-card__subtasks-header">
                        <div class="modal-card__subtasks-title">Подзадачи</div>
                    </div>

                    <div v-if="cr.subtasks.length" class="modal-card__subtasks-list">
                        <div
                            v-for="(subtask, i) in cr.subtasks"
                            :key="i"
                            class="modal-card__subtasks-item flex-c"
                            :class="subtask.complete === 1 ? 'complete' : ''"
                            @click="subtaskComplete(subtask.value, cr.cardId)"
                        >
                            <div class="left flex-c">
                                <svg-icon
                                    class="card__check"
                                    :name="subtask.complete === 1 ? 'check-complete' : 'check'"
                                    width="15"
                                    height="15"
                                />
                                <div>{{ subtask.value }}</div>
                            </div>
                            <div class="right flex-c">
                                <svg-icon name="date" width="28" height="28" />
                                <svg-icon name="user" width="28" height="28" />
                            </div>
                        </div>
                    </div>
                    <div v-if="subtasks" class="modal-card__subtasks-item flex-c">
                        <div class="left flex-c">
                            <svg-icon class="card__check" name="check" width="15" height="15" />
                            <input :id="'subtask-' + cr.id" type="text" placeholder="Подзадача" />
                        </div>
                        <div class="btn" @click="addSubtask('subtask-' + cr.id, cr.cardId)">
                            <svg-icon class="plus" name="plus" width="18" height="18" />
                            <div>Добавить</div>
                        </div>
                    </div>
                    <div class="btn btn--start" @click="subtasks = true">
                        <svg-icon class="plus" name="plus" width="18" height="18" />
                        <div>Добавить подзадачу</div>
                    </div>
                </div>
                <div class="modal-card__comments">
                    <div v-if="cr.comments.length" class="modal-card__comments-list">
                        <div v-for="(comm, i) in cr.comments" :key="i" class="modal-card__comments-item flex">
                            <div class="user">
                                <img src="/img/4.webp" alt="" />
                            </div>
                            <div class="comment">
                                <div class="comment__header flex-c">
                                    <div class="comment__header-name">Иван</div>
                                    <div
                                        v-if="Math.floor((new Date() - new Date(comm.time)) / 1000 / 60) < 60"
                                        class="comment__header-time"
                                    >
                                        {{ Math.floor((new Date() - new Date(comm.time)) / 1000 / 60) }} минут назад
                                    </div>
                                    <div
                                        v-if="Math.floor((new Date() - new Date(comm.time)) / 1000 / 60) >= 60"
                                        class="comment__header-time"
                                    >
                                        В
                                        {{
                                            new Intl.DateTimeFormat('ru', { timeStyle: 'short' }).format(
                                                new Date(comm.time)
                                            )
                                        }}
                                    </div>
                                    <div
                                        v-if="Math.floor((new Date() - new Date(comm.time)) / 1000 / 60) >= 1440"
                                        class="comment__header-time"
                                    >
                                        Вчера
                                    </div>
                                    <div
                                        v-if="Math.floor((new Date() - new Date(comm.time)) / 1000 / 60) >= 2880"
                                        class="comment__header-time"
                                    >
                                        {{ new Date(comm.time).toLocaleString('ru', { dateStyle: 'medium' }) }}
                                    </div>
                                </div>
                                <div class="comment__body">{{ comm.comment }}</div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-card__comments-input flex-c">
                        <div class="user">
                            <img src="/img/4.webp" alt="" />
                        </div>
                        <input
                            :id="'comment-' + cr.id"
                            type="text"
                            placeholder="Задайте вопрос или напишите комметарий... "
                        />
                        <div class="btn btn--send" @click="addComment('comment-' + cr.id, cr.cardId)">
                            <svg-icon name="send" width="24" height="24" />
                        </div>
                    </div>
                </div>
            </div>
        </UiModal>
    </div>
</template>
<script>
import { mapState } from 'vuex'
import { IMaskDirective } from 'vue-imask'
export default {
    name: 'Card',
    directives: {
        imask: IMaskDirective,
    },
    props: {
        sections: {
            type: Object,
            required: true,
        },
        cr: {
            type: Object,
            required: true,
        },
        page: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            mask: {
                mask: '00.00.0000',
                lazy: true,
            },
            sectionName: null,
            name: false,
            isModalCall: false,
            comment: '',
            subtasks: false,
            subtasksCard: false,
            tasks: false,
            taskName: '',
            allTime: 0 * 60,
            start: false,
            timer: null,
            dragstartCard: false,
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
    mounted() {
        if (this.cr.allTime > 0) {
            this.allTime = this.cr.allTime
        }
    },
    methods: {
        dragStart(cardId) {
            this.dragstartCard = true
            this.$store.commit('sections/addOptionsCard', { valDrag: 'start', id: cardId })
        },
        dragEnd(cardId) {
            this.dragstartCard = false
            this.$store.commit('sections/addOptionsCard', { valDrag: 'end', id: cardId })
        },
        onAccept(e) {
            const maskRef = e.detail
            this.value = maskRef.value
            console.log('accept', maskRef.value)
        },
        onComplete(e) {
            const maskRef = e.detail
            console.log('complete', maskRef.unmaskedValue)
        },

        optionsCard(id, cardId, keyOption) {
            const value = document.getElementById(id).value
            this.$store.commit('sections/addOptionsCard', { val: value, id: cardId, key: keyOption })
        },
        subtaskComplete(value, cardId) {
            this.$store.commit('sections/addOptionsCard', { valSubtaskComplete: value, id: cardId })
        },
        addSubtask(id, cardId) {
            const subtask = document.getElementById(id).value
            this.$store.commit('sections/addOptionsCard', { valSubtask: subtask, id: cardId })
            this.subtasks = false
            this.subtasksCard = false
        },
        deadlineCard(id, cardId) {
            const deadline = document.getElementById(id).value.split('.').reverse().join('-')
            this.$store.commit('sections/addOptionsCard', { valDeadline: deadline, id: cardId })
        },
        addComment(id, cardId) {
            const comment = document.getElementById(id).value
            const date = new Date()
            this.$store.commit('sections/addOptionsCard', { valComment: comment, id: cardId, time: date })
            document.getElementById(id).value = ''
        },
        complete() {
            this.$store.commit('sections/complete', { card: this.cr, page: this.page })
        },
        timerStart() {
            this.timer = setInterval(() => this.allTime++, 1000)
        },
        timerStop(cardId, keyOption) {
            clearTimeout(this.timer)
            this.$store.commit('sections/addOptionElectrical', { val: this.allTime, id: cardId, key: keyOption })
        },
    },
}
</script>
