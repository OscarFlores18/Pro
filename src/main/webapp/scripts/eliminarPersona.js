function eliminar(id) {
	console.log("ENTRO A ELIMINAR", id);
	Swal.fire({
	    title: "¿Está seguro de eliminar?",
	    text: "La persona será eliminada de la base de datos",
	    icon: "warning",
	    showCancelButton: true,
	    confirmButtonColor:"#3085d6",
	    cancelButtonColor:"#d33",
	    confirmButtonText:"Sí, eliminar",
	    cancelButtonText:"Cancelar"

	}).then((result)=>{

	
	
		if(result.isConfirmed){


		    Swal.fire({
		        title:"Eliminando...",
		        allowOutsideClick:false,
		        didOpen:()=>{
		            Swal.showLoading();
		        }
		    });
		
		
	
			$.ajax({

			    url: contextPath + "/eliminarPersona",
			    type:"POST",
			    data:{id:id},

			    success:function(data){

			        console.log("RESPUESTA:", data);

			        Swal.fire(
			            "Eliminado!",
			            "La persona fue eliminada",
			            "success"
			        ).then(()=>{
			            listar();
			        });

			    },

			    error:function(xhr){

			        console.log("ERROR:", xhr.status);
			        console.log(xhr.responseText);

			        Swal.fire(
			            "Error",
			            "Falló la eliminación",
			            "error"
			        );

			    },

			    complete:function(){
			        console.log("AJAX TERMINÓ");
			    }

			});
}

});


}