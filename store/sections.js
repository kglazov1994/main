export const state = () => ({
    electrical: [
        {
            name: 'Нужно сделать',
            cards: [],
            id: 'electrical0',
        },
        {
            name: 'В работе',
            cards: [],
            id: 'electrical1',
        },
        {
            name: 'Сделано',
            cards: [],
            id: 'electrical2',
        },
        {
            name: 'Завершено',
            cards: [],
            id: 'electrical3',
        },
    ],
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
    addOptionElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                for (const key in card) {
                    if (key === payload.key) {
                        if (card.cardId === payload.id) {
                            card[key] = payload.val
                        }
                    }
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
    addSubtaskCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.subtasks.push(payload.val)
                }
            })
        })
    },
    addCommentCardElectrical(state, payload) {
        state.electrical.forEach((section) => {
            section.cards.forEach((card) => {
                if (card.cardId === payload.id) {
                    card.comments.push(payload.val)
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
