<script lang="ts">
    import Icon from "@iconify/svelte";
    import icon from "../images/favicon.png?url";
    import { goto } from "$app/navigation";
</script>

<div
    class="bg-dark pos-fixed p-2 flex flex-row justify-between items-center w-full header z-10"
>
    <div class="flex flex-row justify-start items-center">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
        <img
            src={icon}
            alt="Luna Pixel Studios Logo"
            class="mr-5 rd-lg logo w-5% cursor-pointer rd-lg"
            id="home-img"
            loading="eager"
            on:click={() => goto("/")}
        />

        <a
            href="/"
            class="font-mc-mono text-lg mr-5 underline hide-mobile text-white"
            >Home</a
        >
        <a
            href="/about"
            class="font-mc-mono text-lg mr-5 underline hide-mobile text-white"
            >About</a
        >
        <a
            href="/projects"
            class="font-mc-mono text-lg mr-5 underline hide-mobile text-white"
            >Projects</a
        >
        <a
            href="https://www.bisecthosting.com/LunaPixel"
            class="font-mc-mono text-lg underline hide-mobile text-white"
            >Hosting</a
        >
    </div>

    <div class="flex flex-row justify-start items-center text-white">
        <a
            href="https://twitter.com/lunapixelstudio"
            class="mr-5 text-white hover:text-gray-3 transition-all transition-duration-250"
            ><Icon icon="fa6-brands:twitter" /></a
        >

        <a
            href="https://lunapixel.studio/discord"
            class="mr-5 text-white hover:text-gray-3 transition-all transition-duration-250"
            ><Icon icon="fa6-brands:discord" /></a
        >

        <a
            href="https://www.patreon.com/LunaPixelStudios"
            class="text-white hover:text-gray-3 transition-all transition-duration-250"
            ><Icon icon="fa6-brands:patreon" /></a
        >
    </div>
</div>

<style lang="scss">
    .logo {
        object-fit: cover;
    }

    .header {
        top: 0;
    }

    @media screen and (max-width: 600px) {
        .header {
            height: 3.5rem;
        }

        .logo {
            width: 10%;
            margin-left: 3.125rem;
        }
    }

    @media screen and (max-width: 400px) {
        .header {
            height: 3.5rem;
        }

        .logo {
            width: 15%;
            margin-left: 3.125rem;
        }
    }
</style>
