<template>
    <label
        v-click-outside="
            () => {
                isOpen = false
            }
        "
        class="form-select"
    >
        <div
            v-if="select.options"
            ref="select"
            class="select"
            :class="{
                'select--open': isOpen,
            }"
        >
            <div
                class="select__current"
                :class="{ 'select__current--disabled': select.disabled }"
                @click="isOpen = !isOpen"
            >
                {{ currentValue ? currentLabel : select.options[Object.keys(select.options)[0]] }}
            </div>
            <transition name="fade">
                <div v-if="isOpen && !select.disabled" class="select__dropdown">
                    <div v-if="select.hasSearch" class="select__search">
                        <input
                            v-model="optionQuery"
                            placeholder="поиск"
                            name="optionSearch"
                            :disabled="select.disabled"
                        />
                    </div>
                    <div v-if="filteredOptions" class="select__options">
                        <perfect-scrollbar>
                            <div
                                v-for="(label, optionValue, index) in filteredOptions"
                                :key="optionValue"
                                class="select__option"
                                :value="optionValue.toString()"
                                :selected="value ? optionValue == value : index == 0"
                                @click="
                                    currentValue = optionValue
                                    currentLabel = label
                                    isOpen = false
                                    $emit('change', optionValue)
                                "
                            >
                                {{ label }}
                            </div>
                        </perfect-scrollbar>
                    </div>
                    <div v-else class="select__option">Ничего не найдено</div>
                </div>
            </transition>
        </div>
    </label>
</template>
<script>
export default {
    name: 'Select',
    props: {
        name: {
            type: String,
            required: true,
        },
        select: {
            type: Object,
            default() {
                return {}
            },
        },
    },
    data() {
        return {
            currentValue: null,
            currentLabel: null,
            isOpen: false,
            optionQuery: '',
        }
    },
    computed: {
        filteredOptions() {
            if (this.optionQuery !== '') {
                const list = {}
                for (const key in this.select.options) {
                    if (Object.hasOwnProperty.call(this.select.options, key)) {
                        const element = this.select.options[key]
                        if (element.toLowerCase().indexOf(this.optionQuery.toLowerCase()) + 1) {
                            list[key] = element
                        }
                    }
                }
                if (Object.keys(list).length) {
                    return list
                }
                return false
            }
            return this.select.options
        },
    },

    watch: {
        value(val) {
            this.currentValue = val
            this.currentLabel = this.select.options[val]
        },
        isOpen(val) {
            if (val) {
                if (!this.$device.isDesktop) {
                    try {
                        this.$refs.select.scrollIntoView({
                            block: 'top',
                            behavior: 'smooth',
                        })
                    } catch (err) {}
                }
            }
        },
        options: {
            deep: true,
            handler() {
                this.currentLabel = this.select.options[this.value]
            },
        },
    },
}
</script>
<style lang="less" scoped>
.select {
    position: relative;
    &--open {
        z-index: 2;
    }
    &__current {
        position: relative;
        cursor: pointer;
        white-space: nowrap;
        padding: 0 16px;
        height: 44px;
        display: flex;
        align-items: center;
        background: #fff;
        &:not(&--disabled) {
            &::after {
                content: '';
                position: absolute;
                width: 8px;
                background: url(../../../assets/icons/select-arrow-down.svg) center no-repeat, transparent;
                right: 16px;
                top: 0;
                bottom: 0;
                .trs(transform);
                .select--open & {
                    transform: scaleY(-1);
                }
            }
        }
    }
    &__dropdown {
        position: absolute;
        background: #fff;
        top: 100%;
        padding: 16px 0;
        left: 0;
        right: 0;
        border-top: 1px #ccc solid;
        white-space: nowrap;
        .select--fixed-dd & {
            min-width: 100%;
            max-width: 250px;
            white-space: normal;
        }
        @media @sm {
            right: 0;
        }
    }
    &__options {
        overflow: hidden;
        max-height: calc(30px * 5);
        .ps {
            height: 100%;
        }
    }
    &__option {
        padding: 8px 16px;
        cursor: pointer;
        &:hover {
            background: #ccc;
        }
    }
    &__search {
        margin-bottom: 8px;
        padding: 0 16px;
        input {
            border: 0;
            width: 100%;
            border-radius: 0;
            font-family: inherit;
            text-align: inherit;
            font-size: inherit;
            box-shadow: none;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline: none;
            color: #000;
            border-bottom: 1px #ccc solid;
        }
    }
}
</style>
