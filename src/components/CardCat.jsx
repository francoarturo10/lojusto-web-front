import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { catArray } from "../arrayObject/cartaObject";
import { ArrowUpRight, Utensils, CupSoda } from "lucide-react";

export function CardCat() {
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        setCategorias(catArray);
    }, []);

    return (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {categorias.map((cat) => (
                <Link
                    to={`/carta?categoria=${cat.id}`}
                    key={cat.id}
                    className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181820] to-[#111116] border border-white/10 hover:border-amber-400/50 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_30px_rgba(245,158,11,0.25)] transition-all duration-300 hover:-translate-y-1.5 active:scale-[0.98]"
                >
                    {/* Ambient Glow in Card Background */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-brand-red/10 rounded-full blur-2xl group-hover:bg-brand-yellow/20 transition-all duration-500 pointer-events-none" />

                    {/* Image Container */}
                    <div className="relative w-full h-36 sm:h-44 md:h-48 p-3 flex items-center justify-center overflow-hidden">
                        {cat.image && cat.image !== "./productos/" ? (
                            <img
                                src={cat.image}
                                alt={cat.nombre}
                                className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-115 group-hover:-rotate-1 transition-transform duration-500 ease-out"
                                loading="lazy"
                            />
                        ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-amber-400">
                                <div className="w-16 h-16 rounded-full bg-amber-400/10 border border-amber-400/20 flex items-center justify-center group-hover:scale-115 transition-transform duration-500">
                                    <CupSoda size={32} />
                                </div>
                            </div>
                        )}

                        {/* Top Category Badge */}
                        <div className="absolute top-3 left-3 opacity-90 group-hover:opacity-100 transition-opacity">
                            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-black/60 border border-white/10 text-zinc-300">
                                #{cat.id}
                            </span>
                        </div>

                        {/* Arrow icon button */}
                        <div className="absolute top-3 right-3 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-brand-yellow group-hover:text-black text-white flex items-center justify-center transition-all duration-300 transform group-hover:rotate-45">
                            <ArrowUpRight size={16} />
                        </div>
                    </div>

                    {/* Category Label Footer */}
                    <div className="p-3 sm:p-4 bg-[#141419]/90 border-t border-white/5 backdrop-blur-sm">
                        <div className="flex items-center justify-between">
                            <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-brand-yellow transition-colors line-clamp-1">
                                {cat.nombre}
                            </h3>
                        </div>
                        <p className="text-[11px] sm:text-xs text-zinc-400 mt-0.5 flex items-center gap-1 group-hover:text-zinc-300">
                            <span>Ver opciones</span>
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}