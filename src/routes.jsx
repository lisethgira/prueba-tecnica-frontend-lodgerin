import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const AppRoutes = () => {
  return (
    
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} /> Página 404
      </Routes>
    
  );
};

export default AppRoutes;
