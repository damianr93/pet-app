import addHTML from './html/form-agregar-vacunacion.html?raw';
import addHTML2 from './html/form-agregar-desparacitacion.html?raw';
import addHTML3 from './html/form-agregar-historia.html?raw';
import addHTML4 from './html/form-agregar-enfermedad.html?raw';
import './add-data-vet.css'
import { capturarValores } from './capturar-valores';



let modal, form;

const showModal = () => {
    modal?.classList.remove('hide-add')
} 

export const deleteModal = () => {
    modal?.classList.add('hide-add')
    form?.reset()
}


/**
 * La funcion crea un modal container que permite al usuario cargar datos nuevos de la seccion "veterinaria"
 * @param {HTMLBodyElement} element
 * 
 */
export const renderModal =  ( element ) => {
    if ( modal ) return;

    modal = document.createElement('div');
    modal.className = 'modal-container hide-modal';
    element.append( modal );

    let buttons = document.querySelectorAll('.buttonAdicionVeterinaria')
    let clickModalContainer = document.querySelector('.modal-container')
    

    buttons.forEach(button =>{ 

        button.addEventListener("click", (event) => {

            if ( event.target.closest(".vacunacion") ){

                modal.innerHTML = addHTML;

            } else if (event.target.closest(".desparacitacion")) {

                modal.innerHTML =addHTML2;

            } else if (event.target.closest(".historiaClinica")) {

                modal.innerHTML =addHTML3;

            } else if (event.target.closest(".enfermedades")) {

                modal.innerHTML =addHTML4;

            }

            showModal()

            capturarValores(modal)
        })
    })

    clickModalContainer.addEventListener("click", (event) => {

        if(event.target === clickModalContainer)
        deleteModal()
    })

    deleteModal()

}




