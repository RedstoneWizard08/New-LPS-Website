import { getAllProjects } from "../../../api/projects";

export const GET = async () => {
    return new Response(JSON.stringify(await getAllProjects()));
};
