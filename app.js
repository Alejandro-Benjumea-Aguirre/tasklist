
listarTareas();

let formulario = document.getElementById('formulario');

function formularioini() { 
    return formulario.innerHTML = 
    `
    <div class = "form-group">
        <label for="nombre">Nombre de la tarea</label>
        <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre">
    </div>
        
    <div class = "form-group">
        <label for="descripcion">descripcion de la tarea</label>
        <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="descripcion">
    </div>
        
    <br>
    <button type="submit" class="btn btn-primary">Crear</button>
    `;
 }

 function mostrarMensaje(mensaje, style) {
    return `
        <div class="alert alert-dismissible alert-${style} animate__animated animate__fadeIn">
            <p>${mensaje}</p>
        </div>
    `;
}
