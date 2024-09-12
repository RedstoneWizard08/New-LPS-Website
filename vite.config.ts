import uno from "@unocss/svelte-scoped/vite";
import { sveltekit } from "@sveltejs/kit/vite";
import { defineConfig } from "vite";
import cp from "child_process";

const hash = cp.execSync("git rev-parse --short HEAD").toString().trim();
const branch = cp.execSync("git branch --show-current").toString().trim();

const repo = process.env.VERCEL
    ? "https://github.com/RedstoneWizard08/New-LPS-Website"
    : cp.execSync("git remote get-url origin").toString().trim();

process.env.PUBLIC_GIT_HASH = hash;
process.env.PUBLIC_GIT_BRANCH = branch;
process.env.PUBLIC_GIT_REPO = repo;

if (process.env.CLOUDFLARE) {
    process.env.PUBLIC_CLOUDFLARE = process.env.CLOUDFLARE;
}

export default defineConfig({
    plugins: [uno({ injectReset: "@unocss/reset/tailwind.css" }), sveltekit()],

    server: {
        port: 4000,
        strictPort: true,

        hmr: {
            port: 4000,
            clientPort: 443,
            protocol: "wss",
        },
    },
});
