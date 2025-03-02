import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetallePersonaje from "../components/DetallePersonaje";
import { getCharacterById } from "../services/apiService";
import Footer from "../components/Footer";

const DetallePersonajePage = () => {
  const { id } = useParams(); // Obtiene el ID del personaje desde la URL
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCharacter = async () => {
      setLoading(true);
      const data = await getCharacterById(id);
      setCharacter(data);
      setLoading(false);
    };

    fetchCharacter();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Cargando...</p>;

  return (
    <>
      <div className="flex justify-center items-center min-h-screen">
        <DetallePersonaje character={character} onClose={() => {}} />
      </div>
      <Footer />
    </>
  );
};

export default DetallePersonajePage;
