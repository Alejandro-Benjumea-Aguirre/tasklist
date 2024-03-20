let formulario = document.getElementById('formulario');

function actualizar(id) {
    fetch("./controllers/actualizar.php", {
        method: "POST",
        body: id
    }).then(res => res.json())
    .then((res) => {
        formulario.innerHTML = `
        <div class="animate__animated animate__fadeIn">
            <div class = "form-group">
                <input type="hidden" name="idt" id="idt" value"">
                <label for="nombre">Nombre de la tarea</label>
                <input type="text" class="form-control" name="nombre" id="nombre" placeholder="Nombre">
            </div>
            
            <div class = "form-group">
                <label for="descripcion">descripcion de la tarea</label>
                <input type="text" class="form-control" name="descripcion" id="descripcion" placeholder="descripcion">
            </div>
            <fieldset class="form-group">
                <legend class="mt-4">Estado</legend>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="realizada" name="realizada" id="realizada" ${(res.id_estado==='2')?'checked': ''}>
                    <label class="form-check-label" for="flexCheckDefault">
                        Realizada
                    </label>
                </div>
                <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="cancelada" name="cancelada" id="cancelada" ${(res.id_estado==='3')?'checked':''}> 
                    <label class="form-check-label" for="flexCheckChecked">
                        Cancelada
                    </label>
                </div>
            </fieldset>
            <br>
            <button type="submit" class="btn btn-primary">Actualizar</button>
        </div>
        `

        idt.value = res.id;
        nombre.value = res.nombre;
        descripcion.value = res.descripcion;

    });
}
