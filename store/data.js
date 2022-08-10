export const state = () => ({
    scrollY: 0,
    x: 0,
    y: 0
})

export const mutations = {
    set_scroll(state, scroll) {
        state.scrollY = scroll;
    },
    set_mPosition(state, position) {
        state.x = position.x;
        state.y = position.y;
    }
}

export const actions = {

}

export const getters = {
    scrollY: s => s.scrollY,
    x: s => s.x,
    y: s => s.y
}