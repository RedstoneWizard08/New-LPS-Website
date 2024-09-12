<script lang="ts">
    import Project from "$/components/Project.svelte";
    import Select from "$/components/Select.svelte";
    import { categories, current, projects } from "$/stores/projects";
    import { onMount } from "svelte";
    import Loading from "$/components/Loading.svelte";
    import { page } from "$app/stores";
    import type { Category } from "$/api/schema/category";
    import { goto } from "$app/navigation";

    $current = ($page.url.searchParams.get("filter") ?? undefined) as
        | Category
        | undefined;

    let isLoaded = false;

    const updateStores = async () => {
        // This HAS to be done sequentially, otherwise it'll
        // cause the internal cache to update twice!

        if ($projects.length == 0)
            $projects = await fetch("/api/projects").then((v) => v.json());

        if ($categories.length == 0)
            $categories = await fetch("/api/categories").then((v) => v.json());
    };

    onMount(async () => {
        await updateStores();

        if (!$current) {
            $current = "modpack";
            $page.url.searchParams.set("filter", $current);
            goto(`?${$page.url.searchParams.toString()}`);
        }

        isLoaded = true;
    });

    $: projs = $projects.sort((a, b) => b.downloads - a.downloads);
    $: loading = projs.length == 0;

    $: {
        if ($current) {
            $page.url.searchParams.set("filter", $current);

            if (isLoaded) {
                goto(`?${$page.url.searchParams.toString()}`);
            }
        }
    }
</script>

<svelte:head>
    <title>Projects - Luna Pixel Studios</title>
</svelte:head>

<div class="mt-2.5rem w-full p-2rem projects">
    <div class="head w-full flex flex-row items-center justify-between mb-4">
        <p class="text-3xl font-mc ml-1">Projects</p>

        {#if !loading}
            <Select
                options={$categories}
                bind:value={$current}
                defaultValue={"modpack"}
            />
        {/if}
    </div>

    {#if loading}
        <div class="flex flex-row w-full p-20 items-center justify-center">
            <Loading size={30} />
            <p class="font-mc-mono ml-4">Loading...</p>
        </div>
    {:else}
        <div class="grid grid-cols-2 items">
            {#each projs.filter((v) => v.type == $current) as proj}
                <Project data={proj} />
            {/each}
        </div>
    {/if}
</div>

<style lang="scss" scoped>
    .items {
        grid-gap: 10px;
    }

    .projects {
        flex: 1 0 auto;
    }

    @media screen and (max-width: 900px) {
        .items {
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            grid-template-columns: repeat(1, minmax(0, 1fr));
            width: 100%;
        }

        .projects {
            padding: 0.5rem;
            padding-top: 2rem;
            width: calc(100% - 1rem);
            margin-left: 0.5rem;
        }
    }
</style>
