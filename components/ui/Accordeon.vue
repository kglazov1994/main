<template>
    <div ref="block" class="accordeon">
        <div class="accordeon__label accordeon__toggler" @click="toggle($event)">
            <slot name="label" :toggle="toggle" :isOpen="isOpen"></slot>
        </div>
        <div class="accordeon__wrapper">
            <div class="accordeon__content">
                <slot name="content" :toggle="toggle" :isOpen="isOpen"></slot>
            </div>
        </div>
    </div>
</template>
<script>
/*
work only with this markup
<UiAccordeon>
    <template #label>
        some label
    </template>
    <template #content>
        some content
    </template>
</UiAccordeon>
*/
export default {
    name: 'Accordeon',
    props: {
        state: {
            type: Boolean,
            default: null,
        },
        initState: {
            type: Boolean,
            default: false,
        },
        heightMod: {
            default: 0,
            type: Number,
        },
    },
    data() {
        return {
            isOpen: false,
            height: 0,
            maxHeight: 0,
            content: null,
            label: null,
            block: null,
        }
    },
    watch: {
        state() {
            this.toggle()
        },
    },
    mounted() {
        const block = this.$refs.block
        const label = block.querySelector('.accordeon__label')
        const content = block.querySelector('.accordeon__wrapper')

        this.block = block
        this.label = label
        this.content = content
        this.maxHeight = content.querySelector('.accordeon__content').offsetHeight + this.heightMod
        this.content.style.height = this.height

        // Конфигурация observer (за какими изменениями наблюдать)
        const config = {
            childList: true,
            subtree: true,
        }
        // Функция обратного вызова при срабатывании мутации
        const callback = () => {
            // содержимое обновилось
            this.maxHeight = content.firstChild.offsetHeight + this.heightMod
            this.height = this.maxHeight
            // если открыто - меняем высоту
            if (this.isOpen) {
                this.content.style.height = this.height + 'px'
            }
        }
        // Начинаем наблюдение за настроенными изменениями целевого элемента
        const observer = new MutationObserver(callback)
        if (content) {
            observer.observe(content, config)
        }
        // если изначально открыто - то открываем
        if (this.initState || this.state) {
            this.toggle()
        }
    },
    methods: {
        toggle() {
            this.$nextTick(() => {
                this.$emit('toggle', !this.isOpen)
                this.isOpen = this.state !== null ? this.state : !this.isOpen
                this.height = this.isOpen ? this.maxHeight : 0
                this.content.style.height = this.height + 'px'
                this.isOpen ? this.block.classList.add('is_open') : this.block.classList.remove('is_open')
            })
        },
    },
}
</script>
<style lang="less">
.accordeon {
    position: relative;
    &__wrapper {
        overflow: hidden;
        transition: height 0.3s ease;
    }
    &__arrow {
        margin-left: auto;
        opacity: 0.4;
        .trs(all);
        .is_open & {
            opacity: 1;
            transform: scale(-1);
        }
    }
}
</style>
