
export const salvarDatosMascota = (datos) => {

  localStorage.setItem('datosMascota', JSON.stringify(datos));

}

export const cargarDatosMascota = (HTMLDivElement) => {

  document.addEventListener('DOMContentLoaded', () => {
  const datosGuardados = localStorage.getItem('datosMascota');
  
    if (datosGuardados) {
    const parsedDatos = JSON.parse(datosGuardados);
    
    HTMLDivElement.innerHTML = `
    <h2>Datos de la mascota:</h2><br>
    <p>
      <b>Nombre:</b> ${parsedDatos.nombre}<br>
      <b>Familia:</b> ${parsedDatos.familia}<br>
      <b>Edad:</b> ${parsedDatos.edad}<br>
      <b>Fecha de Nacimiento:</b> ${parsedDatos.fechaNacimiento}<br>
      <b>Sexo:</b> ${parsedDatos.sexo}<br>
      <b>Descripcion:</b> ${parsedDatos.descripcion}<br>
    </p>
    `;
    }
  
  });
}
