import { capturarDatosEditados } from "./capturar-datos-editados";


/**
 * La funcion "cargarDatosDelStorageEnInputs" carga los datos almacenados en el localStorage a inputs distribuidos en una tabla.
 */
export const cargarDatosDelStorageEnInputs = () => {

    const datosTablaGuardados = localStorage.getItem('datosVacuna');
    const datosTablaDesparacitacionGuardados = localStorage.getItem('datosDesparacitacion');
    const datosTablaHistoriaGuardados = localStorage.getItem('datosHistoria');
    const datosTablaEnfermedadesGuardados = localStorage.getItem('datosEnfermedad');

    const datosTabla = JSON.parse(datosTablaGuardados);
    const datosTablaDesparacitacion = JSON.parse(datosTablaDesparacitacionGuardados)
    const datosHistoria = JSON.parse(datosTablaHistoriaGuardados)
    const datosEnfermedades = JSON.parse(datosTablaEnfermedadesGuardados)
    
    const tablavacu = document.querySelector('.tablaEdicionVacuna');
    const tablaDesparacitacion = document.querySelector('.tablaEdicionDesparacitacion')
    const historia = document.querySelector('.tablaEdicionHistoria')
    const enfermedad = document.querySelector('.tablaEdicionEnfermeda')

    if(tablavacu) {

        for (let i in datosTabla) {

            const nuevaFila = tablavacu.insertRow();
            const datos = Object.values(datosTabla[i]);
        
            datos.forEach((valor) => {
        
                const celda = nuevaFila.insertCell();
                const input = document.createElement('input');
                input.className= 'editVacu';
                input.value=valor;
                celda.appendChild(input)
            })
        }
    } 
    else if (tablaDesparacitacion) {

        for (let i in datosTablaDesparacitacion) {

            const nuevaFila = tablaDesparacitacion.insertRow();
            const datos = Object.values(datosTablaDesparacitacion[i]);
            
            datos.forEach((valor) => {
            
                const celda = nuevaFila.insertCell();
                const input = document.createElement('input');
                input.className= 'editDesp';
                input.value=valor;
                celda.appendChild(input)
            })
        }
    } 
    else if (historia) {

        for (let i in datosHistoria) {

            const nuevaFila = historia.insertRow();
            const datos = Object.values(datosHistoria[i]);
            
            datos.forEach((valor) => {
            
                const celda = nuevaFila.insertCell();
                const input = document.createElement('input');
                input.className= 'editHist';
                input.value=valor;
                celda.appendChild(input)
            })
        }
    } 
    else if (enfermedad) {

        for (let i in datosEnfermedades) {

            const nuevaFila = enfermedad.insertRow();
            const datos = Object.values(datosEnfermedades[i]);
            
            datos.forEach((valor) => {
            
                const celda = nuevaFila.insertCell();
                const input = document.createElement('input');
                input.className= 'editEnf';
                input.value=valor;
                celda.appendChild(input)
            })
        }
    }
    capturarDatosEditados()
}