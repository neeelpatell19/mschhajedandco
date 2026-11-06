"use client";

import "./Career.css";
import CareerJobData from "./CareerJobData";
import { ArrowRight, BriefcaseBusiness, MapPin } from "lucide-react";
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
                        Build a meaningful career in accounting and law. We&apos;re looking for sharp,
                        motivated professionals to grow with a firm that&apos;s trusted by clients across Gujarat.
                    </motion.p>
                </div>
            </div>

            {/* ── Job listings ── */}
            <div className="ContainerDefault">
                <div className="CareersJobsContentContainer">
                    <div className="flex w-full flex-wrap">
                        {CareerJobData.map((item, index) => (
                            <div key={index} className="w-full flex-none md:w-1/2 lg:w-1/3">
                                <motion.div
                                    className="CareersCardsContainer"
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.15 }}
                                    transition={{ duration: 0.65, ease: [0.22,1,0.36,1], delay: index * 0.08 }}
                                >
                                    <h4>{item.jobTitle}</h4>
                                    <div className="TagStyle">
                                        <p><BriefcaseBusiness size="1em" />{item.jobType}</p>
                                        <p><MapPin size="1em" />{item.jobLocation}</p>
                                    </div>
                                    <a
                                        className="CareerApplyBtn"
                                        href={`mailto:mahesh@mschhajedandco.com?subject=Application — ${item.jobTitle}`}
                                    >
                                        Apply Now <ArrowRight size="1em" />
                                    </a>
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Careers;
