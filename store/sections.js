export const state = () => ({
    pages: {
        electrical: [
            {
                name: 'Нужно сделать',
                cards: [],
                id: 'electrical0',
                pageName: 'electrical',
            },
            {
                name: 'В работе',
                cards: [],
                id: 'electrical1',
                pageName: 'electrical',
            },
            {
                name: 'Сделано',
                cards: [],
                id: 'electrical2',
                pageName: 'electrical',
            },
            {
                name: 'Завершено',
                cards: [],
                id: 'electrical3',
                pageName: 'electrical',
            },
        ],
        dishes: [
            {
                name: 'Нужно сделать ПОСУДА',
                cards: [],
                id: 'dishes0',
                pageName: 'dishes',
            },
            {
                name: 'В работе',
                cards: [],
                id: 'dishes1',
                pageName: 'dishes',
            },
            {
                name: 'Сделано',
                cards: [],
                id: 'dishes2',
                pageName: 'dishes',
            },
            {
                name: 'Завершено',
                cards: [],
                id: 'dishes3',
                pageName: 'dishes',
            },
        ],
        forest: [
            {
                name: 'Нужно сделать ЛесХозСнаб',
                cards: [],
                id: 'forest0',
                pageName: 'forest',
            },
            {
                name: 'В работе',
                cards: [],
                id: 'forest1',
                pageName: 'forest',
            },
            {
                name: 'Сделано',
                cards: [],
                id: 'forest2',
                pageName: 'forest',
            },
            {
                name: 'Завершено',
                cards: [],
                id: 'forest3',
                pageName: 'forest',
            },
        ],
    },
})
export const mutations = {
    // complete пока только для страницы электротоваров
    complete(state, payload) {
        for (const key in state.pages) {
            state.pages[key].forEach((section) => {
                if (section.id === payload.page + '3') {
                    payload.card.id = 'c' + section.id
                    payload.card.sectionId = section.id
                }
            })
        }
        for (const key in state.pages) {
            state.pages[key].forEach((section) => {
                if (section.id === payload.card.sectionId) {
                    section.cards.push(payload.card)
                }
                if (section.id !== payload.card.sectionId) {
                    const index = section.cards.findIndex((n) => n.sectionId === payload.card.sectionId)
                    if (index !== -1) {
                        section.cards.splice(index, 1)
                    }
                }
            })
        }
    },
    setSection(state, payload) {
        for (const key in state.pages) {
            if (key === payload.pageName) {
                state.pages[key].push(payload.val)
            }
        }
    },
    addOptionsSection(state, payload) {
        for (const key in state.pages) {
            state.pages[key].forEach((section) => {
                if (payload.sectionName) {
                    if (section.id === payload.id) {
                        section.name = payload.sectionName
                    }
                }
                if (payload.sectionId) {
                    if (section.id === payload.sectionId) {
                        section.cards.push(payload)
                    }
                }
            })
        }
    },
    addOptionsCard(state, payload) {
        for (const key in state.pages) {
            state.pages[key].forEach((section) => {
                section.cards.forEach((card) => {
                    if (payload.key) {
                        for (const keyCard in card) {
                            if (keyCard === payload.key) {
                                if (card.cardId === payload.id) {
                                    card[keyCard] = payload.val
                                }
                            }
                        }
                    }
                    if (card.cardId === payload.id) {
                        if (payload.valComment) {
                            card.comments.push({ comment: payload.valComment, time: payload.time })
                        }
                        if (payload.valDeadline) {
                            card.deadline = payload.valDeadline
                        }
                        if (payload.valSubtask) {
                            card.subtasks.push({ value: payload.valSubtask, complete: 0 })
                        }
                        if (payload.valSubtaskComplete) {
                            card.subtasks.forEach((subtask) => {
                                if (subtask.value === payload.valSubtaskComplete) {
                                    if (subtask.complete === 0) {
                                        subtask.complete = 1
                                    } else {
                                        subtask.complete = 0
                                    }
                                }
                            })
                        }
                        if (payload.valDrag === 'start') {
                            card.dragprocess = true
                        }
                        if (payload.valDrag === 'end') {
                            card.dragprocess = false
                        }
                    }
                })
            })
        }
    },
    drop(state, payload) {
        let newCard = {}
        for (const key in state.pages) {
            state.pages[key].forEach((section) => {
                section.cards.forEach((card) => {
                    if (card.dragprocess === true) {
                        card.id = 'c' + payload
                        card.sectionId = payload
                        newCard = card
                    }
                })
            })
            state.pages[key].forEach((sec) => {
                if (sec.id === payload) {
                    sec.cards.push(newCard)
                }
                if (sec.id !== payload) {
                    const index = sec.cards.findIndex((n) => n.sectionId === payload)
                    if (index !== -1) {
                        sec.cards.splice(index, 1)
                    }
                }
            })
        }
    },
}
