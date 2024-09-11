import { getAllProjects } from "./projects";
import type { Category } from "./schema/category";

export const getCategories = async () => {
    const arr = (await getAllProjects()).map((v) => v.type);
    const res: Category[] = [];

    for (const item of arr) {
        if (!res.includes(item)) res.push(item);
    }

    return res;
};
