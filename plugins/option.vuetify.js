import colors from 'vuetify/es5/util/colors'
import LRU from "lru-cache"
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import '@fortawesome/fontawesome-free/css/all.css'


const themeCache = new LRU({
    max: 10,
    maxAge: 1000 * 60 * 60,
})

export default {
    customVariables: ['~/assets/variables.scss'],
    theme: {
        dark: false,
        themes: {
            dark: {
                colorBackground: "#1c222a",
                inversColorText: "#020A12",
                colorText: "#f7f7f7",
                colorSubtitleText: "#e0e0e0",
                mainFirstColor: "#FF4100",
                mainSecondColor: "#FFE100",
                cBorder: "#fafafa"
            },
            light: {
                colorText: "#020A12",
                inversColorText: "#f7f7f7",
                colorSubtitleText: "#4c5157",
                // colorBackground: "#dedcdc",
                colorBackground: "#e0e0e0",
                mainFirstColor: "#d60000",
                mainSecondColor: "#ff7070",
                cBorder: "#6a6a6a"
            }
        },
        options: {
            themeCache,
            customProperties: true,
            variations: false
        }
    }
}