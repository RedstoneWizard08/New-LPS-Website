<script lang="ts">
    import "../styles/base.scss";
    import "../styles/fonts.scss";
    import "../styles/cards.scss";
    import "../styles/global.scss";

    import Menu from "$/components/Menu.svelte";
    import Header from "$/components/Header.svelte";
    import Footer from "$/components/Footer.svelte";
    import { ProgressBar } from "@prgm/sveltekit-progress-bar";
    import MenuOpener from "$/components/MenuOpener.svelte";

    let active = false;
</script>

<ProgressBar color="#127CD1" displayThresholdMs={0} />
<MenuOpener bind:active />
<Menu bind:active />

<main class="w-full h-full m-0 p-0 b-0">
    <Header />
    <slot />
    <Footer />
</main>
