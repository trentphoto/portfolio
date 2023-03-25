import { createClient } from "next-sanity";

export const client = createClient({
    projectId: 'agzsoy81',
    dataset: 'production',
    useCdn: false,
})