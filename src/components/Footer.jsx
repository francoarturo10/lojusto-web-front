import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaWhatsapp, FaFacebook } from "react-icons/fa";
import { MapPin, Phone, Clock, Flame, Heart } from "lucide-react";
import { links } from "../links/links";

export function Footer() {
    return (
        <footer className="relative bg-[#0d0d12] border-t border-white/10 text-zinc-300 pt-12 pb-8 overflow-hidden">
            {/* Ambient Lighting at top */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-brand-yellow/50 to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Footer Grid (Mobile: 1 col, Tablet: 2 cols, Desktop: 4 cols) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/10">
                    
                    {/* Brand Column (Col 1-5) */}
                    <div className="lg:col-span-4 space-y-4 text-center sm:text-left">
                        <Link to="/" className="inline-flex items-center gap-3 group">
                            <img
                                className="w-12 h-12 object-contain filter drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)] group-hover:scale-105 transition-transform"
                                src="/logo-removebg.png"
                                alt="Logo Lo Justo"
                            />
                            <div className="flex flex-col text-left">
                                <span className="text-xl font-black text-white tracking-wider flex items-center gap-1.5">
                                    LO JUSTO <Flame size={18} className="text-brand-red animate-pulse" />
                                </span>
                                <span className="text-xs text-amber-400 font-bold uppercase tracking-widest">
                                    Trujillo • Sabor Urbano
                                </span>
                            </div>
                        </Link>

                        <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed max-w-sm mx-auto sm:mx-0">
                            Lo Justo es el lugar donde cada mordida es un momento para compartir. Hamburguesas jugosas, alitas broaster crocantes y salchipapas bien servidas.
                        </p>

                        {/* Social Media Buttons */}
                        <div className="flex items-center justify-center sm:justify-start gap-3 pt-2">
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-pink-500 hover:text-pink-400 hover:bg-pink-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <FaInstagram size={18} />
                            </a>

                            <a
                                href="https://tiktok.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="TikTok"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <FaTiktok size={18} />
                            </a>

                            <a
                                href="https://wa.me/51936869880"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="WhatsApp"
                                className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500 hover:text-emerald-400 hover:bg-emerald-500/10 flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                            >
                                <FaWhatsapp size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Navigation Links (Col 5-7) */}
                    <div className="lg:col-span-3 space-y-3 text-center sm:text-left">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Navegación
                        </h4>
                        <ul className="space-y-2 text-xs sm:text-sm">
                            {links.map((link) => (
                                <li key={link.id}>
                                    <Link
                                        to={link.href}
                                        className="text-zinc-400 hover:text-brand-yellow transition-colors inline-flex items-center gap-1.5"
                                    >
                                        <span className="text-brand-red">›</span>
                                        <span>{link.title}</span>
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a
                                    href="https://wa.me/51936869880"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                                >
                                    <span className="text-emerald-400">›</span>
                                    <span>Pide por Delivery</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact & Hours (Col 8-12) */}
                    <div className="lg:col-span-5 space-y-4 text-center sm:text-left">
                        <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                            Contacto & Atención
                        </h4>

                        <div className="space-y-2.5 text-xs sm:text-sm text-zinc-300">
                            <div className="flex items-center justify-center sm:justify-start gap-2.5">
                                <MapPin size={16} className="text-brand-red shrink-0" />
                                <span>Guillermo Prescott 232, Trujillo - Perú</span>
                            </div>

                            <div className="flex items-center justify-center sm:justify-start gap-2.5">
                                <Clock size={16} className="text-brand-yellow shrink-0" />
                                <span>Lun a Dom: 6:00 PM – 11:30 PM</span>
                            </div>

                            <div className="flex items-center justify-center sm:justify-start gap-2.5">
                                <Phone size={16} className="text-emerald-400 shrink-0" />
                                <span className="font-bold text-white">Delivery: 936 869 880</span>
                            </div>
                        </div>

                        <div className="pt-1">
                            <a
                                href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-red-hover hover:to-brand-yellow text-white font-bold text-xs shadow-md transition-all active:scale-95"
                            >
                                <FaWhatsapp size={15} />
                                <span>Hablar con un Asesor</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-500 text-center sm:text-left">
                    <p>
                        © {new Date().getFullYear()} <strong className="text-zinc-400 font-semibold">Lo Justo</strong>. Todos los derechos reservados.
                    </p>
                    <p className="flex items-center justify-center gap-1">
                        <span>Desarrollado con</span>
                        <Heart size={13} className="text-brand-red fill-brand-red" />
                        <span>por <strong className="text-zinc-300 font-semibold">FranKeSSJ10</strong></span>
                    </p>
                </div>

            </div>
        </footer>
    );
}