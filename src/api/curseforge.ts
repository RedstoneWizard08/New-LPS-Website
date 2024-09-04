import { CURSEFORGE_KEY } from "astro:env/server";
import { CurseForgeClient } from "curseforge-api";
import type { CurseforgeScrapedProject } from "./schema/curseforge/project";
import { getPageText } from "./puppeteer";
import { parse } from "node-html-parser";
import { CURSEFORGE_PAGE } from "../config";

export const CURSEFORGE = new CurseForgeClient(CURSEFORGE_KEY);

let cache: CurseforgeScrapedProject[] | undefined = undefined;
let cachedTime = 0;

const hasCacheExpired = () =>
    cachedTime + 1 /*h*/ * 60 /*m*/ * 60 /*s*/ * 1000 /*ms*/ <= Date.now();

const getCachedValue = async () => {
    // CurseForge please make a proper API for this (or document one)

    const data = await getPageText(CURSEFORGE_PAGE)!;
    const parsed = parse(data);
    const script = parsed.getElementById("__NEXT_DATA__");
    const json = JSON.parse(script!.innerHTML);
    const projects = json.props.pageProps.authorProjects
        .data as CurseforgeScrapedProject[];

    cache = projects;
    cachedTime = Date.now();

    return projects;
};

export const getCurseForgeProjects = async () => {
    if (!cache || hasCacheExpired()) return await getCachedValue();

    return cache;
};
