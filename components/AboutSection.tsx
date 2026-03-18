"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Leaf, Users, Heart, Sun } from "lucide-react";

const milestones = [
    {
        year: "2007",
        title: "El primer carro",
        text: "Nancy Sepúlveda comienza desde un pequeño carro de comida de 2×3 m en Molina, trabajando sola para sacar adelante a su familia.",
        images: [
            { src: "/primer-puesto.jpg", alt: "Primer puesto La Sureña 2007" },
            { src: "/nancy-la-surena-ano-2007.jpg", alt: "Nancy Sepúlveda en el carro, 2007" },
        ],
    },
    {
        year: "2017",
        title: "Nace el restaurante",
        text: "El 12 de marzo, el sueño se hace realidad. Comienza la construcción del restaurante que La Sureña es hoy.",
        images: [
            { src: "/comienzo-de-construcción-del-restaurante-inicial-2017.jpg", alt: "Construcción restaurante 2017" },
            { src: "/comienzo-de-construcción-del-restaurante-inicial-2017-03.jpg", alt: "Construcción inicial 2017" },
        ],
    },
    {
        year: "Hoy",
        title: "Un restaurante consolidado",
        text: "Con capacidad para 100 personas, terraza propia y un equipo familiar, La Sureña es hoy un punto de referencia en Molina.",
        images: [
            { src: "/la-surena-restaurant-inicial-tras-construccion.jpg", alt: "Restaurante La Sureña terminado" },
            { src: "/equipo.jpg", alt: "Equipo La Sureña" },
        ],
    },
];

const values = [
    { icon: Heart, title: "Cocina con amor", desc: "Comida casera, abundante y preparada con dedicación, con los sabores tradicionales del sur de Chile." },
    { icon: Users, title: "Proyecto familiar", desc: "Nancy y sus hijos construyeron mucho más que un negocio: un espacio de encuentro, esfuerzo y perseverancia." },
    { icon: Sun, title: "Energía renovable", desc: "Funcionamos 100% con paneles solares y termo solar, además de sistemas de reciclaje de plásticos y aceites." },
    { icon: Leaf, title: "Precios accesibles", desc: "Creemos que una buena comida debe estar al alcance de todos: familias, trabajadores, transportistas y turistas." },
];

export default function AboutSection() {
    return (
        <>
            {/* NUESTRA HISTORIA */}
            <section id="historia" className="bg-[#FFF8E1] py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-surena-red font-semibold uppercase tracking-widest text-sm">Desde 2007</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-surena-brown mt-2 mb-4">
                            Nuestra Historia
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            La historia de La Sureña es una historia de <strong>esfuerzo, raíces y sueños</strong> construidos paso a paso.
                        </p>
                    </motion.div>

                    {/* Timeline with photos */}
                    <div className="space-y-20">
                        {milestones.map((m, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, amount: 0.15 }}
                                transition={{ duration: 0.6 }}
                                className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? "md:[direction:rtl]" : ""}`}
                            >
                                {/* Text */}
                                <div className={i % 2 === 1 ? "md:[direction:ltr]" : ""}>
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-16 h-16 rounded-full bg-surena-red flex items-center justify-center text-white font-bold text-sm shadow-lg flex-shrink-0">
                                            {m.year}
                                        </div>
                                        <h3 className="text-2xl font-serif font-bold text-surena-brown">{m.title}</h3>
                                    </div>
                                    <p className="text-gray-700 leading-relaxed mb-4 pl-20">{m.text}</p>
                                    <div className="h-1 w-24 bg-surena-yellow rounded-full ml-20" />
                                </div>

                                {/* Photos */}
                                <div className={`grid grid-cols-2 gap-3 ${i % 2 === 1 ? "md:[direction:ltr]" : ""}`}>
                                    {m.images.map((img, j) => (
                                        <motion.div
                                            key={j}
                                            initial={{ opacity: 0, scale: 0.95 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: j * 0.15, duration: 0.5 }}
                                            className={`relative overflow-hidden rounded-2xl shadow-lg ${j === 0 ? "aspect-[4/3]" : "aspect-square"}`}
                                        >
                                            <Image
                                                src={img.src}
                                                alt={img.alt}
                                                fill
                                                className="object-cover hover:scale-105 transition-transform duration-500"
                                                sizes="(max-width: 768px) 50vw, 25vw"
                                            />
                                        </motion.div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Divider */}
                    <div className="flex items-center gap-4 mt-20 mb-20">
                        <div className="flex-1 h-px bg-surena-brown/20" />
                        <span className="text-surena-red text-2xl">✦</span>
                        <div className="flex-1 h-px bg-surena-brown/20" />
                    </div>

                    {/* QUIÉNES SOMOS */}
                    <motion.div
                        className="text-center mb-12"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="text-surena-red font-semibold uppercase tracking-widest text-sm">Filosofía</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-surena-brown mt-2 mb-4">
                            Quiénes Somos
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            En La Sureña creemos que la comida es mucho más que alimentarse: es un momento para{" "}
                            <strong>compartir, descansar y sentirse como en casa</strong>.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border-t-4 border-surena-red text-center group"
                                >
                                    <div className="w-12 h-12 rounded-full bg-surena-cream flex items-center justify-center mx-auto mb-4 group-hover:bg-surena-red transition-colors duration-300">
                                        <Icon size={22} className="text-surena-red group-hover:text-white transition-colors duration-300" />
                                    </div>
                                    <h4 className="font-bold text-surena-brown mb-2">{v.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{v.desc}</p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}
