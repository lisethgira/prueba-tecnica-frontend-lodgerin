import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import FilterModal from "../components/modals/FilterModal"; // Importa el modal

const FilterButton = ({ appliedFilters, setAppliedFilters }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log("El estado del modal cambió:", isOpen);
  }, [isOpen]);

  return (
    <div>
      <div
        data-svg-wrapper
        className="cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 44 44"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z"
            fill="#FAFAFA"
          />
          <path
            d="M30.0729 26.1668H19.9167V24.8647C19.9167 24.4318 19.5684 24.0835 19.1354 24.0835H17.5729C17.14 24.0835 16.7917 24.4318 16.7917 24.8647V26.1668H13.9271C13.7839 26.1668 13.6667 26.284 13.6667 26.4272V26.9481C13.6667 27.0913 13.7839 27.2085 13.9271 27.2085H16.7917V28.5106C16.7917 28.9435 17.14 29.2918 17.5729 29.2918H19.1354C19.5684 29.2918 19.9167 28.9435 19.9167 28.5106V27.2085H30.0729C30.2162 27.2085 30.3334 27.0913 30.3334 26.9481V26.4272C30.3334 26.284 30.2162 26.1668 30.0729 26.1668ZM18.875 28.2502H17.8334V25.1252H18.875V28.2502ZM30.0729 16.7918H22V15.4897C22 15.0568 21.6517 14.7085 21.2188 14.7085H19.6563C19.2233 14.7085 18.875 15.0568 18.875 15.4897V16.7918H13.9271C13.7839 16.7918 13.6667 16.909 13.6667 17.0522V17.5731C13.6667 17.7163 13.7839 17.8335 13.9271 17.8335H18.875V19.1356C18.875 19.5685 19.2233 19.9168 19.6563 19.9168H21.2188C21.6517 19.9168 22 19.5685 22 19.1356V17.8335H30.0729C30.2162 17.8335 30.3334 17.7163 30.3334 17.5731V17.0522C30.3334 16.909 30.2162 16.7918 30.0729 16.7918ZM20.9584 18.8752H19.9167V15.7502H20.9584V18.8752ZM30.0729 21.4793H27.2084V20.1772C27.2084 19.7443 26.86 19.396 26.4271 19.396H24.8646C24.4317 19.396 24.0834 19.7443 24.0834 20.1772V21.4793H13.9271C13.7839 21.4793 13.6667 21.5965 13.6667 21.7397V22.2606C13.6667 22.4038 13.7839 22.521 13.9271 22.521H24.0834V23.8231C24.0834 24.256 24.4317 24.6043 24.8646 24.6043H26.4271C26.86 24.6043 27.2084 24.256 27.2084 23.8231V22.521H30.0729C30.2162 22.521 30.3334 22.4038 30.3334 22.2606V21.7397C30.3334 21.5965 30.2162 21.4793 30.0729 21.4793ZM26.1667 23.5627H25.125V20.4377H26.1667V23.5627Z"
            fill="#808C73"
          />
        </svg>
      </div>
      {isOpen && <FilterModal
        onClose={() => {
          setIsOpen(!isOpen)
          console.log(isOpen);
        }}
        appliedFilters={appliedFilters}
        setAppliedFilters={setAppliedFilters} />}
    </div>
  );
};

FilterButton.propTypes = {
  appliedFilters: PropTypes.object.isRequired,
  setAppliedFilters: PropTypes.func.isRequired,
};

export default FilterButton;
