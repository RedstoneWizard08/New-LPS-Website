import type { APIRoute } from "astro";
import { CURSEFORGE } from "../../../api/curseforge";

export const GET: APIRoute = async ({ params, request }) => {
    const id = parseInt(params.id!);

    return new Response(JSON.stringify(await CURSEFORGE.getMod(id)));
};
