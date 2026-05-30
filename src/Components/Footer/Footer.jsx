import React from "react";
import "../../assets/Styles/Footer.css";
import { Row, Col, Input } from "antd";
import Navigationlinks from "../NavigationBar/NavigationLinksData";
import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { HiArrowRight } from "react-icons/hi";

const Footer = () => {
    return (
        <>
        {/* ── CTA Strip ── */}
        <div className="FooterCtaStrip">
            <div className="ContainerDefault">
                <div className="FooterCtaInner">
                    <div className="FooterCtaText">
                        <h2>Ready to Work With Us?</h2>
                        <p>Speak with our team about your tax, audit or advisory needs.</p>
                    </div>
                    <Link to="/contact-us" className="FooterCtaBtn">
                        Get in Touch <HiArrowRight />
                    </Link>
                </div>
            </div>
        </div>

        <section id="FooterContainer">
            <div className="ContainerDefault">
                <Row gutter={[40, 48]}>

                    {/* ── Brand + Newsletter column ── */}
                    <Col lg={10} md={24} xs={24}>
                        <div className="FooterBrandCol">
                            <div className="FooterLogo">
                                <img
                                    src="https://mschhajedandco.com/wp-content/uploads/2020/09/MS-Logo.png"
                                    alt="M.S. Chhajed & Co."
                                />
                            </div>
                            <p className="FooterTagline">
                                Trusted Chartered Accountants in Ahmedabad since 1988. Delivering
                                Audit, Tax &amp; Advisory services with integrity and precision.
                            </p>

                            <p className="FooterNewsletterLabel">Newsletter</p>
                            <div className="FooterNewsletterForm">
                                <Input placeholder="Enter your email address" />
                                <button className="FooterNewsletterSubmit">Subscribe</button>
                            </div>
                        </div>
                    </Col>

                    {/* ── Contact column ── */}
                    <Col lg={5} md={12} xs={24}>
                        <div className="FooterContactCol">
                            <p className="FooterColHeading">Contact</p>
                            <ul>
                                <li>
                                    <strong>Office</strong>
                                    Ahmedabad, Gujarat, India
                                </li>
                                <li>
                                    <strong>Phone</strong>
                                    +91 79 4890 2330
                                </li>
                                <li>
                                    <strong>Email</strong>
                                    info@mschhajedandco.com
                                </li>
                            </ul>
                        </div>
                    </Col>

                    {/* ── Navigation links ── */}
                    <Col lg={4} md={12} xs={24}>
                        <div className="CompanyContainer">
                            <p className="FooterColHeading">Company</p>
                            <ul>
                                {Navigationlinks.map((item, index) => (
                                    <li key={index}>
                                        <Link to={item.path || "#"}>{item.link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Col>

                    {/* ── Socials ── */}
                    <Col lg={5} md={12} xs={24}>
                        <div className="SocialContainer">
                            <p className="FooterColHeading">Follow Us</p>
                            <ul>
                                <li className="social-facebook">
                                    <FaFacebook /> Facebook
                                </li>
                                <li className="social-linkedin">
                                    <FaLinkedin /> LinkedIn
                                </li>
                                <li className="social-youtube">
                                    <FaYoutube /> YouTube
                                </li>
                                <li className="social-instagram">
                                    <AiFillInstagram /> Instagram
                                </li>
                            </ul>
                        </div>
                    </Col>

                </Row>
            </div>

            {/* Copyright bar */}
            <div className="CopyWriteTextContainer">
                <p>© 2025 M.S. Chhajed &amp; Co. All rights reserved.</p>
                <p>
                    Built by&nbsp;
                    <Link to="https://www.outleadsolutions.com/" target="_blank">
                        OutLead Solutions
                    </Link>
                </p>
            </div>
        </section>
        </>
    );
};

export default Footer;
