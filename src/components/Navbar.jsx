import { Menu, X, Flame, Home, BookOpen, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { links } from "../links/links";
import { NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    // Close mobile menu on resize to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener("resize", handleResize);
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("resize", handleResize);
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const iconMap = {
        1: <Home size={18} />,
        2: <BookOpen size={18} />,
        3: <MapPin size={18} />
    };

    return (
        <header
            className={`sticky top-0 z-50 transition-all duration-300 ${
                isScrolled
                    ? "bg-[#0a0a0c]/95 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.7)] border-b border-white/10"
                    : "bg-[#0a0a0c]/80 backdrop-blur-sm border-b border-white/5"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-18 sm:h-20">
                    
                    {/* Brand Logo & Name */}
                    <Link
                        to="/"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-3 group transition-transform duration-300 hover:scale-105"
                    >
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-brand-red to-brand-yellow rounded-full blur opacity-40 group-hover:opacity-80 transition duration-300"></div>
                            <img
                                className="relative w-12 h-12 sm:w-14 sm:h-14 object-contain filter drop-shadow-[0_2px_8px_rgba(245,158,11,0.3)]"
                                src="/logo-removebg.png"
                                alt="Logo de Lo Justo"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex items-center gap-1.5">
                                <span className="text-xl sm:text-2xl font-black tracking-tight text-white group-hover:text-brand-yellow transition-colors">
                                    LO JUSTO
                                </span>
                                <Flame className="w-5 h-5 text-brand-red animate-pulse" />
                            </div>
                            <span className="text-[10px] sm:text-xs tracking-widest text-zinc-400 uppercase font-semibold">
                                Burgers • Alitas • Salchis
                            </span>
                        </div>
                    </Link>

                    {/* Desktop / Tablet Nav Links */}
                    <nav className="hidden md:flex items-center gap-1 lg:gap-3">
                        {links.map((link) => (
                            <NavLink
                                key={link.id}
                                to={link.href}
                                className={({ isActive }) =>
                                    `relative px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                                        isActive
                                            ? "text-brand-yellow bg-white/5 shadow-inner"
                                            : "text-zinc-300 hover:text-white hover:bg-white/5"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        <span className={isActive ? "text-brand-yellow" : "text-zinc-400"}>
                                            {iconMap[link.id]}
                                        </span>
                                        {link.title}
                                        {isActive && (
                                            <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow rounded-full animate-pulse" />
                                        )}
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>

                    {/* Right Action: Order CTA button (Desktop/Tablet) */}
                    <div className="hidden md:flex items-center gap-3">
                        <a
                            href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido%20por%20favor."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="relative group overflow-hidden rounded-xl p-[1px] focus:outline-none"
                        >
                            <span className="absolute inset-0 bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow rounded-xl group-hover:opacity-100 transition-opacity duration-300"></span>
                            <span className="relative flex items-center gap-2 px-4 py-2 rounded-[11px] bg-[#121217] transition-all duration-300 group-hover:bg-opacity-0 text-sm font-bold text-white group-hover:shadow-[0_0_20px_rgba(225,29,72,0.4)]">
                                <FaWhatsapp className="text-emerald-400 text-lg group-hover:text-white transition-colors" />
                                <span>Pedir Ahora</span>
                            </span>
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden items-center gap-2">
                        <button
                            type="button"
                            onClick={toggle}
                            aria-expanded={isOpen}
                            aria-label="Abrir menú"
                            className="p-2.5 rounded-xl bg-[#16161d] border border-white/10 text-zinc-300 hover:text-white hover:border-brand-yellow/50 transition-all duration-200 active:scale-95"
                        >
                            {isOpen ? <X size={24} className="text-brand-red" /> : <Menu size={24} className="text-brand-yellow" />}
                        </button>
                    </div>

                </div>
            </div>

            {/* Mobile Navigation Drawer */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out border-b border-white/10 bg-[#0e0e13]/98 backdrop-blur-xl ${
                    isOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
                }`}
            >
                <div className="px-4 space-y-2">
                    {links.map((link) => (
                        <NavLink
                            key={link.id}
                            to={link.href}
                            onClick={() => setIsOpen(false)}
                            className={({ isActive }) =>
                                `flex items-center gap-3 px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                                    isActive
                                        ? "bg-gradient-to-r from-brand-red/20 to-brand-yellow/10 text-brand-yellow border-l-4 border-brand-yellow"
                                        : "text-zinc-300 hover:text-white hover:bg-white/5"
                                }`
                            }
                        >
                            <span>{iconMap[link.id]}</span>
                            <span>{link.title}</span>
                        </NavLink>
                    ))}

                    {/* Mobile Direct Action Button */}
                    <div className="pt-2 border-t border-white/10">
                        <a
                            href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido%20por%20favor."
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setIsOpen(false)}
                            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white font-bold text-sm shadow-lg shadow-brand-red/25 active:scale-95 transition-transform"
                        >
                            <FaWhatsapp size={20} />
                            <span>Hacer Pedido por WhatsApp</span>
                        </a>
                    </div>
                </div>
            </div>
        </header>
    );
}