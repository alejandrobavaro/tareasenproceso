import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../assets/scss/_03-Componentes/_HeaderUnificado.scss";

function HeaderUnificado() {
  const isActive = (path) => useLocation().pathname === path;

  return (
    <header className="header-unificado-moderno">
      <div className="contenedor-header-moderno">
        <div className="logo-moderno">
          <Link to="/">
            <img
              src="/img/02-logos/logocalculadoraretro1.png"
              alt="Logo"
              className="logo-img-moderno"
            />
          </Link>
          <span className="titulo-moderno">Tareas en Proceso - ToDo</span>
        </div>

        <nav className="nav-links-moderno">
          <Link 
            to="/MainTareasEnProceso" 
            className={`nav-item ${isActive("/MainTareasEnProceso") ? "activo" : ""}`}
          >
            <span className="nav-text">Tareas en Proceso</span>
            <span className="nav-indicator"></span>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default HeaderUnificado;