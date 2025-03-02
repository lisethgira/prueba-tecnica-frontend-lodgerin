
import DetallePersonaje from "../DetallePersonaje";
import PropTypes from "prop-types";

const DetallePersonajeModal = ({ character, onClose }) => {
  
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-opacity-50 z-50">
    <div className="bg-white rounded-2xl overflow-hidden shadow-lg max-w-lg w-full">
      <DetallePersonaje character={character} onClose={onClose} />
    </div>
  </div>
  );
};

DetallePersonajeModal.propTypes = {
  character: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default DetallePersonajeModal;
