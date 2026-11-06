import "../../assets/Styles/Footer.css";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Facebook, Linkedin, Youtube, Instagram } from "@/Components/ui/BrandIcons";
import Navigationlinks from "../NavigationBar/NavigationLinksData";

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
                    <Link href="/contact-us" className="FooterCtaBtn">
                        Get in Touch <ArrowRight size="1em" />
                    </Link>
                </div>
            </div>
        </div>

        <section id="FooterContainer">
            <div className="ContainerDefault">
                <div className="flex flex-wrap -mx-5 gap-y-12">

                    {/* ── Brand + Newsletter column ── */}
                    <div className="w-full shrink-0 px-5 lg:w-5/12">
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
                                <input
                                    type="email"
                                    className="FooterNewsletterInput"
                                    placeholder="Enter your email address"
                                    aria-label="Email address"
                                />
                                <button className="FooterNewsletterSubmit">Subscribe</button>
                            </div>
                        </div>
                    </div>

                    {/* ── Contact column ── */}
                    <div className="w-full shrink-0 px-5 md:w-1/2 lg:w-[calc(5/24*100%)]">
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
                    </div>

                    {/* ── Navigation links ── */}
                    <div className="w-full shrink-0 px-5 md:w-1/2 lg:w-1/6">
                        <div className="CompanyContainer">
                            <p className="FooterColHeading">Company</p>
                            <ul>
                                {Navigationlinks.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.path || "#"}>{item.link}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* ── Socials ── */}
                    <div className="w-full shrink-0 px-5 md:w-1/2 lg:w-[calc(5/24*100%)]">
                        <div className="SocialContainer">
                            <p className="FooterColHeading">Follow Us</p>
                            <ul>
                                <li className="social-facebook">
                                    <Facebook size="1em" /> Facebook
                                </li>
                                <li className="social-linkedin">
                                    <Linkedin size="1em" /> LinkedIn
                                </li>
                                <li className="social-youtube">
                                    <Youtube size="1em" /> YouTube
                                </li>
                                <li className="social-instagram">
                                    <Instagram size="1em" /> Instagram
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            {/* Copyright bar */}
            <div className="CopyWriteTextContainer">
                <p>© 2025 M.S. Chhajed &amp; Co. All rights reserved.</p>
                <p>
                    Built by&nbsp;
                    <a href="https://www.outleadsolutions.com/" target="_blank" rel="noopener noreferrer">
                        OutLead Solutions
                    </a>
                </p>
            </div>
        </section>
        </>
    );
};

export default Footer;
