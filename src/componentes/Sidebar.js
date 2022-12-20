import React from "react";
import { Link  } from 'react-router-dom';

const Sidebar = () => {
  
  return (
        <aside className="md:w-80 lg:w-60 px-5 py-10 bg-emerald-500">
            
            
             <Link
                className="bg-yellow-300 w-full p-3 text-emerald-700 uppercase font-bold mt-5 text-center rounded-lg"
                to={"/crear-categoria"}
            >
        Crear Categoria
      </Link>

      <div className="py-10">
      <Link
                className="bg-yellow-300 w-full p-3 text-emerald-700 uppercase font-bold mt-5 text-center rounded-lg"
                to={"/admin"}
            >
        Listar Categorias
      </Link>

      </div>

      
      
        </aside>
    );
}

export default Sidebar;