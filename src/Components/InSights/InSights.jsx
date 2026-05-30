import React from "react";
import "../../assets/Styles/Insights.css";
import { Row, Col } from "antd";
import BlogData from "./BlogData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

const InSights = () => {
    // Show 2 unique-by-tag previews on the home page
    const previewBlogs = BlogData.filter(
        (blog, index, self) =>
            index === self.findIndex((b) => b.tag === blog.tag)
    );

    return (
        <section id="InSightsContainer">
            <div className="ContainerDefault">

                {/* Header */}
                <motion.div
                    className="InsightsHeaderRow"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, ease }}
                >
                    <div className="insights-label">
                        <div className="section-label">
                            <span>Knowledge Hub</span>
                        </div>
                        <h1>Legal News &amp; Articles</h1>
                    </div>
                    <Link to="/insights-newsroom" className="view-all-link">
                        View All →
                    </Link>
                </motion.div>

                {/* Cards */}
                <Row>
                    {previewBlogs.map((item, index) => (
                        <Col lg={12} md={24} xs={24} style={{ width: "100%" }} key={index}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.65, ease, delay: index * 0.12 }}
                            >
                            <Link to={`/insights-newsroom/${item.pathName}`}>
                                <div className="BlogPostCardContainer">

                                    <div className="BlogPostImageContainer">
                                        <img src={item.blogImage} alt={item.blogTitle} />
                                    </div>

                                    <div className="BlogPostContentContainer">
                                        <span className="BlogTagPill">{item.tag}</span>
                                        <h2>{item.blogTitle}</h2>
                                        <div className="BlogPostMeta">
                                            <p>{item.blogDate}</p>
                                            <p>{item.blogCustomName}</p>
                                        </div>
                                    </div>

                                </div>
                            </Link>
                            </motion.div>
                        </Col>
                    ))}
                </Row>

            </div>
        </section>
    );
};

export default InSights;
