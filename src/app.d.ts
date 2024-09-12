/// <reference path="vite/client" />

interface ImportMetaEnv {
    readonly VITE_CURSEFORGE_KEY: string;
    readonly VITE_GIT_HASH: string;
    readonly VITE_GIT_BRANCH: string;
    readonly VITE_GIT_REPO: string;
    readonly VITE_CLOUDFLARE: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}

declare global {
    namespace App {
        // interface Error {}
        // interface Locals {}
        // interface PageData {}
        // interface PageState {}
        // interface Platform {}
    }
}

export {};
