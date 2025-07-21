import React from 'react';
import ContactoFormularioSlider from "./ContactoFormularioSlider";
import '../assets/scss/_03-Componentes/_ConsultasAyuda.scss';

const ConsultasAyuda = () => {
  return (
    <div className="ayuda">
      {/* Título secundario */}
      <h2>Ayuda</h2>
      
      {/* Contenedor del formulario */}
      <form>
        {/* Título principal del formulario */}
        <h1>Formulario de Ayuda</h1>
        
        {/* Componente del formulario de contacto */}
        <ContactoFormularioSlider />
      </form>
    </div>
  );
}

export default ConsultasAyuda;