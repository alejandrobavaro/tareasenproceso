import React from "react";
import { Link } from "react-router-dom";
import FooterGondraWorldDev from "./FooterGondraWorldDev";
import { FiHelpCircle, FiMail, FiInstagram, FiYoutube } from "react-icons/fi";
import { FaTasks } from "react-icons/fa"; // Cambiado de FaCalculator a FaTasks
import "../assets/scss/_03-Componentes/_Footer.scss";

function Footer() {
  return (
    <footer className="modern-footer">
      {/* Contenedor principal del footer */}
      <div className="footer-content-wrapper">
        
        {/* Sección superior con columnas */}
        <div className="footer-main-section">
          
          {/* Columna del logo y enlaces básicos */}
          <div className="footer-brand-column">
            <Link to="/" className="footer-logo-link">
              <FaTasks className="footer-icon" /> {/* Icono cambiado aquí */}
              <span className="brand-name">Tareas en Proceso</span>
            </Link>
            
            {/* Enlaces de navegación principales */}
            <div className="footer-contact-links">
              <Link to="/" className="footer-link">
                Inicio
              </Link>
              <Link to="/contacto" className="footer-link">
                Contacto
              </Link>
              <Link to="/privacidad" className="footer-link">
                Privacidad
              </Link>
            </div>
          </div>
          
          {/* Columna con enlaces rápidos */}
          <div className="footer-links-column">
            <h3 className="links-title">Enlaces Rápidos</h3>
            <div className="footer-links-grid">
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Calendario
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Tareas
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Dolar Hoy
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Notas
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="footer-link external-link">
                Temporizador
              </a>
              <Link to="/ayuda" className="footer-link">
                Ayuda
              </Link>
            </div>
          </div>
          
          {/* Columna de redes sociales */}
          <div className="footer-social-column">
            <h3 className="social-title">Buscanos</h3>
            <div className="social-icons">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FiInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="YouTube">
                <FiYoutube />
              </a>
              <a href="mailto:contacto@calculadorapro.com" className="social-icon" aria-label="Email">
                <FiMail />
              </a>
              <a href="#" className="social-icon" aria-label="Soporte">
                <FiHelpCircle />
              </a>
            </div>
          </div>
        </div>
        
        {/* Línea divisoria */}
        <div className="footer-divider"></div>
        
        {/* Sección inferior con copyright */}
        <div className="footer-bottom">
          <FooterGondraWorldDev />
          <p className="copyright-text">
            © {new Date().getFullYear()} TareasEnProceso. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;