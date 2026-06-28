function editar(id, nombre, edad, dni, genero){

    Swal.fire({
        title: "Editar Persona",
		html: `
		    <input id="swalNombre" class="swal2-input" value="${nombre}" placeholder="Nombre">

		    <input id="swalEdad" class="swal2-input" type="number" value="${edad}" placeholder="Edad">

		    <input id="swalDni" class="swal2-input" maxlength="8" value="${dni}" placeholder="DNI">

		    <select id="swalGenero" class="swal2-select">
		        <option value="HOMBRE">HOMBRE</option>
		        <option value="MUJER">MUJER</option>
		        <option value="OTRO">OTRO</option>
		    </select>
		`,
        showCancelButton: true,
        confirmButtonText: "Guardar cambios",
        cancelButtonText: "Cancelar",
        preConfirm: () => {

            return {
                id: id,
                nombre: $("#swalNombre").val(),
                edad: $("#swalEdad").val(),
                dni: $("#swalDni").val(),
                genero: $("#swalGenero").val()
            };

        }

    }).then((result)=>{

        if(result.isConfirmed){
            actualizar(result.value);
        }

    });

}
function actualizar(datos){

    Swal.fire({
        title: "Editando...",
        text: "Actualizando datos de la persona",
        allowOutsideClick: false,
        didOpen: ()=>{
            Swal.showLoading();
        }
    });

    $.ajax({

        url: "/Proyectof/editarPersona",
        type: "POST",

        data: datos,

        success: function(){

            Swal.fire(
                "Actualizado!",
                "La persona se actualizó correctamente",
                "success"
            ).then(()=>{
                listar();
            });

        }

    });

}
	
	
	
	function cerrarModal(){
	
	$("#modalEditar").hide();
	
	}
	
	
	function cerrarModal(){
	    $("#modalEditar").hide();
	}