export default function (context) {
    let userAgent = process.server ? context.req.headers['user-agent'] : navigator.userAgent
    context.isMobile = /mobile/i.test(userAgent)
    if (context.isMobile) {
        context.store.commit("device/set_device", context.isMobile)

    }
}