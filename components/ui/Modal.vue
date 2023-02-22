<template>
    <transition name="fade">
        <div v-if="open" v-bsl="open" class="modal" :data-position="position">
            <div
                v-click-outside="
                    () => {
                        $emit('input', false)
                    }
                "
                v-bsl="open"
                class="modal__content"
            >
                <div class="modal__close like-link" @click="$emit('input', false)">
                    <svg-icon name="close" width="24" height="24" />
                </div>
                <slot></slot>
            </div>
        </div>
    </transition>
</template>
<script>
export default {
    name: 'Modal',
    props: {
        open: {
            type: Boolean,
            default: false,
        },
        position: {
            type: String,
            default: '',
        },
    },
}
</script>
<style lang="less">
.modal {
    position: fixed;
    z-index: 16;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(19, 20, 29, 20%);
    &[data-position*='top'] {
        align-items: flex-start;
        padding-top: 16px;
        @media @sm {
            padding-top: 0;
        }
    }
    &[data-position*='bottom'] {
        align-items: flex-end;
        padding-bottom: 16px;
        @media @sm {
            padding-bottom: 0;
        }
    }
    &[data-position*='right'] {
        justify-content: flex-end;
        padding-right: 16px;
        @media @sm {
            padding-right: 0;
        }
    }
    &[data-position*='left'] {
        justify-content: flex-start;
        padding-left: 16px;
        @media @sm {
            padding-left: 0;
        }
    }
    &__content {
        width: 564px;
        max-width: 100%;
        background: #fff;
        padding: 40px;
        position: relative;
        max-height: calc(100vh - 32px);
        overflow-y: auto;
        @media @sm {
            height: 100%;
            max-height: 100%;
            padding: 24px 16px 16px;
        }
    }
    &__close {
        position: absolute;
        top: 8px;
        right: 8px;
        padding: 12px;
        z-index: 1;
        @media @sm {
            padding: 8px;
        }
        svg {
            display: block;
        }
    }
}
</style>
