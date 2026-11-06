import BlogSeparate from "@/Components/AllBlogs/BlogSeparate";
import BlogData from "@/Components/InSights/BlogData";

// Only the articles listed in BlogData exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return BlogData.map((blog) => ({ Blogsname: blog.pathName }));
}

export async function generateMetadata({ params }) {
    const { Blogsname } = await params;
    const blog = BlogData.find((item) => item.pathName === Blogsname);
    return { title: blog?.blogTitle };
}

export default async function BlogPage({ params }) {
    const { Blogsname } = await params;
    return <BlogSeparate slug={Blogsname} />;
}
