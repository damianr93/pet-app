
/**
 * Recibe un objeto producto de una nueva visita al veterniario, y renderiza estos valores en la interfaz del usuario.
 * @param {object} nuevaVisitaVeterinaria 
 * 
 */
export const nuevoDatoVeterinaria = (nuevaVisitaVeterinaria) => {

    switch (true) {

        case "nombreVacu" in nuevaVisitaVeterinaria:
        
        const tabla = document.querySelector('.vacunacionTable');
        const nuevaVisitaVeterinariaArray = Object.values(nuevaVisitaVeterinaria);
        const nuevaFila = tabla.insertRow();

        nuevaVisitaVeterinariaArray.forEach((valor, indice) => {

        const nuevaCelda = nuevaFila.insertCell(indice);
        nuevaCelda.textContent = valor;
        })

        break

        case  "nombreDosis" in nuevaVisitaVeterinaria:

        const tablaDesparacitacion = document.querySelector('.desparacitacionTable');
        const nuevaDesparacitacion = Object.values(nuevaVisitaVeterinaria);
        const nuevaFilaDesparacitacion = tablaDesparacitacion.insertRow();

        nuevaDesparacitacion.forEach((valor, indice) => {

        const nuevaCelda = nuevaFilaDesparacitacion.insertCell(indice);
        nuevaCelda.textContent = valor;
        })

        break
        case  "diagnostico" in nuevaVisitaVeterinaria:

        let historiaClinica = document.querySelector('.historiaClinica');
        let nuevahistoriaClinicaArray = Object.values(nuevaVisitaVeterinaria);
        let nuevoDivhistoriaClinica = document.createElement("div");
        nuevoDivhistoriaClinica.className = "historiaClinica__detalle"
        historiaClinica.appendChild(nuevoDivhistoriaClinica)

        nuevoDivhistoriaClinica.innerHTML = `<h3>${nuevahistoriaClinicaArray[0]}</h3>
        <p>En la veterinaria ${nuevahistoriaClinicaArray[3]}, la mascota en cuestion fue diagnosticado con ${nuevahistoriaClinicaArray[1]}, y se le indico ${nuevahistoriaClinicaArray[2]}.</p>`;

        break
        case  "padecimiento" in nuevaVisitaVeterinaria:

        let enfermedades = document.querySelector('.enfermedades');
        let nuevaenfermedadesArray = Object.values(nuevaVisitaVeterinaria);
        let nuevoDivenfermedades = document.createElement("div");
        nuevoDivenfermedades.className = "enfermedades__detalle"
        enfermedades.appendChild(nuevoDivenfermedades)

        nuevoDivenfermedades.innerHTML = `
        <ul>
            <li>${nuevaenfermedadesArray[1]} (desde ${nuevaenfermedadesArray[0]})</li>
        </ul>`;

        break
    }

}