import type { APIRoute } from "astro";

const IMAGE_TYPES = [
    "image/png",
    "image/jpg",
    "image/jpeg",
    "image/gif",
    "image/svg+xml",
    "image/svg+xml;charset=utf-8",
    "image/webp",
];

export const GET: APIRoute = async ({ url }) => {
    const img = url.searchParams.get("url")!;
    const res = await fetch(decodeURIComponent(img));

    if (IMAGE_TYPES.includes(res.headers.get("Content-Type")!))
        return new Response(await res.arrayBuffer(), {
            headers: { "Content-Type": res.headers.get("Content-Type")! },
        });

    return new Response("URL is not an image!", { status: 400 });
};
