import type { Post } from '$lib/types'
import { json } from "@sveltejs/kit";

async function getPosts() {
    let posts: Post[] = [];

    const paths = import.meta.glob('/src/posts/*.md', {eager:true});
    console.log(paths);
    for (const path in paths) {
        const file = paths[path];
        const slug = path.split('/').at(-1)?.replace('.md','');
        // This is why typescript is great, we can use all this weird syntax to check
        // the types of things and it forces us to do things right
        // file exists and the typeof file is an object and "metadata" is in the file and the slug exists
        if (file && typeof file === 'object' && 'metadata' in file && slug){
            const metadata = file.metadata as Omit<Post, "slug">;
            const post = {...metadata, slug} satisfies Post;
            post.published && posts.push(post);
        }


    }

    posts = posts.sort(
        (first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
    );
    return posts
}


export async function GET() {
    const posts = await getPosts()
    return json(posts)
}