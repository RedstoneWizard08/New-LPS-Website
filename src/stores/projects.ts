import { get, writable } from "svelte/store";
import type { CommonProject } from "../api/schema/project";
import type { Category } from "../api/schema/category";

export const current = writable<Category | undefined>(undefined);
export const projects = writable<CommonProject[]>([]);
export const categories = writable<Category[]>([]);

export const updateStores = async (root: URL | string) => {
    // This HAS to be done sequentially, otherwise it'll
    // cause the internal cache to update twice!

    if (get(projects).length == 0)
        projects.set(
            await fetch(new URL("/api/projects", root)).then((v) => v.json()),
        );

    if (get(categories).length == 0)
        categories.set(
            await fetch(new URL("/api/categories", root)).then((v) => v.json()),
        );
};
