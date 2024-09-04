export interface ModrinthUser {
    id: string;
    username: string;
    name?: string;
    avatar_url: string;
    bio: string;
    created: string; // Date, like "2022-05-24T03:04:42.341897Z"
    role: string;
    badges: number;
    auth_providers?: unknown;
    email?: unknown;
    email_verified?: unknown;
    has_password?: unknown;
    has_totp?: unknown;
    payout_data?: unknown;
    stripe_customer_id?: unknown;
    github_id?: unknown;
}

export interface ModrinthMember {
    role: string;
    team_id: string;
    user: ModrinthUser;
    permissions?: unknown;
    accepted: boolean;
    payouts_split?: unknown;
    ordering: number;
}
