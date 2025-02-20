import Link from "next/link";

export default function Header() {

    const navItems = [
        {
            label: "Home",
            href: "/",
        },
        {
            label: "MOQs",
            href: "#moqs",
        },
        {
            label: "Explore",
            href: "#explore",
        },
        {
            label: "Events",
            href: "#events",
        },
        {
            label: "Testimonials",
            href: "#testimonials",
        },
    ]

    return (
        <header className="fixed top-12 left-1/2 -translate-x-1/2 flex items-center gap-8 justify-center z-10 bg-white">
            <Link href="/" className="rounded-full w-20 h-20 grid place-items-center text-xl font-medium border bg-white">LoGo.</Link>
            <nav className="flex items-center gap-8 bg-background text-foreground p-6 border rounded-xl">
                {navItems.map((navitem) => {
                    return (
                        <Link href={navitem.href} className="text-md uppercase font-medium tracking-widest">{navitem.label}</Link>
                    )
                })}
            </nav>
        </header>
    )
}