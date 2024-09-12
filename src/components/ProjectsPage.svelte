<script lang="ts">
    import Project from "../components/Project.svelte";
    import Select from "./Select.svelte";
    import { categories, current, projects } from "../stores/projects";
    import { onMount } from "svelte";
    import Loading from "./Loading.svelte";

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
        $current = "modpack";
    });

    $: projs = $projects.sort((a, b) => b.downloads - a.downloads);
    $: loading = projs.length == 0;
</script>

<div class="w-full mt-2.5rem p-2rem projects">
    <div class="head w-full flex flex-row items-center justify-between mb-4">
        <p class="text-3xl font-mc ml-1">Projects</p>

        {#if !loading}
            <Select options={$categories} bind:value={$current} defaultValue={"modpack"} />
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

<style lang="scss">
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
