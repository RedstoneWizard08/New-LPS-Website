import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import unocss from "unocss/astro";
import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
    output: "server",

    integrations: [
        icon({
            iconDir: "src/icons",
        }),
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

    experimental: {
        env: {
            schema: {
                CURSEFORGE_KEY: envField.string({
                    context: "server",
                    access: "secret",
                }),
                REDSTONE_IS_DUMB: envField.number({
                    context: "server",
                    access: "public",
                    default: 0,
                }),
            },
        },
    },

    //   site: import.meta.env.CI ? "https://redstonewizard08.github.io" : undefined,
    //   base: import.meta.env.CI ? "New-LPS-Website" : undefined,
    adapter: cloudflare(),
});
