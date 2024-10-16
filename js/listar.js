let tarea = document.getElementById('tarea');

async function listarTareas() {

    try {
        const response = await fetch("./controllers/listar.php", {
            method: "POST"
        });

        if (!response.ok) {
            throw new Error(`Error al obtener las tareas: ${res.status} ${res.statusText}`);
        }

        const data = await response.json();

        if (data.length > 0) {
            mostrarTareas(data);
        } else {
            tarea.innerHTML = mostrarMensaje("No hay tareas creadas en estos momentos.", 'success');
        }
        
    } catch (error) {
        console.error("Error al obtener las tareas:", err);
        tarea.innerHTML = mostrarMensaje("Ocurrió un error al cargar las tareas. Por favor, inténtalo de nuevo más tarde.", 'warning');
    }
}

function mostrarTareas(tareas) {
    let html = "";
    tareas.forEach(item => {
        html += `<div class="card ${item.estilo} mb-3 animate__animated animate__fadeIn" style="max-width: 20rem;">
                    <div class="card-header">${item.estado}</div>
                        <div class="card-body">
                            <h4 class="card-title">${item.nombre}</h4>
                            <p class="card-text">${item.descripcion}</p>
                            <small>${item.fecha_cre}</small>
                        </div>
                        <div class="card-footer">
                            <div class="btn-group" role="group" aria-label="Basic example">
                                <button type="button" class="btn btn-primary" onclick=actualizar('${item.id}')>Actualizar</button>
                                <button type="button" class="btn btn-primary" onclick=eliminar('${item.id}')>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>`;
    });
    tarea.innerHTML = html;
}

document.addEventListener("DOMContentLoaded", function() {
    listarTareas();
});