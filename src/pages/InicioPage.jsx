import { Slider } from "../components/Slider";
import { CardCat } from "../components/CardCat";

export function InicioPage() {
//724, 340
    return (
        <div>

            <div className="w-full h-60 sm:h-60 md:h-125 ">

                <Slider
                    slides={[
                        "./banners/banner1.png",
                        "./banners/banner2.webp",
                        "./banners/banner3.webp",
                        "./banners/banner4.png",
                    ]}
                />
            </div>

            <div>
                <h2 className="text-brand-red font-extrabold text-center p-5 text-2xl">
                    Nuestra Carta
                </h2>
                <div>
                    <CardCat />
                </div>
            </div>

            <div className="m-auto">
                <div className="p-3 grid grid-cols-2 gap-3 md:grid-cols-[1fr_1fr_1fr] md:grid-rows-[auto_auto_auto] md:p-6"  >

                    {/* BANNER (col 2–3, fila 1–2) */}
                    <img
                        className="
                        aspect-3/2 rounded-2xl col-span-2 m-auto
                        md:col-start-2 md:col-span-2
                        md:[grid-row:1/3]
                        md:w-auto
                        md:h-124
                        md:object-cover
                        "
                        src="./banners/banner4.png"
                        alt="banner2"
                        />

                    {/* TEXTO (col 1, fila 1–3) */}
                    <div
                        className="
                            col-span-2 text-center
                            md:col-start-1
                            md:[grid-row:1/4]
                            md:w-50
                            md:flex md:flex-col md:justify-center md:gap-8
                            lg:w-100
                        "
                    >
                        <h2 className="
                                font-extrabold
                              text-brand-red
                                text-2xl 
                                md:text-4xl
                                
                            "
                        >
                            Sobre Nosotros
                        </h2>
                        <p className="text-brand-black font-bold md:text-2xl"
                        >
                            Lo Justo es el lugar donde cada mordida es un momento para compartir y cada visita, una celebración de la amistad.
                            Nos enfocamos en la calidad y en crear un ambiente donde los amigos pueden hacer de cualquier momento una experiencia
                            memorable. #SaborYCalidad</p>
                    </div>

                    {/* ROYAL (fila 3, col 2) */}
                    <img
                        className="
                            md:col-start-2
                            md:row-start-3
                            w-70 h-auto object-cover
                            md:m-auto
                        "
                        src="./productos/doble-bc.png"
                        alt="royal"
                    />

                    {/* PAPAS (fila 3, col 3) */}
                    <img
                        className="
                            md:col-start-3
                            md:row-start-3
                            w-70 h-auto object-cover
                            md:m-auto
                        "
                        src="./alitas/alitas-25.png"
                        alt="papas fritas"
                        />
                </div>
            </div>


        </div>
    )
}