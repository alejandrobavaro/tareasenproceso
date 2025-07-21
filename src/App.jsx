// src/App.jsx

//------------IMPORTACIONES DE REACT Y ROUTER--------------//
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//------------ESTILOS GENERALES Y BOOTSTRAP--------------//
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap base (mantenemos esto)
import "bootstrap-icons/font/bootstrap-icons.css"; // Íconos de Bootstrap
import "./assets/scss/_01-General/_App.scss"; // Nuestros estilos personalizados

//------------IMPORTACION DE COMPONENTES--------------//
import HeaderUnificado from "./componentes/HeaderUnificado";
import MainContent from "./componentes/MainContent";
import MainWhatsappIcon from "./componentes/MainWhatsappIcon";
import MainPublicidadSlider from "./componentes/MainPublicidadSlider";
import MainTareasEnProceso from "./componentes/MainTareasEnProceso";
import Footer from "./componentes/Footer";
import ContactoLogoRedes from "./componentes/ContactoLogoRedes";
import ContactoFormularioSlider from "./componentes/ContactoFormularioSlider";
import ConsultasAyuda from "./componentes/ConsultasAyuda";

function App() {
  //------------STATE PARA BUSCADOR GLOBAL--------------//
  // Este estado se comparte con el Header para búsquedas globales
  const [searchQuery, setSearchQuery] = useState('');

  //------------FUNCION PARA CAMBIAR CATEGORIA DEL HEADER--------------//
  // Recibe la nueva categoría seleccionada desde el Header
  const handleCategoryChange = (newCategory) => {
    console.log("Categoría seleccionada:", newCategory);
    // Aquí podrías setear un estado si necesitás controlar la categoría seleccionada globalmente
  };

  return (
    <Router>
      {/* HEADER GENERAL - Recibe props para categorías y búsqueda */}
      <HeaderUnificado 
        categories={['Servicios', 'Impuestos', 'Alquileres']} 
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* DIVISOR - Línea sutil entre header y contenido */}
      <hr className="border-divider" />

      {/* CONTENIDO PRINCIPAL - Aquí se renderizan las páginas según la ruta */}
      <div className="main-content">
        <div className="content">
          <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<MainContent />} />
            
            {/* Ruta de contacto - Muestra dos componentes */}
            <Route
              path="/contacto"
              element={
                <>
                  <ContactoLogoRedes />
                  <ContactoFormularioSlider />
                </>
              }
            />
            
            {/* Ruta de ayuda */}
            <Route path="/ayuda" element={<ConsultasAyuda />} />
            
            {/* Ruta del gestor de tareas */}
            <Route path="/MainTareasEnProceso" element={<MainTareasEnProceso />} />
          </Routes>
        </div>
      </div>

      {/* DIVISOR - Línea sutil entre contenido y footer */}
      <hr className="border-divider" />

      {/* COMPONENTES ADICIONALES - Se muestran en todas las páginas */}
      <MainPublicidadSlider />
      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;