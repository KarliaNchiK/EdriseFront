export const state = () => ({
    scrollY: 0,
    x: 0,
    y: 0,
    mobileMorph: 0,
    canDown: false,
})

export const mutations = {
    set_scroll(state, scroll) {
        state.scrollY = scroll;
    },
    set_mPosition(state, position) {
        state.x = position.x;
        state.y = position.y;
    },
    set_mobileMorph(state, position) {
        state.mobileMorph = position
    },
    set_canDown(state, set){
        state.canDown = set
    }
}

export const actions = {

}

export const getters = {
    scrollY: s => s.scrollY,
    x: s => s.x,
    y: s => s.y,
    morph: s => s.mobileMorph,
    canDown: s => s.canDown
}