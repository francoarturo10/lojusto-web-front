import { useEffect, useState, useRef } from "react";
import { catArray } from "../arrayObject/cartaObject";
import { Flame, CupSoda, PlusCircle, Sparkles, UtensilsCrossed } from "lucide-react";

export function SelectCat({ pasarId, activeId = 1 }) {
    const [categorias, setCategorias] = useState([]);
    const containerRef = useRef(null);

    useEffect(() => {
        setCategorias(catArray);
    }, []);

    // Scroll active item into view smoothly on mobile
    useEffect(() => {
        if (containerRef.current) {
            const activeElement = containerRef.current.querySelector(`[data-cat-id="${activeId}"]`);
            if (activeElement) {
                activeElement.scrollIntoView({
                    behavior: "smooth",
                    inline: "center",
                    block: "nearest",
                });
            }
        }
    }, [activeId]);

    const getCategoryEmoji = (id) => {
        switch (id) {
            case 1:
                return "🍔"; // Burger de carne
            case 2:
                return "🍗"; // Burger de pollo
            case 3:
                return "🌭"; // Burger de chorizo / choripan
            case 4:
                return "🍟"; // Salchis
            case 5:
                return "🔥"; // Alitas
            case 6:
                return "🍖"; // Pollo Broaster
            case 7:
                return "➕"; // Agregados
            case 8:
                return "🥤"; // Bebidas
            default:
                return "✨";
        }
    };

    return (
        <div className="w-full">
            {/* Scrollable pill container on mobile, wrapped flex on desktop */}
            <div
                ref={containerRef}
                className="flex items-center gap-2 sm:gap-3 overflow-x-auto no-scrollbar py-2 px-1 sm:px-0 sm:flex-wrap sm:justify-center"
            >
                {categorias.map((cat) => {
                    const isActive = activeId === cat.id;
                    return (
                        <button
                            key={cat.id}
                            data-cat-id={cat.id}
                            onClick={() => pasarId(cat.id)}
                            type="button"
                            className={`shrink-0 flex items-center gap-2 px-4 py-2.5 sm:px-5 sm:py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer select-none active:scale-95 ${
                                isActive
                                    ? "bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow text-white shadow-[0_4px_18px_rgba(225,29,72,0.35)] scale-105 border border-transparent"
                                    : "bg-[#181820] text-zinc-300 border border-white/10 hover:border-white/20 hover:text-white hover:bg-[#22222d]"
                            }`}
                        >
                            <span className="text-base sm:text-lg">{getCategoryEmoji(cat.id)}</span>
                            <span>{cat.nombre}</span>
                            {isActive && (
                                <span className="w-2 h-2 rounded-full bg-white animate-ping ml-1" />
                            )}
                        </button>
                    );
                })}
            </div>
        </div>
    );
}