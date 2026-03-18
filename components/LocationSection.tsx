"use client";

import { motion } from "framer-motion";
import { MapPin, MessageCircle, Instagram, Navigation } from "lucide-react";

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
    }),
};

const directions = [
    {
        title: "Desde el centro de Molina",
        steps: [
            "Dirígete hacia el sur por la Ruta K-19, en dirección al sector San Pedro.",
            "El restaurante está al costado de Patagonia Fresh, visible desde la carretera.",
        ],
    },
    {
        title: "Desde Curicó",
        steps: [
            "Toma la ruta hacia Molina y continúa por la K-19 en dirección San Pedro.",
            "Avanza hasta el sector de Patagonia Fresh; justo al lado está La Sureña.",
        ],
    },
    {
        title: "Desde la cordillera (turismo)",
        steps: [
            "Al salir de Molina, encontrarás primero la estación de trenes, luego Garces Fruit.",
            "A pocos metros está Restaurante La Sureña, parada ideal antes de continuar tu viaje.",
        ],
    },
];

export default function LocationSection() {
    return (
        <section id="ubicacion" className="bg-surena-brown py-24 px-4 overflow-hidden">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    custom={0}
                    variants={fadeInUp}
                >
                    <span className="text-surena-yellow font-semibold uppercase tracking-widest text-sm">Encuéntranos</span>
                    <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mt-2 mb-4">
                        ¿Cómo Llegar?
                    </h2>
                    <p className="text-gray-300 max-w-xl mx-auto text-lg">
                        Estamos en el acceso sur de Molina, sector San Pedro, al costado de Patagonia Fresh — Ruta K-19, Micaela S/N.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-10 items-start">
                    {/* Map Embed */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        custom={1}
                        variants={fadeInUp}
                        className="rounded-2xl overflow-hidden shadow-2xl border-4 border-surena-yellow/30"
                    >
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.5!2d-71.2326!3d-35.1177!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9664d8a7e5c3b5b5%3A0x7a2e4b3c2f1d5e6f!2sRestaurante%20La%20Sure%C3%B1a!5e0!3m2!1ses!2scl!4v1700000000000!5m2!1ses!2scl&q=Restaurante+La+Sure%C3%B1a,+Ruta+K-19,+Molina,+Chile"
                            width="100%"
                            height="420"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación Restaurante La Sureña"
                        />
                    </motion.div>

                    {/* Directions + Contact */}
                    <motion.div
                        className="space-y-6"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
                    >
                        {directions.map((d, i) => (
                            <motion.div
                                key={i}
                                variants={fadeInUp}
                                custom={i}
                                className="bg-white/10 backdrop-blur-sm rounded-2xl p-5 border border-white/10"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <Navigation size={18} className="text-surena-yellow flex-shrink-0" />
                                    <h4 className="font-bold text-white">{d.title}</h4>
                                </div>
                                <ol className="space-y-2 pl-7">
                                    {d.steps.map((step, j) => (
                                        <li key={j} className="text-gray-300 text-sm leading-relaxed list-decimal">
                                            {step}
                                        </li>
                                    ))}
                                </ol>
                            </motion.div>
                        ))}

                        {/* Contact buttons */}
                        <motion.div variants={fadeInUp} custom={3} className="pt-2 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://wa.me/56967855832"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-5 rounded-xl transition-colors duration-300 flex-1"
                            >
                                <MessageCircle size={20} />
                                WhatsApp
                            </a>
                            <a
                                href="https://www.instagram.com/lasurenademolina"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-5 rounded-xl transition-all duration-300 flex-1"
                            >
                                <Instagram size={20} />
                                Instagram
                            </a>
                            <a
                                href="https://maps.app.goo.gl/okvQ8YDdW8wDBJ1i6"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center justify-center gap-3 bg-surena-red hover:bg-red-700 text-white font-semibold py-3 px-5 rounded-xl transition-colors duration-300 flex-1"
                            >
                                <MapPin size={20} />
                                Ver en Maps
                            </a>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
