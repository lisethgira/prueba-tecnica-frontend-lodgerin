import { Link } from "react-router-dom";
import errorImage from "../assets/images/error404.jpg"; // Asegúrate de que la ruta sea correcta

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white text-center p-6">
      <img src={errorImage} alt="Error 404" className="w-150 mb-2" />
      
      <p className="text-2xl text-yellow-300 mt-4">Página no encontrada</p>
      <p className="text-gray-400 mt-2">Lo sentimos, no pudimos encontrar la página que buscas.</p>
      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-green-500 text-black font-bold rounded-lg shadow-lg hover:bg-green-600 transition"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;

