function editar(id, nombre, apellido, edad, dni, genero, localidad, correo, telefono, estado){

    Swal.fire({

        title: "Editar Usuario",

        width: "700px",

        html: `

        <div class="row">

            <div class="col-md-6 mb-2">
                <input id="swalNombre" class="swal2-input" placeholder="Nombre" value="${nombre}">
            </div>

            <div class="col-md-6 mb-2">
                <input id="swalApellido" class="swal2-input" placeholder="Apellido" value="${apellido}">
            </div>

            <div class="col-md-6 mb-2">
                <input id="swalEdad" type="number" class="swal2-input" placeholder="Edad" value="${edad}">
            </div>

            <div class="col-md-6 mb-2">
                <input id="swalDni" maxlength="8" class="swal2-input" placeholder="DNI" value="${dni}">
            </div>

            <div class="col-md-6 mb-2">
                <select id="swalGenero" class="swal2-select">

                    <option value="HOMBRE" ${genero=="HOMBRE"?"selected":""}>HOMBRE</option>

                    <option value="MUJER" ${genero=="MUJER"?"selected":""}>MUJER</option>

                    <option value="OTRO" ${genero=="OTRO"?"selected":""}>OTRO</option>

                </select>
            </div>

            <div class="col-md-6 mb-2">
                <input id="swalLocalidad" class="swal2-input" placeholder="Localidad" value="${localidad}">
            </div>

            <div class="col-md-6 mb-2">
                <input id="swalCorreo" class="swal2-input" placeholder="Correo" value="${correo}">
            </div>

            <div class="col-md-6 mb-2">
                <input id="swalTelefono" class="swal2-input" placeholder="Teléfono" value="${telefono}">
            </div>

            <div class="col-md-12">

                <select id="swalEstado" class="swal2-select">

                    <option value="Activo" ${estado=="Activo"?"selected":""}>
                        Activo
                    </option>

                    <option value="Inactivo" ${estado=="Inactivo"?"selected":""}>
                        Inactivo
                    </option>

                </select>

            </div>

        </div>

        `,

        showCancelButton: true,

        confirmButtonText: "💾 Guardar cambios",

        cancelButtonText: "Cancelar",

        focusConfirm: false,

        preConfirm: () => {

            return {

                id:id,

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

            actualizar(result.value);

        }

    });

}

function actualizar(datos){

    Swal.fire({

        title:"Editando...",

        text:"Actualizando datos del usuario",

        allowOutsideClick:false,

        didOpen:()=>{

            Swal.showLoading();

        }

    });

    $.ajax({

        url:"/Proyectof/editarPersona",

        type:"POST",

        data:datos,

        success:function(){

            Swal.fire({

                icon:"success",

                title:"¡Actualizado!",

                text:"El usuario se actualizó correctamente."

            }).then(()=>{

                listar();

            });

        },

        error:function(){

            Swal.fire({

                icon:"error",

                title:"Error",

                text:"No se pudo actualizar el usuario."

            });

        }

    });

}

function cerrarModal(){

    $("#modalEditar").hide();

}