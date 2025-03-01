import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  console.log("Personajes a renderizar:", character);
  return (
    <div className="w-[400px] h-[150px] bg-[#1E1E1E] rounded-xl flex overflow-hidden shadow-lg">
      {/* Imagen del personaje */}
      <div className="w-[137px] h-[150px] flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          src={character.image}
          alt={character.name}
        />
      </div>
      
      {/* Contenido del personaje */}
      <div className="flex-1 p-4 flex flex-col justify-between">
        <div>
          <h3 className="text-[#97ce4c] text-lg font-semibold">{character.name}</h3>
          <p className="text-gray-400 text-sm">{character.species}</p>
        </div>
        
        {/* Información adicional */}
        <div className="flex justify-between items-center text-gray-300 text-xs">
          <div>
            <p className="font-bold text-[#808c72]">Last known location</p>
            <p>{character.location?.name || "Unknown"}</p>
          </div>
          <div>
            <p className="font-bold text-[#808c72]">First seen in</p>
            <p>{character.origin?.name || "Unknown"}</p>
          </div>
        </div>
      </div>

      {/* Estado del personaje */}
      <div className="flex items-center justify-center w-[44px] h-[44px] m-2 bg-[#FAFAFA] rounded-full">
        <span
          className={`w-3 h-3 rounded-full ${
            character.status === "Alive"
              ? "bg-green-500"
              : character.status === "Dead"
              ? "bg-red-500"
              : "bg-gray-500"
          }`}
        ></span>
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
    location: PropTypes.shape({
      name: PropTypes.string,
    }),
    origin: PropTypes.shape({
      name: PropTypes.string,
    }),
  }).isRequired,
};

export default CharacterCard;


