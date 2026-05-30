import { motion } from "framer-motion";

const fadeUp = {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
};

const fadeLeft = {
    hidden:  { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
};

const fadeRight = {
    hidden:  { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
};

const scaleIn = {
    hidden:  { opacity: 0, scale: 0.94 },
    visible: { opacity: 1, scale: 1 },
};

const variants = { fadeUp, fadeLeft, fadeRight, scaleIn };

const defaultTransition = {
    duration: 0.72,
    ease:     [0.22, 1, 0.36, 1],
};

export const Reveal = ({
    children,
    variant  = "fadeUp",
    delay    = 0,
    duration,
    className = "",
    style     = {},
    as        = "div",
}) => {
    const MotionTag = motion[as] || motion.div;
    return (
        <MotionTag
            className={className}
            style={style}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={variants[variant]}
            transition={{ ...defaultTransition, duration: duration ?? defaultTransition.duration, delay }}
        >
            {children}
        </MotionTag>
    );
};

export default Reveal;
