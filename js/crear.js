let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', async function(e) {
    e.preventDefault();

    try {
        let form = new FormData(formulario);
        let response = await fetch('./controllers/crear.php', {
            method: "POST",
            body: form,
        });
    
        if (!response.ok) {
            throw new Error(`Error al obtener las tareas: ${res.status} ${res.statusText}`);
        }
    
        let data = await response.json();
    
        if(data==="success") {
            listarTareas();
            respuesta.innerHTML = mostrarMensaje("Tarea guardada satisfactoriamente.", 'success');
            formulario.reset();
    
            setTimeout(() => {
                respuesta.innerHTML = ``;
            }, 3000);
        } else {
            listarTareas();
            respuesta.innerHTML = mostrarMensaje("Tarea Actualizada satisfactoriamente.", 'success');
            
            formulario.reset();
            formularioini();
    
            setTimeout(() => {
                respuesta.innerHTML = ``;
            }, 3000);
        }
    } catch (error) {
        console.error("Error al crear la tarea:", err);
        respuesta.innerHTML = mostrarMensaje("Ocurrió un error al crear la tarea. Por favor, inténtalo de nuevo más tarde.", 'warning');
    }
});