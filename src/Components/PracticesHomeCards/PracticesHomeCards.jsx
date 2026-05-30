import React from "react";
import "../../assets/Styles/PracticesHomeCards.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiArrowRight } from "react-icons/hi";
import {
    TbWorld, TbRocket, TbShieldCheck, TbTrendingUp,
    TbReceiptTax, TbFileInvoice, TbArrowsExchange,
    TbDatabase, TbScale,
} from "react-icons/tb";

const ease = [0.22, 1, 0.36, 1];

const PracticeCardData = [
    { icon: <TbWorld />,          cardTitle: "India Strategy — Doing Business in India", cardContent: "Advisory and entity set-up for companies entering India",          practiceName: "india-strategy-doing-business-india" },
    { icon: <TbRocket />,         cardTitle: "Start-Up Services",                         cardContent: "Incorporation, compliance and advisory for new ventures",          practiceName: "start-up-services"                   },
    { icon: <TbShieldCheck />,    cardTitle: "Assurances",                                cardContent: "Statutory audit, tax audit, internal audit and risk reviews",     practiceName: "assurances"                          },
    { icon: <TbTrendingUp />,     cardTitle: "Transaction Advisory",                      cardContent: "Financial due diligence, valuation and M&A advisory",             practiceName: "transaction-advisory"                },
    { icon: <TbReceiptTax />,     cardTitle: "Direct Taxes",                              cardContent: "Tax planning, structuring and litigation for corporates",          practiceName: "direct-taxes"                        },
    { icon: <TbFileInvoice />,    cardTitle: "Goods and Service Tax",                     cardContent: "GST registration, advisory, compliance and representation",        practiceName: "goods-and-services-tax"              },
    { icon: <TbArrowsExchange />, cardTitle: "Transfer Pricing",                          cardContent: "Benchmarking, documentation, APA and dispute resolution",         practiceName: "transfer-pricing"                    },
    { icon: <TbDatabase />,       cardTitle: "Knowledge Process Outsourcing",             cardContent: "Scalable accounting, payroll and compliance outsourcing",          practiceName: "knowledge-process-outsourcing"       },
    { icon: <TbScale />,          cardTitle: "Commercial and Legal Assistance",           cardContent: "Agreement drafting, governance and business structuring",          practiceName: "commercial-and-legal-assistance"     },
];

const PracticesHomeCards = () => (
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
                    <div className="section-label"><span>What We Do</span></div>
                    <h1>Our Practices</h1>
                </div>
                <span className="practice-count">{PracticeCardData.length} Practice Areas</span>
            </motion.div>

            {/* Practice list */}
            <div className="PracticesList">
                {PracticeCardData.map((item, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.50, ease, delay: index * 0.05 }}
                    >
                        <Link to={`/practices/${item.practiceName}`} className="PracticeRow">
                            {/* Icon box */}
                            <div className="PracticeRowIconBox">
                                {item.icon}
                            </div>

                            {/* Content */}
                            <div className="PracticeRowContent">
                                <p className="PracticeRowTitle">{item.cardTitle}</p>
                                <p className="PracticeRowDesc">{item.cardContent}</p>
                            </div>

                            {/* Number + arrow */}
                            <div className="PracticeRowRight">
                                <span className="PracticeRowNum">
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <HiArrowRight className="PracticeRowArrow" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
);

export default PracticesHomeCards;
