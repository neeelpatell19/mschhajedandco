import React from "react";
import "../../assets/Styles/AboutBrandVideo.css";
import { motion } from "framer-motion";
import { TbScale, TbAward, TbBulb, TbBriefcase } from "react-icons/tb";
import { PiGlobeHemisphereEastLight } from "react-icons/pi";

const ease = [0.22, 1, 0.36, 1];

const features = [
    {
        num: "01",
        icon: <TbScale />,
        title: "Deep Legal Acumen",
        body: "Decades of litigation experience across Income Tax, GST, and corporate matters at quasi-judicial forums across India.",
    },
    {
        num: "02",
        icon: <TbAward />,
        title: "Trusted by 500+ Clients",
        body: "From startups to multinational corporations — our client relationships are built on transparency and long-term results.",
    },
    {
        num: "03",
        icon: <TbBulb />,
        title: "Innovative Solutions",
        body: "We combine knowledge of the law with industry experience to design solutions that clients can actually implement.",
    },
    {
        num: "04",
        icon: <TbBriefcase />,
        title: "Full-Spectrum Advisory",
        body: "Audit, tax, transfer pricing, M&A, regulatory compliance — a single trusted partner for all your advisory needs.",
    },
];

const pgStats = [
    { num: "300",  label: "Member Firms"  },
    { num: "90+",  label: "Countries"     },
    { num: "Top 5", label: "Worldwide"   },
];

const gridVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
    hidden: { opacity: 0, y: 32, scale: 0.96 },
    visible: { opacity: 1, y: 0, scale: 1 },
};

const AboutBrandVideo = () => (
    <section id="AboutBrandVideoContainer">
        <div className="ContainerDefault">

            {/* ── Two-column layout ── */}
            <div className="WhyUsLayout">

                {/* Left: heading + accent metrics */}
                <motion.div
                    className="WhyUsLeft"
                    initial={{ opacity: 0, x: -48 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ duration: 0.80, ease }}
                >
                    <div className="section-label">
                        <span>Why Us</span>
                    </div>
                    <h2>What Sets Us<br />Apart</h2>
                    <p>
                        For over three decades, M.S. Chhajed &amp; Co. has been the firm of choice
                        for clients who demand expertise, discretion, and results. Our commitment
                        to staying ahead of regulatory developments means your business is always
                        one step ahead.
                    </p>

                    <div className="WhyUsAccentRow">
                        <div className="WhyUsAccentItem">
                            <span className="WhyUsAccentNum">30+</span>
                            <span className="WhyUsAccentLabel">Years Established</span>
                        </div>
                        <div className="WhyUsAccentDivider" />
                        <div className="WhyUsAccentItem">
                            <span className="WhyUsAccentNum">9</span>
                            <span className="WhyUsAccentLabel">Practice Areas</span>
                        </div>
                    </div>
                </motion.div>

                {/* Right: 2×2 cards */}
                <motion.div
                    className="WhyUsGrid"
                    variants={gridVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.15 }}
                >
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            className="WhyUsCard"
                            variants={cardVariants}
                            transition={{ duration: 0.60, ease }}
                            whileHover={{ y: -4, transition: { duration: 0.3, ease } }}
                        >
                            <div className="WhyUsCardHeader">
                                <motion.div
                                    className="WhyUsCardIcon"
                                    whileHover={{ rotate: -8, scale: 1.12 }}
                                    transition={{ duration: 0.35, ease }}
                                >
                                    {f.icon}
                                </motion.div>
                                <span className="WhyUsCardNum">{f.num}</span>
                            </div>
                            <h4>{f.title}</h4>
                            <p>{f.body}</p>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </div>

        {/* ── PrimeGlobal — full-bleed navy strip ── */}
        <div className="PrimeGlobalStrip">
            <div className="ContainerDefault">
                <div className="PrimeGlobalInner">

                    {/* Left: icon + copy */}
                    <motion.div
                        className="PrimeGlobalLeft"
                        initial={{ opacity: 0, x: -28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.75, ease, delay: 0.1 }}
                    >
                        <div className="PrimeGlobalIcon">
                            <PiGlobeHemisphereEastLight />
                        </div>
                        <div className="PrimeGlobalCopy">
                            <p className="PrimeGlobalLabel">Global Network</p>
                            <h3>An Independent Member of PrimeGlobal</h3>
                            <p>
                                One of the five largest associations of independent accounting firms
                                worldwide — giving our clients access to expertise across 90+ countries
                                and 300+ member firms.
                            </p>
                        </div>
                    </motion.div>

                    {/* Right: stats */}
                    <motion.div
                        className="PrimeGlobalStats"
                        initial={{ opacity: 0, x: 28 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.75, ease, delay: 0.2 }}
                    >
                        {pgStats.map((s, i) => (
                            <div key={i} className="PGStat">
                                <span className="PGStatNum">{s.num}</span>
                                <span className="PGStatLabel">{s.label}</span>
                            </div>
                        ))}
                    </motion.div>

                </div>
            </div>
        </div>

    </section>
);

export default AboutBrandVideo;
