import store from './store'


export const appRecordatorio = (elemento) => {
  
    store.renderizarRecordatorios()     
            
    const input = document.querySelector('.recordatorioInput')
    const divRecordatorio = document.querySelector('.recordatoriosLI');

    input.addEventListener('keyup', (event) => {
        if(event.keyCode === 13) {
        store.crearRecordatorio( event.target.value )
        event.target.value = '';
        store.renderizarRecordatorios()
        }
    })

    divRecordatorio.addEventListener('click', (event) => {
        if (event.target.classList.contains('destruirRecordatorio')) {
            const elemento = event.target.closest('[data-id]');
            store.borrarRecordatorio(elemento.getAttribute('data-id'));
            store.renderizarRecordatorios();
        }
    });
      
}

