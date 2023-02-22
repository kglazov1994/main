import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'kanban',
        paths: ['sections.electrical', 'sections.cardsElectrical', 'sections.dishes', 'sections.cardsDishes'],
    })(store)
}
