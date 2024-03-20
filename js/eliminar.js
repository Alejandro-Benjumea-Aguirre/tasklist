let eliminada = document.getElementById('eliminada');

function eliminar(id) {
    fetch("./controllers/eliminar.php", {
        method: "POST",
        body: id
    }).then(res => res.text())
    .catch(err => {
        console.error("Error al eliminar la tarea:", err);
        eliminada.innerHTML = mostrarMensaje("Ocurrió un error al eliminar la tarea. Por favor, inténtalo de nuevo más tarde.", 'warning');
    })
    .then(res => {
        console.log(res);
        if(res === 'ok'){
            eliminada.innerHTML = mostrarMensaje(`La tarea ${id} fue eliminada.`, 'success');

        listarTareas();
        setTimeout(() => {
            eliminada.innerHTML = ``;
        }, 3000);

        }
    });
}