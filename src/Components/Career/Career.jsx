import React from "react";
import "./Career.css";
import CareerJobData from "./CareerJobData";
import { Row, Col } from "antd";
import { BsSuitcaseLgFill } from "react-icons/bs";
import { IoLocationSharp } from "react-icons/io5";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const Careers = () => {
    return (
        <section id="CareersContentContainer">

            {/* ── Dark header ── */}
            <div className="CareerHeader">
                <div>
                    <motion.div
                        className="section-label"
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.1 }}
                    >
                        <span>Join Our Team</span>
                    </motion.div>
                    <motion.h1
                        initial={{ opacity: 0, y: 28 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.22 }}
                    >
                        Careers at M.S. Chhajed &amp; Co.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.36 }}
                    >
                        Build a meaningful career in accounting and law. We're looking for sharp,
                        motivated professionals to grow with a firm that's trusted by clients across Gujarat.
                    </motion.p>
                </div>
            </div>

            {/* ── Job listings ── */}
            <div className="ContainerDefault">
                <div className="CareersJobsContentContainer">
                    <Row style={{ width: "100%" }}>
                        {CareerJobData.map((item, index) => (
                            <Col key={index} lg={8} md={12} xs={24} style={{ width: "100%" }}>
                                <motion.div
                                    className="CareersCardsContainer"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.65, ease: [0.22,1,0.36,1], delay: index * 0.08 }}
                                >
                                    <h4>{item.jobTitle}</h4>
                                    <div className="TagStyle">
                                        <p><BsSuitcaseLgFill />{item.jobType}</p>
                                        <p><IoLocationSharp />{item.jobLocation}</p>
                                    </div>
                                    <a
                                        className="CareerApplyBtn"
                                        href={`mailto:mahesh@mschhajedandco.com?subject=Application — ${item.jobTitle}`}
                                    >
                                        Apply Now <HiArrowRight />
                                    </a>
                                </motion.div>
                            </Col>
                        ))}
                    </Row>
                </div>
            </div>

        </section>
    );
};

export default Careers;
