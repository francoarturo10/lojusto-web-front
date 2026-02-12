import { Instagram } from "lucide-react";
import { FaTiktok, FaInstagram  } from "react-icons/fa";

export function Footer() {
    return (
        <footer className="bg-brand-yellow border-t">

            <div className="sm:flex sm:justify-around sm:items-center">

                <section className="flex flex-col gap-8 p-10">
                    <img className="w-40 m-auto" src="./logo-removebg.png" alt="" />
                    <div  className="flex gap-4 m-auto">
                        <div className="border p-2 rounded-full bg-bg-main">
                            <FaInstagram  className="text-brand-yellow" size={35}/>
                        </div>
                        <div className="border p-2 rounded-full bg-bg-main ">
                            <FaTiktok className="text-brand-yellow" size={35}/>
                        </div>
                    </div>
                </section>
                
                <section className="text-center sm:text-left">
                    <h2 className="text-3xl font-bold">Contáctanos o<br/>trabaje con nosotros</h2>
                    <div className="mt-4">
                        <span className="text-2xl text-brand-red font-extrabold">936869880</span>
                    </div>
                </section>

            </div>

            <section className="p-3 ">
                 <div className="border-t text-center text-lg">
                    <p>Lo Justo © 2026 | Todos los derechos reservados.</p>
                    <p>Desarrollado por <strong>FranKeSSJ10</strong></p>
                </div>
            </section>

        </footer>
    )
}