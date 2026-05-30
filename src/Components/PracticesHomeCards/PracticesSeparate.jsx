import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./PracticeSeparate.css";
import { motion } from "framer-motion";
import TRANSACTIONADVISORY from "./TRANSACTION-ADVISORY.jpeg";
const allPractices = [
    { label: "India Strategy — Doing Business in India", path: "india-strategy-doing-business-india" },
    { label: "Start-Up Services",                        path: "start-up-services"                   },
    { label: "Assurances",                              path: "assurances"                           },
    { label: "Transaction Advisory",                    path: "transaction-advisory"                 },
    { label: "Direct Taxes",                            path: "direct-taxes"                         },
    { label: "Goods and Service Tax",                   path: "goods-and-services-tax"               },
    { label: "Transfer Pricing",                        path: "transfer-pricing"                     },
    { label: "Knowledge Process Outsourcing",           path: "knowledge-process-outsourcing"        },
    { label: "Commercial and Legal Assistance",         path: "commercial-and-legal-assistance"      },
];

const PracticesSeparate = () => {
    const { practiceName } = useParams();
    const activeLabel = allPractices.find(p => p.path === practiceName)?.label || "Practice";

    // Define the dynamic content for each practice
    const practiceContent = {
        "india-strategy-doing-business-india": (
            <>
                <div className="PracticeImageContainer">
                    <h2>INDIA STRATEGY- DOING BUSINESS IN INDIA</h2>

                    <img src={TRANSACTIONADVISORY} alt="" />
                </div>
                <p>
                    <b>Doing Business in Ahmedabad, Sanand, Baroda                    </b>
                </p>
                <p>India is rapidly changing and is the fastest-growing trillion-dollar economy in the world. With the aspirational aim of becoming a 5-trillion-dollar economy by 2025, the regulatory and economic environment has opened up, offering new opportunities and challenges for companies looking to expand into India.</p>
                <p>At M. S. Chhajed, we have helped our international clients, spanning five continents, successfully execute their India strategy while maintaining strong relationships with them. We assist companies in setting up businesses in India as well as in Gujarat, facilitating company registration and other essential steps before starting operations. Beyond charting out their India strategy, we consistently add value through our expertise in navigating common pitfalls for overseas companies, addressing complications for foreign directors, and offering an in-depth understanding of domestic and international regulatory frameworks. Our simplified regulatory guide to doing business in India can also be referred to.</p>
                <br />
                <p>Our comprehensive range of services includes:</p>
                <ul>
                    <li> ⁠Determining the appropriate entry options in India (e.g., Company, LLP, Branch Office, or Liaison Office) and structuring an entity.</li>
                    <li>Company formation, registration, and obtaining government approvals.</li>
                    <li>⁠Ensuring compliance with regulations related to foreign exchange.</li>
                    <li>
                        Drafting company charters, memorandums, and articles of association.</li>
                    <li>⁠Registration with various direct and indirect tax authorities.</li>
                    <li>Completing other registrations required for employers, manufacturers, and service providers.
                    </li>
                    <li>Provident fund/pension registrations, ESIC, and Shops & Establishments Act registrations.

                    </li>
                    <li> ⁠Partner identification.
                    </li>
                    <li>⁠Commercial assistance, including negotiations and discussions.

                    </li>
                    <li>Conducting due diligence and valuation of potential acquisition targets.
                    </li>
                    <li>Tax planning and scenario analysis.
                    </li>
                    <li>Providing ongoing accounting and payroll support.
                    </li>
                </ul>
            </>
        ),
        "start-up-services": (
            <>
                <div className="PracticeImageContainer">
                    <h2>START UP SERVICES</h2>
                    <img src="/Images/START UP SERVICES.jpg" alt="" />
                </div>
                <p>India’s start-up ecosystem is one of the fastest-growing in the world, presenting entrepreneurs with unprecedented opportunities. However, the regulatory and compliance environment can be complex to navigate, especially for founders focused on building their products and scaling their businesses.</p>
                <p>At M. S. Chhajed & Co., we understand the unique challenges faced by start-ups at every stage — from ideation to growth to fundraising. We serve as a trusted partner, providing comprehensive advisory and compliance services that allow founders to focus on what they do best: building great businesses.</p>
                <p>Our dedicated start-up practice covers end-to-end support across the lifecycle of your venture. Whether you are incorporating your first entity, structuring an ESOP policy, raising venture capital, or planning an exit, we have the expertise to guide you.</p>
                <br />
                <p>Our Start-Up Services include:</p>
                <p><b>Incorporation and Entity Structuring</b></p>
                <ul>
                    <li>Selection of appropriate business structure (Private Limited Company, LLP, OPC, etc.)</li>
                    <li>Company incorporation and registration with the Registrar of Companies</li>
                    <li>Drafting Memorandum and Articles of Association</li>
                    <li>Registration under DPIIT for start-up recognition and tax benefits</li>
                    <li>PAN, TAN, GST, MSME, and other statutory registrations</li>
                </ul>
                <p><b>Regulatory and Compliance Advisory</b></p>
                <ul>
                    <li>Annual filings with the Ministry of Corporate Affairs</li>
                    <li>Secretarial compliance and maintenance of statutory registers</li>
                    <li>Labour law registrations (PF, ESIC, Shops & Establishments)</li>
                    <li>FEMA compliance for foreign investment and cross-border transactions</li>
                    <li>RBI filings for FDI, ECB, and ODI transactions</li>
                </ul>
                <p><b>Fundraising and Investor Relations</b></p>
                <ul>
                    <li>Structuring seed, angel, and venture capital rounds</li>
                    <li>Drafting and reviewing term sheets, SHA, and SSA</li>
                    <li>Valuation of shares for regulatory and fundraising purposes</li>
                    <li>Due diligence support (financial, legal, and tax)</li>
                    <li>Assistance with convertible notes and SAFE instruments</li>
                </ul>
                <p><b>Tax Planning and Advisory</b></p>
                <ul>
                    <li>Tax structuring for founders, employees, and investors</li>
                    <li>ESOP design, valuation, and tax advisory</li>
                    <li>Section 80IAC tax exemption for eligible start-ups</li>
                    <li>Angel tax advisory and exemption filings</li>
                    <li>GST registration, advisory, and periodic compliance</li>
                </ul>
                <p><b>Accounting and Bookkeeping</b></p>
                <ul>
                    <li>Monthly bookkeeping and management accounts</li>
                    <li>Payroll processing and statutory deductions</li>
                    <li>Financial modelling and projections</li>
                    <li>MIS reporting and investor-ready financial statements</li>
                </ul>
            </>
        ),
        "assurances": (
            <>
                <div className="PracticeImageContainer">
                    <h2>ASSURANCES</h2>
                    <img src="/Images/ASSURANCES.jpg" alt="" />
                </div>
                <p><b>Auditing & Assurance Service in India
                </b></p>
                <p>Businesses worldwide are changing rapidly, along with dynamic laws, regulations, and economic environments. Extensive disclosures requiring detailed analysis of financial statements are mandated under various statutes, placing significant importance on independent statutory audits. Financial statements are the ultimate report card of a company’s fiscal performance. They enable owners and managers to pursue their business objectives, whether related to raising capital, acquisitions, divestitures, or restructuring. Furthermore, meeting investor expectations begins with the completeness, accuracy, and fair presentation of information in your financial statements and disclosures.
                </p>
                <p>An audit is key to sustaining confidence in both your company and the financial system at large. It must keep pace with a fast-evolving corporate reporting environment—characterized by investor skepticism and the 24/7 scrutiny of corporate information, including non-financial data. Auditing, therefore, involves much more than just the legal obligation of certifying annual accounts.

                </p>
                <p>We take pride in being one of the best providers of audit services in Ahmedabad, Gujarat, as well as across India.</p>
                <p>At M. S. Chhajed, we have a longstanding track record of providing indisputable assurance to our esteemed clients on various matters. Our belief that auditing and assurance services in Ahmedabad are a ‘profit centre’ rather than a ‘cost centre’ has been endorsed by our clients, as evidenced by our decades-long associations with them. We deliver tailor-made assurance services in India, accentuated by impeccable quality, to clients in both local and global markets.</p>
                <p>Our focus is on assisting clients in navigating complex professional requirements with clarity and agility. This focused approach helps them overcome complexities and gain valuable insights into their businesses through customized solutions. Our auditors work with utmost diligence, providing actionable suggestions that help clients achieve a fresh vision of success. We are proud to offer top-quality Auditing & Assurance Services in Sanand, Gujarat.</p>
                <br />
                <p>Our assurance team has considerable experience and expertise in providing:
                </p>
                <ul>
                    <li>Audit of financial statements prepared in accordance with various GAAPs (Ind-GAAP, IND-AS, IFRS) under applicable auditing standards.</li>
                    <li> ⁠Review of financial statements in accordance with various GAAPs (Ind-GAAP, IND-AS, IFRS) under applicable auditing standards.</li>
                    <li>⁠Internal Audit and Pre-Audit.</li>
                    <li>Management Audit.</li>
                    <li>
                        Due Diligence.</li>
                    <li>⁠Forensic Audit.
                    </li>
                    <li>Stock Audit.
                    </li>
                    <li>⁠Secretarial and other Company Law Compliance Audits.</li>
                    <li>⁠Fixed asset reconciliation and management.</li>
                    <li>IT Audit.</li>
                    <li>Attestation and Certification services.</li>
                </ul>
            </>
        ),
        "transaction-advisory": (
            <>
                <div className="PracticeImageContainer">
                    <h2>TRANSACTION ADVISORY</h2>
                    <img src="/Images/TRANSACTION ADVISORY.jpg" alt="" />
                </div>
                <p><b>M&A Consulting Services and Project Financing in India                </b></p>
                <p>Inorganic growth can provide a much-needed boost to a company’s capabilities. Investors must evaluate the accounting, tax, regulatory, legal, management, and cultural aspects of the target company. While investors would like to have complete and accurate information to make critical decisions, such information is not always readily available and is often difficult to evaluate. On-the-ground knowledge greatly improves the probability of a deal’s proper execution and success.
                </p>
                <p>At M. S. Chhajed, we focus on enabling transactions between a range of operating structures such as corporate entities, limited liability partnerships, trusts, and others, by deeply connecting with the business model. Our team is involved at every stage of the process, followed by post-transaction hand-holding until the client is ready for the final handover. By creating an assumption-driven notion of the business model based on research, we gather insights into the value it can deliver. We ensure that the core of every transaction is driven by 'trust.'</p>

                <p>We don’t just work as advisers or consultants but as your “Implementation Partners.” Our range of transaction advisory and support services includes:</p><br />
                <p><b>1. Foreign Exchange Management Compliance</b></p>
                <p>Globalization and cross-border transactions have increased the flow of inbound and outbound funds, resulting in substantial regulations and compliance requirements. Thus, it becomes essential to regularly monitor foreign exchange transactions in the context of sectoral and investment caps to avoid significant penalties. To mitigate risks and ensure compliance, we offer the following services:</p>
                <ul>
                    <li>Foreign Direct Investment Services</li>
                    <li>Investment by Non-Residents or Non-Resident Indians</li>
                    <li>Opening Liaison Offices in India</li>
                    <li>Opening Branch and Project Offices in India                    </li>
                    <li>Foreign Investment Promotion Board Approvals                    </li>
                    <li>Advisory on FEMA and DTAA provisions
                    </li>
                    <li>Compliance with the Reserve Bank of India</li>
                    <li>Representation and proceedings before the Enforcement Directorate</li>
                </ul>
                <p><b>2. Valuation</b></p>
                <p>With continuous changes in the regulatory and business environment, asset valuation has become increasingly complex. Reliable valuation advice requires a mix of knowledge, technical expertise, analytical skills, market dynamics understanding, and professional judgment. At M. S. Chhajed & Co., we offer legally driven, independent, and transparent valuation services, including:</p>
                <ul>
                    <li>Valuation opinions for acquisitions, investments, disposals, buyouts, mergers, amalgamations, restructuring, and spin-offs.</li>
                    <li>Valuations for International and Indian accounting standards.
                    </li>
                    <li>
                        Tax valuations for inheritance tax and income tax, including employee shares and options.</li>
                    <li>Investment and transactional advice, including fairness opinions.</li>
                    <li>Accounting and financial reporting support.</li>
                    <li>Tax planning support.</li>
                    <li>Valuation for share purchases, investments, and fundraising.</li>
                    <li>
                        Purchase price allocation for accounting under IFRS and Indian GAAP.
                    </li>
                    <li>Building and reviewing financial models.</li>
                </ul>
                <p><b>3. Mergers and Acquisitions</b></p>
                <p>As leading M&A advisors in India, we recognize that increased business consolidation and competition have led to a rise in M&A activities. These activities involve complex legislations and accounting, tax, and regulatory challenges, necessitating unique approaches for efficient execution. Our expertise in various environments and jurisdictions, combined with industry knowledge, enables us to provide innovative M&A strategies. Our services include:</p>
                <ul>
                    <li>Forecasts</li>
                    <li>Assistance with fundraising processes
                    </li>
                    <li>Financial, fiscal, and regulatory reviews</li>
                    <li>
                        Representation before authorities like the Registrar of Companies</li>
                    <li> Risk assessment and management for acquisitions/mergers</li>
                    <li>Structuring acquisitions to optimize net cash flows</li>
                    <li>Pre-acquisition due diligence</li>
                    <li>Tax-efficient deal structuring</li>
                    <li>Post-deal integration support</li>
                    <li>Drafting and negotiating transaction agreements</li>
                </ul>
                <p><b>4. Finance</b></p>
                <p>Finance is the lifeblood of a business and critical to its success. At M. S. Chhajed, our team possesses comprehensive knowledge of domestic laws and practical experience in the financial sector. With senior advisors who have worked with regulators, we provide a valuable perspective on project financing in India</p>
                {/* <p>Our team focuses on finding opportunities and leveraging them to the advantage of the clients through tailored and innovative approaches. The practice has been built upon complementary components of industry/sector knowledge, multifaceted tools and the ability to deliver services locally and globally.</p> */}
                <p>We are your trusted partner for Project Finance Consulting in India:</p>
                <ul>
                    <li>Preparing companies for fundraising.</li>
                    <li>Advising on business plans and projections.</li>
                    <li>Accessing the right debt and equity providers.</li>
                    <li>Restructuring existing businesses.</li>
                    <li>Seeking approvals for new business activities.</li>
                    <li>Facilitating private equity investments.</li>
                </ul>
                <p><b>5. Due Diligence</b></p>
                <p>Due diligence helps investors or sellers identify the financial, business, and sector-specific risks associated with transactions. Effective due diligence prevents losses of time, money, and reputation from deals that fail to meet expectations.</p>
                <p>We focus on providing a holistic view beyond simple accounting analysis. Our approach includes:</p>
                <ul>
                    <li>
                        Understanding the target entity’s business and providing insights into operations.</li>
                    <li>Assessing the risk profile of the target and its industry.
                    </li>
                    <li>Identifying potential deal breakers.</li>
                    <li>Quantifying tax exposure, hidden costs, contingencies, and commitments.</li>
                    <li>Showcasing financial strengths and weaknesses.</li>
                    <li>
                        Identifying synergies between companies.</li>
                    <li>Vendor-side due diligence.</li>
                    <li>Financial, legal, and tax due diligence to avoid future liabilities.</li>
                </ul>
                <p><b>6. Restructuring</b></p>
                <p>Growing opportunities for foreign direct investment and strategic alliances in India have heightened the need for transaction advisory and restructuring services. Restructuring is often driven by external factors like business expansion or internal factors like tax planning.</p>
                <p><b>Our restructuring services include:</b></p>
                <ul>
                    <li>
                        Structuring the entity.</li>
                    <li>
                        Identifying optimal capital structures and financing strategies.</li>
                    <li>Ensuring compliance with regulations.</li>
                    <li>Legal compliance and requisite approvals.</li>
                    <li>Joint ventures/strategic partnerships.</li>
                    <li>Corporate restructuring, mergers/demergers.</li>
                    <li>ESOP advisory.</li>
                    <li>Profit repatriation.</li>
                    <li>Business reorganization, dispute resolution, or succession planning.</li>
                    <li>Winding up.</li>
                </ul>
                <p><b>Internal factors could include:</b></p>
                <ul>
                    <li>
                        Enhancing business performance</li>
                    <li>
                        Tax planning</li>
                    <li>Consolidation/separation of the business</li>
                    <li>Unlocking the value of the business</li>
                    <li>Business re-organisation – division/dispute resolution/succession</li>
                    <li>
                        Profit repatriation</li>
                    <li>Winding up</li>
                </ul>
                <p>At M. S. Chhajed, we provide a complete suite of financial and strategic advisory services in a manner that helps you drive transactions in the most efficient and effective way. While working as your partner, our approach is that of a Project Manager providing an end-to-end solution. We create value addition by helping in determining the following:</p>
                <ul>
                    <li>Structure of the entity</li>
                    <li>Identify optimal capital structures and financing strategies</li>
                    <li>Ensure that the restructuring is compliant with all regulations</li>
                    <li>
                        Legal Compliances</li>
                    <li>Obtaining requisite approvals</li>
                    <li>Joint Venture/Strategic partnership</li>
                    <li>Corporate Restructuring</li>
                    <li>Merger / Demerger</li>
                    <li>ESOP Advisory</li>
                    <li>Winding up</li>
                </ul>
            </>
        ),
        "direct-taxes": (
            <>
                <div className="PracticeImageContainer">
                    <h2>DIRECT TAXES</h2>
                    <img src="/Images/DIRECT TAXES.jpg" alt="" />
                </div>
                <p>India is on the verge of radical tax changes and has witnessed significant policy shifts such as the General Anti-Avoidance Rules (GAAR), Income Computation Disclosure Standards (commonly known as tax accounting standards), the Undisclosed Foreign Income and Assets Act, and taxation on the indirect transfer of Indian assets in overseas deals—each with its own set of complexities and massive impacts on businesses.</p>
                <p>With uncertainty in the Indian tax regime comes opportunity, but the key is to be prepared in advance. Most business decisions have tax implications that are complex in nature and require a proper understanding of various scenarios and their consequences for effective decision-making and strategy implementation.</p>
                <p>Our Direct Tax Team possesses significant expertise in domestic and international tax matters and is committed to assisting businesses in developing resilient frameworks, thereby empowering them to manage tax exposures and mitigate tax risks. We seamlessly combine the research depth of large firms with the personal attention and relationship-driven approach of smaller firms to ensure that our clients receive unparalleled levels of partner and management involvement, high-quality and timely services, and responsiveness to address their tax issues diligently. Shorter decision-making chains and greater senior-level involvement enable us to take a comprehensive view and operate in an agile and coordinated manner.</p>
                <p>Our methodology and approach are custom-built to suit our clients’ business structures and target markets. This approach not only ensures that compliance obligations are met on a timely basis but also helps create value in complex tax environments, unlocking the potential for growth. At M. S. Chhajed & Co., we provide comprehensive advice and assistance on direct taxes.
                </p>
                <ul>
                    <li>Tax Planning and Structuring</li>
                    <li>Tax Advisory for Non-Residents and Expats
                    </li>
                    <li>⁠International Taxation Advisory
                    </li>
                    <li>Corporate Tax Advisory and Compliance</li>
                    <li>Transaction Tax Advisory</li>
                    <li>
                        Estate duty and Succession Planning</li>
                    <li>
                        ⁠Withholding Tax Advisory</li>
                    <li>Tax Audits</li>
                    <li>Representation and Litigation Services
                    </li>
                    <li>Tax Dispute Resolution and Settlement Advisory</li>
                </ul>
            </>
        ),
        "goods-and-services-tax": (
            <>
                <div className="PracticeImageContainer">
                    <h2>GOODS AND SERVICE TAX</h2>
                    <img src="/Images/GST.jpg" alt="" />
                </div>
                <p>Taxes ultimately borne by final consumers are called Indirect Taxes. Generally, any transaction involving goods or services attracts various indirect taxes. Indirect taxes are typically passed on to the final consumer. However, if a business entity fails to anticipate the applicability of an indirect tax and does not recover the same from the consumer, it becomes a cost to the entity and directly impacts its bottom line. Consequently, indirect taxes have a significant bearing on costs, pricing policies, cash flow, profitability, and ultimately the competitiveness of an organization. Therefore, it becomes critical to evaluate the impact of various indirect taxes on any given transaction.</p>
                <p>Historically, India divided the power to tax various transactions between the Union and the States. This was particularly true for indirect taxes such as excise duty, service tax, sales tax, and value-added tax (VAT). This division resulted in different taxes being applied by the Central and State tax departments on sales and service transactions. These taxes were non-deductible against one another and varied in terms of rates, compliance requirements, and assessment procedures. Apart from cascading taxation, this system created several inefficiencies within businesses as they tried to ensure tax effectiveness.</p>
                <p>These challenges were addressed with the implementation of a uniform Goods and Services Tax (GST) regime in July 2017. The new regime aims to bring greater transparency and fairness while introducing a robust compliance system. Though the GST regime is relatively complex and involves significant procedural requirements, it has ensured that most transactions are tax-neutral and has allowed companies to focus on their business operations rather than tax efficiency models.</p>
                <p>However, as a relatively new regime, GST brings its own set of challenges that require redressal. These include transition procedures, treatment of intangibles, anti-profiteering measures, classification issues, refunds, input tax credits, transactions in securities, trade promotion schemes, subvention income, securitization, and other concerns.

                </p>
                <p>At M. S. Chhajed & Co., we provide comprehensive advice and assistance on indirect taxes. Our services broadly cover the following:
                </p>
                <ul>
                    <li>GST Advisory</li>
                    <li>GST Implementation</li>
                    <li>GST Compliance</li>
                    <li>GST Trainings</li>
                    <li>Compliance Review and Exposure Assessment</li>
                    <li>Representation and Litigation</li>
                </ul>


            </>
        ),
        "transfer-pricing": (
            <>
                <div className="PracticeImageContainer">
                    <h2>Transfer Pricing services in India</h2>
                    <img src="/Images/Transfer Pricing services in India.jpg" alt="" />
                </div>
                <p>Multinational organizations are operating in an environment of unprecedented complexity. Increased inter-company transactions, both domestic and cross-border, coupled with an evolving transfer pricing regulatory landscape—where each country seeks to maximize its share of tax revenue—alongside heightened enforcement activities, have made Transfer Pricing and the determination of Arm’s Length Price (ALP) critical risk management issues for organizations.
                </p>
                <p>In India, the ongoing enforcement of transfer pricing regulations and adjustments focusing on new and more complex issues have highlighted the reality that transfer pricing controversies are expensive and time-consuming. They frequently result in double taxation of income and lead to considerable uncertainty. Furthermore, with the advent of Base Erosion and Profit Shifting (BEPS), transfer pricing has become a central focus for India and other jurisdictions.</p>
                <p>Our Transfer Pricing team provides a comprehensive range of services in India, from Advance Pricing Agreements (APA) to managing large global assignments, including Country-by-Country (CbC) reporting. We are a dynamic organization assisting clients in corporate decision-making at different stages of inter-company transactions by providing tailored solutions. These solutions include planning, policy-making, implementation, robust documentation, compliance, and representation before revenue and appellate authorities.</p>

                <p>Our Transfer Pricing services in Ahmedabad, Gujarat include the following:
                </p><p><b>Compliance</b></p>
                <ul>
                    <li>Transfer pricing compliance documentation for international and specified domestic transactions, including the following analyses:
                        <ul>
                            <li>Functional analysis</li>
                            <li>Assets analysis</li>
                            <li>Risk and Industry overview</li>
                            <li>⁠Preparation of Accountant’s Report in Form 3CEB</li>
                            <li>Master File and Country-by-Country (CbC) reporting
                            </li>
                        </ul>
                    </li>
                    <li>
                        Preparation of Accountant’s Report in Form 3CEB
                    </li>
                    <li>
                        Assistance in the preparation of Master File
                        <ul>
                            <li>Assistance in preparation of Master File</li>
                            <li>
                                Assistance in preparation of CbC Report where:
                                <ul>
                                    <li>The ultimate parent company is in India</li>
                                    <li>The Indian entity is designated as the Alternative Reporting Entity</li>
                                    <li>The Indian entity does not have an agreement for the exchange of the CbC Report with the country of the foreign parent.</li>
                                    <li>Despite having an exchange agreement, the country of the foreign parent (or ARE) fails to share the CbC Report.</li>
                                </ul>
                            </li>
                            <li>Assistance in communicating and liaising with authorities</li>
                        </ul>
                    </li>
                    <li>
                        Assistance in setting up business and structuring the operational model
                    </li>
                    <li>Restructuring of existing business model to build tax/commercial efficiencies</li>
                    <li>Due diligence report (DDR) assistance from transfer pricing perspective in order to ensure that the business model and pricing arrangements of target acquisition are defensible</li>
                    <li>Review of deemed international transactions</li>
                    <li>Assistance in preparing profit attribution studies</li>
                    <li>Assistance in preparing global transfer pricing policy document</li>
                    <li>Supply chain restructuring</li>
                    <li>Structuring management fee payments, royalty payments, inter-company financing ar-rangements</li>
                </ul>
                <p><b>Dispute Avoidance/Resolution
                </b></p>
                <ul>
                    <li>Assistance in representation before:
                        <ul>
                            <li>Transfer Pricing Officer</li>
                            <li>Commissioner of Income Tax (Appeals)</li>
                            <li>Dispute resolution panel</li>
                            <li>Appellate tribunals</li>
                        </ul>
                    </li>
                    <li>Drafting submissions, appeals, and correspondence to revenue/appellate authorities.</li>
                    <li>Providing tax briefings and external support to counsels for representation before High Courts and the Supreme Court.</li>
                    <li>Assistance in Advance Pricing Agreements (APA) proceedings.</li>
                    <li>Assistance with mutual agreement procedures (MAP)</li>
                    <li>Assistance in relation to Safe Harbour application</li>
                </ul>
            </>
        ),
        "knowledge-process-outsourcing": (
            <>
                <div className="PracticeImageContainer">
                    <h2>Knowledge Process Outsourcing</h2>
                    <img src="/Images/knowledge procces outsorcing 01.jpg" alt="" />
                </div>
                <p>Back-office and support functions demand significant resources from an organization in terms of manpower, competence, accuracy, and time. These factors often transform such functions into a significant cost center for organizations. Outsourcing is increasingly being leveraged by organizations to focus on core activities that drive strategic results while transferring back-office and support functions, including compliance activities, to competent and knowledgeable service providers. It has emerged as a strategic tool to enhance performance, increase flexibility, control costs, and optimize operations.</p>
                <p>At M. S. Chhajed & Co., we help you identify functions that can be successfully outsourced and work with you to develop and implement measurable outsourcing solutions that align with your key business goals.</p>
                <p>The Accounts Outsourcing team at M. S. Chhajed & Co. can help your business thrive by taking over routine yet complex activities like payroll management and bookkeeping.
                </p>
                <p>Our Key Offerings in Business Outsourcing Include:</p>
                <p><b>Book-keeping</b></p>
                <p>Bookkeeping is one of the most essential components of running a professionally managed company. It is a series of processes that record the transactions carried out by a company in its ordinary course of business. Effective bookkeeping ensures that not only are all transactions accurately recorded, but the books also reflect the financial health of the business while identifying areas of core competence and high productivity.
                </p>
                <p>Our bookkeeping outsourcing services include:
                </p>
                <ul>
                    <li>Preparation and maintenance of books of accounts.
                    </li>
                    <li>Providing monthly or quarterly management accounts</li>
                    <li>Providing monthly or quarterly management accounts.</li>
                    <li>Preparation of annual statutory accounts.</li>
                    <li>Recording and reconciling all bank, cash, and credit card transactions.</li>
                    <li>Accounts payable/receivable processing.</li>
                    <li>Support for managing working capital.</li>
                    <li>
                        General ledger maintenance.</li>
                    <li>⁠Monthly and year-end closing assistance.</li>
                    <li>
                        Accounting systems design.</li>
                    <li>Depreciation schedules.</li>
                </ul>
                <p>At M. S. Chhajed & Co., we believe that timely information combined with skilled analysis of financial ratios and transaction trends ensures effective and prompt decision-making.</p>
                <p><b>Payroll Management</b></p>
                <p>The Payroll Management System deals with the financial aspects of employee’s salary, allowances, deductions, gross pay, net pay etc. and generation of pay-slips for a specific period. A payroll system generates a multitude of reports for hourly and salaried employees. The payroll process has to be highly efficient and streamlined to ensure any follow up costs and query regeneration are minimalized.</p>
                <p>At M. S. Chhajed & Co., we offer a full payroll compliance service. Some examples of our payroll management outsourcing services include:</p>
                <ul>
                    <li>Payroll management and processing</li>
                    <li>Employee full and final processing support
                    </li>
                    <li>Processing timesheets and generating payslips</li>
                    <li>
                        Generating periodic reports</li>
                    <li>
                        Computation and deposit of withholding tax along with associated return filings
                    </li>
                    <li>Provident fund related support</li>
                    <li>Dealing with joining and leaving policies</li>
                    <li>Payroll administration - calculation, payment and compliance</li>
                </ul>
                <p>Dedicated and well knit team of professionals at M.S. Chhajed & Co. works with accuracy and confidentiality enhancing the administration and efficiency of the business.</p>
                <p><b>Budgeting and Forecasting</b></p>
                <p>Budgeting and forecasting is an integral business activity leading to the achievement of various business objectives. Budgeting is the process of quantifying costs attributable to a specific department or cost centre. It deals with the estimation and deployment of specific funds available to the business unit. A budget should typically be created in an integrated and phased manner in such a way that the department or business unit does not feel short- changed in comparison with its scope and extent of activities.</p>
                <p>Forecasting deals with the estimation of revenue or net proceeds from the sale of a company’s product or service. Forecasting plays an important role in establishing and estimating the cash flow of a company. A proper forecasting process would take into consideration the factors which would create a ‘cash-crunch’ situation for the company and the solutions which could be employed to ensure that this eventuality does not take place.</p>

                <p>Budgeting and forecasting are integral business activities that lead to achieving various objectives. Budgeting quantifies the costs attributable to specific departments or cost centers, while forecasting estimates revenue or net proceeds from a company’s products or services.
                </p>
                <p>Benefits of Budgeting and Forecasting include:</p>
                <ul>
                    <li>Creation of a Budget for each department and cost centre as well as the creation of a Forecast for determining the expected revenue and its effect upon the company’s cash flow</li>
                    <li>Comparison of the budget with the actual figures and subsequent analysis of the same</li>
                    <li>Identifying the reasons for the under absorption/over absorption as compared to the budgeted figures</li>
                    <li>Effect of the deviation on the company’s P&L</li>
                    <li>Suggestions/ Recommendations for remedial measures</li>
                </ul>
                <p>At M. S. Chhajed & Co., we enable your resources to be utilized more efficiently through our proactive, cost-effective services, backed by skilled resources and expertise in budgeting and forecasting.</p>



            </>
        ),
        "commercial-and-legal-assistance": (
            <>
                <div className="PracticeImageContainer">
                    <h2>Commercial and Legal Assistance</h2>
                    <img src="/Images/Commercial and ligal assistent in accounting.jpg" alt="" />
                </div>
                <p>At M. S. Chhajed & Co., our focus extends beyond legal intricacies. We assess the financial implications of each agreement or document for all parties involved, both in the short and long term, while considering tax and other related consequences. Our range of commercial and legal assistance services includes:</p>
                <p><b>Commercial Drafting</b></p>
                <p>The establishment and operation of a corporation require substantial and timely compliance with local statutes and regulations. To ensure adherence to these requirements, we provide comprehensive legal services and support, including regulatory advice and compliance. Our assistance covers the following areas:</p>
                <ul>
                    <li>Company law matters</li>
                    <li>
                        Agreement drafting and vetting</li>
                    <li>Corporate secretarial services</li>
                    <li>Participation and assistance on holding annual and board meetings</li>
                    <li>Appearance and representation services before the Reserve Bank of India, Security and Exchange Board of India and national Company law Tribunal and general legal consultancy</li>
                    <li>Corporate Governance</li>
                    <li>Bankruptcy and insolvency proceedings</li>
                </ul>
                <p>Dedicated team of Chartered Accountants and Company Secretary in M.S. Chhajed & Co. provides all the necessary legal advisory and compliance support services in the field of Company Law and Labor laws for an enterprise to operate in India. Professionals in M.S. Chhajed & Co. have provided corporate compliance services to various clients and also advised on formation, investment, organization and winding-up of various corporate and drafting variety of contracts including business development agreements, takeover agreements and contract agreements.</p>
                <p><b>Business Start up Services</b></p>
                <p>Incorporation and setting up of Company, LLP, Joint Ventures, Firms, HUFs’, Trusts, Society, Association of Persons, and Body of Individuals requires various compliances and approvals. In order to ensure timely and hassle free incorporation we provide legal compliances and assistance on following matters is required:</p>
                <ul>
                    <li>Drafting of constitution of the entity</li>
                    <li>Registering with various authorities including Ministry of Corporate Affairs, Registrar, Charity Commissioner, Foreign Investment Promotion Board, Reserve Bank of India, various tax authorities.</li>
                    <li>
                        Applying for licenses and seeking regulatory approval</li>
                    <li>Setting up wholly owned subsidiary, branch, liaison office, joint venture or project office</li>
                    <li>
                        Vendor agreement, lease agreement and employment agreement</li>
                </ul>
                <p>Having provided business set up services to several entities, the professionals at M. S. Chhajed & Co. have the requisite knowledge and extensive experience in, dealing with the issues arising in such circumstances.
                </p>
                <p><b>Real Estate Regulation</b></p>
                <p>The real estate sector plays a crucial role for housing and infrastructure in the country.Inspite of the high growth in the sector, it has largely remained unregualated, without professionalism and lack of adequate consumer protection. This has lead to an unhealthy growth of the industry, emphasising the need for Government regulation. With the intention to regulate the sector and safeguard the interest of the developers as well as consumer, Real Estate Regulation Act was enacted. Our team of skilled professionals can assist in the following:</p>
                <ul>
                    <li>Drafting of agreement of sale</li>
                    <li>Drafting of sale deed
                    </li>
                    <li>
                        Settlement agreements</li>
                    <li>
                        Appearance before the Authority</li>
                    <li>Appeal and appearance before the tribunal</li>
                </ul>
            </>
        )
        // Add content for other practices
    };
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth", // Adds smooth scrolling
        });
    }, []);
    return (
        <div id="separatePracticeContainer">

            {/* Breadcrumb */}
            <div className="PracticeBreadcrumb">
                <nav>
                    <Link to="/">Home</Link>
                    <span>/</span>
                    <Link to="/">Practices</Link>
                    <span>/</span>
                    <strong>{activeLabel}</strong>
                </nav>
            </div>

            {/* Sidebar + Content */}
            <div className="PracticePageLayout">

                {/* Sidebar */}
                <aside className="PracticeSidebar">
                    <h4>Practices</h4>
                    <ul>
                        {allPractices.map((p, i) => (
                            <li key={i}>
                                <Link
                                    to={`/practices/${p.path}`}
                                    className={practiceName === p.path ? "active" : ""}
                                >
                                    {p.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>

                {/* Main content */}
                <motion.div
                    className="PracticeContent"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.75, ease: [0.22,1,0.36,1], delay: 0.15 }}
                >
                    {practiceContent[practiceName] || (
                        <p>Content for this practice is coming soon.</p>
                    )}
                </motion.div>

            </div>
        </div>
    );
};

export default PracticesSeparate;
