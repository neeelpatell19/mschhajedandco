import Link from "next/link";

export const metadata = {
    title: "Page not found",
};

export default function NotFound() {
    return (
        <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pb-16 pt-[calc(var(--navHeight)+2rem)] text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-navy">404</p>
            <h1 className="mb-3 mt-4 font-display text-4xl text-ink">Page not found</h1>
            <p className="max-w-md">
                The page you are looking for does not exist or may have moved.
            </p>
            <Link href="/" className="CommonBtnStyle">
                Back to home
            </Link>
        </section>
    );
}
