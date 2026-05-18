function guardar() {

    $.ajax({
        url: contextPath + "/crearPersona",
        type: "POST",
        data: {
            nombre: $("#nombre").val(),
            edad: $("#edad").val(),
            dni: $("#dni").val(),
            genero: $("#genero").val()
        },
        success: function() {
            listar();
            limpiar();
        }
    });

}