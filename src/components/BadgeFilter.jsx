import PropTypes from "prop-types";

const BadgeFilter = ({ label }) => {
  return (
    <div className="h-8 py-1 bg-[#c7cbc2] rounded-2xl justify-center items-center gap-2 inline-flex">
      <div className="pl-3 pr-2 justify-start items-center gap-1 flex">
        <div className="text-center text-[#333530] text-sm font-medium font-['Montserrat'] leading-tight">
          {label?.trim() ? label : "Sin filtros"}
        </div>
      </div>
    </div>
  );
};

BadgeFilter.propTypes = {
  label: PropTypes.string.isRequired,
};

export default BadgeFilter;
