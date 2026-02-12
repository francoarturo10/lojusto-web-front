import { createBrowserRouter } from "react-router-dom";
import { HomeLayout } from "../layout/HomeLayout";
import { InicioPage } from "../pages/InicioPage";
import { CartaPage } from "../pages/CartaPage";
import { UbiPage } from "../pages/UbiPage";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout/>,
        children: [
            {
                index: true,
                element: <InicioPage/>
            },
            {
                path: '/carta',
                element: <CartaPage/>
            },
            {
                path: '/ubicacion',
                element: <UbiPage/>
            },
        ]
    }
])