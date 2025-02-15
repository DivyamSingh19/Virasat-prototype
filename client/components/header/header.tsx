import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-12 left-1/2 -translate-x-1/2 flex items-center gap-8 justify-center z-10">
            <Link href="/" className="rounded-full w-20 h-20 grid place-items-center text-xl font-semibold bg-black">LoGo.</Link>
            <nav className="flex items-center gap-8 bg-background text-foreground p-6 border rounded-xl">
                <Link href="/" className="text-lg uppercase font-semibold tracking-widest">Home</Link>
                <Link href="#hsn" className="text-lg uppercase font-semibold tracking-widest">HSN</Link>
                <Link href="#explore" className="text-lg uppercase font-semibold tracking-widest">Explore</Link>
                <Link href="#events" className="text-lg uppercase font-semibold tracking-widest">HOT Events</Link>
                <Link href="#testimonials" className="text-lg uppercase font-semibold tracking-widest">Testies</Link>
            </nav>
        </header>
    )
}