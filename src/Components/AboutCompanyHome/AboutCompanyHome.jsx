import React from "react";
import "../../assets/Styles/AboutCompanyHome.css";
import { Row, Col } from "antd";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Counter } from "../HomeHero/HomeHero";

const ease = [0.22, 1, 0.36, 1];
const fadeUp   = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
const slideR   = { hidden: { opacity: 0, x: -60 }, visible: { opacity: 1, x: 0 } };
const slideL   = { hidden: { opacity: 0, x: 60 },  visible: { opacity: 1, x: 0 } };

const stats = [
    { value: 30,  suffix: "+", label: "Years of Experience" },
    { value: 500, suffix: "+", label: "Happy Clients"       },
    { value: 9,   suffix: "",  label: "Practice Areas"      },
];

const AboutComapanyHome = () => {
    const { ref: statsRef, inView: statsInView } = useInView({ threshold: 0.4, triggerOnce: true });

    return (
        <section id="AboutCompanyHomeContainer">
            <div className="ContainerDefault">

                {/* Section label */}
                <motion.div
                    className="AboutCompanyHomeMainContainer"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.65, ease }}
                >
                    <h4>About&nbsp;M.S. Chhajed &amp; Co.</h4>
                </motion.div>

                {/* Content row */}
                <div className="AboutCompanyInfoHomeContainer">
                    <Row gutter={[0, 40]}>
                        <Col lg={12} xs={24}>
                            <motion.div
                                className="AboutCompanyImageHomeContainer"
                                variants={slideR}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.80, ease }}
                            >
                                <img src="/Images/CA firms.jpg" alt="M.S. Chhajed & Co." />
                            </motion.div>
                        </Col>

                        <Col lg={12} xs={24}>
                            <motion.div
                                className="AboutCompanyContentHomeContainer"
                                variants={slideL}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.2 }}
                                transition={{ duration: 0.80, ease, delay: 0.12 }}
                            >
                                <h2>Top CA Firms in Ahmedabad, Gujarat</h2>
                                <p>
                                    M.S. Chhajed &amp; Co. is one of the leading multi-disciplinary
                                    Chartered Accountants firms in Ahmedabad, Gujarat. Founded in 1988,
                                    the firm specialises in Audit &amp; Assurance, Tax Structuring,
                                    Transaction Advisory, Transfer Pricing, Foreign Exchange Regulation,
                                    and Corporate Laws.
                                </p>
                                <p>
                                    Our professionals combine decades of experience with deep industry
                                    knowledge to deliver tailored solutions for start-ups, SMEs, large
                                    Indian corporates, and multinational companies across traditional and
                                    modern sectors.
                                </p>

                                {/* Stat strip */}
                                <div className="AboutStatStrip" ref={statsRef}>
                                    {stats.map((s, i) => (
                                        <motion.div
                                            key={i}
                                            className="AboutStatItem"
                                            variants={fadeUp}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: true, amount: 0.3 }}
                                            transition={{ duration: 0.55, ease, delay: 0.2 + i * 0.10 }}
                                        >
                                            <div className="stat-number">
                                                <Counter value={s.value} suffix={s.suffix} trigger={statsInView} />
                                            </div>
                                            <div className="stat-label">{s.label}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                <Link to="/about-us" className="AboutLearnMoreLink">
                                    About the Firm <HiArrowRight />
                                </Link>
                            </motion.div>
                        </Col>
                    </Row>
                </div>

            </div>
        </section>
    );
};

export default AboutComapanyHome;
