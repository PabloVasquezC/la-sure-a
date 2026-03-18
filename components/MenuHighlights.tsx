"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const highlights = [
    {
        id: 1,
        name: "Cazuela de Vacuno",
        description: "Tradicional cazuela con carne tierna, choclo, zapallo y papas. Sabor casero de verdad.",
        price: "$8.500",
        image: "/cazuela.jpg",
    },
    {
        id: 2,
        name: "Puré con Pollo",
        description: "Puré cremoso acompañado de jugoso pollo al jugo, un clásico que no falla.",
        price: "$7.500",
        image: "/pure-pollo.jpg",
    },
    {
        id: 3,
        name: "Sándwiches",
        description: "Abundantes y preparados al momento, con ingredientes frescos al estilo sureño.",
        price: "$3.500",
        image: "/sandwiches.jpg",
    },
];

export default function MenuHighlights() {
    return (
        <section id="menu" className="py-20 bg-[#FFF3E0]">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-surena-red font-semibold uppercase tracking-widest text-sm">Lo más pedido</span>
                    <h2 className="text-4xl font-bold text-surena-brown mb-3 mt-2 font-serif">Nuestros Favoritos</h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Platos caseros preparados con recetas tradicionales del sur, con todo el cariño de siempre.
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
                            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 group"
                        >
                            <div className="relative h-56 w-full overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.name}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-2">
                                    <h3 className="text-xl font-bold text-surena-brown">{item.name}</h3>
                                    <span className="text-surena-red font-bold text-lg">{item.price}</span>
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
