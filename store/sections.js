export const state = () => ({
    electrical: [],
    cardsElectrical: [],
    dishes: [],
    cardsDishes: [],
})
export const mutations = {
    setElectrical(state, payload) {
        state.electrical.push(payload)
    },
    setCardElectrical(state, payload) {
        state.cardsElectrical.push(payload)
    },

    setDishes(state, payload) {
        state.dishes.push(payload)
    },
    setCardDishes(state, payload) {
        state.cardsDishes.push(payload)
    },
    addNameElectrical(state, payload) {
        state.electrical.forEach((section) => {
            if (section.id === payload.id) {
                section.name = payload.name
            }
        })
    },
    addNameCardElectrical(state, payload) {
        state.cardsElectrical.forEach((card) => {
            if (card.cardId === payload.id) {
                card.name = payload.val
            }
        })
    },
    addExecutorCardElectrical(state, payload) {
        state.cardsElectrical.forEach((card) => {
            if (card.cardId === payload.id) {
                card.executor = payload.val
            }
        })
    },
}
