import PropTypes from "prop-types";

const BadgeFilter = ({ label }) => {
    return (
      <div className="h-8 py-1 bg-[#c7cbc2] rounded-2xl justify-center items-center gap-2 inline-flex">
        <div className="pl-3 pr-2 justify-start items-center gap-1 flex">
          <div className="text-center text-[#333530] text-sm font-medium font-['Montserrat'] leading-tight">
            {label?.trim() ? label : "Sin filtros"} 
          </div>
          <div data-svg-wrapper className="relative">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.0839 5.91626C10.2656 6.0979 10.2656 6.3924 10.0839 6.57404L8.6578 8.00019L10.0839 9.42634C10.2656 9.60798 10.2656 9.90248 10.0839 10.0841C9.90231 10.2658 9.60781 10.2658 9.42617 10.0841L8.00002 8.65796L6.57387 10.0841C6.39223 10.2658 6.09774 10.2658 5.9161 10.0841C5.73446 9.90248 5.73446 9.60798 5.9161 9.42634L7.34225 8.00019L5.9161 6.57404C5.73446 6.3924 5.73446 6.0979 5.9161 5.91626C6.09774 5.73463 6.39223 5.73463 6.57387 5.91626L8.00002 7.34242L9.42617 5.91626C9.60781 5.73463 9.90231 5.73463 10.0839 5.91626Z"
                fill="#333630"
              />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1.33333 8.00016C1.33333 4.33243 4.33227 1.3335 8 1.3335C11.6677 1.3335 14.6667 4.33243 14.6667 8.00016C14.6667 11.6679 11.6677 14.6668 8 14.6668C4.33227 14.6668 1.33333 11.6679 1.33333 8.00016ZM8 2.26373C4.84602 2.26373 2.26356 4.84619 2.26356 8.00016C2.26356 11.1541 4.84602 13.7366 8 13.7366C11.154 13.7366 13.7364 11.1541 13.7364 8.00016C13.7364 4.84619 11.154 2.26373 8 2.26373Z"
                fill="#333630"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };
  
  BadgeFilter.propTypes = {
    label: PropTypes.string.isRequired,
  };

  export default BadgeFilter;
  