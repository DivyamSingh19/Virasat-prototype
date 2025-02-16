"use client"
import Link from "next/link";

export default function Header() {
    return (
        <header className="fixed top-12 left-1/2 -translate-x-1/2 flex items-center gap-8 justify-center z-10">
            <Link href="/" className="rounded-full w-20 h-20 grid place-items-center text-xl font-medium bg-black">LoGo.</Link>
            <nav className="flex items-center gap-8 bg-background text-foreground p-6 border rounded-xl">
                <Link href="/" className="text-md uppercase font-medium tracking-widest">Home</Link>
                <Link href="#hsn" className="text-md uppercase font-medium tracking-widest">HSN</Link>
                <Link href="#explore" className="text-md uppercase font-medium tracking-widest">Explore</Link>
                <Link href="#events" className="text-md uppercase font-medium tracking-widest">HOT Events</Link>
                <Link href="#testimonials" className="text-md uppercase font-medium tracking-widest">Testimonials</Link>
            </nav>
        </header>
    )
}