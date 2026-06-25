import { Outlet, NavLink } from "react-router-dom";
import "./RootLayout.css";

export default function RootLayout() {
  return (
    <div className="layout">

      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">🎮 GameVerse</NavLink>
        <div className="navbar-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Home
          </NavLink>
          <NavLink to="/jogos" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Jogos
          </NavLink>
          <NavLink to="/playgames" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
            Por Género
          </NavLink>
        </div>
      </nav>

      <main className="layout-main">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="footer-content">
          <span className="footer-logo">🎮 GameVerse</span>
          <p>Descobre os melhores jogos gratuitos</p>
          <span className="footer-copy">© 2025 GameVerse</span>
        </div>
      </footer>

    </div>
  );
}