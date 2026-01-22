import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Generic from "./pages/Generic";
import Elements from "./pages/Elements";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/generic" element={<Generic />} />
        <Route path="/elements" element={<Elements />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
