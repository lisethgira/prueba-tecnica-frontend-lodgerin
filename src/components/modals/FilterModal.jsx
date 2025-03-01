import { X } from "lucide-react"; // Importamos el icono de X
import PropTypes from "prop-types";

const FilterModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Contenedor del modal */}
      <div className="w-[375px] h-[480px] bg-[#f7f9fb] rounded-2xl shadow-[0px_8px_16px_-4px_rgba(28,65,151,0.15)] flex flex-col relative">
        {/* Botón de Cerrar */}
        <button
          className="absolute top-4 right-4 p-1 rounded-full hover:bg-gray-400 transition z-50"
          onClick={() => {
            console.log("Click en la X, cerrando modal...");
            onClose();
          }}
        >
          <X size={20} className="text-gray-600" />
        </button>

        {/* Header */}
        <div className="h-16 px-6 flex flex-col items-center">
          <div className="h-4 py-[7px] flex flex-col items-center">
            <div className="w-[72px] h-0.5 bg-[#c6cbd6] rounded" />
          </div>
          <div className="text-[#333530] text-lg font-semibold">Filtros avanzados</div>
        </div>

        {/* Contenido del modal */}
        <div className="px-4 py-6 flex flex-col gap-6">
          {/* Especie */}
          <div className="flex flex-col gap-3">
            <div className="text-black text-sm font-medium">Especie</div>
            <div className="flex flex-wrap gap-3">
              {["Humano", "Arañas gigantes telépatas", "Cronenbergs", "Meeseeks"].map((specie) => (
                <div key={specie} className="py-1 px-3 rounded-2xl border border-[#c7cbc2] text-[#565b52] text-sm font-medium">
                  {specie}
                </div>
              ))}
            </div>
          </div>

          {/* Género */}
          <div className="flex flex-col gap-3">
            <div className="text-black text-sm font-medium">Género</div>
            <div className="flex gap-3">
              {["Masculino", "Femenino", "Desconocido"].map((gender) => (
                <div key={gender} className="py-1 px-3 rounded-2xl border border-[#c7cbc2] text-[#565b52] text-sm font-medium">
                  {gender}
                </div>
              ))}
            </div>
          </div>

          {/* Estado */}
          <div className="flex flex-col gap-3">
            <div className="text-black text-sm font-medium">Estado</div>
            <div className="flex gap-3">
              {["Vivo", "Muerto"].map((status) => (
                <div key={status} className="py-1 px-3 rounded-2xl border border-[#c7cbc2] text-[#565b52] text-sm font-medium">
                  {status}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Botón Aplicar */}
        <div className="px-6 pt-4 pb-6 flex justify-end">
          <button 
            className="w-full h-11 bg-[#8bc547] rounded-[40px] text-[#354d18] text-sm font-bold"
            onClick={onClose}
          >
            Aplicar filtros
          </button>
        </div>
      </div>
    </div>
  );
};

FilterModal.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default FilterModal;


