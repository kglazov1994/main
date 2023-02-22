<template>
    <div class="autosize-textarea" :style="`--height:${height}px`">
        <textarea
            ref="textarea"
            v-model="value"
            :name="name"
            :placeholder="input.placeholder"
            class="autosize-textarea__text"
            @input="update()"
        >
        </textarea>
        <!-- eslint-disable-next-line vue/no-v-html -->
        <div ref="height" class="autosize-textarea__height" v-html="value.replace(/(?:\r\n|\r|\n)/g, '<br />|')"></div>
    </div>
</template>
<script>
export default {
    name: 'Textarea',
    props: {
        input: {
            type: Object,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            value: '',
            height: 0,
        }
    },
    mounted() {
        this.height = this.$refs.textarea.closest('.form-control').offsetHeight
        this.$refs.textarea.style.height = this.height + 'px'
    },
    methods: {
        update() {
            this.$emit('input', this.value)
            this.$nextTick(() => {
                this.$refs.textarea.style.height = this.$refs.height.scrollHeight + 'px'
            })
        },
    },
}
</script>
<style lang="less">
.autosize-textarea {
    position: relative;
    width: 100%;
    height: 100%;
    flex-grow: 1;
    &__height {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        opacity: 0;
        pointer-events: none;
        word-break: break-all;
    }
    &__text {
        width: 100%;
        resize: none;
        border: 0;
        font-family: inherit;
        outline: none;
        overflow: hidden;
        flex-shrink: 0;
        display: block;
    }
}
</style>
