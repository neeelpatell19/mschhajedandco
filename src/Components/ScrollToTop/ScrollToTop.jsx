"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import "./ScrollToTop.css";

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show or hide the button based on scroll position
        const handleScroll = () => {
            if (window.scrollY > 300) { // Show button after scrolling 300px
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // Function to scroll to the top
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scroll to the top
        });
    };

    return (
        isVisible && (
            <button
                type="button"
                aria-label="Scroll to top"
                className="scroll-to-top-btn"
                onClick={scrollToTop}
            >
                <ArrowUp size="1em" strokeWidth={1.75} />
            </button>
        )
    );
};

export default ScrollToTopButton;
