import Button from "../components/Button";

const Home = () => {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen gap-8 sm:gap-10 md:gap-12 pt-12 sm:pt-16 pb-12 px-4 md:px-20 xl:px-40 bg-[url(assets/images/fondo.png)] bg-cover bg-center before:absolute before:inset-0 before:bg-black/60 before:z-0">
      {/* Logo */}
      <div className="relative z-10 flex justify-center items-center w-full max-w-[500px]">
        <img
          className="w-full max-w-[80%] sm:max-w-[400px] md:max-w-[500px] h-auto"
          src="src/assets/images/logo.png"
          alt="Rick and Morty Logo"
        />
      </div>

      {/* Título */}
      <div className="relative z-10 text-center text-white text-2xl sm:text-3xl md:text-4xl font-bold font-['Montserrat']">
        Bienvenido a Rick and Morty
      </div>

      {/* Descripción */}
      <div className="relative z-10 text-center text-neutral-50 text-sm sm:text-base md:text-lg font-semibold font-['Montserrat'] leading-relaxed sm:leading-loose max-w-[90%] md:max-w-[600px]">
        En esta prueba, evaluaremos su capacidad para construir la aplicación mediante el análisis de código y la reproducción del siguiente diseño.
      </div>

      {/* Botón */}
      <Button className="relative z-10 bg-[#8bc547] rounded-full px-6 py-3 sm:px-8 sm:py-4 md:px-10 md:py-5 text-[#354d18] text-sm sm:text-base font-bold font-['Montserrat'] leading-tight shadow-lg hover:bg-[#7cb342] transition">
        Comenzar
      </Button>
    </main>
  );
};

export default Home;
