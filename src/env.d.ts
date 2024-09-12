/// <reference path="../.astro/types.d.ts" />

declare module "*?url" {
    declare const _inner: string;
    export default _inner;
}
