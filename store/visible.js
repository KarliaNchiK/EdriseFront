export const state = () => ({
    bv1: false,
    bv2: false,
    bv3: false,
    renderThree: false,
})

export const mutations = {
    set_visible(state, payload) {
        state[payload.block] = payload.visible
    },
}

export const actions = {

}

export const getters = {
    bv1: s => s.bv1,
    bv2: s => s.bv2,
    bv3: s => s.bv3,
    renderThree: s => s.renderThree,
}