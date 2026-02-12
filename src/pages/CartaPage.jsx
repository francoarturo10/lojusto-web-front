import { useState } from "react";
import { SelectCat } from "../components/SelectCat";
import { ProdCarta } from "../components/ProdCarta";

export function CartaPage() {

    const [categoriaId, setCategoriaId] = useState(1);


    return (
        <div className="p-4">
            <h2 className="font-medium text-lg">Seleccione la categoria:</h2>
            
            <div className="flex flex-col gap-6">
                <SelectCat pasarId={setCategoriaId}/>
                <ProdCarta obtenerId={categoriaId}/>
            </div>
            
        </div>
    )
}