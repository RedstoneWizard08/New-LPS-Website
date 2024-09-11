import type { Category } from "../category";

export type Requirement = "optional" | "required" | "unsupported";

export interface License {
    id: string;
    name: string;
    url?: string;
}

export interface DonationLink {
    id: string;
    platform: string;
    url: string;
}

export interface GalleryItem {
    url: string;
    featured: boolean;
    title?: string;
    description?: string;
    created: string; // Date, like "2023-07-21T15:34:37.105755Z"
    ordering: number;
}

export interface ModrinthProject {
    client_side: Requirement;
    server_side: Requirement;
    game_versions: string[];
    id: string;
    slug: string;
    project_type: Category;
    team: string;
    organization?: string;
    title: string;
    description: string;
    body: string;
    body_url?: string;
    published: string; // Date, like "2023-07-21T15:33:46.911744Z"
    updated: string; // Date, like above
    approved: string; // Date, like above
    queued: string; // Date, like above
    status: "approved"; // We can only see public projects
    requested_status?: "approved";
    moderator_message?: string;
    license: License;
    downloads: number;
    followers: number;
    categories: string[];
    additional_categories: string[];
    loaders: string[];
    versions: string[];
    icon_url: string;
    issues_url?: string;
    source_url?: string;
    wiki_url?: string;
    discord_url?: string;
    donation_urls: DonationLink[];
    gallery: GalleryItem[];
    color: number;
    thread_id: string;
    monetization_status: string;
}
