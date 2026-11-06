import { Prata, Roboto } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/Components/NavigationBar/Navigationbar";
import ScrollToTopButton from "@/Components/ScrollToTop/ScrollToTop";
import Footer from "@/Components/Footer/Footer";

const roboto = Roboto({
    subsets: ["latin"],
    style: ["normal", "italic"],
    variable: "--font-roboto",
    display: "swap",
});

const prata = Prata({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-prata",
    display: "swap",
});

export const metadata = {
    title: {
        default:
            "Best Chartered Accountant in Ahmedabad – Top CA Services in Ahmedabad, Sanand, Baroda",
        template: "%s | M.S. Chhajed & Co.",
    },
    description:
        "M.S. Chhajed & Co. — Chartered Accountants in Ahmedabad, Sanand and Baroda offering audit & assurance, direct taxes, GST, transfer pricing, start-up and transaction advisory services.",
    icons: {
        icon: "/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" className={`${roboto.variable} ${prata.variable}`}>
            <body>
                <NavigationBar />
                <ScrollToTopButton />
                {children}
                <Footer />
            </body>
        </html>
    );
}
