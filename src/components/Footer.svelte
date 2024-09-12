<script lang="ts">
    import {
        PUBLIC_GIT_BRANCH,
        PUBLIC_GIT_HASH,
        PUBLIC_GIT_REPO,
    } from "$env/static/public";
    import banner from "../images/banner-new.png?url";
    import icon from "../images/favicon.png?url";
</script>

<div
    class="bg-dark flex flex-col justify-center items-center p-10 w-full footer"
>
    <img src={banner} alt="Luna Pixel Studios logo" class="w-15% mb-2.5 logo" />

    <p
        class="font-mc-mono text-lg flex flex-row items-center justify-between text-white"
    >
        <img
            src={icon}
            alt="Luna Pixel Studios logo"
            class="w-10% rd-lg logo-2"
        />
        &copy; 2024 Luna Pixel Studios
    </p>

    <a
        class="font-mc-mono underline text-sm hash text-white mb-0"
        href={`${PUBLIC_GIT_REPO}/commit/${PUBLIC_GIT_HASH}`}
        target="_blank"
        >{PUBLIC_GIT_REPO.split("/")[
            PUBLIC_GIT_REPO.split("/").length - 1
        ]}/{PUBLIC_GIT_BRANCH}@{PUBLIC_GIT_HASH}</a
    >
</div>

<style lang="scss">
    .logo-2 {
        display: none;
    }

    .footer {
        flex-shrink: 0;
    }

    @media screen and (max-width: 600px) {
        .footer {
            padding: 1rem;
        }

        .logo {
            display: none;
        }

        .logo-2 {
            display: block;
        }

        .hash {
            text-align: right;
            width: 100%;
        }
    }
</style>
