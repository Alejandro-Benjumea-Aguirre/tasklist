let eliminada = document.getElementById('eliminada');

async function eliminar(id) {

    try {
        let response = fetch("./controllers/eliminar.php", {
            method: "POST",
            body: id
        });

        const data = await response.json();

        if(data === 'ok'){
            eliminada.innerHTML = mostrarMensaje(`La tarea ${id} fue eliminada.`, 'success');
            listarTareas();
            setTimeout(() => {
                eliminada.innerHTML = ``;
            }, 3000);
        }
    } catch (error) {
        console.error("Error al eliminar la tarea:", err);
        eliminada.innerHTML = mostrarMensaje("Ocurrió un error al eliminar la tarea. Por favor, inténtalo de nuevo más tarde.", 'warning');
    }
}