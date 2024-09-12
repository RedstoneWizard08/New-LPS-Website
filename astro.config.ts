import { defineConfig, envField } from "astro/config";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import mdx from "@astrojs/mdx";
import unocss from "unocss/astro";
import node from "@astrojs/node";
import cloudflare from "@astrojs/cloudflare";
import vercel from "@astrojs/vercel/serverless";
import cp from "child_process";
import svelte from "@astrojs/svelte";

const hash = cp.execSync("git rev-parse --short HEAD").toString().trim();
const branch = cp.execSync("git branch --show-current").toString().trim();

const repo = process.env.VERCEL
    ? "https://github.com/RedstoneWizard08/New-LPS-Website"
    : cp.execSync("git remote get-url origin").toString().trim();

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
        svelte(),
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
        contentIntellisense: true,
        contentLayer: true,

        env: {
            schema: {
                CURSEFORGE_KEY: envField.string({
                    context: "server",
                    access: "secret",
                    default: process.env.CURSEFORGE_KEY,
                }),
                REDSTONE_IS_DUMB: envField.number({
                    context: "server",
                    access: "public",
                    default: 0,
                }),
                GIT_HASH: envField.string({
                    context: "client",
                    access: "public",
                    default: hash,
                }),
                GIT_BRANCH: envField.string({
                    context: "client",
                    access: "public",
                    default: branch,
                }),
                GIT_REPO: envField.string({
                    context: "client",
                    access: "public",
                    default: repo,
                }),
                CLOUDFLARE: envField.number({
                    context: "server",
                    access: "public",
                    default: 0,
                }),
            },
        },
    },

    adapter: process.env.CLOUDFLARE
        ? cloudflare({
              imageService: "compile",
          })
        : process.env.VERCEL
          ? vercel()
          : node({
                mode: "standalone",
            }),
});
