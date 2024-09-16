<script lang="ts">
    import Card from "../components/Card.svelte";
    import banner from "../images/banner-new.png";
    import bisect from "../images/bisect2.png";
</script>

<svelte:head>
    <title>Home - Luna Pixel Studios</title>
</svelte:head>

<div class="hero w-full min-h-100vh">
    <img
        src={banner}
        alt="Luna Pixel Studios Banner"
        class="w-40% banner"
        loading="eager"
    />
    <p class="text-20pt font-mc">Join the adventure!</p>
</div>

<Card
    className="prii"
    title="Prominence II [RPG]"
    desc="Discover the most immersive and story-rich modpack ever created!\nCheck out the **Prominence II [RPG]** modpack by SHXRKIE & ElocinDev."
    link="/projects/curseforge/466901"
/>

<Card
    className="stp"
    title="SteamPunk"
    desc="Explore this incredible Create-centric steampunk-era inspired modpack!\nCheck out the **SteamPunk [LPS]** modpack by SHXRKIE."
    link="/projects/curseforge/643605"
    right
/>

<Card
    className="fn"
    title="Fear Nightfall"
    desc="Experience the scariest modpack ever conceived!\nCheck out **Fear Nightfall** by SHXRKIE."
    link="/projects/curseforge/887839"
/>

<Card
    className="bmc"
    title="Better Minecraft"
    desc="Discover a beautiful Minecraft upgrade, rich with content to explore!\nCheck out the **Better Minecraft** series by SHXRKIE."
    link="/projects/curseforge/462042"
    right
/>

<Card
    className="mmc"
    title="Medieval Minecraft"
    desc="Discover the greatest medieval fantasy RPG modpack!\nCheck out the **Medieval Minecraft** series by SHXRKIE."
    link="/projects/curseforge/876851"
/>

<Card
    className="wda"
    title="When Dungeons Arise"
    desc="Discover many shapes and sizes of dungeons like you've never seen them before!\nCheck out **When Dungeons Arise** by Aureljz."
    link="/projects/curseforge/442508"
    right
/>

<div class="flex flex-col items-center justify-center p-30 w-full about">
    <p class="text-3xl b-b-1 b-b-sky mb-10 font-mc title">
        Who are Luna Pixel Studios?
    </p>

    <p class="text-xl text-center mb-7 font-mc-mono text">
        Luna Pixel Studios is a team of modders and modpack makers with over 90
        million downloads, passionate about creating immersive experiences in
        Minecraft. But we're not just about gameplay - we also host monthly
        events with fantastic rewards and giveaways to show our appreciation for
        our incredible community. And with a bustling Discord server, there's
        always someone to chat or play with. Don't miss out on the fun - join us
        today!
    </p>

    <a
        href="https://lunapixel.studio/discord"
        target="_blank"
        class="text-xl bg-orange b-1 b-orange p-2 rd-lg p-l-4 p-r-4 text-black font-mc text-center flex flex-row justify-center items-center hover:text-white hover:bg-transparent transition-all transition-duration-250 mb-10"
        >Join the Discord</a
    >

    <p class="text-3xl b-b-1 b-b-sky mb-10 font-mc title">Need a server?</p>

    <img src={bisect} alt="Bisect Hosting" class="w-75% bg-blue rd-lg mb-10 sponsor" />

    <p class="text-lg text-center font-mc-mono text">
        Bisect Hosting has all of our modpacks ready for installation!
    </p>

    <p class="text-lg text-center font-mc-mono mb-7 text">
        Use code <code class="b-amber b-1 rd-md p-1">LunaPixel</code> for 25% off
        your first month and help support us!
    </p>

    <a
        href="https://www.bisecthosting.com/LunaPixel"
        target="_blank"
        class="text-xl bg-blue b-1 b-blue p-2 rd-lg p-l-4 p-r-4 text-black font-mc text-center flex flex-row justify-center items-center hover:text-white hover:bg-transparent transition-all transition-duration-250"
        >Get a Server</a
    >
</div>

<style lang="scss">
    @import "../styles/mixins.scss";

    .hero {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        @include bg-img("../images/hero.png");
    }

    @media screen and (max-width: 600px) {
        .about {
            padding: 2rem;

            .title {
                font-size: 20pt;
            }

            .text {
                font-size: 14pt;
            }
        }

        .banner {
            width: 80%;
        }

        .sponsor {
            width: 100%;
        }
    }
</style>
