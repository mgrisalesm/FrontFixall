//Esta es la pagina para crear un nuevo servicio, donde se le pide al usuario que seleccione el tipo de servicio y haga una breve descripcion del servicio requerido.//
export default function RequestPage() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96 border border-gray-300 border-solid border-3">
          <h2 className="text-2xl font-bold mb-6 text-center">Nuevo Servicio</h2>
          <form>
            <div className="mb-4">
              <label className="block text-gray-700">Tipo de Servicio
                <select id="tipo-servicio"className="w-full p-2 border rounded-lg">
                  <option value="">-Selecciona un tipo de servicio-</option>
                  <option value="consultoria">Reparación</option>
                  <option value="desarrollo">Instalación</option>
                  <option value="mantenimiento">Mantenimiento</option>
                  <option value="mantenimiento">Diagnóstico</option>
                </select>
              </label>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700">Descripción</label>
              <textarea
                className="w-full p-2 h-40 border rounded-lg"
                placeholder="Descripción del servicio"
                required
                name="descripcion"
              ></textarea>
            </div>
            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
              Crear Servicio
            </button>
          </form>
        </div>
      </div>
    );
  }
  