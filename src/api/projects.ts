import type { ModrinthProject } from "./schema/modrinth/project";
import {
    mapCurseModToCommon,
    mapModrinthToCommon,
    type CommonProject,
} from "./schema/project";
import { CURSEFORGE, getAllCurseProjects } from "./curseforge";
import { MODRINTH_URL } from "../config";

let cache: CommonProject[] | undefined = undefined;
let cachedTime = 0;

const hasCacheExpired = () =>
    cachedTime + 1 /*h*/ * 60 /*m*/ * 60 /*s*/ * 1000 /*ms*/ <= Date.now();

export const getAllProjects = async () => {
    if (cache && !hasCacheExpired()) return cache;

    const rcf = await getAllCurseProjects();

    const rmr: ModrinthProject[] = await fetch(MODRINTH_URL).then((v) =>
        v.json(),
    );

    const cf = await Promise.all(
        rcf.map((v) => mapCurseModToCommon(CURSEFORGE, v)),
    );

    const mr = await Promise.all(rmr.map(mapModrinthToCommon));
    const all = cf;

    for (const item of mr) {
        const existing =
            all.find((v) => v.slug == item.slug) ||
            all.find((v) => v.name == item.name) ||
            all.find(
                (v) => v.name.replace(" [Forge & Fabric]", "") == item.name,
            );

        if (existing) {
            existing.sources.modrinth = item.url;
            existing.downloads += item.downloads;
            existing.follows += item.follows;
            continue;
        }

        all.push(item);
    }

    cache = all;
    cachedTime = Date.now();

    return all;
};
