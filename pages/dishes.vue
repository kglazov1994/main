<template>
    <div class="page-content">
        <Header :namepage="namePage" />
        <div class="page">
            <div class="page__header flex-c">
                <div class="page__last">Последняя задача выполнена 10 марта</div>
                <div class="page__btns flex-c">
                    <div class="page__btn flex-c">
                        <svg-icon name="filter" width="14" height="14" />
                        <div>Фильтрация</div>
                    </div>
                    <div class="page__btn flex-c">
                        <svg-icon name="sort" width="14" height="14" />
                        <div>Сортировка</div>
                    </div>
                </div>
            </div>
            <Page :idpage="idPage" />
        </div>
    </div>
</template>
<script>
export default {
    name: 'Index',
    data() {
        return {
            idPage: 'dishes',
            namePage: 'Посуда-Сити',
        }
    },
}
</script>
