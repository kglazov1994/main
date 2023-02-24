export const state = () => ({
    electrical: [],
    dishes: [],
})
export const mutations = {
    // Электротовары
    setElectrical(state, payload) {
        state.electrical.push(payload)
    },
    setCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            if (section.id === payload.sectionId) {
                section.cards.push(payload)
            }
        })
    },
    addNameElectrical(state, payload) {
        state.electrical.forEach((section) => {
            if (section.id === payload.id) {
                section.name = payload.name
            }
        })
    },
    addNameCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.name = payload.val
                }
            })
        })
    },
    addExecutorCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.executor = payload.val
                }
            })
        })
    },
    addDeadlineCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.deadline = payload.val
                }
            })
        })
    },
    addProjectCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.project = payload.val
                }
            })
        })
    },
    addDescriptionCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.description = payload.val
                }
            })
        })
    },
    addSubtaskCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.subtasks.push(payload.val)
                }
            })
        })
    },

    // Посуда-Сити
    setDishes(state, payload) {
        state.dishes.push(payload)
    },
    setCardDishes(state, payload) {
        state.dishes.forEach((section) => {
            if (section.id === payload.sectionId) {
                section.cards.push(payload)
            }
        })
    },
}
