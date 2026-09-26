import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { SelectCat } from "../components/SelectCat";
import { ProdCarta } from "../components/ProdCarta";
import { catArray } from "../arrayObject/cartaObject";
import { Search, X, Flame, Sparkles, ShoppingBag } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export function CartaPage() {
    const [searchParams, setSearchParams] = useSearchParams();
    const catQuery = searchParams.get("categoria");

    const [categoriaId, setCategoriaId] = useState(
        catQuery ? parseInt(catQuery, 10) : 1
    );
    const [searchQuery, setSearchQuery] = useState("");

    // Sync state with URL parameter if changed externally
    useEffect(() => {
        if (catQuery) {
            const parsed = parseInt(catQuery, 10);
            if (!isNaN(parsed)) {
                setCategoriaId(parsed);
            }
        }
    }, [catQuery]);

    // Handle changing category and updating URL
    const handleSelectCategory = (id) => {
        setCategoriaId(id);
        setSearchQuery(""); // Clear search when switching category
        setSearchParams({ categoria: id.toString() });
    };

    const currentCatObj = catArray.find((c) => c.id === categoriaId);

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-8 sm:space-y-10">
            
            {/* Header Section */}
            <div className="text-center max-w-3xl mx-auto space-y-3">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-wider">
                    <Flame size={14} className="animate-pulse" />
                    Menú Completo
                </div>

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
                    Nuestra <span className="bg-gradient-to-r from-brand-red via-brand-orange to-brand-yellow bg-clip-text text-transparent">Carta Digital</span>
                </h1>

                <p className="text-xs sm:text-sm md:text-base text-zinc-400 max-w-xl mx-auto">
                    Elige tu categoría preferida o busca tu platillo favorito. Todos nuestros pedidos se preparan frescos al instante.
                </p>

                {/* Instant Search Bar */}
                <div className="pt-2 max-w-md mx-auto">
                    <div className="relative">
                        <input
                            type="text"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            placeholder="Buscar hamburguesa, alitas, salchipapas..."
                            className="w-full pl-11 pr-10 py-3 rounded-2xl bg-[#14141a] border border-white/10 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-all shadow-inner"
                        />
                        <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-400 w-5 h-5 pointer-events-none" />
                        
                        {searchQuery && (
                            <button
                                onClick={() => setSearchQuery("")}
                                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-white"
                                aria-label="Limpiar búsqueda"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </div>
            </div>

            {/* Category Filter Chips */}
            <section className="space-y-3">
                <div className="flex items-center justify-between px-1">
                    <h2 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-zinc-400 flex items-center gap-2">
                        <Sparkles size={14} className="text-brand-yellow" />
                        Categorías
                    </h2>
                    <span className="text-xs text-zinc-500 hidden sm:inline-block">
                        Desliza o haz clic para ver platos
                    </span>
                </div>

                <SelectCat pasarId={handleSelectCategory} activeId={categoriaId} />
            </section>

            {/* Active Category Title & Products List */}
            <section className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-4">
                    <div>
                        <h2 className="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
                            <span>{searchQuery ? `Resultados de: "${searchQuery}"` : currentCatObj?.nombre || "Nuestros Productos"}</span>
                        </h2>
                        <p className="text-xs sm:text-sm text-zinc-400 mt-0.5">
                            {searchQuery ? "Buscando en toda la carta" : "Selecciona tu favorito y pídelo por WhatsApp con un clic"}
                        </p>
                    </div>

                    <a
                        href="https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido%20personalizado."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-emerald-400 hover:text-emerald-300 text-xs sm:text-sm font-bold transition-colors w-fit"
                    >
                        <FaWhatsapp size={16} />
                        <span>¿Pedido especial? Escríbenos</span>
                    </a>
                </div>

                {/* Products Grid */}
                <ProdCarta obtenerId={categoriaId} searchQuery={searchQuery} />
            </section>

        </div>
    );
}