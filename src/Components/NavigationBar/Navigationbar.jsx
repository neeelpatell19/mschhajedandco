import React, { useState, useEffect, useRef } from "react";
import { Drawer, Button, Menu, Dropdown, Collapse } from "antd";
import { DownOutlined } from "@ant-design/icons";
import Navigationlinks from "./NavigationLinksData";
import "../../assets/Styles/NavigationBar.css";
import { Link, useLocation } from "react-router-dom";

const { Panel } = Collapse;

// Pages whose first section has a dark (navy) background — transparent nav is correct there
const DARK_HERO_PATHS = ["/", "/about-us", "/careers", "/insights-newsroom"];

const NavigationBar = () => {
    const [scrollingDown, setScrollingDown] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const lastScrollY = useRef(0);
    const [drawerVisible, setDrawerVisible] = useState(false);
    const location = useLocation();

    // Sync nav state on every route change
    useEffect(() => {
        const isDarkHeroPage = DARK_HERO_PATHS.includes(location.pathname);
        const currentY = window.scrollY;

        if (!isDarkHeroPage) {
            // Detail pages (practices, blog article) — start white immediately
            setScrolled(true);
        } else {
            setScrolled(currentY > 60);
        }

        setScrollingDown(false);
        lastScrollY.current = currentY;
    }, [location.pathname]);

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

    const toggleDrawer = () => setDrawerVisible(v => !v);
    const closeDrawer  = () => setDrawerVisible(false);

    const renderDropdownMenu = (subLinks) => (
        <Menu>
            {subLinks.map((subLink, index) => (
                <Link key={index} to={`/practices/${subLink.path}`}>
                    <Menu.Item key={index}>{subLink.link}</Menu.Item>
                </Link>
            ))}
        </Menu>
    );

    const renderDesktopLinks = () =>
        Navigationlinks.map((navItem, index) => {
            if (navItem.subLinks) {
                return (
                    <Dropdown
                        key={index}
                        overlay={renderDropdownMenu(navItem.subLinks)}
                        trigger={["hover"]}
                    >
                        <Button className="navButton">
                            {navItem.link} <DownOutlined style={{ fontSize: 9, marginLeft: 4 }} />
                        </Button>
                    </Dropdown>
                );
            }
            return (
                <Button className="navButton" key={index}>
                    <Link to={navItem.path}>{navItem.link}</Link>
                </Button>
            );
        });

    const renderMobileLinks = () =>
        Navigationlinks.map((navItem, index) => (
            <Collapse accordion key={index}>
                <Panel
                    header={
                        navItem.subLinks ? (
                            <span className="mobileNavHeader">{navItem.link}</span>
                        ) : (
                            <Link to={navItem.path} className="mobileNavHeaderLink" onClick={closeDrawer}>
                                {navItem.link}
                            </Link>
                        )
                    }
                    key={index}
                >
                    {navItem.subLinks &&
                        navItem.subLinks.map((subLink, idx) => (
                            <Button key={idx} type="link" onClick={closeDrawer}>
                                <Link to={`/practices/${subLink.path}`}>{subLink.link}</Link>
                            </Button>
                        ))
                    }
                </Panel>
            </Collapse>
        ));

    const navClass = [
        scrolled ? "scrolled" : "",
        scrollingDown ? "hide" : "show",
    ].join(" ");

    return (
        <section id="NavigationBarContainer" className={navClass}>
            <div className="NavigationBarMainContainer">

                {/* Logo */}
                <div className="LogoContainer">
                    <Link to="/">
                        <img
                            src="https://mschhajedandco.com/wp-content/uploads/2020/09/MS-Logo.png"
                            alt="M.S. Chhajed & Co."
                        />
                    </Link>
                </div>

                {/* Desktop Nav */}
                <div className="NavigationLinksContainer">
                    {renderDesktopLinks()}
                    <button className="NavCTABtn">Get in Touch</button>
                </div>

                {/* Mobile Hamburger */}
                <div>
                    <Button className="menuButton" onClick={toggleDrawer}>
                        Menu
                    </Button>

                    <Drawer
                        title="M.S. Chhajed & Co."
                        placement="right"
                        onClose={closeDrawer}
                        open={drawerVisible}
                        width={300}
                    >
                        {renderMobileLinks()}
                    </Drawer>
                </div>

            </div>
        </section>
    );
};

export default NavigationBar;
