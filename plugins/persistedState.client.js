import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
    createPersistedState({
        key: 'kanban',
        paths: ['sections.pages'],
    })(store)
}
