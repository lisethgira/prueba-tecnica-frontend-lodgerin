import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import FilterTabs from "./FilterTabs";
import CharacterList from "./CharacterList";
import FilterButton from "./FilterButton";
import BadgeFilter from "./BadgeFilter";
import { getCharacters } from "../services/apiService";

const ContentPersonajes = ({ searchTerm }) => {
  const [characters, setCharacters] = useState([]);
  const [favCharacters, setFavCharacters] = useState(JSON.parse(localStorage.getItem("favCharacters")) || [])
  const [loading, setLoading] = useState(true);

  const [appliedFilters, setAppliedFilters] = useState({ status: "", species: "", gender: "" });

  const [filter, setFilter] = useState("Todos")

  const activeFilters = Object.entries(appliedFilters)
    // eslint-disable-next-line
    .filter(([i, value]) => value.trim())
    .map(([key, value]) => `${key}: ${value}`); // Formato "status: Alive"


  const filteredCharacters = (characters || []).filter((character) => {
    return (
      (character.name.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!appliedFilters.status || character.status === appliedFilters.status) &&
      (!appliedFilters.species || character.species === appliedFilters.species) &&
      (!appliedFilters.gender || character.gender === appliedFilters.gender)
    );
  });

  useEffect(() => {
    const fetchCharacters = async () => {
      const data = await getCharacters();
      console.log("Personajes obtenidos:", data); // 🔍 Verifica qué devuelve la API
      setCharacters(data.results || []); // 👈 Asegúrate de acceder a `results`
      setLoading(false);
    };
    fetchCharacters();
  }, []);

  useEffect(() => {
    console.log();
  }, [])

  if (loading) {
    return <p className="text-center text-gray-600">Cargando personajes...</p>;
  }

  return (
    <div className="p-6 bg-gray-300">
      <div className="max-w-screen-xl mx-auto px-4 md:px-[200px]">
        {/* Fila de filtros y botón */}
        <div className="flex justify-between items-center mb-8">
          <FilterTabs
            selectedFilter={filter}
            setSelectedFilter={setFilter}
          />
          <div className="flex justify-end w-full max-w-[200px]">
            <FilterButton
              appliedFilters={appliedFilters}
              setAppliedFilters={setAppliedFilters}
            />
          </div>
        </div>

        <div className="flex justify-between items-center mt-6 mb-4">
          {/* Texto de "Filtros aplicados" alineado a la izquierda */}
          <div className="text-[#565b52] text-base font-semibold tracking-tight">
            Filtros aplicados
          </div>

          {/* Conteo de personajes alineado a la derecha */}
          <p className="text-gray-700 font-medium ">
            {filteredCharacters.length} personajes
          </p>
        </div>

        {activeFilters.length > 0 ? (
          activeFilters.map((filter, index) => <BadgeFilter key={index} label={filter} />)
        ) : (
          <BadgeFilter label="Sin filtros" />
        )}

        <CharacterList
          characters={filter === "Favoritos" ? favCharacters : filteredCharacters}
          setAppliedFilters={setAppliedFilters}
          setFavCharacters={setFavCharacters}
        />
      </div>
    </div>
  );
};

ContentPersonajes.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};

export default ContentPersonajes;
