import { CURSEFORGE_PAGE } from "../../config";
import { parse } from "node-html-parser";
import { getPageText } from "../../api/puppeteer";
import type { Project } from "../../api/schema/projects";

let cache: Project[] | undefined = undefined;
let cachedTime = 0;

const hasCacheExpired = () =>
    cachedTime + 1 /*h*/ * 60 /*m*/ * 60 /*s*/ * 1000 /*ms*/ <= Date.now();

const getCachedValue = async () => {
    // CurseForge please make a proper API for this (or document one)

    const data = await getPageText(CURSEFORGE_PAGE)!;
    const parsed = parse(data);
    const script = parsed.getElementById("__NEXT_DATA__");
    const json = JSON.parse(script!.innerHTML);
    const projects = json.props.pageProps.authorProjects.data as Project[];

    cache = projects;
    cachedTime = Date.now();

    return projects;
};

export const GET = async () => {
    if (!cache || hasCacheExpired())
        return new Response(JSON.stringify(await getCachedValue()));

    return new Response(JSON.stringify(cache));
};
