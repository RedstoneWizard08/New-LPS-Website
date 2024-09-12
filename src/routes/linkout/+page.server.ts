import type { RequestHandler } from "@sveltejs/kit";

export const GET: RequestHandler = async (ctx) => {
    const url = decodeURIComponent(ctx.url.searchParams.get("remoteUrl")!);
    const res = new Response();

    res.headers.append("Location", url);

    return res;
};
