import {} from "./src/renderizar-datos-presentacion";
import './style.css';
import { renderModal } from "./src/render-datos-veterinaria/agregar-datos-veterinaria";
import { cargarDatosVeterinaria } from "./src/guardar-cargar-datos/datos-veterinaria";
import { editarDatosVeterinaria } from "./src/edicion-datos-veterinaria/edicion-datos-veterinaria";
import { appRecordatorio } from "./src/recordatorio/app-recordatorio";

const body = document.body;
const recordatorio = document.querySelector('.recordatorio')
renderModal( body )
cargarDatosVeterinaria()
editarDatosVeterinaria(body)
appRecordatorio(recordatorio)

