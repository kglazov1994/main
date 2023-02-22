<template>
    <!-- eslint-disable -->
    <div class="tab">
        <div class="tab__labels">
            <uiButton
                v-for="(tab, index) in tabs"
                :key="index"
                class="tab__label"
                :class="{ 'tab__label--active': currentTab === index }"
                v-html="tab"
                @click.native="currentTab = index"
                :bg-gray="currentTab !== index"
                :white="currentTab === index"
            ></uiButton>
        </div>
        <transition name="fade" mode="out-in">
            <div :key="currentTab" class="tab__content">
                <slot :currentTab="currentTab"></slot>
            </div>
        </transition>
    </div>
</template>
<script>
/*
<UiTabs v-slot="{ currentTab }" :tabs="['tab1-label','tab2-label]">
    <div v-if="currentTab === 0">
        tab1 content
    </div>
    <div v-if="currentTab === 1">
        tab2 content
    </div>
</UiTabs>
*/
export default {
    props: {
        tabs: {
            type: Array,
            required: true,
        },
    },
    data() {
        return {
            currentTab: 0,
        }
    },
}
</script>
<style lang="less">
.tab {
    &__labels {
        display: inline-flex;
    }
}
</style>
