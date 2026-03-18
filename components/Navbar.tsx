"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
    { label: "Nuestra Historia", href: "#historia" },
    { label: "Menú", href: "#menu" },
    { label: "Galería", href: "#gallery" },
    { label: "Ubicación", href: "#ubicacion" },
    { label: "Contacto", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className="bg-surena-brown text-white shadow-lg sticky top-0 z-50">
            <div className="container mx-auto px-4 py-3 flex justify-between items-center">
                <Link href="/" className="font-serif text-xl font-bold flex items-center gap-2">
                    <Image src="/logo.png" alt="La Sureña Logo" width={44} height={44} className="object-contain rounded-full bg-white/10 p-0.5" />
                    <span className="hidden sm:block">La Sureña</span>
                </Link>

                {/* Desktop links */}
                <ul className="hidden md:flex gap-6 text-sm font-medium">
                    {links.map((l) => (
                        <li key={l.href}>
                            <Link
                                href={l.href}
                                className="hover:text-surena-yellow transition-colors duration-200 relative after:absolute after:bottom-[-3px] after:left-0 after:w-0 hover:after:w-full after:h-[2px] after:bg-surena-yellow after:transition-all after:duration-200"
                            >
                                {l.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Mobile burger */}
                <button
                    className="md:hidden p-2 rounded-md hover:bg-white/10 transition-colors"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {/* Mobile dropdown */}
            {open && (
                <div className="md:hidden bg-surena-brown border-t border-white/10 px-4 pb-4">
                    <ul className="flex flex-col gap-3 pt-3">
                        {links.map((l) => (
                            <li key={l.href}>
                                <Link
                                    href={l.href}
                                    className="block py-2 hover:text-surena-yellow transition-colors"
                                    onClick={() => setOpen(false)}
                                >
                                    {l.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </nav>
    );
}
