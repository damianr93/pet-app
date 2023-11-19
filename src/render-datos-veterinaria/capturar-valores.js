import { nuevoDatoVeterinaria } from './renderizar-datos-veterinaria';
import { salvarDatosVeterniaria } from '../guardar-cargar-datos/datos-veterinaria';
import { deleteModal } from './agregar-datos-veterinaria';

    
/**
 * La funcion captura los valores de los diferentes forms, y genera un nuevo objeto para enviarlo a las funcionciones
 * "nuevoDatoVeterinaria" (renderiza los datos), y "salvarDatosVeterinaria" (Guarda datos en LocalStorage). Luego cierra
 * el modal, con la funcion "deleteModal"
 *
 * @param {HTMLDivElement} modal 
 */
export const capturarValores = (modal) => {

    let formModal = modal.querySelector('form')

    formModal.addEventListener("submit",(event) => {
        event.preventDefault()

        let nuevaVisita = {};

        if (event.target.closest(".formVacunacion")) {

            nuevaVisita = {
                fecha: document.querySelector(".fechaVacu").value,
                nombreVacu: document.querySelector("input[name='vacunaName']").value,
                fechaProx: document.querySelector(".fechaProxVacu").value,
                veterinaria: document.querySelector("input[name='veterinaria']").value,
            }

        } else if (event.target.closest(".formDesparacitacion")) {

            nuevaVisita = {
                fecha: document.querySelector(".fechaDesp").value,
                nombreDosis: document.querySelector("input[name='dosisDe']").value,
                fechaProx: document.querySelector(".fechaProxDosis").value,
                veterinaria: document.querySelector("input[name='veterinaria']").value,
            }
  
        } else if (event.target.closest(".formHistoriaClinica")) {

            nuevaVisita = {
                fecha: document.querySelector(".fechaHist").value,
                diagnostico: document.querySelector("input[name='diagn']").value,
                indicaciones: document.querySelector("input[name='ind']").value,
                veterinaria: document.querySelector("input[name='veterinaria']").value,
            }

        } else if (event.target.closest(".formEnfermedad")) {

            nuevaVisita = {
                fecha: document.querySelector(".fechaEnf").value,
                padecimiento: document.querySelector("input[name='diagn']").value
            }
        }

        nuevoDatoVeterinaria(nuevaVisita)
        salvarDatosVeterniaria(nuevaVisita)
        deleteModal()
    })
}