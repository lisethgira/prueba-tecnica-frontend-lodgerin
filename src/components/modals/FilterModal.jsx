import { useEffect, useState } from "react";
import { X } from "lucide-react"; // Importamos el icono de X
import PropTypes from "prop-types";

const FilterModal = ({ onClose, appliedFilters, setAppliedFilters }) => {

  const [filters, setFilters] = useState({ status: "", species: "", gender: "" });

  const handleFilterChange = (type, value) => {
    setFilters((prev) => ({
      ...prev,
      [type]: value
    }));
  };

  const applyFilters = () => {
    setAppliedFilters(filters); // Aplica los filtros seleccionados
    onClose(); // Cierra el modal
  };

  const clearFilters = () => {
    setAppliedFilters({ status: "", species: "", gender: "" }); // Aplica los filtros seleccionados
    onClose(); // Cierra el modal
  };

  useEffect(() => {
    setFilters(appliedFilters)
  }, [appliedFilters])

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="w-[375px] h-[480px] bg-[#f7f9fb] rounded-2xl shadow-lg flex flex-col relative">
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-400 transition z-50"
          onClick={onClose}
        >
          <X size={20} className="text-gray-600" />
        </button>

        <div className="h-16 px-6 flex flex-col items-center">
          <div className="text-lg font-semibold">Filtros avanzados</div>
        </div>

        <div className="px-4 py-6 flex flex-col gap-6">
          {/* Especie */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium">Especie</div>
            <div className="flex flex-wrap gap-3">
              {["Human", "Alien", "Robot"].map((specie) => (
                <button
                  key={specie}
                  className={`py-1 px-3 rounded-2xl border ${filters.species === specie ? "bg-green-400 text-white" : "border-gray-400 text-gray-600"
                    }`}
                  onClick={() => handleFilterChange("species", specie)}
                >
                  {specie}
                </button>
              ))}
            </div>
          </div>

          {/* Género */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium">Género</div>
            <div className="flex gap-3">
              {["Male", "Female", "Unknown"].map((gender) => (
                <button
                  key={gender}
                  className={`py-1 px-3 rounded-2xl border ${filters.gender === gender ? "bg-green-400 text-white" : "border-gray-400 text-gray-600"
                    }`}
                  onClick={() => handleFilterChange("gender", gender)}
                >
                  {gender}
                </button>
              ))}
            </div>
          </div>

          {/* Estado */}
          <div className="flex flex-col gap-3">
            <div className="text-sm font-medium">Estado</div>
            <div className="flex gap-3">
              {["Alive", "Dead", "Unknown"].map((status) => (
                <button
                  key={status}
                  className={`py-1 px-3 rounded-2xl border ${filters.status === status ? "bg-green-400 text-white" : "border-gray-400 text-gray-600"
                    }`}
                  onClick={() => handleFilterChange("status", status)}
                >
                  {status}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="px-6 pt-4 pb-6 flex justify-end">
          <button
            className="w-full h-11 bg-[#8bc547] rounded-[40px] text-[#354d18] text-sm font-bold"
            onClick={() => applyFilters()}
          >
            Aplicar filtros
          </button>

          <button
            className="w-full h-11 bg-[#fff] rounded-[40px] text-[#354d18] text-sm font-bold"
            onClick={() => clearFilters()}
          >
            Limpiar filtros
          </button>
        </div>
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  onClose: PropTypes.func.isRequired,
  appliedFilters: PropTypes.object.isRequired,
  setAppliedFilters: PropTypes.func.isRequired
};

export default FilterModal;


