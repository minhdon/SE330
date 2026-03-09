import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage/index.tsx";
import ContactPage from "./pages/ContactPage/index.tsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;
