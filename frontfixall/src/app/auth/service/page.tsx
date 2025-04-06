//Esta es la pagina del catalogo de servicios, donde se encuentran los servicios que ofrece la aplicacion.//
export default function Servicios() {
    return (
      //El primer elemento div es el contenedor principal de la pagina.//
      //En el elemento style se agrga la imagen de fondo, y se ajustan las de los 4 bloques de servicios, y el elemento que los contiene  //
      <div className="min-h-screen bg-gray-200 flex flex-col items-center justify-center text-center p-6">  
        <style>
                {`
                    #container {
                    background-color:white; /* Fondo blanco */
                    border-radius: 10px; /* Bordes redondeados */
                    border: 2px solid #ccc; /* Borde gris claro */
                    height: 450px; /* Altura del contenedor */
                    padding: 60px; 
                    }
                    #Reparación {
                    background-image: url('https://static.vecteezy.com/system/resources/previews/002/885/416/large_2x/technician-repairing-inside-of-mobile-phone-by-soldering-iron-integrated-circuit-the-concept-of-data-hardware-technology-free-photo.jpg');
                    background-size: cover;
                    height: 100px; 
                    padding: 30px;
                    margin-top: 20px;
                    }
                    #Reparación:hover {
                    transform: scale(1.05);
                    transition: all 0.3s ease-in-out;
                    }
                    #Instalación {
                    background-image: url('https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/how-to-install-a-washing-machine-step-1.jpg');
                    background-size: cover;
                    height: 100px;
                    padding: 30px;
                    margin-top: 20px;
                    }
                    #Instalación:hover {
                    transform: scale(1.05);
                    transition: all 0.3s ease-in-out;
                    }
                    #Mantenimiento {    
                    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3ecbgghGcx2o4CDJ1SflS_u7IZ0uwL5F--Q&s');
                    background-size: 450px 150px;
                    height: 100px;
                    padding: 30px;
                    margin-top: 20px;
                    }
                    #Mantenimiento:hover {          
                    transform: scale(1.05);
                    transition: all 0.3s ease-in-out;
                    }
                    #Diagnóstico {
                    background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqyAXn9bS2KpKB2CbCTFQTK3ozNu2RW_dLJA&s');
                    background-size: cover;
                    height: 100px;
                    padding: 30px;
                    margin-top: 20px;
                    }
                    #Diagnóstico:hover {       
                    transform: scale(1.05);
                    transition: all 0.3s ease-in-out;     
                    }    
                `}
            </style>

        <header className="mb-12">
          <h1 className="text-4xl font-bold text-blue-600">Catálogo de Servicios</h1>
        </header>
        
        <div id="container" className="p-8 rounded-lg shadow-lg w-full max-w-4xl h-full border border-gray-300 border-solid border-3">
          <h2 className="text-2xl font-bold mb-6 text-center">Servicios Disponibles</h2>     
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl " >
            <div id="Reparación" className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-blue-200">Reparación</h3>
            </div>
            <div id="Instalación"className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-500">Instalación</h3>
            </div>
            <div id="Mantenimiento" className="bg-white p-6 rounded-lg shadow-lg">
              <h3 className="text-xl font-bold text-blue-400">Mantenimiento</h3>
              
            </div>
            <div id="Diagnóstico" className="bg-white p-6 rounded-lg shadow-lg">        
                <h3 className="text-xl font-bold text-blue-400">Diagnóstico</h3>
               
            </div>
           </div> 
        </div>
        <div className="mt-10">
        <a href="/auth/signup" className="bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">
          Únete Ahora
        </a>
        </div>
        <footer className="bg-gray-800 text-white text-center py-4 mt-12 w-full">
          <p>&copy; 2025 Fixall. Todos los derechos reservados.</p>
          <p className="text-sm">Desarrollado por Talento Tech</p>
        </footer>
      </div>
      
      
    );
}
  