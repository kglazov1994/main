<template>
    <!-- TODO: сделать динамический href и to -->
    <component
        :is="comonentType"
        :[componenthref]="to"
        :href="to"
        class="button"
        :disabled="disabled"
        :class="buttonClass"
        :type="type"
        :target="comonentType === 'a' ? '_blank' : 'null'"
    >
        <slot></slot>
    </component>
</template>
<script>
export default {
    name: 'Button',
    props: {
        size: {
            type: String,
            default: 'n',
            validator(value) {
                // Значение должно соответствовать одной из этих строк
                // размеры большая, поменбше и жестб совсем мелкая
                return ['xxl', 'xl', 'l', 'n', 's'].includes(value)
            },
        },
        to: {
            type: [String, null],
            default: null,
        },
        wide: {
            type: Boolean,
            default: false,
        },
        centered: {
            type: Boolean,
            default: false,
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        hollow: {
            type: Boolean,
            default: false,
        },
        color: {
            type: String,
            default: 'green',
        },
        type: {
            type: String,
            default: 'button',
        },
    },
    computed: {
        componenthref() {
            return this.comonentType === 'a' ? 'href' : 'to'
        },
        comonentType() {
            if (this.to) {
                if (['mailto:', 'tel:', 'http'].filter((el) => this.to.includes(el)).length) {
                    return 'a'
                }
                return 'nuxt-link'
            }
            return 'button'
        },
        buttonClass() {
            return {
                'button--wide': this.wide,
                'button--centered': this.centered,
                'button--hollow': this.hollow,
                [`button--${this.color}`]: true,
                [`button--${this.size}`]: true,
            }
        },
    },
}
</script>
<style lang="less">
.button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    cursor: pointer;
    border: 0;
    height: 44px;
    padding: 0 24px;
    box-shadow: none;
    font-family: @baseFont;
    color: @primary;
    gap: 8px;
    .trs(all);

    //state
    &:hover {
        background: @accent;
        color: #fff;
    }
    &[disabled] {
        pointer-events: none;
        opacity: 0.8;
    }

    // type
    &--hollow {
        border: 1px solid;
        background: transparent;

        &:hover {
            border-color: @accent;
        }
    }
    &--text {
        background: transparent;
        border-color: transparent;
        padding-left: 0;
        padding-right: 0;

        &:hover {
            background: transparent;
            color: @accent !important;
        }
    }
    &--wide {
        width: 100%;
    }
    &--centered {
        margin-left: auto;
        margin-right: auto;
    }

    //size
    &--l {
        padding: 0 28px;
        height: 44px;
    }
    &--n {
        padding: 0 18px;
        height: 40px;
    }
    &--s {
        padding: 0 12px;
        height: 32px;
    }

    //color
    &--green {
        background: green;
        color: #fff;
    }
}
</style>
