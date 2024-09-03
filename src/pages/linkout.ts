import type { APIRoute } from "astro";

export const GET: APIRoute = async (ctx) => {
    const url = decodeURIComponent(ctx.url.searchParams.get("remoteUrl")!);

    return ctx.redirect(url);
};
