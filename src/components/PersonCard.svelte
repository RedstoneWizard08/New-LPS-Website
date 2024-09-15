<script lang="ts">
    import { onMount } from "svelte";

    export let person: string;
    export let username: string;
    export let title: string;
    export let right = false;

    let profilePicture: string;

    onMount(async () => {
        profilePicture = await fetch(`/api/profile/${username}`).then((v) =>
            v.text(),
        );
    });
</script>

<a
    href={`https://github.com/${username}`}
    target="_blank"
    class="bg-dark-3 w-full flex p-8 flex-row items-center justify-start pl-50 pr-50 person-card"
    class:right
>
    {#if !right}
        <img
            class="img w-8% rd-xl hide-mobile"
            src={profilePicture}
            alt={person}
        />
    {/if}

    <img class="img w-8% rd-xl mobile-only" src={profilePicture} alt={person} />

    <div
        class="font-mc ml-4 mr-4 text-2xl text flex flex-col items-start justify-start"
        class:right
    >
        {person}
        <p class="text-xl mt-1 color-gray font-mc-mono text" class:right>
            {title}
        </p>
    </div>

    {#if right}
        <img
            class="img w-8% rd-xl hide-mobile"
            src={profilePicture}
            alt={person}
        />
    {/if}
</a>

<style scoped lang="scss">
    @import "$/styles/global.scss";

    .person-card {
        border-top: 0.5px solid rgba(255, 255, 255, 0.25);
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.25);
    }

    @media screen and (min-width: 901px) {
        .text {
            &.right {
                text-align: right;
                align-items: flex-end;
            }
        }

        .person-card {
            &.right {
                justify-content: flex-end;
            }
        }
    }

    @media screen and (max-width: 900px) {
        .img {
            width: 15%;
        }

        .person-card {
            padding-left: 2rem;
            padding-right: 2rem;
        }
    }
</style>
