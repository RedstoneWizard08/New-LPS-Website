<script lang="ts">
    import { formatNumber } from "../api/fmt";
    import type { CommonProject } from "../api/schema/project";

    export let data: CommonProject;

    const downloads = formatNumber(data.downloads);
</script>

<a
    class="flex flex-row bg-dark-2 rd-lg p-2 w-full mr-0 item"
    href={`/projects/${data.source}/${data.id}`}
>
    <img src={data.iconUrl} alt={data.name} class="w-20% rd-lg mr-5" decoding="async" loading="lazy" />

    <div class="flex flex-col">
        <p class="text-lg font-mc title">{data.name}</p>
        <p class="text-lg color-gray-4 font-mc-mono desc">
            {downloads} Downloads
        </p>
        <p class="text-lg color-gray-3 font-mc-mono desc">by {data.author}</p>
        <p
            class="text-lg font-mc-mono flex flex-row items-center justify-start sources"
        >
            {#if data.sources.curseforge}
                <p
                    class="flex flex-row items-center justify-start font-mc-mono source"
                >
                    <span class="w-6 icon-cf" />
                    <span class="text-curseforge ml-3 mr-5"> CurseForge </span>
                </p>
            {/if}
            {#if data.sources.modrinth}
                <p
                    class="flex flex-row items-center justify-start font-mc-mono source"
                >
                    <span class="w-6 icon-mr" />
                    <span class="text-modrinth ml-3">Modrinth</span>
                </p>
            {/if}
        </p>
    </div>
</a>

<style lang="scss">
    img {
        object-fit: cover;
    }

    .item {
        border: 1px solid transparent;
        transition:
            border-color 0.25s ease,
            transform 0.25s ease;

        &:hover {
            transform: scale(1.1);
            border: 1px solid white;
        }
    }

    .icon-cf {
        background-image: url(../icons/curseforge.svg);
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        height: 1.5rem;
    }

    .icon-mr {
        background-image: url(../icons/modrinth.svg);
        background-position: center;
        background-size: contain;
        background-repeat: no-repeat;
        height: 1.5rem;
    }

    @media screen and (max-width: 900px) {
        .title {
            font-size: 11pt;
        }

        .desc {
            font-size: 11pt;
            line-height: 110%;
        }

        .sources {
            flex-direction: column;
            align-items: flex-start;
            font-size: 11pt;
        }

        .source {
            font-size: 11pt;
            line-height: 110%;
        }
    }
</style>
