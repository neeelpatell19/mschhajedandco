import React from "react";
import HomeHero from "../Components/HomeHero/HomeHero";
import ServicesTicker from "../Components/ServicesTicker/ServicesTicker";
import AboutComapanyHome from "../Components/AboutCompanyHome/AboutCompanyHome";
import PracticesHomeCards from "../Components/PracticesHomeCards/PracticesHomeCards";
import AboutBrandVideo from "../Components/AboutComapanyVideo/AboutBrandVideo";
import Sectors from "../Components/Sectors/Sectors";
import InSights from "../Components/InSights/InSights";

const HomePageRoutes = () => {
    return (
        <>
            {/* Inside it all the home Page Shows component declared here */}
            {/* HeroComponent */}
            <HomeHero />
            <ServicesTicker />
            <AboutComapanyHome />
            <AboutBrandVideo/>
            <Sectors/>
            <PracticesHomeCards />
            <InSights/>
        </>
    )
}
export default HomePageRoutes