import node from "@sveltejs/adapter-node";
import vercel from "@sveltejs/adapter-vercel";
import cloudflare from "@sveltejs/adapter-cloudflare";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import uno from "@unocss/svelte-scoped/preprocess";

const adapter = process.env.CLOUDFLARE
    ? cloudflare()
    : process.env.VERCEL
      ? vercel()
      : node();

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: [vitePreprocess(), uno()],

    kit: {
        adapter,

        alias: {
            "$/*": "src/*",
        },
    },
};

export default config;
