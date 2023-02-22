<template>
    <div class="loader">
        <transition name="fade" mode="out-in">
            <div v-if="status == 'loading'" key="loader" class="loader__loader"></div>
            <div
                v-if="status == 'error'"
                key="error"
                class="loader__error"
                aria-label="Произошла ошибка загрузки"
            ></div>
            <div v-if="status == 'loaded'" key="content" class="loader__content">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>
<script>
export default {
    name: 'Loader',
    props: {
        status: {
            type: String,
            required: true,
            validator(value) {
                return ['loading', 'loaded', 'error'].includes(value)
            },
        },
    },
}
</script>
<style lang="less">
.loader__loader,
.loader__error {
    padding-top: 25%;
    position: relative;
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 40px;
        height: 40px;
        top: 50%;
        left: 50%;
        margin-top: -20px;
        margin-left: -20px;
        border: 5px solid;
        border-top-color: #0000;
        animation: spin 1s linear infinite;
        border-radius: 50%;
    }
}
.loader__error {
    &::before {
        content: attr(aria-label);
        animation: none;
        white-space: nowrap;
        border: 0;
        width: 100%;
        text-align: center;
        left: 0;
        margin-left: 0;
        height: auto;
    }
}
@keyframes spin {
    to {
        transform: rotate(1turn);
    }
}
</style>
