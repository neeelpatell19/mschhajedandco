import React from "react";
import "../../assets/Styles/Sectors.css";
import { motion } from "framer-motion";
import Tourism          from "../../assets/Images/Icons/Tourism.svg";
import FMCGMedicines    from "../../assets/Images/Icons/FMCGMedicines.svg";
import Banking          from "../../assets/Images/Icons/Banking.svg";
import Automobiles      from "../../assets/Images/Icons/Automobiles.svg";
import GovernmentAgencies from "../../assets/Images/Icons/Government Agencies.svg";
import Engineering      from "../../assets/Images/Icons/Engineering.svg";
import Internet         from "../../assets/Images/Icons/Internet.svg";
import Chemicals        from "../../assets/Images/Icons/Chemicals.svg";
import Jewellery        from "../../assets/Images/Icons/Jewellery.svg";
import Infrastructure   from "../../assets/Images/Icons/Infrastructure.svg";
import RealEstate       from "../../assets/Images/Icons/RealEstate.svg";
import Education        from "../../assets/Images/Icons/Education.svg";
import Healthcare       from "../../assets/Images/Icons/Healthcare.svg";
import IronandSteel     from "../../assets/Images/Icons/IronandSteel.svg";
import Textiles         from "../../assets/Images/Icons/Textiles.svg";
import Logistics        from "../../assets/Images/Icons/Logistics.svg";
import Manufacturing    from "../../assets/Images/Icons/Manufacturing.svg";
import RenewableEnergy  from "../../assets/Images/Icons/RenewableEnergy.svg";

const sectorData = [
    { icon: Tourism,           label: "Tourism"                              },
    { icon: FMCGMedicines,     label: "FMCG, Medicines & Pharmaceuticals"    },
    { icon: Logistics,         label: "Logistics"                            },
    { icon: Banking,           label: "Banking and Microfinance"             },
    { icon: Automobiles,       label: "Automobiles"                          },
    { icon: GovernmentAgencies,label: "Government Agencies"                  },
    { icon: Engineering,       label: "Engineering and Consultancy"          },
    { icon: Internet,          label: "Internet and E-commerce"              },
    { icon: RenewableEnergy,   label: "Renewable Energy"                     },
    { icon: Manufacturing,     label: "Manufacturing"                        },
    { icon: Chemicals,         label: "Chemicals and Dyes"                   },
    { icon: Jewellery,         label: "Gems and Jewellery"                   },
    { icon: Infrastructure,    label: "Infrastructure"                       },
    { icon: RealEstate,        label: "Real Estate"                          },
    { icon: Education,         label: "Education"                            },
    { icon: Healthcare,        label: "Healthcare"                           },
    { icon: IronandSteel,      label: "Iron and Steel"                       },
    { icon: Textiles,          label: "Textiles"                             },
];

const Sectors = () => {
    // Duplicate items so the CSS marquee loop is seamless
    const items = [...sectorData, ...sectorData];

    return (
        <section id="AnimatedSectorsContainer">
            {/* Section label */}
            <motion.div
                className="SectorsSectionLabel"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
                <h4>Sectors We Serve</h4>
            </motion.div>

            {/* CSS-driven infinite marquee — no deprecated <marquee> */}
            <div className="sectors-track-wrapper">
                <div className="sectors-track">
                    {items.map((item, index) => (
                        <div className="sector-item" key={index}>
                            <img src={item.icon} alt={item.label} />
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sectors;
