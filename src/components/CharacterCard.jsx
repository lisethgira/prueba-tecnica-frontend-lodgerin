import { useState } from "react";
import PropTypes from "prop-types";
import FavoriteButton from "./FavoriteButton";
import DetallePersonajeModal from "./modals/DetallePersonajeModal";

const CharacterCard = ({ character, setFavCharacters }) => {
  const [isOpen, setIsOpen] = useState(false);

  // console.log("Personajes a renderizar:", character);
  return (
    <>
      <div className="w-full max-w-[420px] bg-neutral-50 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-md relative">
        {/* Imagen del personaje */}
        <div className="w-full md:w-[137px] h-[180px] md:h-full flex items-center relative">
          {/* Botón favorito */}
          <div className="absolute top-0 right-0 md:left-0 md:right-auto p-2">
            <FavoriteButton
              character={character}
              setFavCharacters={setFavCharacters}
            />
          </div>

          <img
            className="w-full h-full object-cover"
            src={character.image}
            alt={character.name}
          />
        </div>

        {/* Contenido de la tarjeta */}
        <div
          className="cursor-pointer flex flex-col flex-1 p-4 justify-between"
          onClick={() => setIsOpen(true)}
        >
          {/* Nombre y estado */}
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-[#333530]">
              {character.name.split(" ").slice(0, 2).join(" ")}
            </h3>
            <div
              className={`rounded-2xl px-3 py-1 flex items-center gap-1 ${
                character.status === "Alive"
                  ? "bg-green-100 text-green-800"
                  : character.status === "Dead"
                  ? "bg-red-100 text-red-800"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
              <span className="text-sm font-medium">
                {character.status === "Alive"
                  ? "✅"
                  : character.status === "Dead"
                  ? "☠️"
                  : "❓"}{" "}
                {character.status}
              </span>
            </div>
          </div>

          {/* Especie */}
          <p className="text-[#565b52] text-sm font-medium">
            {character.species}
          </p>

          {/* Ubicación y primer episodio */}
          <div className="flex flex-col md:flex-row justify-between text-sm gap-2">
            <div>
              <p className="text-[#808c72] font-bold">Last known location</p>
              <p className="text-[#565b52] font-medium">
                {character.location.name}
              </p>
            </div>
            <div>
              <p className="text-[#808c72] font-bold">First seen in</p>
              <p className="text-[#565b52] font-medium">
                {character.origin.name}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Modal de detalles del personaje */}
      {isOpen && (
        <DetallePersonajeModal
          character={character}
          onClose={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

CharacterCard.propTypes = {
  setFavCharacters: PropTypes.func.isRequired,
  character: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    location: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
    origin: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
  }).isRequired,
};

export default CharacterCard;
