// src/App.jsx

//------------IMPORTACIONES DE REACT Y ROUTER--------------//
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

//------------ESTILOS GENERALES Y BOOTSTRAP--------------//
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./assets/scss/_01-General/_App.scss";

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
  const [searchQuery, setSearchQuery] = useState('');

  //------------FUNCION PARA CAMBIAR CATEGORIA DEL HEADER--------------//
  const handleCategoryChange = (newCategory) => {
    console.log("Categoría seleccionada:", newCategory);
    // Aquí podrías setear un estado si necesitás controlar la categoría seleccionada globalmente
  };

  return (
    <Router>
      {/* HEADER GENERAL */}
      <HeaderUnificado 
        categories={['Servicios', 'Impuestos', 'Alquileres']} 
        onCategoryChange={handleCategoryChange}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <hr className="border border-0 opacity-20" />

      <div className="main-content">
        <div className="content">
          <Routes>
            <Route path="/" element={<MainContent />} />
            <Route
              path="/contacto"
              element={
                <>
                  <ContactoLogoRedes />
                  <ContactoFormularioSlider />
                </>
              }
            />
            <Route path="/ayuda" element={<ConsultasAyuda />} />
            <Route path="/MainTareasEnProceso" element={<MainTareasEnProceso />} />
          </Routes>
        </div>
      </div>

      <hr className="border border-0 opacity-20" />

      <MainPublicidadSlider />
      <Footer />
      <MainWhatsappIcon />
    </Router>
  );
}

export default App;
