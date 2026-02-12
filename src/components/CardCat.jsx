import { useEffect, useState } from "react";

import { catArray } from "../arrayObject/cartaObject";

export function CardCat() {
    
    const [categorias, setCategorias] = useState([]);
    

    useEffect(() => {
        setCategorias(catArray);
    }, []);
    
    console.log(categorias);
    return(
        <div className="grid grid-cols-1 gap-4 p-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 lg:w-3/4 lg:m-auto">

            {
                categorias.map((cat) => (
                    <div className="relative border border-brand-red/40 bg-brand-yellow/50 overflow-hidden rounded-xl 
                            hover:shadow-2xl transition-all duration-300
                            hover:-translate-y-1
                    " key={cat.id}>

                        <div className="rounded-xl object-contain hover:scale-110 transition-all duration-300">
                            <img src={cat.image} alt="imagen categorias" className="w-full h-full object-cover" />
                        </div>
                        <p className="absolute w-full bottom-0 left-0 text-2xl text-brand-black font-bold bg-brand-red/50 p-2">
                            {cat.nombre}
                        </p>
                    </div>

                ))
            }
            
        </div>
    )
}