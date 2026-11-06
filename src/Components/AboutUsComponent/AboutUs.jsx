"use client";

import { useState, useEffect, useLayoutEffect, useCallback, useRef, useId } from "react";
import { createPortal } from "react-dom";
import "../../assets/Styles/AboutUsComponent.css";
import { Handshake, Users, X } from "lucide-react";
import justiciaBack from "./justiciaBack.svg";
import MaheshChhajed from "./MaheshChhajed2.png";
import HemChhajed from "./HemChhajed2.png";
import KrunalPatel from "./KrunalPatel.jpg";
import PreyashiTated from "./PreyashiTated.jpg";
import { Counter } from "../HomeHero/HomeHero";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const MODAL_ANIMATION_MS = 200;
const FOCUSABLE_SELECTOR = "a[href], button:not([disabled]), [tabindex]:not([tabindex='-1'])";

const TeamModal = ({ member, origin, onClosed }) => {
    const [closing, setClosing] = useState(false);
    const dialogRef = useRef(null);
    const pressedOnBackdrop = useRef(false);
    const titleId = useId();

    // Zoom in from the point that was clicked (offsetLeft/Top ignore the running transform)
    useLayoutEffect(() => {
        if (!origin) return;
        const dialog = dialogRef.current;
        dialog.style.transformOrigin = `${origin.x - dialog.offsetLeft}px ${origin.y - dialog.offsetTop}px`;
    }, [origin]);

    // Lock page scroll, move focus into the dialog and hand it back afterwards
    useEffect(() => {
        const previouslyFocused = document.activeElement;
        const { overflow, paddingRight } = document.body.style;
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

        document.body.style.overflow = "hidden";
        if (scrollbarWidth > 0) document.body.style.paddingRight = `${scrollbarWidth}px`;
        dialogRef.current.focus({ preventScroll: true });

        return () => {
            document.body.style.overflow = overflow;
            document.body.style.paddingRight = paddingRight;
            if (previouslyFocused instanceof HTMLElement) previouslyFocused.focus({ preventScroll: true });
        };
    }, []);

    // Escape closes the dialog, Tab stays inside it
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setClosing(true);
                return;
            }
            if (event.key !== "Tab") return;

            const dialog = dialogRef.current;
            const focusable = dialog.querySelectorAll(FOCUSABLE_SELECTOR);
            const first = focusable[0];
            const last = focusable[focusable.length - 1];
            const { activeElement } = document;
            const leavingEdge = event.shiftKey
                ? activeElement === first || activeElement === dialog
                : activeElement === last;

            if (leavingEdge || !dialog.contains(activeElement)) {
                event.preventDefault();
                (event.shiftKey ? last : first).focus();
            }
        };
        document.addEventListener("keydown", handleKeyDown);
        return () => document.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Unmount once the exit animation has played
    useEffect(() => {
        if (!closing) return;
        const timer = setTimeout(onClosed, MODAL_ANIMATION_MS);
        return () => clearTimeout(timer);
    }, [closing, onClosed]);

    return createPortal(
        <div className={`TeamModalRoot${closing ? " is-closing" : ""}`}>
            <div className="TeamModalMask" />
            <div
                className="TeamModalWrap"
                role="presentation"
                onMouseDown={(event) => { pressedOnBackdrop.current = event.target === event.currentTarget; }}
                onClick={(event) => {
                    if (pressedOnBackdrop.current && event.target === event.currentTarget) setClosing(true);
                }}
            >
                <div
                    className="TeamModal"
                    ref={dialogRef}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                    tabIndex={-1}
                >
                    <div className="TeamModalContent">
                        <button
                            type="button"
                            className="TeamModalClose"
                            aria-label="Close"
                            onClick={() => setClosing(true)}
                        >
                            <X size="1em" strokeWidth={1.5} />
                        </button>

                        <div className="flex flex-wrap">
                            <div className="w-full md:w-5/12">
                                <div style={{ padding: "10px" }}>
                                    <img src={member.image} alt="" style={{ width: "100%", borderRadius: 12 }} />
                                </div>
                            </div>
                            <div className="w-full md:w-7/12">
                                <div className="ModalInsideInfo">
                                    <h1 id={titleId}>{member.title}</h1>
                                    <p><strong>Position:</strong> {member.position}</p>
                                    <br />
                                    <p><strong>Education:</strong></p>
                                    <div>{member.educationDetails}</div>
                                </div>
                            </div>
                        </div>
                        <div style={{ padding: "16px 10px 8px" }}>
                            {member.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
};

const AboutUs = () => {
    const [scale, setScale] = useState(1);
    const [modal, setModal] = useState(null);
    const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true });

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setScale(Math.min(1 + scrollY / 3000, 1.08));
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const counterData = [
        { title: "Years of Experience", value: 30,  suffix: "+", icon: <Handshake size="1em" strokeWidth={1.5} /> },
        { title: "Happy Clients",        value: 500, suffix: "+", icon: <Users size="1em" strokeWidth={1.5} /> },
    ];

    const teamData = [
        {
            title: "Mahesh Chhajed",
            position: "Principal Partner",
            image: MaheshChhajed.src,
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
            image: HemChhajed.src,
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
            image: KrunalPatel.src,
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
            image: PreyashiTated.src,
            description: <>
                <p>Preyashi advises and represents clients on direct tax law matters. She combines her understanding of businesses with in-depth legal knowledge to curate innovative solutions. She has assisted on wide-ranging direct tax litigation issues including search, seizures, survey, and unexplained cash credits.</p>
            </>,
            educationDetails: <>
                <p>Chartered Accountant</p>
                <p>Bachelor of Commerce – Ahmedabad University</p>
            </>
        },
    ];

    const handleCardClick = (member, origin) => setModal({ member, origin });
    const handleModalClosed = useCallback(() => setModal(null), []);

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
                    <div className="CounterRow">
                        {counterData.map((item, index) => (
                            <div className="w-full md:w-1/2" key={index}>
                                <div className="CounterCardContainer">
                                    <div className="CounterCard">
                                        <span>{item.icon}</span>
                                        <h2>
                                            <Counter value={item.value} suffix={item.suffix} trigger={inView} />
                                        </h2>
                                        <p>{item.title}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ── Company info ── */}
                <div className="AboutUsInfoContainer">
                    <div className="AboutImageContainer">
                        <img src={justiciaBack.src} alt="" aria-hidden="true" />
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
                            <div className="flex flex-wrap">
                                {teamData.map((item, index) => (
                                    <div key={index} className="w-full md:w-1/2 lg:w-1/4">
                                        <motion.div
                                            className="TeamMemberCardContainer"
                                            role="button"
                                            tabIndex={0}
                                            aria-haspopup="dialog"
                                            aria-label={`${item.title}, ${item.position}`}
                                            onClick={(event) => handleCardClick(item, { x: event.clientX, y: event.clientY })}
                                            onKeyDown={(event) => {
                                                if (event.key === "Enter" || event.key === " ") {
                                                    event.preventDefault();
                                                    handleCardClick(item, null);
                                                }
                                            }}
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
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ── Member detail modal ── */}
                {modal && (
                    <TeamModal member={modal.member} origin={modal.origin} onClosed={handleModalClosed} />
                )}

            </div>
        </section>
    );
};

export default AboutUs;
