// pages/api/test.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { supabase } from "@/supabaseClient";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // Example: Query a test table called 'test'
    const { data, error } = await supabase.from("test").select("*");

    if (error) {
        return res.status(500).json({ error: error.message });
    }
    return res.status(200).json({ data });
}
