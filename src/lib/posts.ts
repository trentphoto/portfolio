import { Post } from '@/types/Post';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import gradients from './gradients'

const postsDirectory = path.join(process.cwd(), 'content/blog');

export function getSortedPostsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(postsDirectory);

    const posts = fileNames
        .map((fileName, index) => {
            // Read markdown file as string
            const markdownWithMeta = fs.readFileSync(
                path.join(postsDirectory, fileName),
                'utf8'
            );

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(markdownWithMeta);

            const post: Post = {
                content: matterResult.content,
                date: matterResult.data.date,
                slug: matterResult.data.slug,
                title: matterResult.data.title,
                excerpt: matterResult.data.excerpt,
                gradient: gradients[index % gradients.length].value, // use modulo to cycle through gradients
                // ...matterResult.data
            };
            return post;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return posts;
}

export function getPostBySlug(slug: string): Post {
    const markdownWithMeta = fs.readFileSync(
        path.join(postsDirectory, `${slug}.md`),
        'utf-8'
    );

    const result = matter(markdownWithMeta);

    const post = {
        content: result.content,
        date: result.data.date,
        slug: result.data.slug,
        title: result.data.title,
        excerpt: result.data.excerpt,
        gradient: gradients[Math.floor(Math.random() * gradients.length)].value,
    }

    return post;
}