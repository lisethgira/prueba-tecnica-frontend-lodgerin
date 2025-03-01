import PropTypes from "prop-types";

const CharacterCard = ({ character }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 flex items-center gap-4 w-full">
      <img
        src={character.image}
        alt={character.name}
        className="w-20 h-20 rounded-full"
      />
      <div className="flex-1">
        <h3 className="text-lg font-bold">{character.name}</h3>
        <p className="text-gray-500 text-sm">{character.status}</p>
      </div>
      <span className="text-green-600 font-semibold">{character.status}</span>
    </div>
  );
};

CharacterCard.propTypes = {
  character: PropTypes.node,
};

export default CharacterCard;
