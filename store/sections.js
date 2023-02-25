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
    complete(state, payload) {
        payload.id = 'celectrical3'
        payload.sectionId = 'electrical3'
        state.electrical.forEach((section) => {
            if (section.id === payload.sectionId) {
                section.cards.push(payload)
            }
            if (section.id !== payload.sectionId) {
                const index = section.cards.findIndex((n) => n.sectionId === payload.sectionId)
                if (index !== -1) {
                    section.cards.splice(index, 1)
                }
            }
        })
    },
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
                    card.comments.push({ comment: payload.val, time: payload.time })
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
