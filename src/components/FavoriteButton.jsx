import { useState } from "react";

const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div data-svg-wrapper className="cursor-pointer" onClick={toggleFavorite}>
      <svg
        width="44"
        height="44"
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 22C0 9.84974 9.84974 0 22 0C34.1503 0 44 9.84974 44 22C44 34.1503 34.1503 44 22 44C9.84974 44 0 34.1503 0 22Z"
          fill={isFavorite ? "#B6DA8B" : "#FFFFFF"} // Fondo cambia
          stroke="#588028" // Borde verde para contrastar cuando es blanco
          strokeWidth="2"
        />
        <path
          d="M21.1059 15.0508L19.0716 19.1447L14.5202 19.8033C13.704 19.9208 13.3769 20.9195 13.9688 21.4916L17.2617 24.6764L16.4828 29.1753C16.3426 29.9885 17.2056 30.5977 17.9283 30.2174L22 28.0931L26.0716 30.2174C26.7943 30.5946 27.6573 29.9885 27.5171 29.1753L26.7383 24.6764L30.0311 21.4916C30.623 20.9195 30.2959 19.9208 29.4797 19.8033L24.9283 19.1447L22.894 15.0508C22.5296 14.3211 21.4735 14.3118 21.1059 15.0508Z"
          fill={isFavorite ? "#588028" : "#D1D5DB"} // Estrella verde si es favorito, gris si no
        />
      </svg>
    </div>
  );
};

export default FavoriteButton;
