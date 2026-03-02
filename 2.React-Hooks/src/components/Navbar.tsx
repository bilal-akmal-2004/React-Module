import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { Link } from "react-router-dom";

export default function Navbar() {
  const themeContext = useContext(ThemeContext);
  const themeValue = themeContext?.theme;
  if (!themeContext) return null;

  const { toggleTheme } = themeContext;

  return (
    <nav className={`navbar ${themeValue==="light" ? "navbar-light" : "navbar-dark" }`}>
      <div className="left-bar">
      <Link to="/" className="">Home</Link> 
      <Link to="/products">Products</Link> 
      <Link to="/form">Form</Link>
      </div>
    
      <div className="right-bar">
      <button onClick={toggleTheme}>{themeValue==="light" ? `Light Theme 💡` : "Dark Theme 🌑"}</button>
      </div>
    </nav>
  );
}