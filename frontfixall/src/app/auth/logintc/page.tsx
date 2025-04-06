//Esta es la pagina para que el usuario inicie sesion, donde se le da la opcion de iniciar sesion como tecnico o como cliente.//
import Link from "next/link"
export default function Loginoption() {
    return (
      //el primer div es para centrar el contenido y dar un fondo gris claro
        <div className="flex-col flex items-center justify-center min-h-screen bg-gray-100 text-center p-6 mb-50">
          <h1 className="text-4xl font-bold text-blue-600 mb-6">Iniciar Sesión</h1>
          <p className="text-gray-700 mb-4">Selecciona una opción para iniciar sesión:</p>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl " >
            
            <Link href="/auth/logint" className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-300 border-solid border-3">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión como Técnico</h2>
              </div>
            </Link>
          
            <Link href="/auth/loginc" className="flex items-center justify-center">
              <div className="bg-white p-6 rounded-lg shadow-lg w-80 border border-gray-300 border-solid border-3">
                <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión como Cliente</h2>
              </div>
             </Link>
        </div>
              <p className="text-gray-700 mb-4 py-5">Si no tienes una cuenta,<a href="/auth/signup" className="text-blue px-2 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700">Registrate aquí.</a> </p>
        </div>
      );
}