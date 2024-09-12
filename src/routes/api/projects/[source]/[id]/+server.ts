import type { RequestHandler } from "@sveltejs/kit";
import { getAllProjects } from "../../../../../api/projects";

export const GET: RequestHandler = async ({ params }) => {
    const { id } = params;

    return new Response(
        JSON.stringify((await getAllProjects()).find((v) => v.id == id)),
    );
};
