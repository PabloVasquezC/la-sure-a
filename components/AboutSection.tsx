"use client";

import { motion } from "framer-motion";
import { Leaf, Users, Heart, Sun } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const milestones = [
    { year: "2007", text: "Nancy Sepúlveda comienza desde un pequeño carro de comida de 2×3 m, trabajando sola para sacar adelante a su familia." },
    { year: "2012", text: "El reconocimiento de sus clientes impulsa el crecimiento: el carro se transforma en un local de comida al paso de 5×5 m." },
    { year: "2017", text: "El 12 de marzo, el sueño se consolida: nace el Restaurante La Sureña con terraza, capacidad para 100 personas y gestión familiar." },
];

const values = [
    { icon: Heart, title: "Cocina con amor", desc: "Comida casera, abundante y preparada con dedicación, manteniendo los sabores tradicionales del sur de Chile." },
    { icon: Users, title: "Proyecto familiar", desc: "Nancy y sus hijos construyeron mucho más que un negocio: un espacio de encuentro, esfuerzo y perseverancia." },
    { icon: Sun, title: "Energía renovable", desc: "Funcionamos 100% con paneles solares y termo solar, además de sistemas de reciclaje de plásticos y aceites." },
    { icon: Leaf, title: "Precios accesibles", desc: "Creemos que una buena comida debe estar al alcance de todos, familias, trabajadores, transportistas y turistas." },
];

export default function AboutSection() {
    return (
        <>
            {/* NUESTRA HISTORIA */}
            <section id="historia" className="bg-[#FFF8E1] py-24 px-4 overflow-hidden">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0}
                        variants={fadeInUp}
                    >
                        <span className="text-surena-red font-semibold uppercase tracking-widest text-sm">Desde 2007</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-surena-brown mt-2 mb-4">
                            Nuestra Historia
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            La historia de La Sureña es una historia de <strong>esfuerzo, raíces y sueños</strong> que se construyeron paso a paso.
                        </p>
                    </motion.div>

                    {/* Origin story */}
                    <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.3 }}
                            custom={1}
                            variants={fadeInUp}
                        >
                            <h3 className="text-2xl font-serif font-bold text-surena-brown mb-4">
                                El comienzo de un sueño
                            </h3>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                En octubre de 2007, <strong>Nancy Sepúlveda</strong>, originaria de Traiguén en el corazón del sur de Chile, decidió emprender en la gastronomía desde un pequeño carro de comida. Durante diez años enfrentó jornadas largas y mucho sacrificio, luchando con determinación para sacar adelante a su familia.
                            </p>
                            <p className="text-gray-700 leading-relaxed mb-4">
                                Cuando llegó el momento de darle nombre a su proyecto, decidió rendir homenaje a su origen y al orgullo por su tierra sureña: así nació <strong>La Sureña</strong>.
                            </p>
                            <p className="text-gray-700 leading-relaxed">
                                El <strong>12 de marzo de 2017</strong>, ese sueño se transformó en el restaurante que es hoy: un espacio consolidado con amplia terraza, capacidad para 100 personas y el mismo sabor casero que enamoró a sus primeros clientes.
                            </p>
                        </motion.div>

                        {/* Timeline */}
                        <motion.div
                            className="space-y-6"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, amount: 0.2 }}
                            variants={{ visible: { transition: { staggerChildren: 0.2 } }, hidden: {} }}
                        >
                            {milestones.map((m, i) => (
                                <motion.div
                                    key={i}
                                    variants={fadeInUp}
                                    custom={i}
                                    className="flex gap-5 items-start"
                                >
                                    <div className="flex-shrink-0 w-16 h-16 rounded-full bg-surena-red flex items-center justify-center text-white font-bold text-sm shadow-md">
                                        {m.year}
                                    </div>
                                    <div className="bg-white rounded-xl p-4 shadow-md flex-1 border-l-4 border-surena-yellow">
                                        <p className="text-gray-700 text-sm leading-relaxed">{m.text}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Decorative divider */}
                    <div className="flex items-center gap-4 mb-20">
                        <div className="flex-1 h-px bg-surena-brown/20" />
                        <span className="text-surena-red text-2xl">✦</span>
                        <div className="flex-1 h-px bg-surena-brown/20" />
                    </div>

                    {/* QUIÉNES SOMOS */}
                    <motion.div
                        className="text-center mb-12"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        custom={0}
                        variants={fadeInUp}
                    >
                        <span className="text-surena-red font-semibold uppercase tracking-widest text-sm">Filosofía</span>
                        <h2 className="text-4xl md:text-5xl font-serif font-bold text-surena-brown mt-2 mb-4">
                            Quiénes Somos
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                            En La Sureña creemos que la comida es mucho más que alimentarse: es un momento para <strong>compartir, descansar y sentirse como en casa</strong>.
                        </p>
                    </motion.div>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {values.map((v, i) => {
                            const Icon = v.icon;
                            return (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true, amount: 0.2 }}
                                    custom={i}
                                    variants={fadeInUp}
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
