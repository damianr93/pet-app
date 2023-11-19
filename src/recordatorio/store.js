
import { Recordatorio } from "./model"

let recordatorio = []

const salvarRecordatorio = () => {
    localStorage.setItem('recordatorio', JSON.stringify(recordatorio));
}

const crearRecordatorio = (nuevaDescripcion) => {
    let nueva = new Recordatorio(nuevaDescripcion)
    recordatorio.push( nueva )  
    salvarRecordatorio()

}

const borrarRecordatorio = (recordatorioID) => {

    recordatorio = recordatorio.filter( recordatorio => recordatorio.id !== recordatorioID )
    salvarRecordatorio()
}

const crearHTML = (recordatorio) =>{
    const divRecordatorio = document.querySelector('.recordatoriosLI')
    const elementoUL = document.createElement('ul')
    elementoUL.setAttribute('data-id', recordatorio.id)
    elementoUL.classList.add('elementUL')


    elementoUL.innerHTML = `
    <li>
        <div class="nuevoRecordatorio">
        <label>${recordatorio.descripcion}</label>
        <button class="destruirRecordatorio"></button>
        </div>
    </li>
    `
    divRecordatorio.appendChild(elementoUL)
};


const renderizarRecordatorios = () => {
    
    if(!localStorage.getItem('recordatorio')) return

    const datosDelStorage = JSON.parse(localStorage.getItem('recordatorio')) 
    recordatorio = datosDelStorage

    const limpiarDiv = document.querySelector('.recordatoriosLI')
    limpiarDiv.innerHTML = '';
    
    
    recordatorio.forEach(i => {

        crearHTML(i)
        
    });

}


export default{
    renderizarRecordatorios,
    recordatorio,
    salvarRecordatorio,
    crearRecordatorio,
    borrarRecordatorio
}

