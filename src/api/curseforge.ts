import { CURSEFORGE_KEY } from "astro:env/server";
import { CURSEFORGE_USER_ID, PAGINATION_SIZE } from "../config";
import { CurseForgeMod } from "./schema/curseforge/mod";
import type { CurseForgePaginatedResponse } from "curseforge-api/v1/Client";

let requests = 0;

export const getModDescription = async (id: number): Promise<string> => {
    return (
        await fetch(`https://api.curseforge.com/v1/mods/${id}/description`, {
            headers: {
                "x-api-key": CURSEFORGE_KEY,
            },
        }).then((v) => v.json())
    ).data;
};

const getModsForUserWithClass_ = async (
    user: number,
    index: number,
    classId: number,
): Promise<CurseForgePaginatedResponse<CurseForgeMod>> => {
    requests++;

    const url = new URL("https://api.curseforge.com/v1/mods/search");

    url.searchParams.set("gameId", (432).toString());
    url.searchParams.set("primaryAuthorId", user.toString());
    url.searchParams.set("pageSize", PAGINATION_SIZE.toString());
    url.searchParams.set("index", (index * PAGINATION_SIZE).toString());
    url.searchParams.set("classId", classId.toString());

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

export const getModsForUserWithClass = async (
    user: number,
    classId: number,
): Promise<CurseForgeMod[]> => {
    const projs = [];

    let page = 0;
    let max = 1;

    while (page < max) {
        const data = await getModsForUserWithClass_(user, page, classId);

        projs.push(...data.data);

        max = Math.ceil(data.pagination.totalCount / PAGINATION_SIZE);
        page++;
    }

    return projs;
};

export const getAllCurseProjects = async (): Promise<CurseForgeMod[]> => {
    requests = 0;

    const users = [
        CURSEFORGE_USER_ID,
        103001449, // ElocinDev
        10384423, // Fuzs
        101731217, // Aureljz
        101032666, // y4z0n
        101555282, // SHXRKIE
        100442098, // SideralisMusic
        // 103789844, // MuonR
        102600854, // mim1q
        100999484, // chorb
        // 102939973, // quickqwek
        // 101476500, // Nyagi_Byte
    ];

    const classes = [6, 4471, 6945, 12, 4559, 6552];
    const items: CurseForgeMod[] = [];

    for (const user of users) {
        for (const cl of classes) {
            for (const item of await getModsForUserWithClass(user, cl)) {
                if (!items.find((v) => v.id == item.id)) {
                    items.push(item);
                }
            }
        }
    }

    console.log(`Fetched CurseForge projects in ${requests} requests.`);

    return items;
};
