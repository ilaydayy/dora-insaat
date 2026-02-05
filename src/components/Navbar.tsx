import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  // Scroll olunca navbar beyaz olsun
  useEffect(() => {
    const onScroll = () => {
      setSolid(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Mobile menu açıkken scroll kilidi
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`navbar ${solid ? "is-solid" : ""}`}>
      <div className="navbar-container">
        {/* LOGO */}
        <NavLink to="/" className="navbar-logo" onClick={() => setOpen(false)}>
          <img
            className="logo-img"
            src="/logo.png"   {/* LOGO BURADA */}
            alt="Dora İnşaat"
          />
          <div className="logo-text">
            <strong>DORA İNŞAAT</strong>
            <span>Kaliteli İnşaat Hizmetleri</span>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <nav aria-label="Ana menü">
          <ul className="navbar-menu">
            <li>
              <NavLink to="/" end>
                Ana Sayfa
              </NavLink>
            </li>
            <li>
              <NavLink to="/projeler">
                Projelerimiz
              </NavLink>
            </li>
            <li>
              <NavLink to="/hakkimizda">
                Hakkımızda
              </NavLink>
            </li>
            <li>
              <NavLink to="/iletisim">
                İletişim
              </NavLink>
            </li>
          </ul>
        </nav>

        {/* HAMBURGER */}
        <button
          className="navbar-toggle"
          type="button"
          aria-label="Menüyü aç/kapat"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>
      </div>

      {/* MOBILE DRAWER */}
      {open && (
        <div
          className="navbar-drawer-backdrop"
          onClick={() => setOpen(false)}
        >
          <div
            className="navbar-drawer"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="drawer-header">
              <span>Menü</span>
              <button
                className="drawer-close"
                onClick={() => setOpen(false)}
              >
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
