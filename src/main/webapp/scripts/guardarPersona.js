function guardar(){

    Swal.fire({

        title:"Nuevo Usuario",

        width:"700px",

        html:`

        <input id="swalNombre" class="swal2-input" placeholder="Nombre">

        <input id="swalApellido" class="swal2-input" placeholder="Apellido">

        <input id="swalEdad" type="number" class="swal2-input" placeholder="Edad">

        <input id="swalDni" maxlength="8" class="swal2-input" placeholder="DNI">

        <select id="swalGenero" class="swal2-select">

            <option value="HOMBRE">HOMBRE</option>

            <option value="MUJER">MUJER</option>

            <option value="OTRO">OTRO</option>

        </select>

        <input id="swalLocalidad" class="swal2-input" placeholder="Localidad">

        <input id="swalCorreo" class="swal2-input" placeholder="Correo">

        <input id="swalTelefono" class="swal2-input" placeholder="Teléfono">

        <select id="swalEstado" class="swal2-select">

            <option value="Activo">Activo</option>

            <option value="Inactivo">Inactivo</option>

        </select>

        `,

        showCancelButton:true,

        confirmButtonText:"Guardar",

        cancelButtonText:"Cancelar",

        preConfirm:()=>{

            return{

                nombre:$("#swalNombre").val(),

                apellido:$("#swalApellido").val(),

                edad:$("#swalEdad").val(),

                dni:$("#swalDni").val(),

                genero:$("#swalGenero").val(),

                localidad:$("#swalLocalidad").val(),

                correo:$("#swalCorreo").val(),

                telefono:$("#swalTelefono").val(),

                estado:$("#swalEstado").val()

            };

        }

    }).then((result)=>{

        if(result.isConfirmed){

            crear(result.value);

        }

    });

}

	function crear(datos){
	
	    Swal.fire({
	
	        title:"Guardando...",
	
	        allowOutsideClick:false,
	
	        didOpen:()=>{
	
	            Swal.showLoading();
	
	        }
	
	    });

    $.ajax({

        url:"/Proyectof/crearPersona",

        type:"POST",

        data:datos,

        success:function(){

            Swal.fire({

                icon:"success",

                title:"Usuario creado",

                text:"El usuario fue registrado correctamente."

            }).then(()=>{

                listar();

            });

        },

        error:function(){

            Swal.fire({

                icon:"error",

                title:"Error",

                text:"No se pudo guardar el usuario."

            });

        }

    });

}