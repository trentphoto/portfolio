export interface Portfolio {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
    slug: string;
    github: string;
    website: string;
    technologies: string[];

    // Optional
    isFeatured?: boolean;
}
