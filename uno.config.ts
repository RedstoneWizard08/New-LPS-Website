import { defineConfig } from "unocss";

export default defineConfig({
    theme: {
        fontFamily: {
            mc: "Minecraft Ten",
            "mc-mono": "Monocraft",
        },

        colors: {
            cdark: {
                DEFAULT: "#13151A",
            },

            modrinth: {
                DEFAULT: "rgb(60, 219, 54)",
            },

            curseforge: {
                DEFAULT: "#EB622B",
            },
        },
    },
});
