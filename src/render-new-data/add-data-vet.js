import addHTML from './form-new-vet-data.html?raw';
import './add-data-vet.css'

let modal, form;

const showModal = () => {
    modal?.classList.remove('hide-add')
} 

const deleteModal = () => {
    modal?.classList.add('hide-add')
    form?.reset()
}


// const renderNewVacu = (element) => {
    
//     element.innerHTML = `
//     <tr>
//         <td>${nuevaVacu.fecha}</td>
//         <td>${nuevaVacu.nombre}</td>
//         <td>hacer</td>
//         <td>${nuevaVacu.veterinaria}</td>
//     </tr>
//   `
// }



export const renderModal =  ( element ) => {
    if ( modal ) return;

    modal = document.createElement('div');
    modal.innerHTML = addHTML;
    modal.className = 'modal-container hide-modal';
    element.append( modal );

    let clickButton = document.querySelector('.clasif')
    let clickModalContainer = document.querySelector('.modal-container')
    let formModal = modal.querySelector('form')

    clickButton.addEventListener("click", () => {
        showModal()
    })
    
    clickModalContainer.addEventListener("click", (event) => {

        if(event.target === clickModalContainer)
        deleteModal()
    })

    formModal.addEventListener("submit",(event) => {
        event.preventDefault()

        const nuevaVacu = {
            fecha: document.querySelector("input[name='date']").value,
            nombre: document.querySelector("input[name='vacunaName']").value,
            veterinaria: document.querySelector("input[name='veterinaria']").value,
          }


        const tablavacu = document.querySelector('.tablevet')

        // Crear una nueva fila
        const nuevaFila = tablavacu.insertRow();

        // Agregar celdas a la nueva fila
        const nuevaCelda1 = nuevaFila.insertCell(0);
        nuevaCelda1.textContent = `${nuevaVacu.fecha}`;

        const nuevaCelda2 = nuevaFila.insertCell(1);
        nuevaCelda2.textContent = `${nuevaVacu.nombre}`;

        const nuevaCelda3 = nuevaFila.insertCell(2);
        nuevaCelda3.textContent = 'hacer';

        const nuevaCelda4 = nuevaFila.insertCell(3);
        nuevaCelda4.textContent = `${nuevaVacu.veterinaria}`;


        // tablavacu.innerHTML += `
        // <tr>
        //     <td>${nuevaVacu.fecha}</td>
        //     <td>${nuevaVacu.nombre}</td>
        //     <td>hacer</td>
        //     <td>${nuevaVacu.veterinaria}</td>
        // </tr>
        // `

        deleteModal()
        
    })


    deleteModal()

}



