const Home = () => {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-5xl font-bold text-blue-600">Bienvenido a Mi App</h1>
        <p className="mt-4 text-lg text-gray-700">
          Explora las funcionalidades y descubre más sobre nosotros.
        </p>
        <button className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transition">
          Comenzar
        </button>
      </div>
    );
  };
  
  export default Home;
  