import addHTML from './html/tabla-edicion-vacuna.html?raw';
import addHTML2 from './html/tabla-edicion-desparacitacion.html?raw';
import addHTML3 from './html/tabla-edicion-historia.html?raw';
import addHTML4 from './html/tabla-edicion-enfermedad.html?raw';
import './estilo-edicion.css'
import { cargarDatosDelStorageEnInputs } from './cargar-datos-storage-inputs';

let modal = '';

const showEditTable = () => {
    modal?.classList.remove('hide-add-table')
}

export const deleteEditTable = () => {
    modal?.classList.add('hide-add-table')
}

/**
 * La funcion permite al usuario editar los valores de los datos almacenados en el localStorage
 * @param {HTMLBodyElement} element
 * Llama a la funcion "cargarDatosDelStorageEnInputs", para generar una tabla con los valores almacenados
 */
export const editarDatosVeterinaria = (element) => {
    if ( modal ) return;

    modal = document.createElement('div');
    
    modal.className = 'modal-container-table hide-add-table';
    element.append( modal );

    const buttons = document.querySelectorAll('.buttonEdicionVeterinaria')
    const modalContainer = document.querySelector('.modal-container-table')
    
    buttons.forEach(button => {

        button.addEventListener('click', (event) => {

            if (event.target.closest(".vacunacion")) {

                modal.innerHTML = addHTML;
            } 
            else if (event.target.closest(".desparacitacion")) {

                modal.innerHTML = addHTML2;
            }
            else if (event.target.closest(".historiaClinica")) {

                modal.innerHTML = addHTML3;
            } 
            else if (event.target.closest(".enfermedades")) {

                modal.innerHTML = addHTML4;
            }

            showEditTable()
            cargarDatosDelStorageEnInputs()
        })
    })

    modalContainer.addEventListener('click', (event) => {

        if( event.target === modalContainer )

        deleteEditTable()
    })
}