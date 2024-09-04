import type { ModrinthProject } from "./modrinth/project";
import type { ModrinthMember } from "./modrinth/members";
import { getModDescription } from "../curseforge";
import type { CurseForgeMod } from "./curseforge/mod";
import { CLOUDFLARE } from "astro:env/server";

export type Source = "curseforge" | "modrinth";

export interface CommonProject {
    id: string;
    slug: string;
    url: string;
    name: string;
    downloads: number;
    follows: number;
    author: string;
    downloadLink: string;
    iconUrl: string;
    description: string;
    summary: string;
    source: Source;
    sources: {
        curseforge?: string;
        modrinth?: string;
    };
}

export const mapCurseModToCommon = async (
    curse: CurseForgeMod,
): Promise<CommonProject> => {
    return {
        id: curse.id.toString(),
        slug: curse.slug,
        url: curse.links.websiteUrl,
        name: curse.name,
        downloads: curse.downloadCount,
        follows: curse.thumbsUpCount,
        author: curse.authors[0].name,
        downloadLink: `${curse.links.websiteUrl}/files/${curse.mainFileId}/download`,
        iconUrl: curse.logo.url,
        description: await getModDescription(curse.id),
        summary: curse.summary,
        source: "curseforge",
        sources: {
            curseforge: curse.links.websiteUrl,
        },
    };
};

export const mapModrinthToCommon = async (
    proj: ModrinthProject,
): Promise<CommonProject> => {
    let author = "LunaPixelStudios";

    if (CLOUDFLARE != 1) {
        const url = `https://api.modrinth.com/v2/project/${proj.id}/members`;

        const members: ModrinthMember[] = await fetch(url).then((v) =>
            v.json(),
        );

        const member = members.find((v) => v.role == "Owner") || members[0];

        await new Promise((res, _rej) => setTimeout(res, 1000)); // ratelimit :whyToDETH:

        author = member.user.username;
    }

    return {
        id: proj.id,
        slug: proj.slug,
        url: `https://modrinth.com/${proj.project_type}/${proj.slug}`,
        name: proj.title,
        downloads: proj.downloads,
        follows: proj.followers,
        author,
        downloadLink: `https://modrinth.com/${proj.project_type}/${proj.slug}/version/${proj.versions[0]}`,
        iconUrl: proj.icon_url,
        description: proj.body,
        summary: proj.description,
        source: "modrinth",
        sources: {
            modrinth: `https://modrinth.com/${proj.project_type}/${proj.slug}`,
        },
    };
};
