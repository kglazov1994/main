<template>
    <div class="row" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'GridRow',
    props: {
        fullwidth: {
            type: Boolean,
            default: false,
        },
        size: {
            type: Number,
            default: 12,
        },
    },
    computed: {
        rowClass() {
            return {
                'row--fullwidth': this.fullwidth,
                [`grid-row grid-row--${this.size}`]: this.size !== 12,
            }
        },
    },
}
</script>
<style lang="less">
.row {
    margin: 0 -@spacer;
    display: flex;
    flex-wrap: wrap;
    @media @md {
        margin: 0 -@spacerMd;
    }
    @media @sm {
        margin: 0 -@spacerSm;
    }
    &--fullwidth {
        margin-left: 0;
        margin-right: 0;
    }
    &.grid-row {
        display: grid;
        grid-template-columns: repeat(@columnCount, 1fr);
        > .col {
            min-width: 0;
        }

        .grid-row-loop (@i) when (@i > 0) {
            &--@{i} {
                grid-template-columns: repeat(@i, 1fr);
            }
            .grid-row-loop(@i - 1);
        }
        .grid-row-loop(@columnCount);
    }
}
</style>
