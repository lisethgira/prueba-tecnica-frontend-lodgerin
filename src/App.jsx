import PWABadge from "./PWABadge.jsx";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
      <PWABadge />
    </BrowserRouter>
  );
}

export default App;
