import { useEffect, useState } from "react";

export function Slider({ slides = [] }) {
    const [index, setIndex] = useState(0);

    // slides debería ser ahora un array de objetos: 
    // [{ desktop: 'url_grande', mobile: 'url_vertical' }]

    const next = () => setIndex((prev) => (prev + 1) % slides.length);
    const prev = () => setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

    useEffect(() => {
        const id = setInterval(next, 3000);
        return () => clearInterval(id);
    }, [slides.length]);

    if (!slides.length) return null;

    return (

        <div className="relative w-full h-60 sm:h-60 md:h-125">
            {/* Carousel wrapper */}
            <div className="relative h-56 overflow-hidden rounded-base md:h-125">

                {slides.map((img, i) => (
                    <div
                        key={i}
                        className={`duration-700 ease-in-out ${index === i ? "block" : "hidden"}`}
                    >
                        <img
                            src={img}
                            alt={`slide-${i}`}
                            className="absolute block w-full h-60 md:h-125 -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 "
                        />
                    </div>
                ))}
            </div>

            {/* Indicators */}
            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-base ${index === i ? "bg-white" : "bg-white/50"}`}
                        aria-label={`Slide ${i + 1}`}
                    ></button>
                ))}
            </div>

            {/* Prev button */}
            <button
                type="button"
                onClick={prev}
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 
                    group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 
                    group-focus:ring-white dark:group-focus:ring-gray-800/70">
                    <svg className="w-5 h-5 text-white rtl:rotate-180" viewBox="0 0 24 24" fill="none">
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m15 19-7-7 7-7"
                        />
                    </svg>
                    <span className="sr-only">Previous</span>
                </span>
            </button>

            {/* Next button */}
            <button
                type="button"
                onClick={next}
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-base bg-white/30 dark:bg-gray-800/30 
                    group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 
                    group-focus:ring-white dark:group-focus:ring-gray-800/70">
                    <svg className="w-5 h-5 text-white rtl:rotate-180" viewBox="0 0 24 24" fill="none">
                        <path
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m9 5 7 7-7 7"
                        />
                    </svg>
                    <span className="sr-only">Next</span>
                </span>
            </button>
        </div>

    );
}