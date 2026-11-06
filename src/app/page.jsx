import HomeHero from "@/Components/HomeHero/HomeHero";
import ServicesTicker from "@/Components/ServicesTicker/ServicesTicker";
import AboutComapanyHome from "@/Components/AboutCompanyHome/AboutCompanyHome";
import AboutBrandVideo from "@/Components/AboutComapanyVideo/AboutBrandVideo";
import Sectors from "@/Components/Sectors/Sectors";
import PracticesHomeCards from "@/Components/PracticesHomeCards/PracticesHomeCards";
import InSights from "@/Components/InSights/InSights";

export default function HomePage() {
    return (
        <>
            <HomeHero />
            <ServicesTicker />
            <AboutComapanyHome />
            <AboutBrandVideo />
            <Sectors />
            <PracticesHomeCards />
            <InSights />
        </>
    );
}
