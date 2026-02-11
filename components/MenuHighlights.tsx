"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function MenuHighlights() {
    const highlights = [
        {
            id: 1,
            name: "Cazuela de Vacuno",
            description: "Tradicional cazuela con carne tierna, choclo, zapallo y papas.",
            price: "$8.500",
            image: "/images/cazuela.jpg" // Placeholder path
        },
        {
            id: 2,
            name: "Pastel de Choclo",
            description: "Suave pasta de choclo con pino de carne, pollo, huevo y aceitunas, gratinado al horno.",
            price: "$9.200",
            image: "/images/pastel.jpg" // Placeholder path
        },
        {
            id: 3,
            name: "Empanadas de Pino",
            description: "Masa crujiente rellena de pino jugoso, huevo duro, aceituna y pasas (opcional).",
            price: "$2.500",
            image: "/images/empanada.jpg" // Placeholder path
        }
    ];

    return (
        <section id="menu" className="py-20 bg-amber-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold text-gray-800 mb-4 font-serif">Nuestros Favoritos</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Descubre los platos más solicitados por nuestros clientes, preparados con recetas tradicionales y mucho cariño.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {highlights.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-64 w-full bg-gray-200">
                                {/* Placeholder for image - using div for now to avoid next/image errors if file missing */}
                                <div className="flex items-center justify-center h-full text-gray-400">
                                    Image: {item.name}
                                </div>
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
                                    <span className="text-amber-600 font-bold">{item.price}</span>
                                </div>
                                <p className="text-gray-600 mb-4">{item.description}</p>
                                <button className="text-amber-600 font-medium hover:text-amber-800 transition-colors">
                                    Ver detalles &rarr;
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
