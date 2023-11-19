

const miDiv = document.querySelector(".card__moredata")
const formulario = document.querySelector("form")

//Evitar que se envien los datos de manera predeterminada, y capturar el valor de los mismos para posteriormente insertarlos en el HTML
formulario.addEventListener("submit", (event) => {

event.preventDefault();

  const datos = {
    nombre: document.querySelector("input[name='namber']").value,
    familia: document.querySelector("input[name='Apellido']").value,
    edad: document.querySelector("input[name='Edad']").value,
    fechaNacimiento: document.querySelector("input[name='date']").value,
    sexo: document.querySelector("input[name='sexo']:checked").value,
    descripcion: document.querySelector("textarea[name='comentario']").value
  };

  miDiv.innerHTML=`
    <img class="petload" src="./public/perros-labrador.gif" alt="">
  `

  setTimeout(()=> {
    miDiv.innerHTML = `
    <h2>Datos de la mascota:</h2><br>
    <p>
      <b>Nombre:</b> ${datos.nombre}<br>
      <b>Familia:</b> ${datos.familia}<br>
      <b>Edad:</b> ${datos.edad}<br>
      <b>Fecha de Nacimiento:</b> ${datos.fechaNacimiento}<br>
      <b>Sexo:</b> ${datos.sexo}<br>
      <b>Descripcion:</b> ${datos.descripcion}<br>
    </p>
  `
  },3000)
  
  localStorage.setItem('datosMascota', JSON.stringify(datos));

});


//Cargar los datos guardados en el localStorage al momento de cargar el DOM.
document.addEventListener('DOMContentLoaded', () => {
  const datosGuardados = localStorage.getItem('datosMascota');

  if (datosGuardados) {
    const parsedDatos = JSON.parse(datosGuardados);
    
    miDiv.innerHTML = `
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






