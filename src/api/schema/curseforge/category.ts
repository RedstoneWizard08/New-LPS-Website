import type { Category } from "../category";

export const categories = {
    mods: 6,
    customization: 4546,
    resourcepacks: 12,
    worlds: 17,
    bukkitplugins: 5,
    modpacks: 4471,
    datapacks: 6945,
    addons: 4559,
    shaders: 6552,
};

export const categoryIds: Record<number, keyof typeof categories> = {};

for (const key of Object.keys(categories) as (keyof typeof categories)[]) {
    categoryIds[categories[key]] = key;
}

export const mapCurseCategoryToCommon = (id: number): Category => {
    const name = categoryIds[id];

    switch (name) {
        case "mods":
            return "mod";
        case "modpacks":
            return "modpack";
        case "resourcepacks":
            return "resourcepack";
        case "shaders":
            return "shader";
        case "bukkitplugins":
            return "plugin";
        case "datapacks":
            return "datapack";
        default:
            throw new RangeError(`Unsupported category ID: ${id} ("${name}")`);
    }
};
