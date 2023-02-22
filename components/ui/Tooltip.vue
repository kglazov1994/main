<template>
    <div ref="tooltip" class="tooltip">
        <div class="tooltip__toggler">
            <slot></slot>
        </div>
        <div class="tooltip__content" :style="`width: ${width};white-space:${noWrap ? 'nowrap' : 'normal'}`">
            <slot name="content"></slot>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Tooltip',
    props: {
        width: {
            type: String,
            default: 'auto',
        },
        noWrap: {
            type: Boolean,
            default: false,
        },
    },
    mounted() {
        const minViewPortWidth =
            window.innerWidth && document.documentElement.clientWidth
                ? Math.min(window.innerWidth, document.documentElement.clientWidth)
                : window.innerWidth ||
                  document.documentElement.clientWidth ||
                  document.getElementsByTagName('body')[0].clientWidth
        const content = this.$refs.tooltip.querySelector('.tooltip__content')
        if (content.offsetWidth + content.getBoundingClientRect().left > minViewPortWidth) {
            this.$refs.tooltip.classList.add('tooltip--right')
        }
    },
}
</script>
<style lang="less">
.tooltip {
    position: relative;
    &__content {
        position: absolute;
        opacity: 0;
        pointer-events: none;
        bottom: 100%;
        margin-bottom: 6px;
        left: 0;
        padding: 8px 12px;
        background: #fff;
        border-radius: 6px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
        transform: translateY(10px);
        .trs(all, 0.3s,0.3s);
        .tooltip--right & {
            left: unset;
            right: 0;
        }
        &:empty {
            display: none;
        }
        &::after {
            content: '';
            position: absolute;
            height: 10px;
            top: 100%;
            left: 0;
            right: 0;
            margin-top: -2px;
        }
    }
    &:hover & {
        &__content {
            opacity: 1;
            pointer-events: all;
            transform: translateY(0);
            z-index: 1;
            .trs(all);
        }
    }
}
</style>
