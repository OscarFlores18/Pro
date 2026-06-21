function eliminar(id) {

    $.ajax({
        url: "/Proyectof/eliminarPersona",
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