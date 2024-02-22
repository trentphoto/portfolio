import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { Portfolio } from '@/types/Portfolio';

const portfolioDirectory = path.join(process.cwd(), 'content/portfolio');

export function getSortedPortfolioItemsData() {
    // Get file names under /posts
    const fileNames = fs.readdirSync(portfolioDirectory);

    const items = fileNames
        .map((fileName, index) => {
            // Read markdown file as string
            const markdownWithMeta = fs.readFileSync(
                path.join(portfolioDirectory, fileName),
                'utf8'
            );

            // Use gray-matter to parse the metadata section
            const result = matter(markdownWithMeta);

            const item: Portfolio = {
                content: result.content,
                date: result.data.date,
                slug: result.data.slug,
                name: result.data.name,
                excerpt: result.data.excerpt,
                image: result.data.image,
                repository: result.data.repository,
                site: result.data.site,
                technologies: result.data.technologies || [],
            };
            return item;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

    return items;
}

export function getPortfolioItemBySlug(slug: string): Portfolio {
    const markdownWithMeta = fs.readFileSync(
        path.join(portfolioDirectory, `${slug}.md`),
        'utf-8'
    );

    const result = matter(markdownWithMeta);

    const item = {
        content: result.content,
        date: result.data.date,
        slug: result.data.slug,
        name: result.data.name,
        excerpt: result.data.excerpt,
        image: result.data.image,
        repository: result.data.repository,
        site: result.data.site,
        technologies: result.data.technologies || [],
    }

    return item;
}