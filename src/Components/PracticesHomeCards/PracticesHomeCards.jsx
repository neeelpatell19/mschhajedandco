import React from "react";
import "../../assets/Styles/PracticesHomeCards.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";

const ease = [0.22, 1, 0.36, 1];

const PracticesHomeCards = () => {

    const PracticeCardData = [
        { cardTitle: "India Strategy — Doing Business in India", cardContent: "India business advisory and entity set-up services",        practiceName: "india-strategy-doing-business-india" },
        { cardTitle: "Start-Up Services",                         cardContent: "Incorporation, compliance and business advisory for startups", practiceName: "start-up-services" },
        { cardTitle: "Assurances",                                cardContent: "Statutory audit, tax audit, internal audit and risk assessments", practiceName: "assurances" },
        { cardTitle: "Transaction Advisory",                      cardContent: "Financial due diligence, business valuation and model-building", practiceName: "transaction-advisory" },
        { cardTitle: "Direct Taxes",                              cardContent: "Tax planning, optimisation and filing for corporates",         practiceName: "direct-taxes" },
        { cardTitle: "Goods and Service Tax",                     cardContent: "GST planning, advisory and compliance services for corporates", practiceName: "goods-and-services-tax" },
        { cardTitle: "Transfer Pricing",                          cardContent: "Benchmarking studies, documentation, planning and APA advisory", practiceName: "transfer-pricing" },
        { cardTitle: "Knowledge Process Outsourcing",             cardContent: "Financial accounting and tax compliances for corporates",      practiceName: "knowledge-process-outsourcing" },
        { cardTitle: "Commercial and Legal Assistance",           cardContent: "Business model building, agreement drafting and negotiations",  practiceName: "commercial-and-legal-assistance" },
    ];

    return (
        <section id="PracticesHomeCardsContainer">
            <div className="PracticesHomeMainContainer ContainerDefault">

                {/* Section header */}
                <motion.div
                    className="PracticesHeaderRow"
                    initial={{ opacity: 0, y: 28 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.65, ease }}
                >
                    <div className="practices-label">
                        <div className="section-label">
                            <span>What We Do</span>
                        </div>
                        <h1>Our Practices</h1>
                    </div>
                    <span className="practice-count">{PracticeCardData.length} Practice Areas</span>
                </motion.div>

                {/* Practice list */}
                <div className="PracticesList">
                    {PracticeCardData.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.1 }}
                            transition={{ duration: 0.55, ease, delay: index * 0.06 }}
                        >
                            <Link to={`/practices/${item.practiceName}`} className="PracticeRow">
                                <span className="PracticeRowNum">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <div className="PracticeRowContent">
                                    <p className="PracticeRowTitle">{item.cardTitle}</p>
                                    <p className="PracticeRowDesc">{item.cardContent}</p>
                                </div>
                                <HiArrowRight className="PracticeRowArrow" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default PracticesHomeCards;
