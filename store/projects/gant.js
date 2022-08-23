export const state = () => ({
    days: 5,
    edit: false,
    copy: false
})

export const mutations = {
    set_days(state, days) {
        if ((days == 1 && state.days < 10) || (days == -1 && state.days > 2)) {
            state.days += days
        }
    },
    set_edit(state, edit) {
        state.edit = edit
    },
    set_copy(state, copy) {
        state.copy = copy
    },
}

export const actions = {

}

export const getters = {
    days: s => s.days,
    edit: s => s.edit,
    copy: s => s.copy
}