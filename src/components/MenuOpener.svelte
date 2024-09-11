<script lang="ts">
    export let className = "";

    let bar0: HTMLSpanElement;
    let bar1: HTMLSpanElement;
    let bar2: HTMLSpanElement;

    const clicked = () => {
        const bars = [bar0, bar1, bar2];
        const menus = document.querySelectorAll(".menu");

        for (const bar of bars) {
            bar.classList.toggle("active");
        }

        menus.forEach((menu) => menu.classList.toggle("active"));
    };
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div
    on:click={clicked}
    class={`flex flex-col justify-between items-center w-26px h-22px hover:cursor-pointer z-4 fixed ${className}`}
>
    <span class="bar b0" bind:this={bar0}></span>
    <span class="bar b1" bind:this={bar1}></span>
    <span class="bar b2" bind:this={bar2}></span>
</div>

<style lang="scss">
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
