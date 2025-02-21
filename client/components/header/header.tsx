"use client"
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "Jobs",
            href: "#jobs",
        },
        {
            label: "Explore",
            href: "#explore",
        },
        {
            label: "Events",
            href: "#about",
        },
        {
            label: "Testimonials",
            href: "#testimonials",
        },
    ];

    return (
        <header className="fixed top-12 w-full sm:max-w-7xl left-1/2 -translate-x-1/2 px-4 sm:px-6">
            <div className="flex flex-col sm:flex-row items-center sm:items-center sm:justify-between md:justify-center md:gap-8 gap-4">
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <Link href="/" className="rounded-full w-20 h-20 grid place-items-center text-xl font-medium border bg-transparent">
                        LoGo.
                    </Link>
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="sm:hidden p-2 hover:bg-gray-100 rounded-lg"
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>

                <nav className={`
                    ${isOpen ? 'flex' : 'hidden'} 
                    sm:flex flex-col sm:flex-row 
                    items-start sm:items-center 
                    gap-4 sm:gap-8 
                    bg-background text-foreground 
                    p-6 border rounded-xl
                    w-full sm:w-auto
                `}>
                    {navItems.map((navitem) => (
                        <Link
                            href={navitem.href}
                            key={navitem.label}
                            className="text-md uppercase font-medium tracking-widest hover:text-gray-600 transition-colors"
                            onClick={() => setIsOpen(false)}
                        >
                            {navitem.label}
                        </Link>
                    ))}
                </nav>
            </div>
        </header>
    );
}