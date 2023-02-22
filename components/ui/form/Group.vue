<template>
    <div v-if="group.childs" class="form-group">
        <UiFormInput
            v-for="(input, input_name) in group.childs"
            :key="input_name"
            v-model="input.value"
            :name="input_name"
            :input="input"
        ></UiFormInput>
    </div>
    <div v-else class="form-group">
        <UiFormInput v-model="group.value" :name="name" :input="group"></UiFormInput>
    </div>
</template>
<script>
export default {
    name: 'FormGroup',
    props: {
        name: {
            type: String,
            default: 'nonameinput',
            required: true,
        },
        group: {
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
.form-group {
    position: relative;
    display: flex;
    align-items: flex-end;
    gap: @spacer;
    @media @md {
        gap: @spacerMd;
    }
    @media @sm {
        gap: @spacerSm;
    }
    & + & {
        margin-top: @spacer;
        @media @md {
            margin-top: @spacerMd;
        }
        @media @sm {
            margin-top: @spacerSm;
        }
    }
    @media @sm {
        align-items: flex-start;
    }
}
</style>
