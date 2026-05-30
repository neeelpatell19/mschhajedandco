import React from "react";
import "./ServicesTicker.css";

const services = [
    "Audit & Assurance",
    "Direct Taxes",
    "GST Advisory",
    "Transfer Pricing",
    "M&A Advisory",
    "Start-Up Services",
    "KPO Services",
    "Commercial Law",
    "Forensic Audit",
    "International Tax",
    "Due Diligence",
    "Valuation",
];

const ServicesTicker = () => {
    const doubled = [...services, ...services];
    return (
        <div id="ServicesTickerContainer" aria-hidden="true">
            <div className="ticker-track">
                {doubled.map((s, i) => (
                    <div className="ticker-item" key={i}>
                        <span>{s}</span>
                        <span className="ticker-sep" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ServicesTicker;
