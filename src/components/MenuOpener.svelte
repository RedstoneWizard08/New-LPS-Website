<script lang="ts">
    export let active = false;

    const clicked = () => {
        active = !active;
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:click={clicked}
    class:active
    class="flex flex-col justify-between items-center w-26px h-22px hover:cursor-pointer z-12 fixed ml-4 mt-4 mobile-only"
>
    <span class="bar b0" class:active></span>
    <span class="bar b1" class:active></span>
    <span class="bar b2" class:active></span>
</div>

<style scoped lang="scss">
    @import "$/styles/global.scss";

    .bar {
        height: 3px;
        width: 100%;
        background-color: white;
        transition: all 0.25s ease;

        &.active {
            &.b0 {
                transform: rotate(45deg);
                transform-origin: top left;
                width: 28px;
            }

            &.b1 {
                transform-origin: center;
                width: 0;
            }

            &.b2 {
                transform: rotate(-45deg);
                transform-origin: bottom left;
                width: 28px;
            }
        }
    }
</style>
