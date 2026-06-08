// abrir modal
function editar(id, nombre, edad, dni, genero) {

    $("#editNombre").val(nombre);
    $("#editEdad").val(edad);
    $("#editDni").val(dni);
    $("#editGenero").val(genero);

    idEditar = id;

    $("#modalEditar").show();
}

// actualizar
function actualizar() {

    $.ajax({
        url: "/Proyectof/editarPersona",
        type: "POST",
        data: {
            id: idEditar,
            nombre: $("#editNombre").val(),
            edad: $("#editEdad").val(),
            dni: $("#editDni").val(),
            genero: $("#editGenero").val() 
        },
        success: function() {
            listar();
            cerrarModal();
        },
        error: function() {
            console.error("Error al actualizar");
        }
    });
}
function cerrarModal() {
    $("#modalEditar").css("display", "none");
}





