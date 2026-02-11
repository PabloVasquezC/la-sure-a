"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
    return (
        <section id="gallery" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Galería</h2>
                    <p className="text-gray-600">Un vistazo a nuestro ambiente y momentos especiales.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    <div className="col-span-2 row-span-2 h-96 relative rounded-lg overflow-hidden group">
                        <Image
                            src="/almorzando.png"
                            alt="Almorzando en La Sureña"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="col-span-1 h-48 relative rounded-lg overflow-hidden group">
                        <Image
                            src="/cazuela.png"
                            alt="Nuestra Cazuela"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="col-span-1 h-48 relative rounded-lg overflow-hidden group">
                        <Image
                            src="/exterior-1.png"
                            alt="Exterior del restaurante"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="col-span-1 h-48 relative rounded-lg overflow-hidden group">
                        <Image
                            src="/fachada.png"
                            alt="Fachada La Sureña"
                            fill
                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                    <div className="col-span-1 h-48 relative rounded-lg overflow-hidden group">
                        <Image
                            src="/logo.png"
                            alt="Logo La Sureña"
                            fill
                            className="object-contain p-4 bg-surena-cream transition-transform duration-300 group-hover:scale-105"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
