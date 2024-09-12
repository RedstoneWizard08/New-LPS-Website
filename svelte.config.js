import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import uno from "@unocss/svelte-scoped/preprocess";

/** @type {import("@sveltejs/kit").Config} */
const config = {
    preprocess: [vitePreprocess(), uno()],

    kit: {
        adapter: adapter(),

        alias: {
            "$/*": "src/*",
        },
    },
};

export default config;
