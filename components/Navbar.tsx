import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
    return (
        <nav className="bg-surena-brown text-white py-4 shadow-md sticky top-0 z-50">
            <div className="container mx-auto px-4 flex justify-between items-center">
                <Link href="/" className="font-serif text-2xl font-bold flex items-center gap-2">
                    <Image src="/logo.png" alt="La Sureña Logo" width={40} height={40} className="object-contain" />
                    <span>La Sureña</span>
                </Link>
                <ul className="flex gap-6 text-sm md:text-base font-medium">
                    <li>
                        <Link href="#menu" className="hover:text-surena-yellow transition-colors">
                            Menú
                        </Link>
                    </li>
                    <li>
                        <Link href="#gallery" className="hover:text-surena-yellow transition-colors">
                            Galería
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className="hover:text-surena-yellow transition-colors">
                            Contacto
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}
