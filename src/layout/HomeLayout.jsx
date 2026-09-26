import { Outlet, useLocation } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ArrowUp } from "lucide-react";

export function HomeLayout() {
    const { pathname } = useLocation();
    const [showTopBtn, setShowTopBtn] = useState(false);

    // Scroll to top on route change
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [pathname]);

    // Handle scroll-to-top button visibility
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const whatsappUrl = "https://wa.me/51936869880?text=Hola%20Lo%20Justo!%20Deseo%20hacer%20un%20pedido%20por%20favor.";

    return (
        <div className="min-h-screen bg-[#0a0a0c] text-zinc-100 flex flex-col font-sans selection:bg-brand-red selection:text-white relative overflow-x-hidden">
            {/* Ambient Background Glows */}
            <div className="fixed top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-brand-red/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="fixed top-1/3 right-0 w-96 h-96 bg-brand-yellow/10 rounded-full blur-3xl pointer-events-none -z-10" />
            <div className="fixed bottom-10 left-1/3 w-80 h-80 bg-brand-orange/10 rounded-full blur-3xl pointer-events-none -z-10" />

            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex-1 w-full">
                <Outlet />
            </main>

            {/* Footer */}
            <Footer />

            {/* Floating WhatsApp Action Button */}
            <aside aria-label="Contacto flotante" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end gap-3">
                {/* Scroll to Top Button */}
                {showTopBtn && (
                    <button
                        onClick={scrollToTop}
                        aria-label="Volver arriba"
                        className="w-11 h-11 rounded-full bg-[#1c1c24] border border-white/20 text-zinc-300 hover:text-white hover:bg-brand-red/80 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 cursor-pointer active:scale-95"
                    >
                        <ArrowUp size={20} />
                    </button>
                )}

                {/* WhatsApp Button with Tooltip and Badge */}
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Pedir por WhatsApp"
                    className="group relative flex items-center"
                >
                    {/* Tooltip on Desktop */}
                    <span className="hidden sm:inline-block mr-3 px-3 py-1.5 rounded-full bg-[#181820] border border-emerald-500/40 text-emerald-400 text-xs font-semibold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                        💬 ¡Haz tu pedido aquí!
                    </span>

                    {/* Pulse Ring */}
                    <span className="absolute -inset-1 rounded-full bg-emerald-500/40 animate-ping opacity-75"></span>

                    {/* Button Body */}
                    <div className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-emerald-600 to-green-400 text-white flex items-center justify-center shadow-[0_4px_20px_rgba(16,185,129,0.4)] transition-all duration-300 group-hover:scale-110 active:scale-95">
                        <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9" />
                        
                        {/* Notification Dot */}
                        <span className="absolute top-0 right-0 w-4 h-4 bg-brand-red rounded-full border-2 border-[#0a0a0c] animate-pulse"></span>
                    </div>
                </a>
            </aside>
        </div>
    );
}