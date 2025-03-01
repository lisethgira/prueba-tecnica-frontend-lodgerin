import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Personajes from "./pages/Personajes";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/personajes" element={<Personajes />} />
        <Route path="*" element={<NotFound />} /> Página 404
      </Routes>
    
  );
};

export default AppRoutes;
