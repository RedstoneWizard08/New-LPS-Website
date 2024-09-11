import { defineConfig, presetUno } from "unocss";
import presetAnimations from "unocss-preset-animations";
import { presetShadcn } from "unocss-preset-shadcn";

export default defineConfig({
    presets: [
        presetUno(),
        presetAnimations(),
        presetShadcn({
            color: "neutral",
            // darkSelector: "[data-kb-theme="
        }),
    ],
    content: {
        pipeline: {
            include: [
                /\.(vue|svelte|[jt]sx|mdx?|astro|elm|php|phtml|html)($|\?)/,
                "src/**/*.{js,ts}",
            ],
        },
    },

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

            cwhite: {
                DEFAULT: "rgba(255, 255, 255, 0.5)",
            },
        },
    },
});
