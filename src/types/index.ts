// Define the User type
export interface User {
    id: string; // UUID
    username: string;
    reddit_oauth_token: string;
    created_at: string; // ISO date string
}

// Define the TrendingTopic type
export interface TrendingTopic {
    id: string; // UUID
    subreddit: string;
    post_title: string;
    keywords: string[]; // Array of keywords
    fetched_at: string; // ISO date string
}

// Define the Meme type
export interface Meme {
    id: string; // UUID
    image_url: string;
    template_used: boolean;
    caption: string;
    created_by: string; // UUID of the User
    created_at: string; // ISO date string
}

// Define the Feedback type
export interface Feedback {
    id: string; // UUID
    meme_id: string; // UUID of the Meme
    user_id: string; // UUID of the User
    reaction: "up" | "down"; // Reaction type
    created_at: string; // ISO date string
}

// Define the ScheduledPost type
export interface ScheduledPost {
    id: string; // UUID
    meme_id: string; // UUID of the Meme
    subreddit: string;
    scheduled_time: string; // ISO date string
    status: string; // e.g., 'pending', 'posted'
}
