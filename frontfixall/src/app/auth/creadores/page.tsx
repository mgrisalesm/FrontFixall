//Esta es la pagina que provee informacion acerca de los desarrolladores del proyecto//
export default function Creadores() {
    return (
       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center p-6 mb-50">
        <h1 className="text-4xl font-bold text-blue-600 mb-6">Desarrolladores</h1>
        <p className="text-gray-700 mb-10">Conoce a los creadores de Fixall:</p>
        <div className="flex flex-col max-w-4xl ">
          <div className="bg-white p-8 rounded-lg shadow-lg mb-6 border border-gray-300 border-solid border-3">
            <img src="https://avatars.githubusercontent.com/u/123180374?v=4" alt="Desarrollador 1" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <p className="">Jose García, encargado del desarrollo del Backend y la base de datos</p>
           </div>
          <div className="bg-white p-8 rounded-lg shadow-lg mb-6 border border-gray-300 border-solid border-3"> 
            <img src="https://media.licdn.com/dms/image/v2/D5603AQFqSKx7s2y2_A/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1729291664958?e=1749081600&v=beta&t=UQM1oL4GfW_iCkKn_VJQqWEtZtQB5-aMXKU3qSmVleU" alt="Desarrollador 2" className="w-32 h-32 rounded-full mx-auto mb-4" />
            <p>Mateo Grisales, encargado del desarrollo del Frontend y la base de datos</p>
          </div>
        </div>
        <footer className="bg-gray-800 text-white text-center py-4 mt-12 w-full">
          <p>&copy; 2025 Fixall. Todos los derechos reservados.</p>
          <p className="text-sm">Desarrollado por Talento Tech</p>
        </footer>
      </div>
      
      
    );
}
  