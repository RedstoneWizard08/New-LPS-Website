import type { APIRoute } from "astro";
import { CURSEFORGE } from "../../../../api/curseforge";

import {
    mapCurseModToCommon,
    mapModrinthToCommon,
} from "../../../../api/schema/project";
import { getAllProjects } from "../../../../api/projects";

export const GET: APIRoute = async ({ params }) => {
    const { id, source } = params;

    // if (source == "modrinth") {
    //     const url = `https://api.modrinth.com/v2/project/${id}`;
    //     const data = await fetch(url).then((v) => v.json());

    //     return new Response(JSON.stringify(await mapModrinthToCommon(data)));
    // } else {
    //     const data = await CURSEFORGE.getMod(parseInt(id!));

    //     return new Response(
    //         JSON.stringify(await mapCurseModToCommon(CURSEFORGE, data)),
    //     );
    // }

    return new Response(
        JSON.stringify((await getAllProjects()).find((v) => v.id == id)),
    );
};
