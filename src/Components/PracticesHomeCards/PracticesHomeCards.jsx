"use client";

import React from "react";
import "../../assets/Styles/PracticesHomeCards.css";
import Link from "next/link";
import { motion } from "framer-motion";
import {
    ArrowRight, Globe, Rocket, ShieldCheck, TrendingUp,
    ReceiptText, ReceiptIndianRupee, ArrowLeftRight,
    Database, Scale,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1];

const PracticeCardData = [
    { icon: <Globe size="1em" />,          cardTitle: "India Strategy — Doing Business in India", cardContent: "Advisory and entity set-up for companies entering India",          practiceName: "india-strategy-doing-business-india" },
    { icon: <Rocket size="1em" />,         cardTitle: "Start-Up Services",                         cardContent: "Incorporation, compliance and advisory for new ventures",          practiceName: "start-up-services"                   },
    { icon: <ShieldCheck size="1em" />,    cardTitle: "Assurances",                                cardContent: "Statutory audit, tax audit, internal audit and risk reviews",     practiceName: "assurances"                          },
    { icon: <TrendingUp size="1em" />,     cardTitle: "Transaction Advisory",                      cardContent: "Financial due diligence, valuation and M&A advisory",             practiceName: "transaction-advisory"                },
    { icon: <ReceiptText size="1em" />,     cardTitle: "Direct Taxes",                              cardContent: "Tax planning, structuring and litigation for corporates",          practiceName: "direct-taxes"                        },
    { icon: <ReceiptIndianRupee size="1em" />,    cardTitle: "Goods and Service Tax",                     cardContent: "GST registration, advisory, compliance and representation",        practiceName: "goods-and-services-tax"              },
    { icon: <ArrowLeftRight size="1em" />, cardTitle: "Transfer Pricing",                          cardContent: "Benchmarking, documentation, APA and dispute resolution",         practiceName: "transfer-pricing"                    },
    { icon: <Database size="1em" />,       cardTitle: "Knowledge Process Outsourcing",             cardContent: "Scalable accounting, payroll and compliance outsourcing",          practiceName: "knowledge-process-outsourcing"       },
    { icon: <Scale size="1em" />,          cardTitle: "Commercial and Legal Assistance",           cardContent: "Agreement drafting, governance and business structuring",          practiceName: "commercial-and-legal-assistance"     },
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
                        <Link href={`/practices/${item.practiceName}`} className="PracticeRow">
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
                                <ArrowRight size="1em" className="PracticeRowArrow" />
                            </div>
                        </Link>
                    </motion.div>
                ))}
            </div>

        </div>
    </section>
);

export default PracticesHomeCards;
