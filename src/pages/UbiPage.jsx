import { useState } from "react";
import { MapPin, Clock, Phone, Navigation, Copy, Check, ExternalLink, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function UbiPage() {
    const [copied, setCopied] = useState(false);
    const address = "Guillermo Prescott 232, Trujillo 13007, Perú";
    const googleMapsUrl = "https://maps.google.com/?q=Guillermo+Prescott+232+Trujillo+Peru";

    const handleCopy = () => {
        navigator.clipboard.writeText(address);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-2xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-yellow/10 border border-brand-yellow/30 text-brand-yellow text-xs font-bold uppercase tracking-wider">
                    <MapPin size={14} className="text-brand-yellow animate-bounce" />
                    Punto de Sabor
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    Visítanos en <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">Trujillo</span>
                </h1>
                <p className="text-xs sm:text-sm md:text-base text-zinc-400">
                    Ven con tus amigos o familia a disfrutar del auténtico sabor de nuestras burgers y alitas, o pide por delivery desde casa.
                </p>
            </div>

            {/* 2-Column Responsive Layout (Tablet & Desktop Split) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
                
                {/* Information Cards (Left Column) */}
                <div className="lg:col-span-5 flex flex-col justify-between gap-4">
                    
                    {/* Card 1: Dirección */}
                    <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181822] to-[#121217] border border-white/10 shadow-xl space-y-3 group hover:border-amber-400/40 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-brand-red/20 text-brand-red flex items-center justify-center">
                                <MapPin size={22} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Dirección</h3>
                                <p className="text-xs text-zinc-400">Trujillo, La Libertad</p>
                            </div>
                        </div>

                        <p className="text-base sm:text-lg font-bold text-zinc-100">
                            Guillermo Prescott 232
                        </p>
                        <p className="text-xs text-zinc-400">
                            Urb. Vista Bella / Zona Trujillo central.
                        </p>

                        <div className="pt-2 flex flex-wrap gap-2">
                            <a
                                href={googleMapsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-brand-red hover:bg-brand-red-hover text-white text-xs font-bold transition-all shadow-md active:scale-95"
                            >
                                <Navigation size={14} />
                                <span>Abrir en Google Maps</span>
                                <ExternalLink size={12} />
                            </a>

                            <button
                                onClick={handleCopy}
                                type="button"
                                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white text-xs font-medium transition-colors"
                            >
                                {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                                <span>{copied ? "¡Copiado!" : "Copiar"}</span>
                            </button>
                        </div>
                    </div>

                    {/* Card 2: Horarios */}
                    <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181822] to-[#121217] border border-white/10 shadow-xl space-y-3 group hover:border-amber-400/40 transition-all">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-brand-yellow/20 text-brand-yellow flex items-center justify-center">
                                    <Clock size={22} />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">Horario de Atención</h3>
                                    <p className="text-xs text-zinc-400">Todos los días</p>
                                </div>
                            </div>

                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping mr-1" />
                                Abierto
                            </span>
                        </div>

                        <div className="bg-black/30 rounded-xl p-3 border border-white/5 flex items-center justify-between">
                            <span className="text-sm font-semibold text-zinc-300">Lunes a Domingo:</span>
                            <span className="text-sm font-black text-brand-yellow">6:30 PM – 11:00 PM</span>
                        </div>
                        <p className="text-xs text-zinc-400">
                            Atención presencial en mesa y pedidos para llevar o delivery continuo.
                        </p>
                    </div>

                    {/* Card 3: Contacto & Pedidos */}
                    <div className="p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181822] to-[#121217] border border-white/10 shadow-xl space-y-3 group hover:border-amber-400/40 transition-all">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                                <Phone size={22} />
                            </div>
                            <div>
                                <h3 className="text-sm font-bold text-white uppercase tracking-wider">Teléfono & Delivery</h3>
                                <p className="text-xs text-zinc-400">Atención rápida</p>
                            </div>
                        </div>

                        <div className="flex items-center justify-between pt-1">
                            <div>
                                <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Número de Pedidos</span>
                                <span className="text-xl sm:text-2xl font-black text-white tracking-wide">
                                    936 869 880
                                </span>
                            </div>

                            <a
                                href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido%20o%20consultar%20la%20ubicaci%C3%B3n."
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-xs sm:text-sm shadow-lg shadow-emerald-600/30 active:scale-95 transition-all"
                            >
                                <FaWhatsapp size={18} />
                                <span>Escribir</span>
                            </a>
                        </div>
                    </div>

                </div>

                {/* Interactive Map (Right Column) */}
                <div className="lg:col-span-7 flex flex-col">
                    <div className="relative w-full h-80 sm:h-96 md:h-110 lg:h-full min-h-[380px] lg:min-h-[480px] rounded-2xl sm:rounded-3xl overflow-hidden border border-white/15 shadow-[0_10px_35px_rgba(0,0,0,0.8)] group">
                        
                        {/* Interactive Google Map iframe */}
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3949.858228686733!2d-79.01295647103812!3d-8.115914236245292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91ad17d34df9cc2d%3A0xf82e04f1c718eacf!2sGuillermo%20Prescott%20232%2C%20Trujillo%2013007!5e0!3m2!1ses-419!2spe!4v1770415560541!5m2!1ses-419!2spe"
                            className="w-full h-full filter contrast-105"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Ubicación de Lo Justo en Google Maps"
                        ></iframe>

                        {/* Floating pill in map */}
                        <div className="absolute top-4 left-4 z-10 pointer-events-none">
                            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-black/80 backdrop-blur-md border border-white/20 text-white text-xs font-bold shadow-lg">
                                <Sparkles size={14} className="text-amber-400" />
                                Guillermo Prescott 232, Trujillo
                            </span>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    );
}