"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const photos = [
    { src: "/almorzando.png", alt: "Almorzando en La Sureña", span: "col-span-2 row-span-2 h-96 md:h-auto" },
    { src: "/fachada.png", alt: "Fachada La Sureña", span: "col-span-1 h-48" },
    { src: "/cazuela.png", alt: "Cazuela casera", span: "col-span-1 h-48" },
    { src: "/exterior-1.png", alt: "Exterior del restaurante", span: "col-span-1 h-48" },
    { src: "/la-surena-restaurant-inicial-tras-construccion.jpg", alt: "Local La Sureña terminado", span: "col-span-1 h-48" },
    { src: "/primer-puesto.jpg", alt: "El primer puesto, 2007", span: "col-span-1 h-48" },
    { src: "/nancy-la-surena-ano-2007.jpg", alt: "Nancy en el carro, 2007", span: "col-span-1 h-48" },
];



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
                    <span className="text-surena-red font-semibold uppercase tracking-widest text-sm">Momentos</span>
                    <h2 className="text-4xl font-bold text-surena-brown mb-3 mt-2 font-serif">Galería</h2>
                    <p className="text-gray-500">Un vistazo a nuestra historia, ambiente y platos.</p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4"
                >
                    {photos.map((photo, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.97 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.07, duration: 0.4 }}
                            className={`relative rounded-xl overflow-hidden group cursor-pointer ${photo.span}`}
                        >
                            <Image
                                src={photo.src}
                                alt={photo.alt}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 50vw, 25vw"
                            />
                            <div className="absolute inset-0 bg-surena-brown/0 group-hover:bg-surena-brown/40 transition-all duration-300 flex items-end p-3">
                                <p className="text-white text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow">
                                    {photo.alt}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
