"use client";

import { useState, useEffect, useRef, useId } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import Navigationlinks from "./NavigationLinksData";
import "../../assets/Styles/NavigationBar.css";

// Pages whose first section has a dark (navy) background — transparent nav is correct there
const DARK_HERO_PATHS = ["/", "/about-us", "/careers", "/insights-newsroom"];

const FOCUSABLE_SELECTOR = "a[href], button:not([disabled])";

const NavigationBar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openAccordion, setOpenAccordion] = useState(null);
    const menuButtonRef = useRef(null);
    const drawerPanelRef = useRef(null);
    const pathname = usePathname();
    const drawerId = useId();
    const drawerTitleId = `${drawerId}-title`;

    // Sync nav state on every route change
    /* eslint-disable react-hooks/set-state-in-effect -- re-reads window.scrollY (client only) whenever the route changes */
    useEffect(() => {
        const isDarkHeroPage =
            DARK_HERO_PATHS.includes(pathname) ||
            pathname.startsWith("/practices/");
        const currentY = window.scrollY;

        if (!isDarkHeroPage) {
            // Detail pages (blog article, etc.) — start white immediately
            setScrolled(true);
        } else {
            setScrolled(currentY > 60);
        }

        setScrollingDown(false);
        lastScrollY.current = currentY;
    }, [pathname]);
    /* eslint-enable react-hooks/set-state-in-effect */

    // Scroll listener
    useEffect(() => {
        const handleScroll = () => {
            const current = window.scrollY;

            setScrolled(current > 60);

            if (current > 120) {
                setScrollingDown(current > lastScrollY.current);
            } else {
                setScrollingDown(false);
            }

            lastScrollY.current = current;
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Mobile drawer: lock page scroll, close on Escape, move focus in and hand it back on close
    useEffect(() => {
        if (!drawerVisible) return undefined;

        const { body, documentElement } = document;
        const previousOverflow = body.style.overflow;
        const previousPaddingRight = body.style.paddingRight;
        const scrollbarWidth = window.innerWidth - documentElement.clientWidth;
        const menuButton = menuButtonRef.current;

        body.style.overflow = "hidden";
        if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
        drawerPanelRef.current?.focus();

        const handleKeyDown = (event) => {
            if (event.key === "Escape") setDrawerVisible(false);
        };
        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            body.style.overflow = previousOverflow;
            body.style.paddingRight = previousPaddingRight;
            menuButton?.focus();
        };
    }, [drawerVisible]);

    const toggleDrawer = () => setDrawerVisible(v => !v);
    const closeDrawer  = () => setDrawerVisible(false);

    // Keep Tab / Shift+Tab inside the open drawer
    const handleDrawerKeyDown = (event) => {
        if (event.key !== "Tab") return;

        const panel = drawerPanelRef.current;
        const focusable = Array.from(panel.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
            (element) => !element.closest("[inert]")
        );
        if (focusable.length === 0) return;

        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (event.shiftKey && (document.activeElement === first || document.activeElement === panel)) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    };

    // Dropdown opens on hover and keyboard focus, closes on leave / focus leaving / Escape
    const handleDropdownFocus = (event, index) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(index);
    };

    const handleDropdownBlur = (event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpenDropdown(null);
    };

    const handleDropdownKeyDown = (event) => {
        if (event.key !== "Escape") return;
        setOpenDropdown(null);
        event.currentTarget.querySelector("button")?.focus();
    };

    const renderDesktopLinks = () =>
        Navigationlinks.map((navItem, index) => {
            if (navItem.subLinks) {
                const isOpen = openDropdown === index;
                const menuId = `${drawerId}-menu-${index}`;

                return (
                    <div
                        key={index}
                        className="navDropdown"
                        onMouseEnter={() => setOpenDropdown(index)}
                        onMouseLeave={() => setOpenDropdown(null)}
                        onFocus={(event) => handleDropdownFocus(event, index)}
                        onBlur={handleDropdownBlur}
                        onKeyDown={handleDropdownKeyDown}
                    >
                        <button
                            type="button"
                            className="navButton"
                            aria-expanded={isOpen}
                            aria-controls={menuId}
                        >
                            {navItem.link}
                            <ChevronDown className="navChevron" size="1em" strokeWidth={1.5} />
                        </button>
                        <div className={`navDropdownPanel${isOpen ? " open" : ""}`}>
                            <ul id={menuId} className="navDropdownMenu">
                                {navItem.subLinks.map((subLink, subIndex) => (
                                    <li key={subIndex}>
                                        <Link
                                            href={`/practices/${subLink.path}`}
                                            className="navDropdownItem"
                                            onClick={() => setOpenDropdown(null)}
                                        >
                                            {subLink.link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                );
            }
            return (
                <Link className="navButton" key={index} href={navItem.path}>
                    {navItem.link}
                </Link>
            );
        });

    const renderMobileLinks = () =>
        Navigationlinks.map((navItem, index) => {
            if (!navItem.subLinks) {
                return (
                    <div className="mobileNavItem" key={index}>
                        <Link href={navItem.path} className="mobileNavHeaderLink" onClick={closeDrawer}>
                            {navItem.link}
                        </Link>
                    </div>
                );
            }

            const isOpen = openAccordion === index;
            const panelId = `${drawerId}-panel-${index}`;

            return (
                <div className="mobileNavItem" key={index}>
                    <button
                        type="button"
                        className="mobileNavHeader"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenAccordion(isOpen ? null : index)}
                    >
                        <span className="mobileNavArrow">
                            <ChevronRight size="1.7em" strokeWidth={1.5} />
                        </span>
                        <span>{navItem.link}</span>
                    </button>
                    <div id={panelId} className={`mobileNavPanel${isOpen ? " open" : ""}`} inert={!isOpen}>
                        <div className="mobileNavPanelInner">
                            <div className="mobileNavPanelContent">
                                {navItem.subLinks.map((subLink, subIndex) => (
                                    <Link
                                        key={subIndex}
                                        href={`/practices/${subLink.path}`}
                                        className="mobileNavSubLink"
                                        onClick={closeDrawer}
                                    >
                                        {subLink.link}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });

    const navClass = [
        scrolled ? "scrolled" : "",
        scrollingDown ? "hide" : "show",
    ].join(" ");

    return (
        <>
            <section id="NavigationBarContainer" className={navClass}>
                <div className="NavigationBarMainContainer">

                    {/* Logo */}
                    <div className="LogoContainer">
                        <Link href="/">
                            <img
                                src="https://mschhajedandco.com/wp-content/uploads/2020/09/MS-Logo.png"
                                alt="M.S. Chhajed & Co."
                            />
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="NavigationLinksContainer" aria-label="Primary">
                        {renderDesktopLinks()}
                        <button className="NavCTABtn">Get in Touch</button>
                    </nav>

                    {/* Mobile Hamburger */}
                    <div>
                        <button
                            ref={menuButtonRef}
                            type="button"
                            className="menuButton"
                            aria-haspopup="dialog"
                            aria-expanded={drawerVisible}
                            aria-controls={drawerId}
                            onClick={toggleDrawer}
                        >
                            Menu
                        </button>
                    </div>

                </div>
            </section>

            {/* Mobile drawer — kept outside the fixed nav so its backdrop-filter cannot become the containing block */}
            <div className={`mobileDrawer${drawerVisible ? " open" : ""}`}>
                <div className="mobileDrawerMask" onClick={closeDrawer} />
                <div
                    ref={drawerPanelRef}
                    id={drawerId}
                    className="mobileDrawerPanel"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={drawerTitleId}
                    tabIndex={-1}
                    onKeyDown={handleDrawerKeyDown}
                >
                    <div className="mobileDrawerHeader">
                        <button
                            type="button"
                            className="mobileDrawerClose"
                            aria-label="Close"
                            onClick={closeDrawer}
                        >
                            <X size="1em" strokeWidth={1.5} />
                        </button>
                        <div id={drawerTitleId} className="mobileDrawerTitle">
                            M.S. Chhajed &amp; Co.
                        </div>
                    </div>
                    <div className="mobileDrawerBody">
                        <nav aria-label="Mobile">{renderMobileLinks()}</nav>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavigationBar;
