
import Link from 'next/link';
   

export default function Cliente() {
    return (

    <nav className="bg-gray-800 shadow-md p-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-white hover:text-blue-600">
          Fixall
          </Link>
          <div className="space-x-6">
            <Link href="/auth/myservices" className="text-white hover:text-blue-600">
            Mis Servicios
            </Link>
            <Link href="/auth/crearservicio" className="text-white hover:text-blue-600">
            Nuevo Servicio
            </Link>
            <Link href="profile" className="text-white hover:text-blue-600">
             Perfil
            </Link>
            <Link href="/auth/logintc" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
            Cerrar Sesión
            </Link>
          </div>
    </nav>

    


    );
}