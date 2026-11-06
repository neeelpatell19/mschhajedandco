"use client";

import BlogData from "../InSights/BlogData";
import "../../assets/Styles/AllBlogs.css";
import Link from "next/link";
import { motion } from "framer-motion";
import BlogTabs from "./BlogTabs";

const BlogCard = ({ item, index = 0 }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.65, ease: [0.22,1,0.36,1], delay: index * 0.10 }}
    >
        <Link href={`/insights-newsroom/${item.pathName}`} className="block">
            <div className="BlogPostCardContainer">
                <div className="BlogPostImageContainer">
                    <img src={item.blogImage} alt={item.blogTitle} />
                </div>
                <div className="BlogPostContentContainer">
                    <span className="BlogPostTagPill">{item.tag}</span>
                    <h2>{item.blogTitle}</h2>
                    <div className="BlogPostMeta">
                        <span>{item.blogDate}</span>
                        <span>{item.blogCustomName}</span>
                    </div>
                </div>
            </div>
        </Link>
    </motion.div>
);

const BlogGrid = ({ posts }) => (
    <div className="flex w-full flex-wrap">
        {posts.map((item, i) => (
            <div key={item.pathName} className="w-full flex-none lg:w-1/2">
                <BlogCard item={item} index={i} />
            </div>
        ))}
    </div>
);

const AllBlogs = () => {
    const insights  = BlogData.filter((b) => b.tag === "Insights");
    const newsroom  = BlogData.filter((b) => b.tag === "Newsroom");

    const tabItems = [
        {
            key: "1",
            label: "Insights",
            children: <BlogGrid posts={insights} />,
        },
        {
            key: "2",
            label: "Newsroom",
            children: <BlogGrid posts={newsroom} />,
        },
    ];

    return (
        <section id="AllBlogsContainer">

            {/* ── Dark header ── */}
            <div className="AllBlogsHeader">
                <div>
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.1 }}
                    >
                        <span>Insights &amp; Newsroom</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.22 }}
                    >
                        Perspectives from Gujarat&apos;s<br />Leading CA Firm
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.36 }}
                    >
                        Commentary on tax law, regulatory updates, and industry insights
                        from the professionals at M.S. Chhajed &amp; Co.
                    </motion.p>
                </div>
            </div>

            {/* ── Tabs + Cards ── */}
            <div className="ContainerDefault">
                <div className="AllBlogsBody">
                    <BlogTabs items={tabItems} />
                </div>
            </div>

        </section>
    );
};

export default AllBlogs;
