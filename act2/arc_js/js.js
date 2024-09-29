// Cargar eventos desde el almacenamiento local
const eventos = JSON.parse(localStorage.getItem('eventos')) || [];

// Función para agregar un evento
document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const titulo = document.getElementById('event-title').value;
    const fecha = document.getElementById('event-date').value;

    const evento = { titulo, fecha };
    eventos.push(evento);
    actualizarLista();
    guardarEventos();
    this.reset();
});

// Función para actualizar la lista de eventos en la interfaz
function actualizarLista() {
    const listaEventos = document.getElementById('events');
    listaEventos.innerHTML = '';

    eventos.forEach((evento, index) => {
        const li = document.createElement('li');
        li.textContent = `${evento.titulo} - ${evento.fecha}`;
        
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.marginLeft = '10px';
        botonEliminar.onclick = function() {
            eliminarEvento(index);
        };

        li.appendChild(botonEliminar);
        listaEventos.appendChild(li);
    });
}

// Función para eliminar un evento
function eliminarEvento(index) {
    eventos.splice(index, 1);
    actualizarLista();
    guardarEventos();
}

// Función para guardar eventos en el almacenamiento local
function guardarEventos() {
    localStorage.setItem('eventos', JSON.stringify(eventos));
}

// Cargar eventos al inicio
actualizarLista();


