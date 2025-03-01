import PropTypes from "prop-types";

const Header = ({ children }) => {
  return (
    <header className="relative h-auto md:h-[328px] px-4 md:px-[200px] py-8 md:py-16 flex flex-col justify-center items-center gap-6 md:gap-12">
      {/* Fondo con overlay */}
      <div className="absolute inset-0 bg-[url(assets/images/fondo.png)] bg-cover bg-center">
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center gap-6 md:gap-12 w-full">
        {/* Logo */}
        <div className="w-full max-w-[273px] h-24 flex justify-center items-center">
          <img className="w-full h-auto" src="src/assets/images/logo.png" alt="Logo" />
        </div>

        {/* Barra de búsqueda */}
        <div className="w-full max-w-[1040px] h-14 rounded-lg flex flex-col justify-start items-start">
          <div className="w-full h-14 bg-[#3d403a]/70 rounded-lg border border-[#808c72] flex items-center px-4">
            <div data-svg-wrapper className="flex items-center">
              <svg width="32" height="32" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M33.8623 32.8116L28.8235 27.7728C28.7337 27.6829 28.6165 27.6361 28.4915 27.6361H28.0892C29.4289 26.1869 30.2492 24.2534 30.2492 22.1246C30.2492 17.6365 26.6127 14 22.1246 14C17.6365 14 14 17.6365 14 22.1246C14 26.6127 17.6365 30.2492 22.1246 30.2492C24.2534 30.2492 26.1869 29.4289 27.6361 28.0931V28.4915C27.6361 28.6165 27.6868 28.7337 27.7728 28.8235L32.8116 33.8623C32.9952 34.0459 33.292 34.0459 33.4756 33.8623L33.8623 33.4756C34.0459 33.292 34.0459 32.9952 33.8623 32.8116ZM22.1246 28.9993C18.324 28.9993 15.2499 25.9252 15.2499 22.1246C15.2499 18.324 18.324 15.2499 22.1246 15.2499C25.9252 15.2499 28.9993 18.324 28.9993 22.1246C28.9993 25.9252 25.9252 28.9993 22.1246 28.9993Z" fill="#8BC547"/>
              </svg>
            </div>
            <div className="ml-3 flex-1">
              <p className="text-[#e5e7e3] text-sm md:text-base font-medium font-['Montserrat'] leading-tight">
                Buscar personaje por nombre
              </p>
            </div>
          </div>
        </div>

        {children}
      </div>
    </header>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;


