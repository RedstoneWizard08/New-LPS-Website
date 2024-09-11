/// <reference path="../.astro/types.d.ts" />

declare module "humanoid-js" {
    export default class Humanoid {
        get(url: string): Promise<Response>;
    }
}

declare module "@iconify/svelte" {
    import Icon from "@iconify/svelte/dist/Icon.svelte";

    export default Icon;
}
