<script lang="ts">
    import "$/styles/markdown.scss";
    import { formatNumber } from "$/api/fmt";
    import { marked } from "marked";
    import Icon from "@iconify/svelte";
    import type { CommonProject } from "$/api/schema/project";
    import { page } from "$app/stores";
    import { onMount } from "svelte";

    const { id, source } = $page.params;

    let data: CommonProject | undefined = undefined;
    $: downloads = data ? formatNumber(data.downloads) : -1;

    onMount(() => {
        fetch(`/api/projects/${source}/${id}`)
            .then((v) => v.json())
            .then((v) => (data = v));
    });
</script>

<svelte:head>
    <title>{`${data?.name || "Loading..."} - Luna Pixel Studios`}</title>
</svelte:head>

<div
    class="flex flex-row items-center justify-between pb-4 pt-4 position-fixed header bg-cdark b-b-1px b-white b-solid"
>
    {#if data}
        <div class="flex flex-row items-center justify-start">
            <img src={data.iconUrl} alt={data.name} class="w-5rem rd-lg" />

            <div class="flex flex-col ml-5">
                <a
                    class="text-3xl font-mc flex flex-row items-center justify-start title"
                    href={data.url}
                    target="_blank"
                    >{data.name}
                    <Icon
                        icon="fa6-solid:arrow-up-right-from-square"
                        class="ml-4 text-20pt text-green hover:color-green-8 transition-all transition-duration-250 linkout"
                    /></a
                >

                <p
                    class="text-xl font-mc-mono flex flex-row items-center justify-start desc hide-mobile"
                >
                    by {data.author} | {downloads}
                    Downloads<span
                        class="flex flex-row items-center justify-start"
                        >&nbsp;| {#if data.sources.curseforge}
                            <a
                                href={data.sources.curseforge}
                                class="flex flex-row items-center justify-start ml-3 mr-5 underline underline-curseforge"
                            >
                                <span class="w-6 icon-cf" />
                                <span class="text-curseforge ml-3">
                                    CurseForge
                                </span>
                            </a>
                        {/if}
                        {#if data.sources.modrinth}
                            <a
                                href={data.sources.modrinth}
                                class="flex flex-row items-center justify-start underline underline-modrinth"
                            >
                                <span class="w-6 icon-mr" />
                                <span class="text-modrinth ml-3">
                                    Modrinth
                                </span>
                            </a>
                        {/if}</span
                    >
                </p>
                <p
                    class="text-xl font-mc-mono flex flex-col items-start justify-start desc mobile-only"
                >
                    by {data.author}
                    <span
                        >{downloads}
                        Downloads</span
                    >
                </p>
                <p
                    class="font-mc-mono text-xl flex flex-col items-start justify-start mobile-only"
                >
                    {#if data.sources.curseforge}
                        <a
                            href={data.sources.curseforge}
                            class="flex flex-row items-center justify-start mr-5 underline underline-curseforge"
                        >
                            <span class="w-6 icon-cf" />
                            <span class="text-curseforge ml-3">
                                CurseForge
                            </span>
                        </a>
                    {/if}
                    {#if data.sources.modrinth}
                        <a
                            href={data.sources.modrinth}
                            class="flex flex-row items-center justify-start underline underline-modrinth"
                        >
                            <span class="w-6 icon-mr" />
                            <span class="text-modrinth ml-3"> Modrinth </span>
                        </a>
                    {/if}
                </p>
            </div>
        </div>

        <div class="flex flex-row items-center justify-end hide-mobile">
            <a
                href={data.downloadLink}
                class="flex flex-row items-center justify-end bg-green-6 p-2 pl-3 pr-3 rd-lg font-mc-mono hover:bg-green-8 transition-all transition-duration-250"
            >
                <Icon icon="fa6-solid:arrow-down" class="mr-3" />
                Download</a
            >
        </div>
    {/if}
</div>

<div class="w-full p-2rem main">
    {#if data}
        <div class="project-desc mt-8rem font-mc-mono">
            {@html marked(data.description)}
        </div>
    {/if}

    <!-- <script> // TODO!
        const desc = document.querySelector(".project-desc");
        const spoilers = desc.querySelectorAll(".spoiler");

        for (const spoiler of spoilers) {
            const el = document.createElement("button");

            el.className =
                "spoiler-opener font-mc-mono rd-lg color-green-6 hover:color-green-2 transition-all transition-duration-250";
            el.innerText = "Show Spoiler";

            el.addEventListener("click", () => {
                spoiler.classList.toggle("active");
            });

            desc.insertBefore(el, spoiler);
        }
    </script> -->
</div>

<style scoped lang="scss">
    @import "$/styles/global.scss";
    @import "$/styles/icons.scss";

    .main {
        margin-top: 2rem;
    }

    .header {
        width: 100%;
        margin-top: 3rem;
        padding: 1rem;
        border-color: rgba(255, 255, 255, 0.5);
    }

    @media screen and (max-width: 1100px) {
        .main {
            padding: 0.5rem;
            margin-top: 5rem;
        }

        .header {
            width: 100%;

            .title {
                font-size: 14pt;
            }

            .desc {
                font-size: 12pt;
            }
        }

        :global(.linkout) {
            display: none;
        }
    }
</style>
