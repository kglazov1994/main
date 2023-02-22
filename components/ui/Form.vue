<template>
    <form class="form" @submit.prevent="form.submit.callback">
        <UiFormGroup
            v-for="(group, name, inputIndex) in form.fields"
            :key="inputIndex"
            :group="group"
            :name="name"
        ></UiFormGroup>
        <div v-if="!form.hideSubmit" class="form-group">
            <UiFormInput v-if="form.agree" v-model="form.agree.checked" name="agree" :input="form.agree"></UiFormInput>
            <UiButton dark wide type="submit">{{
                form.submit && form.submit.label ? form.submit.label : 'Отправить'
            }}</UiButton>
        </div>
    </form>
</template>
<script>
export default {
    name: 'Form',
    props: {
        form: {
            type: Object,
            default() {
                return {}
            },
        },
    },
}
</script>
<style lang="less">
.form-control {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 20px;
    &__input,
    &__select,
    &__textarea,
    &__checkbox,
    &__radio {
        border-radius: 0;
        border: none;
        font-family: inherit;
        text-align: inherit;
        font-size: inherit;
        box-shadow: none;
        -webkit-appearance: none;
        appearance: none;
        outline: none;
        color: @primary;
    }
}
</style>
