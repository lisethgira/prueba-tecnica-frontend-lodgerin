import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import NoContent from "./NoContent";

const CharacterList = ({ characters, setAppliedFilters, setFavCharacters }) => {

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
      {characters.length > 0 ? (
        characters.map((character) => (
          <CharacterCard key={character.id} character={character} setFavCharacters={setFavCharacters} />
        ))
      ) : (
        <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center items-center min-h-[40vh]">
          <NoContent setAppliedFilters={setAppliedFilters} />
        </div>
      )}
    </div>


  );
};

CharacterList.propTypes = {
  setAppliedFilters: PropTypes.func.isRequired,
  setFavCharacters: PropTypes.func.isRequired,
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default CharacterList;
