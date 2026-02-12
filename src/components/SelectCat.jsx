import { useEffect, useState } from "react"
import { catArray } from "../arrayObject/cartaObject";
//import api from "../../api/axios";

export function SelectCat({pasarId}) {

    const [categorias, setCategorias] = useState([]);
    

    useEffect(() => {
        //api.get("/categorias").then(res => setCategorias(res.data))
        setCategorias(catArray)
    }, []);

    return(
        <div className="w-full flex-wrap flex justify-around gap-4 ">
            {
                categorias.map( cat => (
                    <button 
                        key={cat.id}
                        onClick={()=>pasarId(cat.id)}
                        className="border border-brand-black/40 rounded-2xl p-2  focus:bg-brand-linear
                            hover:shadow-2xl transition-all duration-300
                            hover:-translate-y-1
                        "
                    >
                        <p>{cat.nombre}</p>
                        
                    </button>
                ))
            }
        </div>

    )
}