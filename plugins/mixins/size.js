export default {
    computed: {
        mobile() {
            return (this.$vuetify.breakpoint.width != 0 && this.$vuetify.breakpoint.smAndDown) || this.$store.getters["device/mobile"];
        },
        onlyMobile() {
            return this.$store.getters["device/mobile"]
        },
        mdAndUp() {
            return this.$vuetify.breakpoint.mdAndUp;
        },
    }
}