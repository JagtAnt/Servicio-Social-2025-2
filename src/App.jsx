import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import University from "./pages/University";
import Elements from "./pages/Elements";
import Ingreso from "./pages/Ingreso";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/university" element={<University />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/admision" element={<Ingreso />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
