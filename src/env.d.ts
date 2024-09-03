/// <reference path="../.astro/types.d.ts" />

declare module "humanoid-js" {
    export default class Humanoid {
        get(url: string): Promise<Response>;
    };
}
