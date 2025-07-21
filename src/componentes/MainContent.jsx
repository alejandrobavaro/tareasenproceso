import React from "react";
import MainTareasEnProceso from "./MainTareasEnProceso";
import MainPublicidadSlider from "./MainPublicidadSlider";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="main-content-container">
      {/* Contenedor principal del contenido */}
      <div className="content-wrapper">
        {/* Componente de la calculadora - Elemento principal */}
        <MainTareasEnProceso />

       
        <MainPublicidadSlider />
      </div>
    </main>
  );
}

export default MainContent;