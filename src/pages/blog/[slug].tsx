import { marked } from 'marked';

import { getPostBySlug, getSortedPostsData } from '@/lib/posts';

import Footer from '@/components/Footer';
import Nav from '@/components/Nav';

import { Post } from '@/types/Post';

export default function BlogPostPage({
    content,
    title,
    excerpt,
    gradient
}: Post) {

    return (
        <>
            <Nav />
            <main>
                <section className='bg-gray-100 py-20 px-4 text-center'>
                    <div className='container max-w-3xl space-y-3'>
                        <h1 className='font-bold'>{title}</h1>
                        <p className='smallcaps'>{excerpt}</p>
                    </div>
                </section>
                <section className='py-12 px-4'>
                    <div className='container max-w-3xl'>
                        <div className={gradient + " bg-gradient-to-r w-full h-72 rounded-xl shadow-xl border-2 border-white mb-12"} />
                        <div
                            dangerouslySetInnerHTML={{ __html: content }}
                            className='content list-disc'
                        />
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}

export async function getStaticPaths() {
    const posts = getSortedPostsData();
    const paths = posts.map((post) => ({
        params: {
            slug: post.slug,
        },
    }));
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params: { slug } }: never) {
    const post = getPostBySlug(slug);
    return {
        props: {
            ...post,
            content: marked(post.content),
        },
    };
}
