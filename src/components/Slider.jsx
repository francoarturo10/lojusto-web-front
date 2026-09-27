import { useEffect, useState, useRef, useCallback } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";

export function Slider({ slides = [] }) {
    const [index, setIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const next = useCallback(() => {
        setIndex((prev) => (prev + 1) % slides.length);
    }, [slides.length]);

    const prev = useCallback(() => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }, [slides.length]);

    // Auto-advance carousel
    useEffect(() => {
        if (slides.length <= 1 || isHovered) return;
        const interval = setInterval(next, 4500);
        return () => clearInterval(interval);
    }, [next, slides.length, isHovered]);

    // Handle touch gestures for mobile & tablet swipe
    const handleTouchStart = (e) => {
        touchStartX.current = e.targetTouches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const diff = touchStartX.current - touchEndX.current;
        const minSwipeDistance = 50;

        if (diff > minSwipeDistance) {
            next(); // Swiped left -> show next
        } else if (diff < -minSwipeDistance) {
            prev(); // Swiped right -> show prev
        }

        touchStartX.current = 0;
        touchEndX.current = 0;
    };

    if (!slides.length) return null;

    return (
        <section
            aria-label="Promociones y novedades"
            className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 lg:px-8 py-2 sm:py-4"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div
                className="relative w-full h-56 sm:h-72 md:h-96 lg:h-112 xl:h-125 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_10px_35px_rgba(0,0,0,0.8)] border border-white/10 group select-none"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                {/* Slides with Cross-dissolve and subtle Zoom effect */}
                {slides.map((img, i) => {
                    const isActive = index === i;
                    return (
                        <div
                            key={i}
                            className={`absolute inset-0 transition-all duration-700 ease-out ${
                                isActive
                                    ? "opacity-100 scale-100 z-10 pointer-events-auto"
                                    : "opacity-0 scale-105 z-0 pointer-events-none"
                            }`}
                        >
                            <img
                                src={img}
                                alt={`Promoción ${i + 1}`}
                                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                                loading={i === 0 ? "eager" : "lazy"}
                            />
                            {/* Gradient Vignette overlay for better contrast */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0c] via-transparent to-black/30 pointer-events-none" />
                        </div>
                    );
                })}

                {/* Subtle Floating Banner Tag */}
                <div className="absolute top-3 left-3 sm:top-5 sm:left-5 z-20 pointer-events-none">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md text-amber-400 border border-amber-400/30 shadow-lg">
                        <Sparkles size={13} className="text-amber-400" />
                        Promos
                    </span>
                </div>

                {/* Navigation Buttons: Previous */}
                <button
                    type="button"
                    onClick={prev}
                    aria-label="Diapositiva anterior"
                    className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-brand-red backdrop-blur-md border border-white/10 hover:border-brand-red text-white flex items-center justify-center transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg"
                >
                    <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Navigation Buttons: Next */}
                <button
                    type="button"
                    onClick={next}
                    aria-label="Siguiente diapositiva"
                    className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 z-20 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-black/50 hover:bg-brand-red backdrop-blur-md border border-white/10 hover:border-brand-red text-white flex items-center justify-center transition-all duration-300 opacity-80 sm:opacity-0 sm:group-hover:opacity-100 hover:scale-110 active:scale-95 shadow-lg"
                >
                    <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>

                {/* Modern Indicator Bar */}
                <div className="absolute bottom-3 sm:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            aria-label={`Ir a diapositiva ${i + 1}`}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === i
                                    ? "w-7 sm:w-9 bg-gradient-to-r from-brand-red to-brand-yellow shadow-[0_0_10px_rgba(245,158,11,0.6)]"
                                    : "w-2 bg-white/40 hover:bg-white/80"
                            }`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}