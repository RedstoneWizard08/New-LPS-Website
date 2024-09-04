import { CURSEFORGE_KEY } from "astro:env/server";
import { CURSEFORGE_USER_ID, PAGINATION_SIZE } from "../config";
import { CurseForgeMod } from "./schema/curseforge/mod";
import type { CurseForgePaginatedResponse } from "curseforge-api/v1/Client";

export const getModDescription = async (id: number): Promise<string> => {
    return (
        await fetch(`https://api.curseforge.com/v1/mods/${id}/description`, {
            headers: {
                "x-api-key": CURSEFORGE_KEY,
            },
        }).then((v) => v.json())
    ).data;
};

export const getModsForUser = async (
    index: number,
): Promise<CurseForgePaginatedResponse<CurseForgeMod>> => {
    const url = new URL("https://api.curseforge.com/v1/mods/search");

    url.searchParams.set("gameId", (432).toString());
    url.searchParams.set("authorId", CURSEFORGE_USER_ID.toString());
    url.searchParams.set("pageSize", PAGINATION_SIZE.toString());
    url.searchParams.set("index", (index * PAGINATION_SIZE).toString());

    const { data, pagination }: { data: any[]; pagination: any } = await fetch(
        url,
        {
            headers: {
                "x-api-key": CURSEFORGE_KEY,
            },
        },
    ).then((v) => v.json());

    return {
        pagination,
        data: data.map((v) => new CurseForgeMod(v)),
    };
};

export const getAllCurseProjects = async () => {
    const projs = [];

    let page = 0;
    let max = 1;

    while (page < max) {
        const data = await getModsForUser(page);

        projs.push(...data.data);

        max = Math.ceil(data.pagination.totalCount / PAGINATION_SIZE);
        page++;
    }

    return projs;
};
