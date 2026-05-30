import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./BlogSeparate.css";
import BlogData from "../InSights/BlogData";

const BlogsContent = {
    "relaxation-in-due-dates": {
        title: "Relaxation in Due Dates",
        image: "https://cdn.prod.website-files.com/672087ec85cbe61882560dcd/6741e41f1d53c266ff81d80d_Mask%20group.jpg",
        tag: "Insights",
        date: "October 19, 2020",
        author: "Karan Patel",
        body: (
            <>
                <p>Amidst the global pandemic and the phased reopening of the economy, the Central Board of Direct Taxes (CBDT) has extended the due dates for various direct tax compliances. These relaxations were introduced to ease the compliance burden on taxpayers during unprecedented times.</p>
                <p>The extensions cover a wide range of compliances — from filing income tax returns and tax audit reports to making investments for claiming deductions under Chapter VI-A. Taxpayers should take note of the revised timelines and plan accordingly.</p>
                <p>It is advisable to consult your tax advisor to understand how these relaxations apply to your specific situation and to ensure that all obligations are met within the extended deadlines.</p>
            </>
        ),
    },
    "gst-return": {
        title: "GST Return",
        image: "/Images/GST.jpg",
        tag: "Insights",
        date: "October 19, 2020",
        author: "Karan Patel",
        body: (
            <>
                <p>The document is intended for private circulation and knowledge-sharing purposes only. The material and information contained herein are intended to provide general information on a particular subject or subjects and do not constitute an exhaustive treatment of such subject(s).</p>
                <p>The information is not intended to be relied upon as the sole basis for any decision that may affect you or your business. Before acting on any information, you should consider whether it is suitable for your particular circumstances and, if necessary, seek professional advice.</p>
                <p>GST return filings are an integral part of the compliance framework under the Goods and Services Tax regime. Regular and accurate filing ensures that businesses remain compliant and avoid penalties under the applicable provisions.</p>
            </>
        ),
    },
    "relief-from-gst-brouhaha-solar-industry": {
        title: "Relief from GST brouhaha — Solar Industry",
        image: "https://cdn.prod.website-files.com/672087ec85cbe61882560dcd/6741e489ce5fde257ea74bcb_Mask%20group%20(3).jpg",
        tag: "Insights",
        date: "September 17, 2020",
        author: "Karan Patel",
        body: (
            <>
                <p>Under the leadership of our Hon'ble Prime Minister, India is undertaking the largest renewable capacity expansion program in the world. The Ministry of New and Renewable Energy (MNRE) has taken several steps to achieve the clean energy goals of the current government by implementing various schemes, such as the Solar Park Scheme, Solar Rooftop Scheme, and Solar PV power plants on canal banks and canal tops.</p>
                <p>The solar industry had long been grappling with the uncertainty around GST classification of solar power generating systems. The dispute primarily centred around whether such systems should be treated as goods, services, or a works contract — each attracting a different rate of tax.</p>
                <p>The recent clarification from the GST Council has brought much-needed relief to the solar sector, providing clarity on the applicable rates and the treatment of various components within a solar EPC contract.</p>
            </>
        ),
    },
    "tax-collected-at-source-on-sale-of-goods": {
        title: "Tax Collected at Source on Sale of Goods",
        image: "https://cdn.prod.website-files.com/672087ec85cbe61882560dcd/6741e489ce5fde257ea74bcb_Mask%20group%20(3).jpg",
        tag: "Newsroom",
        date: "October 19, 2020",
        author: "Karan Patel",
        body: (
            <>
                <p>Vide the Finance Act, 2020, a new clause (1H) has been inserted into Section 206C of the Income Tax Act, 1961 ("the Act"), to expand the scope of Tax Collection at Source ("TCS") provisions. A seller of goods is now required to collect tax at source at the rate of 0.1% from a buyer of goods upon receipt of consideration for the sale of goods.</p>
                <p>Prior to this insertion, TCS provisions were applicable only to the sale of selected goods, namely alcoholic liquor for human consumption, scrap, tendu leaves, timber obtained from forests, and lease contracts for parking lots and toll plazas.</p>
                <p>The new provision applies to every seller whose total sales, gross receipts, or turnover from the business carried on by him exceeds ₹10 crore during the financial year immediately preceding the year in which the sale of goods is carried out. Businesses above this threshold must now assess their compliance obligations under the expanded TCS framework.</p>
            </>
        ),
    },
    "doing-business-in-india": {
        title: "Doing Business in India",
        image: "https://cdn.prod.website-files.com/672087ec85cbe61882560dcd/6741e489ce5fde257ea74bcb_Mask%20group%20(3).jpg",
        tag: "Newsroom",
        date: "September 17, 2020",
        author: "Karan Patel",
        body: (
            <>
                <p>This guide has been prepared by M.S. Chhajed &amp; Co. with the intent of providing stakeholders with an overview of India's demographic profile, key sectors, insights into the regulatory framework, forms of business enterprises, and relevant tax regimes in a concise manner. The information presented in this guide has been validated up to 31st March 2020.</p>
                <p>India offers a large and growing consumer market, a young and skilled workforce, and an improving regulatory environment. The government's "Ease of Doing Business" reforms have significantly reduced the time and cost involved in starting and operating a business in India.</p>
                <p>Foreign investors and multinational enterprises considering India as a destination should carefully evaluate the applicable regulatory requirements, including company incorporation, FDI norms, FEMA compliance, and the relevant direct and indirect tax obligations.</p>
            </>
        ),
    },
    "equalisation-levy": {
        title: "Equalisation Levy",
        image: "https://cdn.prod.website-files.com/672087ec85cbe61882560dcd/6741e489ce5fde257ea74bcb_Mask%20group%20(3).jpg",
        tag: "Newsroom",
        date: "September 17, 2020",
        author: "Karan Patel",
        body: (
            <>
                <p>In today's digital age, business operations are largely agnostic to geographical boundaries. New and innovative business models present tax authorities with numerous challenges in interpreting and applying taxing provisions to such transactions. The conventional approach to taxation, based on the physical presence of a business in a particular jurisdiction, now seems outdated.</p>
                <p>The Equalisation Levy was introduced to address the taxation of digital transactions and to ensure that foreign digital service providers who earn significant revenue from Indian users contribute to the Indian tax base, even in the absence of a physical establishment in India.</p>
                <p>Businesses engaged in digital advertising, e-commerce, and online platforms should carefully assess their exposure to the Equalisation Levy and ensure timely compliance with the deposit and filing requirements.</p>
            </>
        ),
    },
};

const BlogSeparate = () => {
    const { Blogsname } = useParams();
    const post = BlogsContent[Blogsname];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [Blogsname]);

    if (!post) {
        return (
            <section id="BlogSeparateContentContainer">
                <div className="ContainerDefault" style={{ paddingTop: 80 }}>
                    <p>Sorry, no content found for this article.</p>
                </div>
            </section>
        );
    }

    return (
        <section id="BlogSeparateContentContainer">

            {/* ── Breadcrumb ── */}
            <div className="BlogBreadcrumb">
                <nav>
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/insights-newsroom">Insights &amp; Newsroom</Link>
                    <span>/</span>
                    <strong>{post.title}</strong>
                </nav>
            </div>

            {/* ── Article ── */}
            <div className="ContainerDefault">
                <div className="BlogArticleWrapper">

                    <div className="BlogArticleHeader">
                        <span className="BlogArticleTagPill">{post.tag}</span>
                        <h1>{post.title}</h1>
                        <div className="BlogArticleMeta">
                            <span>{post.date}</span>
                            <span>{post.author}</span>
                        </div>
                    </div>

                    {post.image && (
                        <div className="BlogArticleImage">
                            <img src={post.image} alt={post.title} />
                        </div>
                    )}

                    <div className="BlogArticleBody">
                        {post.body}
                    </div>

                </div>
            </div>

        </section>
    );
};

export default BlogSeparate;
