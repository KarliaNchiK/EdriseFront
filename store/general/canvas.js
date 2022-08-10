export const state = () => ({
    canvas: true,
    alternate: false
})

export const mutations = {
    set_canvas(state, visible) {
        state.canvas = visible
    },
    set_alternateCanvas(state, bv1) {
        state.alternate = bv1
    }
}

export const actions = {

}

export const getters = {
    canvas: s => s.canvas,
    alternate: s => s.alternate
}