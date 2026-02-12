import { Menu, X } from "lucide-react";
import { links } from "../links/links";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toogle = () => setIsOpen(!isOpen);
    return (
        <header className="grid grid-cols-2 bg-brand-red">

            <div className="flex justify-start p-3 md:justify">
                <img className="w-15" src="./logo-removebg.png" alt="logo de lo justo" />
            </div>
            
            <button
                className="flex justify-end items-center p-3 md:hidden"
                onClick={toogle}>
                {
                    isOpen ? <X size={24}/>:<Menu size={24}/>
                }
            
            </button>
        
            <nav className={`
                col-span-2 md:col-span-1 text-center transition-all duration-200           
                ${isOpen ?
                    "flex flex-col bg-brand-yellow w-full md:flex md:flex-row md:justify-around"
                    :
                    "hidden md:flex md:flex-row md:justify-around md:items-center"
                }      
            `}>
                {links.map(link => (
                    <div key={link.id} className={`hover:border-b p-2
                        
                    `}>
                        <NavLink
                            onClick={() => setIsOpen(false)}
                            className="font-bold"
                            
                            to={link.href}
                            >
                            {link.title}
                        </NavLink>
                    </div>
                ))}
            </nav>
        </header>
    )
}