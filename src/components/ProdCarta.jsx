import { useEffect, useState } from "react";
import { prodArray } from "../arrayObject/cartaObject";

export function ProdCarta({obtenerId}) {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        if(!obtenerId) return;
        //api.get(`/productos/categoria/${obtenerId}`).then(res => setProductos(res.data));
        console.log(obtenerId);
        const porId = prodArray.filter( prod => prod.categoriaId === obtenerId);
        setProductos(porId);
        
    }, [obtenerId]);
    console.log(productos);
    
    return(
        <div className="flex flex-wrap gap-7">
            {
                productos.map( p => (
                    <div className="w-70 h-60 border border-brand-black/40 rounded-2xl m-auto text-center flex flex-col justify-around 
                            hover:shadow-2xl transition-all duration-300
                            hover:-translate-y-1
                            
                        "
                        key={p.id}
                    >
                        <div className="relative w-full overflow-hidden flex justify-center
                                object-contain hover:scale-110 transition-all duration-300
                            "
                        >
                            <img 
                                src={p.imagen} 
                                alt="imagen productos"
                                className="w-35 object-cover"
                            />
                        </div>
                        <div className="">
                            <h2 className="text-brand-red font-bold text-xl object-contain hover:scale-110 transition-all duration-300">{p.nombre}</h2>
                            <p className="font-semibold">{p.descripcion}</p>
                            <span className="text-brand-red font-bold text-2xl">s./ {p.precio}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}