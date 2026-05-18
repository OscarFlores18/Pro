function eliminar(id) {

    $.ajax({
        url: "/SampleWebApp/eliminarPersona",
        type: "POST",
        data: { id: id },
        success: function() {
            listar();
        },
        error: function() {
            console.error("Error al eliminar");
        }
    });
}