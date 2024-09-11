export type Category =
    | "mod"
    | "modpack"
    | "resourcepack"
    | "shader"
    | "plugin"
    | "datapack";

export const categoryName = (cat: Category) => {
    switch (cat) {
        case "mod":
            return "Mods";
        case "modpack":
            return "Modpacks";
        case "resourcepack":
            return "Resource Packs";
        case "shader":
            return "Shader Packs";
        case "plugin":
            return "Plugins";
        case "datapack":
            return "Data Packs";
    }
};
