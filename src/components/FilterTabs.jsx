import PropTypes from "prop-types";

const FilterTabs = ({ selectedFilter, setSelectedFilter }) => {
  return (
    <div className="h-10 flex items-center gap-2 bg-neutral-50 rounded-[32px] ">
      {/* Botón "Todos" */}
      <button
        className={`h-9 px-8 py-1 cursor-pointer rounded-[32px] flex items-center justify-center text-sm font-semibold font-['Montserrat']
      ${
        selectedFilter === "Todos"
          ? "bg-[#b5da8a] text-[#354d18]"
          : "bg-[#ffff]/0 text-[#565b52]"
      }`}
        onClick={() => setSelectedFilter("Todos")}
      >
        Todos
      </button>

      {/* Botón "Favoritos" */}
      <button
        className={`h-9 px-4 py-1 cursor-pointer rounded-[32px] flex items-center justify-center text-sm font-semibold font-['Montserrat']
      ${
        selectedFilter === "Favoritos"
          ? "bg-[#b5da8a] text-[#354d18]"
          : "bg-[#ffff]/0 text-[#565b52]"
      }`}
        onClick={() => setSelectedFilter("Favoritos")}
      >
        Favoritos
      </button>
    </div>
  );
};

FilterTabs.propTypes = {
  selectedFilter: PropTypes.node,
  setSelectedFilter: PropTypes.node,
};

export default FilterTabs;
