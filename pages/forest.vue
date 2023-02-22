<template>
    <div class="page">
        <div class="fluid container">
            <div class="flex">
                <div class="col-md-1">
                    <draggable
                        v-model="myArray"
                        class="list-group"
                        tag="ul"
                        v-bind="dragOptions"
                        :move="onMove"
                        @start="isDragging = true"
                        @end="isDragging = false"
                    >
                        <transition-group type="transition" :name="'flip-list'">
                            <li v-for="(element, i) in myArray" :key="i" class="list-group-item">
                                <i aria-hidden="true" @click="element.fixed = !element.fixed"></i>
                                {{ element.name }}
                                <span class="badge">{{ i }}</span>
                            </li>
                        </transition-group>
                    </draggable>
                </div>

                <div class="col-md-2">
                    <draggable v-model="myArray2" element="span" v-bind="dragOptions" :move="onMove">
                        <transition-group name="no" class="list-group" tag="ul">
                            <li v-for="(element, i) in myArray2" :key="i" class="list-group-item">
                                <i aria-hidden="true" @click="element.fixed = !element.fixed"></i>
                                {{ element.name }}
                                <span class="badge">{{ i }}</span>
                            </li>
                        </transition-group>
                    </draggable>
                </div>
            </div>

            <div class="list-group col-md-3">
                <pre>{{ myArray }}</pre>
            </div>
            <div class="list-group col-md-3">
                <pre>{{ myArray2 }}</pre>
            </div>
        </div>
    </div>
</template>
<script>
import draggable from 'vuedraggable'
export default {
    components: {
        draggable,
    },
    data() {
        return {
            myArray: [
                {
                    id: 1,
                    name: 'Кир 1',
                    mod: 'r',
                },
                {
                    id: 2,
                    name: 'Кир 2',
                    mod: 'g',
                },
                {
                    id: 3,
                    name: 'Кир 3',
                    mod: 's',
                },
                {
                    id: 4,
                    name: 'Кир 4',
                    mod: 'rg',
                },
            ],
            myArray2: [],
            editable: true,
            isDragging: false,
            delayedDragging: false,
        }
    },

    computed: {
        dragOptions() {
            return {
                animation: 0,
                group: 'description',
                disabled: !this.editable,
                ghostClass: 'ghost',
            }
        },
    },
    watch: {
        isDragging(newValue) {
            if (newValue) {
                this.delayedDragging = true
                return
            }
            this.$nextTick(() => {
                this.delayedDragging = false
            })
        },
    },
    methods: {
        orderList() {
            this.list = this.list.sort((one, two) => {
                return one.order - two.order
            })
        },
        onMove({ relatedContext, draggedContext }) {
            const relatedElement = relatedContext.element
            const draggedElement = draggedContext.element
            return (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
        },
    },
}
</script>
<style lang="less">
.page {
    padding: 15px 19px;
}
.col-md-1,
.col-md-2 {
    padding: 20px;
}
.col-md-1 {
    background: grey;
}
.col-md-2 {
    background: greenyellow;
}
.el {
    padding: 10px;
    margin: 5px;
    display: flex;
    align-items: center;
    cursor: cell;
    &--r {
        background: red;
    }
    &--s {
        background: blue;
    }
    &--g {
        background: greenyellow;
    }
    &--gr {
        background: grey;
    }
}
</style>
