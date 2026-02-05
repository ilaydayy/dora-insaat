import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          {/* logo yolunu senin projene göre ayarla */}
     <img className="logo-img" src="/images/logo.png" alt="Dora İnşaat" />
        </NavLink>

        {/* Desktop menu */}
        <nav className="navbar-nav" aria-label="Ana menü">
          <ul className="navbar-menu">
            <li>
              <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                Ana Sayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/projeler" className={({ isActive }) => (isActive ? "active" : "")}>
                Projelerimiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/hakkimizda" className={({ isActive }) => (isActive ? "active" : "")}>
                Hakkımızda
              </NavLink>
            </li>
            <li>
              <NavLink to="/iletisim" className={({ isActive }) => (isActive ? "active" : "")}>
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="navbar-toggle"
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="navbar-drawer-backdrop" onClick={() => setOpen(false)} role="presentation">
          <div className="navbar-drawer" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <div className="drawer-header">
              <span>Menü</span>
              <button className="drawer-close" onClick={() => setOpen(false)} aria-label="Kapat" type="button">
                ✕
              </button>
            </div>

            <NavLink to="/" onClick={() => setOpen(false)} className="drawer-link">
              Ana Sayfa
            </NavLink>
            <NavLink to="/projeler" onClick={() => setOpen(false)} className="drawer-link">
              Projelerimiz
            </NavLink>
            <NavLink to="/hakkimizda" onClick={() => setOpen(false)} className="drawer-link">
              Hakkımızda
            </NavLink>
            <NavLink to="/iletisim" onClick={() => setOpen(false)} className="drawer-link">
              İletişim
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
