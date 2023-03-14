<template>
    <div class="site">
        <div class="site__container flex">
            <div class="sitebar">
                <div class="sitebar__header flex">
                    <div class="sitebar__logo">Captain</div>
                    <svg-icon name="burger" width="20" height="14" />
                </div>
                <ul class="sitebar__menu">
                    <li class="sitebar__item flex-c">
                        <svg-icon name="house" width="20" height="20" />
                        <div>Дашборд</div>
                    </li>
                    <li class="sitebar__item flex-c">
                        <svg-icon name="clock" width="20" height="20" />
                        <div>Мои задачи</div>
                    </li>
                    <li class="sitebar__item flex-c">
                        <svg-icon name="project" width="20" height="20" />
                        <div>Проекты</div>
                    </li>
                </ul>
                <div class="sitebar__title">Избранное</div>
                <div class="sitebar__favorites">
                    <div class="sitebar__favorites-item">
                        <nuxt-link to="/" class="sitebar__favorites-link">Электротовары</nuxt-link>
                    </div>
                    <div class="sitebar__favorites-item">
                        <nuxt-link to="/forest" class="sitebar__favorites-link">Лесхозснаб</nuxt-link>
                    </div>
                    <div class="sitebar__favorites-item">
                        <nuxt-link to="/dishes" class="sitebar__favorites-link">Посуда-Сити</nuxt-link>
                    </div>
                    <div class="sitebar__favorites-item sitebar__favorites-item--last">
                        <nuxt-link to="/" class="sitebar__favorites-link">Автошкола “Автолицей”</nuxt-link>
                    </div>
                </div>
                <div class="sitebar__open flex-c">
                    <div>Раскрыть весь список</div>
                    <svg-icon name="arrow" width="10" height="10" />
                </div>
                <div class="sitebar__title">Команды</div>
                <div class="sitebar__teams">
                    <div class="sitebar__team flex-c">
                        <svg-icon name="team" width="10" height="10" />
                        <div>Программисты</div>
                    </div>
                    <div class="sitebar__team flex-c">
                        <svg-icon name="team" width="10" height="10" />
                        <div>Маркетологи</div>
                    </div>
                    <div class="sitebar__team flex-c">
                        <svg-icon name="team" width="10" height="10" />
                        <div>Дизайнеры</div>
                    </div>
                </div>
            </div>
            <div class="wrapper">
                <!-- <Header /> -->
                <main class="site__content">
                    <Nuxt />
                </main>
                <!-- <Footer /> -->
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Default',
}
</script>
