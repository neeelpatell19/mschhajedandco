import React, { useState, useEffect } from "react";
import "../../assets/Styles/AboutUsComponent.css";
import { Row, Col, Modal } from "antd";
import { GiShakingHands } from "react-icons/gi";
import { PiUsersThreeFill } from "react-icons/pi";
import justiciaBack from "./justiciaBack.svg";
import MaheshChhajed from "./MaheshChhajed2.png";
import HemChhajed from "./HemChhajed2.png";
import KrunalPatel from "./KrunalPatel.jpg";
import PreyashiTated from "./PreyashiTated.jpg";
import { Counter } from "../HomeHero/HomeHero";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const AboutUs = () => {
    const [scale, setScale] = useState(1);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [currentTeamMember, setCurrentTeamMember] = useState(null);
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScale(Math.min(1 + scrollY / 3000, 1.08));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, []);

    const counterData = [
        { title: "Years of Experience", value: 30,  suffix: "+", icon: <GiShakingHands /> },
        { title: "Happy Clients",        value: 500, suffix: "+", icon: <PiUsersThreeFill /> },
    ];

    const teamData = [
        {
            title: "Mahesh Chhajed",
            position: "Principal Partner",
            image: MaheshChhajed,
            description: <>
                <p>With three decades of experience, Mahesh is well known for his competence &amp; innovation in Direct Taxation and Corporate Advisory Services, including M&amp;A. He is considered an authority on Income Tax.</p>
                <p>He focuses on the Mergers and Acquisitions practice of the firm, while providing technical leadership to the International Tax, Transfer Pricing and Direct Tax divisions. He has successfully litigated tax matters for nearly two decades at various quasi-judicial fora.</p>
                <p>He regularly delivers lectures and contributes to newspapers on issues relating to direct tax laws.</p>
            </>,
            educationDetails: <>
                <p>LL.B. (Law) – Gujarat University</p>
                <p>Chartered Accountant</p>
                <p>Bachelor of Commerce – Gujarat University</p>
            </>
        },
        {
            title: "Hem Chhajed",
            position: "Managing Partner",
            image: HemChhajed,
            description: <>
                <p>Hem leads the Indirect Tax Division at the Firm. A fellow Chartered Accountant, he has handled several complex tax disputes and represented clients before various departmental authorities. He has advised a large number of corporates on Indirect Tax structuring and planning.</p>
                <p>Hem is a regular contributor to newspapers in vernacular languages and has addressed seminars on contemporary tax matters. He has authored the book <em>Handbook on Service Tax</em> published by Navsarjan Publication.</p>
            </>,
            educationDetails: <>
                <p>LL.B. (Law) – Gujarat University</p>
                <p>Chartered Accountant</p>
                <p>Post Graduate Diploma in Investment and Financial Analysis</p>
                <p>Bachelor of Commerce – Gujarat University</p>
            </>
        },
        {
            title: "Krunal Patel",
            position: "Manager — Assurance",
            image: KrunalPatel,
            description: <>
                <p>Krunal heads the Assurance division at the Firm. He possesses rich experience in auditing, assurance services, corporate law, and income tax across service, trading and manufacturing industries. His expertise encompasses Statutory and Internal Audit, Tax Audits and IFRS Services.</p>
            </>,
            educationDetails: <>
                <p>Chartered Accountant</p>
                <p>Company Secretary</p>
                <p>Masters of Commerce – Gujarat University</p>
            </>
        },
        {
            title: "Preyashi Tated",
            position: "Manager — Direct Taxation",
            image: PreyashiTated,
            description: <>
                <p>Preyashi advises and represents clients on direct tax law matters. She combines her understanding of businesses with in-depth legal knowledge to curate innovative solutions. She has assisted on wide-ranging direct tax litigation issues including search, seizures, survey, and unexplained cash credits.</p>
            </>,
            educationDetails: <>
                <p>Chartered Accountant</p>
                <p>Bachelor of Commerce – Ahmedabad University</p>
            </>
        },
    ];

    const handleCardClick  = (member) => { setCurrentTeamMember(member); setIsModalVisible(true);  };
    const handleModalClose = () => { setIsModalVisible(false); setCurrentTeamMember(null); };

    return (
        <section className="AboutUsContainer">
            <div className="AboutUsComponentMainContainer">

                {/* ── Dark header ── */}
                <div className="AboutUsMainHeaderContainer">
                    <div>
                        <motion.div
                            className="section-label"
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: 0.1 }}
                        >
                            <span>Who We Are</span>
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 28 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.25 }}
                        >
                            Pioneering Excellence in<br />Chartered Accountancy Since 1988
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: [0.22,1,0.36,1], delay: 0.40 }}
                        >
                            Delivering trusted financial and legal expertise for over three decades.
                            We provide assurance, tax, and advisory services tailored to diverse
                            industries — with transparency and confidentiality at our core.
                        </motion.p>
                    </div>
                </div>

                {/* ── Banner image ── */}
                <div className="ContainerDefault">
                    <div className="TopAnimatedCommonBannerAllPages">
                        <div>
                            <img
                                style={{ transform: `scale(${scale})`, transition: "transform 0.2s ease-out" }}
                                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?q=80&w=2947&auto=format&fit=crop"
                                alt="Team working"
                            />
                        </div>
                    </div>
                </div>

                {/* ── Counter strip ── */}
                <div className="CompanyAnimatedNumbersContainer" ref={ref}>
                    <Row style={{ width: "100%" }}>
                        {counterData.map((item, index) => (
                            <Col lg={12} md={12} xs={24} style={{ width: "100%" }} key={index}>
                                <div className="CounterCardContainer">
                                    <div className="CounterCard">
                                        <span>{item.icon}</span>
                                        <h2>
                                            <Counter value={item.value} suffix={item.suffix} trigger={inView} />
                                        </h2>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>
                </div>

                {/* ── Company info ── */}
                <div className="AboutUsInfoContainer">
                    <div className="AboutImageContainer">
                        <img src={justiciaBack} alt="" aria-hidden="true" />
                    </div>
                    <div className="ContainerDefault">
                        <motion.div
                            className="AboutContentContainerText"
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.85, ease: [0.22,1,0.36,1] }}
                        >
                            <h2>Chartered Accountants in Ahmedabad</h2>
                            <p>Founded in 1988, M.S. Chhajed &amp; Co. specialises in providing assurance, advisory and tax services across various sectors. The firm is acclaimed for its legal acumen, transparency and confidentiality. Our expertise and opinion is regarded as an authority amongst the upper echelons of taxation law.</p>
                            <p>The firm prides itself on its commitment to knowing the law and encouraging professionals to stay at the forefront of the latest developments. Over the last three decades, we have worked with a variety of clients — start-ups, small &amp; medium enterprises, large Indian corporates and multinational companies.</p>
                            <p>Our professionals have experience across both traditional sectors such as commodities, automobiles, pharmaceuticals and petrochemicals, and modern sectors such as e-commerce, big data and renewables. We combine our knowledge of the law with industry experience to design legal solutions that clients can implement.</p>
                            <p>Founder and Principal Partner Mahesh Chhajed has been inspired by the principles of transparency, trusteeship and democracy. Since its inception, M.S. Chhajed &amp; Co. has continued to evolve based on these beliefs — rooted firmly in its ideological and philosophical approach to fair business.</p>
                            <p>Infrastructure and technology are the cornerstones of our practice, and we invest heavily in updating our systems to match global demand. Our team of Chartered Accountants and Company Secretaries are well-versed in providing solutions according to industry specifics.</p>
                        </motion.div>
                    </div>
                </div>

                {/* ── Team members ── */}
                <div className="TeamPeoplesContaner">
                    <div className="ContainerDefault">
                        <motion.div
                            className="TeamSectionHeader"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.3 }}
                            transition={{ duration: 0.75, ease: [0.22,1,0.36,1] }}
                        >
                            <div className="section-label"><span>People</span></div>
                            <h2>Our Team</h2>
                        </motion.div>
                        <div className="TeamMembersDataContainer">
                            <Row>
                                {teamData.map((item, index) => (
                                    <Col key={index} lg={6} md={12} xs={24} style={{ width: "100%" }}>
                                        <motion.div
                                            className="TeamMemberCardContainer"
                                            onClick={() => handleCardClick(item)}
                                            initial={{ opacity: 0, y: 28 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true, amount: 0.15 }}
                                            transition={{ duration: 0.7, ease: [0.22,1,0.36,1], delay: index * 0.10 }}
                                        >
                                            {/* Image + hover overlay */}
                                            <div>
                                                <div className="hoverOverlayBlackContainer" />
                                                <img src={item.image} alt={item.title} />
                                                <div className="TeamMemberCardSlideInfo">
                                                    <h3>{item.title}</h3>
                                                    <span>{item.position}</span>
                                                </div>
                                            </div>

                                            {/* Static name below */}
                                            <div>
                                                <h3>{item.title}</h3>
                                                <span>{item.position}</span>
                                            </div>
                                        </motion.div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>

                {/* ── Member detail modal ── */}
                <Modal
                    title={false}
                    open={isModalVisible}
                    onCancel={handleModalClose}
                    footer={false}
                    width={820}
                >
                    {currentTeamMember && (
                        <>
                            <Row>
                                <Col lg={10} md={10} xs={24} style={{ width: "100%" }}>
                                    <div style={{ padding: "10px" }}>
                                        <img src={currentTeamMember.image} alt="" style={{ width: "100%", borderRadius: 12 }} />
                                    </div>
                                </Col>
                                <Col lg={14} md={14} xs={24} style={{ width: "100%" }}>
                                    <div className="ModalInsideInfo">
                                        <h1>{currentTeamMember.title}</h1>
                                        <p><strong>Position:</strong> {currentTeamMember.position}</p>
                                        <br />
                                        <p><strong>Education:</strong></p>
                                        <div>{currentTeamMember.educationDetails}</div>
                                    </div>
                                </Col>
                            </Row>
                            <div style={{ padding: "16px 10px 8px" }}>
                                {currentTeamMember.description}
                            </div>
                        </>
                    )}
                </Modal>

            </div>
        </section>
    );
};

export default AboutUs;
