<!-- eslint-disable vue/no-v-html -->
<template>
    <label
        class="form-control flex-c"
        :class="{
            'form-control--focused': focused || input.value,
            'form-control--icon': input.icon,
            'form-control--checkbox': input.type === 'checkbox',
        }"
    >
        <div v-if="input.label && input.type !== 'checkbox'" class="form-control__label">
            {{ input.label }}
        </div>

        <svg-icon v-if="input.icon" class="form-control__icon" :name="input.icon" width="24" height="24" />
        <UiFormSelect v-if="input.type === 'select'" :select="input" :name="name" />
        <UiFormTextarea v-else-if="input.type === 'textarea'" :input="input" :name="name" />
        <input
            v-else-if="input.type === 'checkbox'"
            type="checkbox"
            :name="name"
            :checked="input.checked"
            class="form-control__checkbox"
            @input="$emit('input', !input.checked)"
        />
        <input
            v-else
            v-model="input.value"
            :type="input.type || 'text'"
            :name="name"
            :placeholder="input.placeholder"
            class="form-control__input"
            :class="{
                'form-control__input--border': input.border,
                [input.class]: input.class,
                'form-control__input--fill': input.value,
            }"
            @focus="focused = true"
            @blur="focused = false"
        />
        <span
            v-if="input.label && input.type === 'checkbox'"
            class="form-control__label form-control__label--inline"
            v-html="input.label"
        >
        </span>
        <div v-if="input.validationMessage" class="form-control__validation">
            {{ input.validationMessage }}
        </div>
    </label>
</template>
<script>
export default {
    name: 'Input',
    props: {
        name: {
            type: String,
            required: true,
        },
        input: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            focused: false,
        }
    },
}
</script>
<style lang="less">
.form-control {
    position: relative;
    height: 38px;
    border-bottom: 1px solid #ccc;
    &--focused {
        border-bottom-color: #ccc;
    }
    &--checkbox {
        border-bottom: 0;
        height: 32px;
        cursor: pointer;
        &:hover {
            color: red;
        }
    }
    &__label {
        position: absolute;
        pointer-events: none;
        width: 100%;
        color: #ccc;
        transform-origin: left bottom;
        .trs(all);
        &--inline {
            position: static;
            width: auto;
            transform: none !important;
            color: currentColor !important;
        }
    }
    &--focused & {
        &__label {
            transform: scale(0.733333) translateY(-15px);
            color: #ccc;
        }
    }
    &--icon & {
        &__label {
            left: 36px;
        }
    }
    &__icon {
        flex-shrink: 0;
    }
    &__input {
        width: 100%;
        font-weight: 500;
        color: #000;
        background: none;
        height: 20px;
        transform: translateY(7px);
        .trs(all);
    }
    &__checkbox {
        width: 20px;
        height: 20px;
        display: inline-block;
        border: 2px solid #dadada;
        border-radius: 4px;
        transform: none;
        flex-shrink: 0;
        &:checked {
            border-color: #56705f;
            background: url(~/assets/icons/checked.svg) center / 16px no-repeat, #56705f;
        }
    }
    &__validation {
        position: absolute;
        color: red;
        right: 0;
        top: 100%;
        margin-top: 2px;
    }
}
</style>
