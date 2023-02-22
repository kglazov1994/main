<template>
    <client-only>
        <splide :options="options" :style="`--count:${options.perPage || 1};--gap:calc(1px * ${options.gap || 0})`">
            <slot></slot>
        </splide>
    </client-only>
</template>
<script>
export default {
    name: 'Slider',
    props: {
        options: {
            type: Object,
            default() {
                return {}
            },
            required: true,
        },
    },
}
</script>
<style lang="less">
.splide:not(.is-active) {
    .splide__list {
        overflow: hidden;
        display: flex;
        width: 100%;
        .splide__slide {
            margin-right: var(--gap);
            width: calc(100% / var(--count) - var(--gap));
        }
    }
}
</style>
