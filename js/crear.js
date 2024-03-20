let formulario = document.getElementById('formulario');
let respuesta = document.getElementById('respuesta');

formulario.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var data = new FormData(formulario);
    
    fetch('./controllers/crear.php', {
        method: "POST",
        body: data,
    }).then((res) => {
        return res.text() 
    })
    .catch(err => {
        console.error("Error al crear la tarea:", err);
        respuesta.innerHTML = mostrarMensaje("Ocurrió un error al crear la tarea. Por favor, inténtalo de nuevo más tarde.", 'warning');
    })
    .then((res) => {
        if(res==="success") {
            listarTareas();
            respuesta.innerHTML = mostrarMensaje("Tarea guardada satisfactoriamente.", 'success');
            formulario.reset();

            setTimeout(() => {
                respuesta.innerHTML = ``;
            }, 3000);
        }else{
            listarTareas();
            respuesta.innerHTML = mostrarMensaje("Tarea Actualizada satisfactoriamente.", 'success');
            
            formulario.reset();
            formularioini();

            setTimeout(() => {
                respuesta.innerHTML = ``;
            }, 3000);
        }
    });
});