import { CURSEFORGE_KEY } from "astro:env/server";
import { CurseForgeClient } from "curseforge-api";

export const CURSEFORGE = new CurseForgeClient(CURSEFORGE_KEY);
