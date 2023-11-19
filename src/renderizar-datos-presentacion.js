import { cargarDatosMascota, salvarDatosMascota } from "./guardar-cargar-datos/datos-mascota";


const miDiv = document.querySelector(".presentacionDatos")
const formulario = document.querySelector("form")

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
  
  salvarDatosMascota(datos)

});

cargarDatosMascota(miDiv)







