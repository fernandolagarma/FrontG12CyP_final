import React from "react";
import { useNavigate } from 'react-router-dom';

const Header = () => {
    
    const navigate = useNavigate();

    const cerrarSesion = () =>{
        localStorage.removeItem("token");
        navigate("/");
      }


  return (
        <header className="px-14 py-5 bg-emerald-500 border-b">
            <div className="md:flex md:justify-between">
            <h2 className="text-4xl text-yellow-300 font-black text-center mb-5 md:mb-0">
                Campo y Plaza
            </h2>
                <h3 className="text-4xl text-yellow-300 font-black text-center mb-5 md:mb-0">
                    Panel de Administracion
                </h3>
            <div className="flex flex-col md:flex-row items-center gap-4">
            <input 
                type="submit"
                value="Cerrar Sesión"
                className="bg-emerald-600 mb-5 w-full py-2 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-emerald-300 transition-colors"
                onClick={cerrarSesion}
            />
            </div>
            </div>
        </header>
    );
}

export default Header;