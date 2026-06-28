function listar() {

    console.log("LISTAR");

    $.ajax({

        url: "/Proyectof/listarPersona",

        type: "GET",

        success: function(data) {

            let lista = typeof data === "string" ? JSON.parse(data) : data;
			console.log(lista);
            let html = "";

            lista.forEach(p => {

                let nombre = (p.nombre || "").replace(/'/g,"\\'");
                let apellido = (p.apellido || "").replace(/'/g,"\\'");
                let localidad = p.localidad || "";
                let correo = p.correo || "";
                let telefono = p.telefono || "";
                let estado = p.estado || "Activo";

                let badgeEstado =
                    estado.toUpperCase() === "ACTIVO"
                    ? "estado estado-activo"
                    : "estado estado-inactivo";

                let iconoEstado =
                    estado.toUpperCase() === "ACTIVO"
                    ? "🟢"
                    : "🔴";

                html += `

                <div class="col-lg-4 col-md-6">

                    <div class="usuario-card">

                        <div class="usuario-avatar">

                            <i class="fa-solid fa-user"></i>

                        </div>

                        <h4>

                            ${p.nombre} ${apellido}

                        </h4>

                        <div class="usuario-info">

                            <i class="fa-solid fa-location-dot"></i>

                            ${localidad}

                        </div>

                        <div class="usuario-info">

                            <i class="fa-solid fa-envelope"></i>

                            ${correo}

                        </div>

                        <div class="usuario-info">

                            <i class="fa-solid fa-phone"></i>

                            ${telefono}

                        </div>

                        <div class="usuario-info">

                            <i class="fa-solid fa-id-card"></i>

                            DNI: ${p.dni}

                        </div>

                        <div class="usuario-info">

                            <i class="fa-solid fa-cake-candles"></i>

                            Edad: ${p.edad}

                        </div>

                        <div class="usuario-info">

                            <i class="fa-solid fa-venus-mars"></i>

                            ${p.genero}

                        </div>

                        <br>

                        <span class="${badgeEstado}">

                            ${iconoEstado} ${estado}

                        </span>

                        <div class="acciones">

                            <button
                                class="btn btn-warning"

                                onclick="editar(
                                    ${p.id},
                                    '${nombre}',
                                    '${apellido}',
                                    ${p.edad},
                                    '${p.dni}',
                                    '${p.genero}',
                                    '${localidad}',
                                    '${correo}',
                                    '${telefono}',
                                    '${estado}'
                                )">

                                <i class="fa-solid fa-pen"></i>

                                Editar

                            </button>

                            <button
                                class="btn btn-danger"

                                onclick="eliminar(${p.id})">

                                <i class="fa-solid fa-trash"></i>

                                Eliminar

                            </button>

                        </div>

                    </div>

                </div>

                `;

            });

            $("#tabla").html(html);

        }

    });

}