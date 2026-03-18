import Image from "next/image";
import { MapPin, MessageCircle, Clock, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-[#3E2000] text-white pt-16 pb-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
                            <Image src="/logo.png" alt="La Sureña" width={50} height={50} className="object-contain rounded-full bg-white/10 p-1" />
                            <span className="font-serif text-2xl font-bold text-surena-yellow">La Sureña</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed">
                            Comida casera, sabores auténticos del sur de Chile. Un lugar para descansar, compartir y sentirse como en casa.
                        </p>
                    </div>

                    {/* Hours */}
                    <div className="text-center">
                        <h3 className="text-lg font-bold text-surena-yellow mb-4 flex items-center justify-center gap-2">
                            <Clock size={18} />
                            Horario de Atención
                        </h3>
                        <div className="bg-white/10 rounded-xl p-4 inline-block">
                            <p className="text-gray-300 text-sm mb-1">Lunes a Domingo</p>
                            <p className="text-xl font-bold text-white">10:00 – 22:00</p>
                        </div>
                    </div>

                    {/* Contact */}
                    <div className="text-center md:text-right">
                        <h3 className="text-lg font-bold text-surena-yellow mb-4">Contáctanos & Redes</h3>
                        <ul className="space-y-3 text-sm text-gray-300">
                            <li className="flex items-center justify-center md:justify-end gap-2">
                                <MapPin size={16} className="text-surena-yellow flex-shrink-0" />
                                <span>Ruta K-19, Sector San Pedro, Molina</span>
                            </li>
                            <li>
                                <a href="https://wa.me/56967855832" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center justify-center md:justify-end gap-2 hover:text-green-400 transition-colors">
                                    <MessageCircle size={16} />
                                    +56 9 6785 5832
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/lasurenademolina" target="_blank" rel="noopener noreferrer"
                                   className="flex items-center justify-center md:justify-end gap-2 hover:text-pink-400 transition-colors">
                                    <Instagram size={16} />
                                    @lasurenademolina
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-6 text-center text-sm text-gray-500">
                    © {new Date().getFullYear()} La Sureña · Restaurante Tradicional & Casero · Todos los derechos reservados.
                </div>
            </div>
        </footer>
    );
}
