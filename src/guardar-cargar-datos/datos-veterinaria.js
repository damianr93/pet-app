import { nuevoDatoVeterinaria } from "../render-datos-veterinaria/renderizar-datos-veterinaria";

/**
 * Recibe datos producto de una nueva visita al veterinario y los almacena en el localStorage
 * @param {object}datosAlmacenar 
 */
export const salvarDatosVeterniaria = (datosAlmacenar) => {

    switch (true) {
  
      case "nombreVacu" in datosAlmacenar:
  
        const datosVacunacionGuardados = localStorage.getItem('datosVacuna');
        let datosExistentes = [];
  
        if (datosVacunacionGuardados) {
        
          datosExistentes = JSON.parse(datosVacunacionGuardados);
           
        } 
  
        datosExistentes.push(datosAlmacenar)
        localStorage.setItem('datosVacuna', JSON.stringify(datosExistentes));
      break
      case "nombreDosis" in datosAlmacenar:
  
        const datosDesparacitacionGuardados = localStorage.getItem('datosDesparacitacion');
        let datosDespExistentes = [];
  
        if (datosDesparacitacionGuardados) {
        
          datosDespExistentes = JSON.parse(datosDesparacitacionGuardados);
           
        } 
  
        datosDespExistentes.push(datosAlmacenar)
        localStorage.setItem('datosDesparacitacion', JSON.stringify(datosDespExistentes));
        break
        case "diagnostico" in datosAlmacenar:
  
        const datosHistoriaGuardados = localStorage.getItem('datosHistoria');
        let datosHisExistentes = [];
  
        if (datosHistoriaGuardados) {
        
          datosHisExistentes = JSON.parse(datosHistoriaGuardados);
           
        } 
  
        datosHisExistentes.push(datosAlmacenar)
        localStorage.setItem('datosHistoria', JSON.stringify(datosHisExistentes));
        break
        case "padecimiento" in datosAlmacenar:
  
        const datosEnfermedadGuardados = localStorage.getItem('datosEnfermedad');
        let datosEnfExistentes = [];
  
        if (datosEnfermedadGuardados) {
        
          datosEnfExistentes = JSON.parse(datosEnfermedadGuardados);
           
        } 
  
        datosEnfExistentes.push(datosAlmacenar)
        localStorage.setItem('datosEnfermedad', JSON.stringify(datosEnfExistentes));
        break
    }
}


/**
 * La funcion carga los datos almacenados en el LocalStorage y los renderiza en la interface del usuario.
 */
export const cargarDatosVeterinaria = () => {
    
  document.addEventListener('DOMContentLoaded', () => {
      
    const datosVacunacionGuardados = localStorage.getItem('datosVacuna');
    const datosDesparacitacionGuardados = localStorage.getItem('datosDesparacitacion');
    const datosHistoriaGuardados = localStorage.getItem('datosHistoria');
    const datosEnfermedadGuardados = localStorage.getItem('datosEnfermedad');

    const datosVacunacion= JSON.parse(datosVacunacionGuardados)
    const datosDesparacitacion = JSON.parse(datosDesparacitacionGuardados)
    const datosHistoria = JSON.parse(datosHistoriaGuardados)
    const datosEnfermedad = JSON.parse(datosEnfermedadGuardados)
      
    for( let i in datosVacunacion) {
    
      const nueavosDatos = {
        fecha: datosVacunacion[i].fecha,
        nombreVacu: datosVacunacion[i].nombreVacu,
        fechaProx: datosVacunacion[i].fechaProx,
        veterinaria: datosVacunacion[i].veterinaria,
      }

      nuevoDatoVeterinaria(nueavosDatos)
    }
  
    for( let i in datosDesparacitacion) {
    
      const nueavosDatos = {
        fecha: datosDesparacitacion[i].fecha,
        nombreDosis: datosDesparacitacion[i].nombreDosis,
        fechaProx: datosDesparacitacion[i].fechaProx,
        veterinaria: datosDesparacitacion[i].veterinaria,
      }

      nuevoDatoVeterinaria(nueavosDatos)
    }

    for( let i in datosHistoria) {
    
      const nueavosDatos = {
        fecha: datosHistoria[i].fecha,
        diagnostico: datosHistoria[i].diagnostico,
        indicaciones: datosHistoria[i].indicaciones,
        veterinaria: datosHistoria[i].veterinaria,
      }

      nuevoDatoVeterinaria(nueavosDatos)
    }

    for( let i in datosEnfermedad) {
    
      const nueavosDatos = {
        fecha: datosEnfermedad[i].fecha,
        padecimiento: datosEnfermedad[i].padecimiento,
      }
  
      nuevoDatoVeterinaria(nueavosDatos)
    }
  
  
  })
}