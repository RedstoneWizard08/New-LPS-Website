import { Octokit } from "octokit";

const octokit = new Octokit();
const data: Map<string, string> = new Map();

export const GET = async ({ params }) => {
    const { username } = params;

    if (!data.has(username)) {
        data.set(
            username,
            (await octokit.rest.users.getByUsername({ username })).data
                .avatar_url,
        );
    }

    return new Response(data.get(username));
};
