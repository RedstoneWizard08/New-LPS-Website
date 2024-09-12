import { getCategories } from "../../../api/categories";

export const GET = async () => {
    return new Response(JSON.stringify(await getCategories()));
};
