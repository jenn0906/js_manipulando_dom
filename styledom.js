const boton = document.getElementById('cambiarColor')
const parrafo = document.getElementById('miParrafo')

/* boton.addEventListener('click', () => {
    //Cambiar el color del parrafo al hacer click
    const colores = ['red', 'blue', 'green', 'yellow', 'purple'];
    const color = colores[Math.floor(Math.random() * colores.length)];

    //Cambiar el contenido del parrafo
    parrafo.textContent = `El color asignado es: ${color}`;
    parrafo.style.color = color;

}); */

const colores = {
    'Rosado': 'pink',
    'Negro': 'Black',
    'Naranja': 'Orange',
    'Gris': 'Gray',
    'Morado': 'purple',
    'Rojo' : 'red',
    'Azul' : 'blue', 
};

const nombreColor = Object.keys(colores);

boton.addEventListener('click', () => {
    const colorEspagnol = nombreColor[Math.floor(Math.random() * nombreColor.length)];
    const colorIngles = colores[colorEspagnol]

//Cambiar el contenido del parrafo
parrafo.textContent = `El color asignado es: ${colorEspagnol}`;
parrafo.style.color = colorIngles;
});

// Función para validar el formulario
function validateForm() {
    var x = document.forms["myForm"]["fname"].value;
    if (x == "") {
        alert("El campo nombre debe ser llenado");
        return false;
    }
}

// Agregar evento al botón para cambiar el estilo del texto
document.getElementById('cambiarTextoBtn').addEventListener('click', function() {
    const parrafo = document.getElementById('miParrafo');
    
    // Definir tres estilos de fuente
    const estilos = ['Arial', 'Courier New', 'Times New Roman'];
    
    // Obtener el índice actual del estilo
    let currentStyle = parrafo.style.fontFamily;

    // Cambiar al siguiente estilo
    let nextStyleIndex = (estilos.indexOf(currentStyle) + 1) % estilos.length;

    // Aplicar el siguiente estilo de fuente
    parrafo.style.fontFamily = estilos[nextStyleIndex];
});