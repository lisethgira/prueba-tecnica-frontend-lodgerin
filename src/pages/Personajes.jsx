import { useState } from "react";
import ContentPersonajes from "../components/ContentPersonajes";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Personajes = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <ContentPersonajes searchTerm={searchTerm} />
      <Footer />
    </>
  );
};

export default Personajes;
