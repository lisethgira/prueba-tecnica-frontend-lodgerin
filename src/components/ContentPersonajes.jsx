import { useState } from "react";
import PropTypes from "prop-types";

import FilterTabs from "./FilterTabs";
import CharacterList from "./CharacterList";
import FilterButton from "./FilterButton";
import BadgeFilter from "./BadgeFilter";

const ContentPersonajes = ({ characters }) => {
  const [selectedFilter, setSelectedFilter] = useState("Todos");

  const filteredCharacters = (characters || []).filter((character) =>
    selectedFilter === "Todos" ? true : character.status === selectedFilter
  );

  return (
    <div className="p-6 bg-gray-300 min-h-screen">
      <div className="max-w-screen-xl mx-auto px-4 md:px-[200px]">
        {/* Fila de filtros y botón */}
        <div className="flex justify-between items-center mb-8">
          <FilterTabs
            selectedFilter={selectedFilter}
            setSelectedFilter={setSelectedFilter}
          />
          <div className="flex justify-end w-full max-w-[200px]">
            <FilterButton />
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

        <BadgeFilter></BadgeFilter>

        <CharacterList characters={filteredCharacters} />
      </div>
    </div>
  );
};

ContentPersonajes.propTypes = {
  characters: PropTypes.node,
};

export default ContentPersonajes;
