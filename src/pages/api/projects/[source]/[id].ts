import type { APIRoute } from "astro";
import { getAllProjects } from "../../../../api/projects";

export const GET: APIRoute = async ({ params }) => {
    const { id } = params;

    return new Response(
        JSON.stringify((await getAllProjects()).find((v) => v.id == id)),
    );
};
