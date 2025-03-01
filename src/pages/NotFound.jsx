import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-8xl font-bold text-blue-600">404</h1>
      <p className="text-2xl text-gray-700 mt-4">Página no encontrada</p>
      <p className="text-gray-500 mt-2">Lo sentimos, no pudimos encontrar la página que buscas.</p>
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;
