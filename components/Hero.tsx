"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative h-screen flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/55 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center z-0 scale-105"
                style={{ backgroundImage: "url('/fachada.png')" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="relative z-20 text-center px-4 max-w-4xl mx-auto"
            >
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-surena-yellow uppercase tracking-[0.25em] text-sm font-semibold mb-4"
                >
                    Traiguén · Molina · Sur de Chile
                </motion.p>
                <h1 className="text-6xl md:text-8xl font-bold mb-5 font-serif tracking-tight drop-shadow-2xl">
                    La Sureña
                </h1>
                <p className="text-lg md:text-2xl mb-10 text-gray-200 max-w-2xl mx-auto leading-relaxed">
                    Desde 2007, comida casera con el sabor auténtico del sur — preparada con cariño para que te sientas como en casa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#menu"
                        className="px-8 py-3.5 bg-surena-red hover:bg-red-700 text-white font-semibold rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-900/40 hover:-translate-y-0.5"
                    >
                        Ver Menú
                    </Link>
                    <Link
                        href="#historia"
                        className="px-8 py-3.5 bg-transparent border-2 border-white/70 hover:bg-white/10 text-white font-semibold rounded-xl transition-all duration-300 backdrop-blur-sm"
                    >
                        Nuestra Historia
                    </Link>
                </div>
            </motion.div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
}
