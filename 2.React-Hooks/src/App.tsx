import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Products from "./pages/Products";
import FormPage from "./pages/FormPage";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/products" element={<Products />} />
        <Route path="/form" element={<FormPage />} />
      </Routes>
    </BrowserRouter>
    </ThemeProvider>
    
  );
}

export default App;