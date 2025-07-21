import React, { useState } from "react";
import { FaTrash, FaCheck } from "react-icons/fa";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import "../assets/scss/_03-Componentes/_MainTareasEnProceso.scss";

// ------------ CONFIGURACIÓN INICIAL ------------ //
// Opciones de colores para las tareas
const colorOptions = [
  { label: "Rojo", value: "#FF5733" },
  { label: "Verde", value: "#28A745" },
  { label: "Azul", value: "#007BFF" },
  { label: "Amarillo", value: "#FFC107" },
  { label: "Gris", value: "#6C757D" },
];

// Tareas iniciales organizadas por columnas
const initialTasks = {
  todo: [
    { title: "Tarea 1", color: "#FF5733" },
  ],
  doing: [
    { title: "Tarea 2", color: "#28A745" },
  ],
  done: [
    { title: "Tarea 3", color: "#007BFF" },
  ],
  blocked: [
    { title: "Tarea 4", color: "#FFC107" },
  ],
};

// Nombres de las columnas
const columns = ["todo", "doing", "done", "blocked"];

// ------------ COMPONENTE PRINCIPAL ------------ //
function MainTareasEnProceso() {
  // Estado para las tareas
  const [tasks, setTasks] = useState(initialTasks);
  
  // Estado para nueva tarea
  const [newTask, setNewTask] = useState({
    title: "",
    color: "#333",
    date: "",
    priority: "medium",
    assignedTo: "",
  });
  
  // Estado para edición de tarea
  const [editTaskDetails, setEditTaskDetails] = useState({ 
    task: null, 
    column: null 
  });

  // ------------ MANEJADORES DE EVENTOS ------------ //
  
  // Maneja cambios en tareas existentes
  const handleTaskChange = (e, task, column) => {
    const { name, value } = e.target;
    setTasks((prevTasks) => ({
      ...prevTasks,
      [column]: prevTasks[column].map((t) =>
        t === task ? { ...t, [name]: value } : t
      ),
    }));
  };

  // Maneja cambios en el formulario de nueva tarea
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  // Envía nueva tarea
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title.trim() !== "") {
      setTasks((prevTasks) => ({
        ...prevTasks,
        todo: [...prevTasks.todo, newTask],
      }));
      setNewTask({
        title: "",
        color: "#333",
        date: "",
        priority: "medium",
        assignedTo: "",
      });
    }
  };

  // Mueve tareas entre columnas
  const moveTask = (task, fromColumn, direction) => {
    const currentIndex = columns.indexOf(fromColumn);
    const newIndex = currentIndex + direction;
    if (newIndex >= 0 && newIndex < columns.length) {
      const newColumn = columns[newIndex];
      setTasks((prevTasks) => {
        const newTasks = { ...prevTasks };
        newTasks[fromColumn] = prevTasks[fromColumn].filter((t) => t !== task);
        newTasks[newColumn] = [...prevTasks[newColumn], task];
        return newTasks;
      });
    }
  };

  // Elimina tareas
  const handleTaskDelete = (task, column) => {
    setTasks((prevTasks) => {
      const updatedTasks = { ...prevTasks };
      updatedTasks[column] = updatedTasks[column].filter((t) => t !== task);
      return updatedTasks;
    });
  };

  // ------------ RENDERIZADO ------------ //
  return (
    <div className="mainTareasEnProceso">
      {/* Formulario para agregar nuevas tareas */}
      <form className="task-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título</label>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            placeholder="Título"
            required
          />
        </div>
        
        <div className="form-group">
          <label>Descripción</label>
          <textarea 
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            placeholder="Descripción"
          />
        </div>
        
        <div className="form-group">
          <label>Fecha</label>
          <input
            type="date"
            name="date"
            value={newTask.date}
            onChange={handleInputChange}
          />
        </div>
        
        <div className="form-group">
          <label>Color:</label>
          <div className="color-options">
            {colorOptions.map((option) => (
              <div
                key={option.value}
                className={`color-option ${newTask.color === option.value ? "selected" : ""}`}
                style={{ backgroundColor: option.value }}
                onClick={() => setNewTask({ ...newTask, color: option.value })}
              >
                {newTask.color === option.value && <FaCheck className="color-check" />}
              </div>
            ))}
          </div>
        </div>
        
        <div className="form-group">
          <label>Prioridad</label>
          <select
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
          >
            <option value="low">Baja</option>
            <option value="medium">Media</option>
            <option value="high">Alta</option>
          </select>
        </div>
        
        <div className="form-group">
          <label>Asignado a</label>
          <input
            type="text"
            name="assignedTo"
            value={newTask.assignedTo}
            onChange={handleInputChange}
            placeholder="Asignado a"
          />
        </div>
        
        <button type="submit" className="add-task-button">
          Agregar
        </button>
      </form>

      {/* Columnas de tareas */}
      <div className="task-columns">
        {columns.map((status) => (
          <div key={status} className="task-column">
            <h2>{status.toUpperCase()}</h2>
            <div className="task-list">
              {tasks[status].length > 0 ? (
                <div className="task-list-container">
                  {tasks[status].map((task, index) => (
                    <div
                      key={index}
                      className="task-item"
                      style={{ backgroundColor: task.color }}
                    >
                      <div className="task-content">
                        <h3>{task.title}</h3>
                        {task.description && <p>{task.description}</p>}
                        {task.date && <small>{task.date}</small>}
                        
                        <div className="task-meta">
                          <span>Prioridad: {task.priority}</span>
                          {task.assignedTo && <span>Asignado a: {task.assignedTo}</span>}
                        </div>
                        
                        <div className="task-item-actions">
                          <button
                            onClick={() => moveTask(task, status, -1)}
                            className="move-task-button"
                            disabled={status === columns[0]}
                            aria-label="Mover tarea a la izquierda"
                          >
                            <BsArrowLeft />
                          </button>
                          
                          <button
                            onClick={() => handleTaskDelete(task, status)}
                            className="delete-task-button"
                            aria-label="Eliminar tarea"
                          >
                            <FaTrash />
                          </button>
                          
                          <button
                            onClick={() => moveTask(task, status, 1)}
                            className="move-task-button"
                            disabled={status === columns[columns.length - 1]}
                            aria-label="Mover tarea a la derecha"
                          >
                            <BsArrowRight />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="no-tasks">No hay tareas</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MainTareasEnProceso;