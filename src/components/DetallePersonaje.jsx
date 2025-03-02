import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { getEpisodeById } from "../services/apiService";
import { X, ArrowLeft, MoreVertical } from "lucide-react";
import banner from "../assets/images/headermodal.jpg";

const DetallePersonaje = ({ character, onClose }) => {
  const navigate = useNavigate();
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
        {/* Imagen con fondo desvanecido */}
        <div className="relative">
          <img
            className="w-full h-32 md:h-40 object-cover"
            src={banner}
            alt="Background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-transparent"></div>
        </div>

        {/* Imagen de personaje */}
        <div className="relative grid h-20 grid-cols-1 md:grid-cols-[auto_1fr_auto] items-center">
          {/* Imagen del personaje en posición absoluta */}
          <img
            className="absolute w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-white object-cover left-1/2 -translate-x-1/2 -top-12 md:left-0 md:translate-x-0"
            src={character.image}
            alt={character.name}
          />

          {/* Contenedor de texto ajustado para móviles */}
          <div className="flex flex-col items-center mt-16 md:items-start md:mt-0 gap-2 md:ml-28 w-full">
            <div className="text-center md:text-left w-full">
              <div className="flex items-center justify-center md:justify-between gap-2 w-full">
                <div className="flex items-center gap-2">
                  <h2 className="text-lg md:text-xl font-bold">
                    {character.name}
                  </h2>
                  <span className="text-base text-green-500">⭐</span>
                </div>

                {/* Botón de tres puntos alineado a la derecha en pantallas grandes */}
                <button className="hidden md:flex">
                  <MoreVertical size={18} className="text-gray-600" />
                </button>
              </div>
              <p className="text-gray-600 text-xs md:text-sm">
                {character.species}
              </p>
            </div>
          </div>
        </div>
        {/* Flecha atrás en móvil */}
        <button
          onClick={() => navigate(-1)}
          className="absolute cursor-pointer top-3 left-3 rounded-full w-8 h-8 flex items-center justify-center md:hidden"
        >
          <ArrowLeft size={24} className="text-white stroke-[2]" />
        </button>

        {/* Icono de tres puntos verticales en móvil */}
        <button className="absolute cursor-pointer top-3 right-3 rounded-full w-8 h-8 flex items-center justify-center md:hidden">
          <MoreVertical size={24} className="text-white stroke-[2]" />
        </button>

        {/* Botón de cerrar en pantallas medianas y grandes */}
        <button
          onClick={onClose}
          className="absolute cursor-pointer top-3 right-3 bg-white bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center hover:bg-opacity-75 hidden md:flex"
        >
          <X size={20} className="text-gray-600" />
        </button>
      </div>

      {/* Contenido */}
      <div className="pt-12 md:pt-2 p-4 md:p-6">
        {/* Diseño adaptable */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
