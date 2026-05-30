import React, { useEffect, useState } from "react";
import "../../assets/Styles/HomeHero.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

export const Counter = ({ value, suffix, trigger }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!trigger) return;
        const delay    = 400;
        const duration = 2400;
        const startAt  = performance.now() + delay;
        const animate  = (now) => {
            if (now < startAt) { requestAnimationFrame(animate); return; }
            const progress = Math.min((now - startAt) / duration, 1);
            const eased    = 1 - Math.pow(1 - progress, 3);
            setCount(Math.round(eased * value));
            if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        return () => setCount(0);
    }, [value, trigger]);

    return <>{count}{suffix}</>;
};

const HomeHero = () => {
    const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
    const ease = [0.22, 1, 0.36, 1];

    const stats = [
        { value: 30,  suffix: "+", label: "Years of Experience" },
        { value: 500, suffix: "+", label: "Happy Clients"       },
    ];

    return (
        <section id="HomeHeroContainer">
            {/* Background image — slow Ken Burns */}
            <img
                className="HeroBgImage"
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2940&auto=format&fit=crop"
                alt=""
                aria-hidden="true"
            />
            <div className="HeroOverlay" aria-hidden="true" />

            {/* Content */}
            <div className="HomeHeroMainContainer ContainerDefault" ref={ref}>

                <motion.div
                    className="HeroLabel"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease, delay: 0.1 }}
                >
                    <span>M.S. Chhajed &amp; Co. — Chartered Accountants</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 36 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease, delay: 0.25 }}
                >
                    Top CA Firms in<br />Ahmedabad, Gujarat
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease, delay: 0.40 }}
                >
                    Trusted Since 1988
                </motion.h2>

                <motion.div
                    className="HeroTagline"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease, delay: 0.54 }}
                >
                    <p>
                        Delivering Audit, Tax &amp; Advisory services with precision,
                        integrity, and three decades of expertise across India and beyond.
                    </p>
                </motion.div>

                <motion.div
                    className="HeroCtaRow"
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease, delay: 0.66 }}
                >
                    <Link to="/practices/assurances">
                        <button className="HeroCtaPrimary">
                            Explore Our Services <FaArrowRightLong />
                        </button>
                    </Link>
                    <Link to="/about-us">
                        <button className="HeroCtaSecondary">About the Firm</button>
                    </Link>
                </motion.div>

                <motion.div
                    className="HeroStatsRow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.85, ease, delay: 0.82 }}
                >
                    {stats.map((item, i) => (
                        <div className="HeroStatItem" key={i}>
                            <h2>
                                <Counter value={item.value} suffix={item.suffix} trigger={inView} />
                            </h2>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </motion.div>

            </div>

            {/* Scroll indicator */}
            <div className="HeroScrollIndicator" aria-hidden="true">
                <span>Scroll</span>
                <div className="scroll-arrow" />
            </div>
        </section>
    );
};

export default HomeHero;
