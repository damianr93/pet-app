import { deleteEditTable } from "./edicion-datos-veterinaria"

/**
 * Almacena en distintas "key" del localStorage, los datos introducidos en inputs, dependiendo del submit presionado.
 */
export const capturarDatosEditados = () => {

    const submits =document.querySelectorAll('.submitButton')

    submits.forEach(submit => {

        submit.addEventListener("click", (event) => {
            event.preventDefault()

            if (submit.classList.contains("buttonVacuna")) {

                const inputs = document.querySelectorAll('.editVacu')
                const datos = [];
        
                inputs.forEach((input) => {
                    datos.push(input.value)
                })

                const datosFinal = [] 
        
                for (let i = 0; i < datos.length; i += 4) {
                    const fecha = datos[i];
                    const nombreVacu = datos[i + 1];
                    const fechaProx = datos[i + 2];
                    const veterinaria = datos[i + 3];
                    const objeto = { fecha, nombreVacu, fechaProx, veterinaria };
                    datosFinal.push(objeto);
                }
                  
                localStorage.setItem('datosVacuna', JSON.stringify(datosFinal));

            } else if (submit.classList.contains("buttonDesparacitacion")) {

                const inputs = document.querySelectorAll('.editDesp')
                const datos = [];
        
                inputs.forEach((input) => {
                    datos.push(input.value)
                })

                const datosFinal = [] 
        
                for (let i = 0; i < datos.length; i += 4) {
                    const fecha = datos[i];
                    const nombreDosis = datos[i + 1];
                    const fechaProx = datos[i + 2];
                    const veterinaria = datos[i + 3];
                    const objeto = { fecha, nombreDosis, fechaProx, veterinaria };
                    datosFinal.push(objeto);
                }
                  
                localStorage.setItem('datosDesparacitacion', JSON.stringify(datosFinal));

            } else if (submit.classList.contains("buttonHistoria")) {

                const inputs = document.querySelectorAll('.editHist')
                const datos = [];
        
                inputs.forEach((input) => {
                    datos.push(input.value)
                })

                const datosFinal = [] 
        
                for (let i = 0; i < datos.length; i += 4) {
                    const fecha = datos[i];
                    const diagnostico = datos[i + 1];
                    const indicaciones = datos[i + 2];
                    const veterinaria = datos[i + 3];
                    const objeto = { fecha, diagnostico, indicaciones, veterinaria };
                    datosFinal.push(objeto);
                }
                  
                localStorage.setItem('datosHistoria', JSON.stringify(datosFinal));

            } else if (submit.classList.contains("buttonEnfermedad")) {

                const inputs = document.querySelectorAll('.editEnf')
                const datos = [];
        
                inputs.forEach((input) => {
                    datos.push(input.value)
                })

                const datosFinal = [] 
        
                for (let i = 0; i < datos.length; i += 2) {
                    const fecha = datos[i];
                    const padecimiento = datos[i + 1];
                    const objeto = { fecha, padecimiento };
                    datosFinal.push(objeto);
                }
                  
                localStorage.setItem('datosEnfermedad', JSON.stringify(datosFinal));
            }

            deleteEditTable()
            location.reload();
    
        })
    })
}