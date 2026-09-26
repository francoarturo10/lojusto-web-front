import { useEffect, useState } from "react";
import { prodArray } from "../arrayObject/cartaObject";
import { FaWhatsapp } from "react-icons/fa";
import { CupSoda, Flame, Sparkles, Utensils } from "lucide-react";

export function ProdCarta({ obtenerId, searchQuery = "" }) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        let filtered = prodArray;

        // If category is selected
        if (obtenerId) {
            filtered = filtered.filter((prod) => prod.categoriaId === obtenerId);
        }

        // If search query is entered
        if (searchQuery.trim() !== "") {
            const query = searchQuery.toLowerCase();
            filtered = prodArray.filter(
                (p) =>
                    p.nombre.toLowerCase().includes(query) ||
                    p.descripcion.toLowerCase().includes(query)
            );
        }

        setProductos(filtered);
    }, [obtenerId, searchQuery]);

    const getWhatsAppLink = (product) => {
        const text = `Hola Lo Justo! Deseo pedir: *${product.nombre}* (S/. ${product.precio.toFixed(2)})`;
        return `https://wa.me/51936869880?text=${encodeURIComponent(text)}`;
    };

    // Helper to check if image is valid or beverage placeholder
    const isValidImage = (src) => {
        return src && src !== "./productos" && src !== "./productos/";
    };

    if (productos.length === 0) {
        return (
            <div className="text-center py-16 px-4 bg-[#141419] rounded-3xl border border-white/5 my-8">
                <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mx-auto mb-4 text-zinc-400">
                    <Utensils size={28} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">No se encontraron productos</h3>
                <p className="text-zinc-400 text-sm max-w-md mx-auto">
                    Intenta buscando con otra palabra o selecciona otra categoría de nuestro menú.
                </p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {productos.map((p) => {
                const isPromo = p.precio >= 14 || p.nombre.toLowerCase().includes("doble") || p.nombre.toLowerCase().includes("extrema");
                return (
                    <div
                        key={p.id}
                        className="group relative flex flex-col justify-between overflow-hidden rounded-2xl sm:rounded-3xl bg-gradient-to-b from-[#181822] to-[#101015] border border-white/10 hover:border-amber-400/50 shadow-lg hover:shadow-[0_12px_30px_rgba(225,29,72,0.2)] transition-all duration-300 hover:-translate-y-1.5"
                    >
                        {/* Background Ambient Glow */}
                        <div className="absolute top-0 right-0 w-36 h-36 bg-brand-red/5 rounded-full blur-2xl group-hover:bg-brand-yellow/15 transition-all duration-500 pointer-events-none" />

                        {/* Top Badge (if signature / promo) */}
                        {isPromo && (
                            <div className="absolute top-3 left-3 z-10">
                                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider bg-brand-red/90 text-white shadow-md">
                                    <Flame size={12} className="animate-pulse" />
                                    Favorito
                                </span>
                            </div>
                        )}

                        {/* Image Presentation */}
                        <div className="relative w-full h-44 sm:h-48 md:h-52 p-4 flex items-center justify-center overflow-hidden">
                            {isValidImage(p.imagen) ? (
                                <img
                                    src={p.imagen}
                                    alt={p.nombre}
                                    className="w-full h-full object-contain filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] group-hover:scale-110 group-hover:rotate-1 transition-transform duration-500 ease-out"
                                    loading="lazy"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center">
                                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-red/20 to-brand-yellow/20 border border-white/10 flex items-center justify-center text-brand-yellow group-hover:scale-110 transition-transform duration-300">
                                        <CupSoda size={40} />
                                    </div>
                                    <span className="text-xs text-zinc-400 mt-2 font-medium">Bebida Refrescante</span>
                                </div>
                            )}
                        </div>

                        {/* Product Details & Action */}
                        <div className="p-4 sm:p-5 bg-[#141419]/90 border-t border-white/5 flex flex-col flex-1 justify-between backdrop-blur-sm">
                            <div className="space-y-1 mb-4">
                                <div className="flex items-start justify-between gap-2">
                                    <h3 className="font-extrabold text-base sm:text-lg text-white group-hover:text-brand-yellow transition-colors leading-snug">
                                        {p.nombre}
                                    </h3>
                                </div>
                                <p className="text-xs sm:text-sm text-zinc-400 capitalize leading-relaxed line-clamp-2">
                                    {p.descripcion}
                                </p>
                            </div>

                            {/* Bottom row: Price & WhatsApp Action */}
                            <div className="pt-3 border-t border-white/5 flex items-center justify-between gap-3">
                                <div>
                                    <span className="text-[10px] text-zinc-400 uppercase font-semibold block">Precio</span>
                                    <span className="text-lg sm:text-xl font-black text-amber-400 tracking-tight">
                                        S/. {p.precio.toFixed(2)}
                                    </span>
                                </div>

                                <a
                                    href={getWhatsAppLink(p)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 text-white font-bold text-xs sm:text-sm shadow-md shadow-emerald-600/30 hover:shadow-emerald-600/50 hover:scale-105 active:scale-95 transition-all"
                                    title={`Pedir ${p.nombre} por WhatsApp`}
                                >
                                    <FaWhatsapp size={16} />
                                    <span>Pedir</span>
                                </a>
                            </div>

                        </div>
                    </div>
                );
            })}
        </div>
    );
}