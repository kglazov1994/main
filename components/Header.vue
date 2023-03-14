<template>
    <header class="header flex-c">
        <div class="header__left">
            <div class="header__up flex-c">
                <div class="header__page">{{ namepage }}</div>
                <div class="header__work">В работе</div>
            </div>
            <div class="header__down">
                <div class="header__nav flex-c">
                    <div class="header__nav-item">Описание</div>
                    <div class="header__nav-item">Список</div>
                    <div class="header__nav-item header__nav-item--active">Канбан</div>
                    <div class="header__nav-item">Планирование</div>
                    <div class="header__nav-item">Дашборд</div>
                    <div class="header__nav-item">Команда</div>
                </div>
            </div>
        </div>
        <div class="header__right flex-c">
            <svg-icon name="theme" width="30" height="30" />
            <svg-icon name="message" width="30" height="30" />
            <svg-icon name="info" width="30" height="30" />
            <div class="header__user">
                <img src="/img/4.webp" alt="" />
            </div>
        </div>
    </header>
</template>
<script>
export default {
    name: 'Header',
    props: {
        namepage: {
            type: String,
            required: true,
        },
    },
}
</script>
<style lang="less">
.header {
    text-align: center;
    background: @basecolor;
    padding: 20px;
    padding-bottom: 0;
    justify-content: space-between;
    &__up {
        gap: 14px;
    }
    &__page {
        font-style: normal;
        font-weight: 700;
        font-size: 18px;
        color: #333;
    }
    &__work {
        display: flex;
        align-items: center;
        gap: 8px;
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 16px;
        color: #333;
        &::before {
            content: '';
            display: block;
            width: 10px;
            height: 10px;
            background: #8bc34a;
            border-radius: 50%;
        }
    }
    &__nav {
        gap: 20px;
        margin-top: 7px;
        &-item {
            font-style: normal;
            font-weight: 600;
            font-size: 14px;
            line-height: 19px;
            color: #b7b9bb;
            padding-bottom: 8px;
            cursor: pointer;
            transition: 0.3s all;
            border-bottom: 2px solid transparent;
            &--active,
            &:hover {
                color: #4f6ea3;
                border-bottom: 2px solid #4f6ea3;
            }
        }
    }
    &__right {
        gap: 10px;
        margin-top: -10px;
    }
    &__user {
        width: 30px;
        height: 30px;
        overflow: hidden;
        border-radius: 50%;
        img {
            object-fit: cover;
        }
    }
}
</style>
