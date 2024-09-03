import { defineConfig } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import unocss from "unocss/astro";

// https://astro.build/config
export default defineConfig({
    integrations: [
        icon(),
        robotsTxt(),
        sitemap(),
        mdx(),
        unocss({
            injectReset: true,
        }),
    ],

    server: {
        port: 4000,
    },

    vite: {
        server: {
            port: 4000,
            strictPort: true,

            hmr: {
                port: 4000,
                clientPort: 443,
                protocol: "wss",
            },
        },
    },

    site: "https://redstonewizard08.github.io",
    base: "New-LPS-Website",
});
