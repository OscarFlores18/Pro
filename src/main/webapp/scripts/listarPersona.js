function listar() {

    $.ajax({
        url: "/SampleWebApp/listarPersona",
        type: "GET",
        success: function(data) {

            let lista = typeof data === "string" ? JSON.parse(data) : data;
            let html = "";

            lista.forEach(p => {

                let nombre = p.nombre.replace(/'/g, "\\'");

                html += `<tr>
                    <td>${p.nombre}</td>
                    <td>${p.edad}</td>
                    <td>${p.dni}</td>
                    <td>${p.genero}</td>
                    <td>
                        <button class="btn btn-success btn-sm" onclick="editar(${p.id}, '${nombre}', ${p.edad}, '${p.dni}', '${p.genero}')">
                            Editar
                        </button>
                        <button class="btn btn-danger btn-sm" onclick="eliminar(${p.id})">
                            Eliminar
                        </button>
                    </td>
                </tr>`;
            });

            $("#tabla").html(html);
        }
    });
}