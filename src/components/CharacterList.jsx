import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import CharacterCard from "./CharacterCard";
import { getCharacters } from "../services/apiService";
import NoContent from "./NoContent";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      setCharacters(data);
      setLoading(false);
    };

    fetchCharacters();
  }, []);

  if (loading) {
    return <p className="text-center text-gray-600">Cargando personajes...</p>;
  }

  return (
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-4">
  {characters.length > 0 ? (
    characters.map((character) => (
      <CharacterCard key={character.id} character={character} />
    ))
  ) : (
    <div className="col-span-1 md:col-span-2 lg:col-span-3 xl:col-span-4 flex justify-center items-center min-h-[40vh]">
      <NoContent />
    </div>
  )}
</div>


  );
};

CharacterList.propTypes = {
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
