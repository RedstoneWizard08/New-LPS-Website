<script lang="ts">
    import MenuOpener from "./MenuOpener.svelte";
</script>

<MenuOpener className="ml-4 mt-4 mobile-only" />

<div
    class="menu bg-dark color-white h-full fixed w-50% z-3 flex flex-col items-start justify-start p-4 pt-16 mobile-only"
>
    <a href="/" class="font-mc-mono text-lg underline">Home</a>
    <a href="/projects" class="font-mc-mono text-lg underline">Projects</a>
    <a
        href="https://www.bisecthosting.com/LunaPixel"
        class="font-mc-mono text-lg underline">Hosting</a
    >
</div>
