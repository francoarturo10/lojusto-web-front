import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function HomeLayout(){
    return(
        <div className="bg-amber-200">
            <div>
                <Navbar/>
            </div>

            <div>
                <Outlet/>
            </div>

            <div>
                <Footer/>
            </div>
        </div>
    )
}