function guardar() {
	Swal.fire({
	    title:"Guardando...",
	    allowOutsideClick:false,
	    didOpen:()=>{
	        Swal.showLoading()
	    }
	});
	
	
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
			Swal.fire({
			     position: "center",
			     icon: "success",
			     title: "Se guardó el registro",
			     text: "El usuario fue agregado correctamente",
			     showConfirmButton: false,
			     timer: 2000
			 });
            listar();
            limpiar();
        }
    });

}