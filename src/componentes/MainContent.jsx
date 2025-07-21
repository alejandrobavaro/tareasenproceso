import React from "react";
import MainTareasEnProceso from "./MainTareasEnProceso";
import MainPublicidadSlider from "./MainPublicidadSlider";
import "../assets/scss/_03-Componentes/_MainContent.scss";

function MainContent() {
  return (
    <main className="main-content-container">
      {/* Contenedor principal del contenido - envuelve todo el contenido de la página */}
      <div className="content-wrapper">
        {/* Componente principal - Gestor de tareas */}
        <MainTareasEnProceso />
        
        {/* Componente de publicidad - se muestra debajo del gestor de tareas */}
        <MainPublicidadSlider />
      </div>
    </main>
  );
}

export default MainContent;