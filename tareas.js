const inputtarea = document.getElementById('nuevatarea');
const btnAgregar = document.getElementById('agregar');
const listaTareas = document.getElementById('listaTareas');

btnAgregar.addEventListener('click', () => {
    //Crear nuevo elemento
    const nuevaTarea = document.createElement('li');
    nuevaTarea.textContent = inputtarea.value;

    //Agrega la tarea nueva
    listaTareas.appendChild(nuevaTarea);

    //Limpia el input
    inputtarea.value = '';

    //Eliminar tarea
    const btnEliminar = document.createElement('button');
    btnEliminar.textContent = 'Eliminar';
    btnEliminar.addEventListener('click', () =>{
        listaTareas.removeChild(nuevaTarea);
    });

    nuevaTarea.appendChild(btnEliminar);
});