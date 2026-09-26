import { Slider } from "../components/Slider";
import { CardCat } from "../components/CardCat";
import { Link } from "react-router-dom";
import { Flame, Sparkles, Clock, Truck, ShieldCheck, ArrowRight, Heart, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function InicioPage() {
    const banners = [
        // "/banners/banner1.png",
        "/banners/banner2.webp",
        "/banners/banner3.webp",
        "/banners/banner4.png",
    ];

    const highlights = [
        {
            icon: <Flame className="w-5 h-5 sm:w-6 sm:h-6 text-brand-red" />,
            title: "Sabor a la Parrilla",
            description: "100% carne seleccionada y preparación al momento.",
        },
        {
            icon: <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-brand-yellow" />,
            title: "Salsas de la Casa",
            description: "Acevichada, BBQ especial, olivo y más recetas secretas.",
        },
        {
            icon: <Truck className="w-5 h-5 sm:w-6 sm:h-6 text-brand-orange" />,
            title: "Delivery en Trujillo",
            description: "Tu pedido caliente y listo hasta la puerta de tu casa.",
        },
        {
            icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-400" />,
            title: "Calidad Garantizada",
            description: "Ingredientes frescos del día y porciones bien servidas.",
        },
    ];

    return (
        <div className="space-y-12 sm:space-y-16 md:space-y-24 pb-12">

            {/* 1. Hero Carousel */}
            <Slider slides={banners} />

            {/* 2. Feature Highlights (Mobile scroll / Tablet & Desktop grid) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
                    {highlights.map((item, idx) => (
                        <div
                            key={idx}
                            className="p-4 sm:p-5 rounded-2xl bg-gradient-to-b from-[#181820] to-[#121217] border border-white/10 hover:border-amber-400/40 shadow-lg hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)] transition-all duration-300 hover:-translate-y-1 flex flex-col justify-start items-start gap-2 sm:gap-3 group"
                        >
                            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-xs sm:text-sm md:text-base font-bold text-white group-hover:text-brand-yellow transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 leading-relaxed line-clamp-2 sm:line-clamp-none">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. Section: Nuestra Carta */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider mb-3">
                        <Flame size={14} className="text-brand-red animate-pulse" />
                        Explora Nuestro Menú
                    </div>
                    <h2 className="text-2xl sm:text-3xl md:text-5xl font-black text-white tracking-tight">
                        Nuestra <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">Carta</span>
                    </h2>
                    <p className="text-xs sm:text-sm md:text-base text-zinc-400 mt-2 sm:mt-3">
                        Selecciona tu categoría favorita para ver todas nuestras opciones preparadas al instante con los mejores ingredientes.
                    </p>
                </div>

                {/* Categories Grid Component */}
                <CardCat />

                {/* Direct CTA button to full menu */}
                <div className="mt-8 sm:mt-10 text-center">
                    <Link
                        to="/carta"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-red to-brand-orange hover:from-brand-red-hover hover:to-brand-yellow text-white font-bold text-sm sm:text-base shadow-lg shadow-brand-red/30 hover:scale-105 active:scale-95 transition-all duration-300"
                    >
                        <span>Ver Toda la Carta Completa</span>
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </section>

            {/* 4. Section: Sobre Nosotros (Responsive Redesign) */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-3xl bg-gradient-to-b from-[#181822] to-[#0f0f14] border border-white/10 p-6 sm:p-8 md:p-12 overflow-hidden shadow-2xl">
                    
                    {/* Background decorative glow */}
                    <div className="absolute -top-24 -right-24 w-80 h-80 bg-brand-yellow/15 rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-brand-red/15 rounded-full blur-3xl pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                        
                        {/* Text Content (Left Column) */}
                        <div className="lg:col-span-6 space-y-5 text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider">
                                <Heart size={14} className="text-brand-yellow" />
                                Pasión Trujillana
                            </div>

                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
                                Sabor que Une a la <br className="hidden sm:inline" />
                                <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">
                                    Gente en Trujillo
                                </span>
                            </h2>

                            <p className="text-sm sm:text-base md:text-lg text-zinc-300 leading-relaxed font-normal">
                                En <strong className="text-white font-bold">Lo Justo</strong> cada mordida es un momento para compartir y cada visita, una celebración entre amigos y familia. Nos enfocamos en la calidad, el cariño de la cocina de barrio y un toque artesanal que hace de cada hamburguesa, alita o salchipapa una experiencia memorable.
                            </p>

                            <div className="grid grid-cols-2 gap-3 pt-2">
                                <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-left">
                                    <span className="text-brand-yellow font-extrabold text-xl sm:text-2xl block">100%</span>
                                    <span className="text-xs text-zinc-400">Carne e ingredientes frescos</span>
                                </div>
                                <div className="p-3 rounded-xl bg-black/30 border border-white/5 text-left">
                                    <span className="text-brand-red font-extrabold text-xl sm:text-2xl block">+6 Salsas</span>
                                    <span className="text-xs text-zinc-400">Recetas caseras especiales</span>
                                </div>
                            </div>

                            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-4">
                                <Link
                                    to="/ubicacion"
                                    className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold text-sm flex items-center gap-2 border border-white/10 transition-colors"
                                >
                                    <MapPin size={18} className="text-brand-yellow" />
                                    <span>Conoce Nuestro Local</span>
                                </Link>

                                <a
                                    href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido%20por%20favor."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-sm flex items-center gap-2 shadow-lg shadow-emerald-600/30 transition-all active:scale-95"
                                >
                                    <FaWhatsapp size={18} />
                                    <span>Pide por Delivery</span>
                                </a>
                            </div>
                        </div>

                        {/* Visual Showcase (Right Column) */}
                        <div className="lg:col-span-6 grid grid-cols-2 gap-3 sm:gap-4 items-center">
                            {/* Card 1: Doble Bacon Cheese */}
                            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-[#141419] border border-white/10 hover:border-brand-red/60 p-4 transition-all duration-300 hover:-translate-y-1 shadow-xl">
                                <span className="absolute top-2 left-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-red/80 text-white">
                                    La Reina
                                </span>
                                <img
                                    src="/productos/doble-bc.png"
                                    alt="Burger Doble Bacon Cheese"
                                    className="w-full h-36 sm:h-48 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                                />
                                <div className="mt-2 text-center">
                                    <h4 className="text-xs sm:text-sm font-bold text-white">Doble Bacon Cheese</h4>
                                    <span className="text-xs font-extrabold text-brand-yellow">S/. 14.00</span>
                                </div>
                            </div>

                            {/* Card 2: Alitas Broaster */}
                            <div className="relative group overflow-hidden rounded-2xl sm:rounded-3xl bg-[#141419] border border-white/10 hover:border-brand-yellow/60 p-4 transition-all duration-300 hover:-translate-y-1 shadow-xl mt-4 sm:mt-8">
                                <span className="absolute top-2 left-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-yellow text-black font-extrabold">
                                    ¡Para Compartir!
                                </span>
                                <img
                                    src="/alitas/alitas-25.png"
                                    alt="Alitas Broaster"
                                    className="w-full h-36 sm:h-48 object-contain group-hover:scale-110 transition-transform duration-500 filter drop-shadow-lg"
                                />
                                <div className="mt-2 text-center">
                                    <h4 className="text-xs sm:text-sm font-bold text-white">Alitas Broaster</h4>
                                    <span className="text-xs font-extrabold text-brand-yellow">Desde S/. 12.00</span>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </section>

            {/* 5. Quick WhatsApp Promo Banner */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative rounded-2xl sm:rounded-3xl bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow p-6 sm:p-10 shadow-2xl overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
                    <div className="relative z-10 space-y-2">
                        <span className="inline-block px-3 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white text-xs font-bold uppercase tracking-wider">
                            🛵 ¡Atención Rápida y Caliente!
                        </span>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white">
                            ¿Listo para calmar ese antojo?
                        </h3>
                        <p className="text-white/90 text-sm sm:text-base max-w-xl">
                            Escríbenos directamente por WhatsApp y te tomamos el pedido al instante. ¡Delivery a todo Trujillo!
                        </p>
                    </div>

                    <a
                        href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Quiero%20hacer%20un%20pedido."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative z-10 shrink-0 px-6 py-3.5 rounded-xl bg-black hover:bg-zinc-900 text-white font-black text-sm sm:text-base shadow-xl flex items-center gap-2.5 hover:scale-105 active:scale-95 transition-all"
                    >
                        <FaWhatsapp className="text-emerald-400 text-xl" />
                        <span>Hacer Mi Pedido Ahora</span>
                    </a>
                </div>
            </section>

        </div>
    );
}