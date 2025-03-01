import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  // console.log("Personajes a renderizar:", character);
  return (
    <div className="w-full max-w-[420px] bg-neutral-50 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-md">
      {/* Imagen del personaje */}
      <div className="w-full md:w-[137px] h-[180px] md:h-full flex items-center">
        <img
          className="w-full h-full object-cover"
          src={character.image}
          alt={character.name}
        />
      </div>

      {/* Contenido de la tarjeta */}
      <div className="flex flex-col flex-1 p-4 justify-between">
        {/* Nombre y estado */}
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-[#333530]">
            {character.name.split(" ").slice(0, 2).join(" ")}
          </h3>
          <div className="bg-[#e6f2d8] rounded-2xl px-3 py-1 flex items-center gap-1">
            <span className="text-[#354d18] text-sm font-medium">
              ✅ {character.status}
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
  );
};

CharacterCard.propTypes = {
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
