"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <section className="relative h-[80vh] flex items-center justify-center bg-gray-900 text-white overflow-hidden">
            <div className="absolute inset-0 bg-black/50 z-10" />
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: "url('/fachada.png')" }}
            />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative z-20 text-center px-4 max-w-4xl mx-auto"
            >
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-serif tracking-tight">
                    La Sureña
                </h1>
                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                    Sabores auténticos que te hacen sentir en casa.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/menu"
                        className="px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-md transition-colors duration-300"
                    >
                        Ver Menú
                    </Link>
                    <Link
                        href="/reservas"
                        className="px-8 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-medium rounded-md transition-colors duration-300"
                    >
                        Reservar Mesa
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
