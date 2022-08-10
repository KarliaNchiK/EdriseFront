export const state = () => ({
    mobile: false,
})

export const mutations = {
    set_device(state, device) {
        state.mobile = device
    },
    set_resize(state, resize) {
        state.mobile = resize
    }
}

export const actions = {

}

export const getters = {
    mobile: s => s.mobile,
}