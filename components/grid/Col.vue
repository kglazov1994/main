<template>
    <div class="col" :class="colClass">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: 'Column',
    props: {
        size: {
            type: String,
            default: '12,12,12',
        },
        centered: {
            type: Boolean,
            default: false,
        },
        end: {
            type: Boolean,
            default: false,
        },
        paddingLeft: {
            type: Boolean,
            default: false,
        },
        paddingRight: {
            type: Boolean,
            default: false,
        },
        noPadding: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        colClass() {
            const sizes = this.size.split(',')
            const lgKey = `lg-${sizes[0]}`
            const mdKey = `md-${sizes[1]}`
            const smKey = `sm-${sizes[2]}`
            return {
                'col--centered': this.centered,
                'col--padding-left': this.paddingLeft,
                'col--padding-right': this.paddingRight,
                'col--no-padding': this.noPadding,
                'col--end': this.end,
                [lgKey]: sizes[0],
                [mdKey]: sizes[1],
                [smKey]: sizes[2],
            }
        },
    },
}
</script>
<style lang="less">
.col {
    padding: 0 @spacer;
    box-sizing: border-box;
    @media @md {
        padding: 0 @spacerMd;
    }
    @media @sm {
        padding: 0 @spacerSm;
    }
    &--centered {
        margin: 0 auto;
    }

    &--padding-left {
        padding-right: 0;
    }

    &--padding-right {
        padding-left: 0;
    }

    &--no-padding {
        padding-left: 0;
        padding-right: 0;
    }
    &--end {
        margin-left: auto;
    }
    &.sm-0 {
        @media @sm {
            display: none;
        }
    }
    &.md-0 {
        @media @md {
            display: none;
        }
    }
    &.lg-0 {
        display: none;
    }
}
.grid-loop (@i) when (@i > 0) {
    .col.lg-@{i} {
        width: @baseWidth * @i;
    }
    .grid-row .col.lg-@{i} {
        width: 100%;
        grid-column: span @i;
    }
    .grid-loop(@i - 1);
}

.grid-loop-md (@i) when (@i > 0) {
    .col.md-@{i} {
        width: @baseWidth * @i;
    }

    .grid-row .col.md-@{i} {
        width: 100%;
        grid-column: span @i;
    }

    .grid-loop-md(@i - 1);
}

.grid-loop-sm (@i) when (@i > 0) {
    .col.sm-@{i} {
        width: @baseWidth * @i;
    }

    .grid-row .col.sm-@{i} {
        width: 100%;
        grid-column: span @i;
    }

    .grid-loop-sm(@i - 1);
}

.grid-loop(@columnCount);
@media @md {
    .grid-loop-md(@columnCount);
}
@media @sm {
    .grid-loop-sm(@columnCount);
}
</style>
