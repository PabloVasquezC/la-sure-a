import { MapPin, Phone, Clock, Facebook, Instagram } from "lucide-react";

export default function Footer() {
    return (
        <footer id="contact" className="bg-surena-cream pt-16 pb-8 border-t-4 border-surena-red">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">

                {/* Contact Info */}
                <div className="text-center md:text-left">
                    <h3 className="text-xl font-bold text-surena-brown mb-4">Ubícanos</h3>
                    <ul className="space-y-3 text-gray-700">
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <MapPin className="text-surena-red" />
                            <span>Calle Principal 123, Comuna</span>
                        </li>
                        <li className="flex items-center justify-center md:justify-start gap-2">
                            <Phone className="text-surena-red" />
                            <span>+56 9 1234 5678</span>
                        </li>
                    </ul>
                </div>

                {/* Hours */}
                <div className="text-center">
                    <h3 className="text-xl font-bold text-surena-brown mb-4">Horario de Atención</h3>
                    <div className="inline-block bg-white p-4 rounded-lg shadow-sm border border-surena-brown/10">
                        <div className="flex items-center justify-center gap-2 mb-2 text-surena-red font-bold">
                            <Clock />
                            <span>Lunes a Viernes</span>
                        </div>
                        <p className="text-2xl font-bold text-gray-800">10:00 a.m. - 7:00 p.m.</p>
                    </div>
                </div>

                {/* Social / About */}
                <div className="text-center md:text-right">
                    <h3 className="text-xl font-bold text-surena-brown mb-4">Síguenos</h3>
                    <div className="flex justify-center md:justify-end gap-4">
                        <a href="#" className="bg-surena-brown text-white p-2 rounded-full hover:bg-surena-red transition-colors">
                            <Facebook size={20} />
                        </a>
                        <a href="#" className="bg-surena-brown text-white p-2 rounded-full hover:bg-surena-red transition-colors">
                            <Instagram size={20} />
                        </a>
                    </div>
                    <p className="mt-4 text-sm text-gray-500">
                        La mejor comida casera de la zona.
                    </p>
                </div>
            </div>

            <div className="mt-12 text-center text-sm text-gray-400 border-t border-gray-200 pt-4">
                &copy; {new Date().getFullYear()} La Sureña. Todos los derechos reservados.
            </div>
        </footer>
    );
}
