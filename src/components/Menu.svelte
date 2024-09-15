<script lang="ts">
    export let active = false;

    const setInactive = () => {
        active = false;
    };
</script>

<div
    class="menu bg-dark color-white h-full fixed w-50% z-11 flex flex-col items-start justify-start p-4 pt-16 mobile-only"
    class:active
>
    <a href="/" class="font-mc-mono text-lg underline" on:click={setInactive}
        >Home</a
    >
    <a
        href="/about"
        class="font-mc-mono text-lg underline"
        on:click={setInactive}>About</a
    >
    <a
        href="/projects"
        class="font-mc-mono text-lg underline"
        on:click={setInactive}>Projects</a
    >
    <a
        href="https://www.bisecthosting.com/LunaPixel"
        class="font-mc-mono text-lg underline"
        on:click={setInactive}>Hosting</a
    >
</div>

<!-- svelte-ignore css-unused-selector -->
<style scoped lang="scss">
    @import "$/styles/global.scss";

    .menu {
        opacity: 0;
        pointer-events: none;
        transition: opacity 0.25s ease;

        &.active {
            opacity: 1;
            pointer-events: unset;
        }
    }
</style>
