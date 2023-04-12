export interface Portfolio {
    _id: number;
    _type: string;
    _createdAt: string;
    _updatedAt: string;
    title: string;
    description: string;
    body: Body;
    featured: boolean;
    image: Image;
    slug: Slug;
    github: string;
    website: string;
    technologies: string[];

    // Optional
    isFeatured?: boolean;
}

interface Slug {
    _type: string;
    current: string;
}

interface Body {
    _type: string;
    children: Child[];
}

interface Child {
    _key: string;
    _type: string;
    marks: string[];
    text: string;
}

interface Image {
    _type: string;
    asset: Asset;
}

interface Asset {
    _ref: string;
    _type: string;
}
