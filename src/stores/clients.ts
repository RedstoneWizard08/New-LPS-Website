import { readable } from "svelte/store";
import { Octokit } from "octokit";

export const octokit = readable(new Octokit());
