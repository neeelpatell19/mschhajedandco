import PracticesSeparate from "@/Components/PracticesHomeCards/PracticesSeparate";
import { allPractices, practicesMeta } from "@/Components/PracticesHomeCards/practicesData";

// Only the practice areas listed in practicesData exist; anything else is a 404.
export const dynamicParams = false;

export function generateStaticParams() {
    return allPractices.map((practice) => ({ practiceName: practice.path }));
}

export async function generateMetadata({ params }) {
    const { practiceName } = await params;
    const practice = allPractices.find((item) => item.path === practiceName);
    return {
        title: practice?.label,
        description: practicesMeta[practiceName],
    };
}

export default async function PracticePage({ params }) {
    const { practiceName } = await params;
    return <PracticesSeparate practiceName={practiceName} />;
}
