import { CURSEFORGE_KEY } from "astro:env/server";
import { CurseForgeClient, CurseForgeGameEnum } from "curseforge-api";
import { CURSEFORGE_USER_ID, PAGINATION_SIZE } from "../config";

export const CURSEFORGE = new CurseForgeClient(CURSEFORGE_KEY);

export const getAllCurseProjects = async () => {
    const projs = [];

    let page = 0;
    let max = 1;

    while (page < max) {
        const data = await CURSEFORGE.searchMods(CurseForgeGameEnum.Minecraft, {
            authorId: CURSEFORGE_USER_ID,
            pageSize: PAGINATION_SIZE,
            index: page * PAGINATION_SIZE,
        });

        projs.push(...data.data);

        max = Math.ceil(data.pagination.totalCount / PAGINATION_SIZE);
        page++;
    }

    return projs;
};
