import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import University from "./pages/University";
import Elements from "./pages/Elements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/university" element={<University />} />
        <Route path="/elements" element={<Elements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
