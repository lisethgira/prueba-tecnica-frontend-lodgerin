import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { getEpisodeById } from "../services/apiService";
import { X } from "lucide-react";
import banner from "../assets/images/headermodal.jpg";

const DetallePersonaje = ({ character, onClose }) => {
  const [episode, setEpisode] = useState([]);

  useEffect(() => {
    const fetchCharacters = async () => {
      const episodesData = await Promise.all(
        character.episode.slice(0, 5).map(async (c) => {
          const data = await getEpisodeById(c.split("/").pop());
          return data;
        })
      );
      setEpisode(episodesData);
    };

    fetchCharacters();
  }, [character]);

  return (
    <div className="bg-gray-100 shadow-lg w-full max-w-lg md:max-w-2xl relative ">
      {/* Imagen de fondo */}
      <div className="relative">
        <img
          className="w-full h-32 md:h-40 object-cover"
          src={banner}
          alt="Background"
        />
        <img
          className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white absolute left-5 -bottom-12"
          src={character.image}
          alt={character.name}
        />
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 bg-white bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75"
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Contenido */}
      <div className="pt-12 md:pt-16 p-4 md:p-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            {character.name}
            <span className="text-lg text-green-500">⭐</span>
          </h2>
        </div>
        <p className="text-gray-600 text-sm">{character.species}</p>

        {/* Diseño adaptable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {/* Información */}
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold text-lg mb-2">Información</h3>
            <p className="text-gray-500 text-sm font-semibold">Género</p>
            <p className="text-gray-700">{character.gender}</p>
            <p className="text-gray-500 text-sm font-semibold mt-2">Origen</p>
            <p className="text-gray-700">{character.origin.name}</p>
            <p className="text-gray-500 text-sm font-semibold mt-2">Estado</p>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                character.status === "Alive"
                  ? "bg-green-100 text-green-800"
                  : character.status === "Dead"
                  ? "bg-red-100 text-red-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              {character.status}
            </span>
          </div>

          {/* Episodios */}
          <div className="bg-white p-4 rounded-lg shadow md:col-span-2">
            <h3 className="font-bold text-lg mb-2">Episodios</h3>
            <ul className="mt-2 space-y-2">
              {episode.map((ep, index) => (
                <li
                  key={index}
                  className="flex justify-between bg-gray-100 p-2 rounded-lg text-sm"
                >
                  <span className="text-gray-700">{ep.episode}</span>
                  <span className="text-gray-500">{ep.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Ubicación */}
        <div className="mt-6 flex justify-between">
          <div>
            <p className="text-gray-500 font-bold">First seen in</p>
            <p className="text-gray-700">{character.firstSeen}</p>
          </div>
          <div>
            <p className="text-gray-500 font-bold">Last known location</p>
            <p className="text-gray-700">{character.location.name}</p>
          </div>
        </div>

        {/* Personajes relacionados */}
        <div className="mt-6">
          <h3 className="font-bold text-lg">Personajes relacionados</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-3">
            {character.related?.slice(0, 3).map((rel, index) => (
              <div
                key={index}
                className="text-center bg-gray-100 rounded-xl p-2 shadow-sm"
              >
                <img
                  className="w-20 h-20 rounded-lg object-cover mx-auto"
                  src={rel.image}
                  alt={rel.name}
                />
                <p className="text-sm font-semibold mt-1">{rel.name}</p>
                <p className="text-xs text-gray-500">{rel.species}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

DetallePersonaje.propTypes = {
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetallePersonaje;
