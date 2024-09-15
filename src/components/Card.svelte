<script lang="ts">
    export let className = "";
    export let title: string;
    export let desc: string;
    export let right = false;
    export let link: string;

    const realDesc = desc
        .replace("\\n", "<br />")
        .replace(/\*\*([^\*]+)\*\*/gm, "<b><u>$1</u></b>");
</script>

<a
    href={link}
    target="_blank"
    class={`w-full min-h-70% flex flex-col p-l-5% p-t-5% p-r-5% card items-start ${className}`}
    class:right
>
    <p class="font-mc mb-xl text-3xl text" class:right>{title}</p>

    <p class="font-mc-mono text-xl text" class:right>
        {@html realDesc}
    </p>
</a>

<style scoped lang="scss">
    .text {
        &.right {
            text-align: right;
        }
    }

    .card {
        border-top: 0.5px solid rgba(255, 255, 255, 0.25);
        border-bottom: 0.5px solid rgba(255, 255, 255, 0.25);
        transition: background-size 1s ease;
        background-size: 100%;
        width: 100%;
        padding: 2rem;
        padding-bottom: 16rem;

        &:hover {
            background-size: 110%;
        }

        &.right {
            align-items: flex-end;
        }

        @media screen and (max-width: 600px) {
            background-size: 200%;

            &:hover {
                background-size: 230%;
            }
        }
    }
</style>
