<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<link rel="stylesheet"href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/styles.css">
<title>Personas</title>
</head>

<body>

<div class="container container-custom">
    <div class="d-flex justify-content-between align-items-center mb-4">
        <h2>Personas</h2>
        <button class="btn btn-secondary" onclick="listar()">Actualizar</button>
    </div>

    <div class="row mb-3">

        <div class="col">
            <input id="nombre" class="form-control" placeholder="Nombre">
        </div>

        <div class="col">
            <input type="text" id="dni" class="form-control" placeholder="DNI"
                   maxlength="8"
                   oninput="this.value = this.value.replace(/[^0-9]/g, '')">
        </div>

        <div class="col">
            <input type="number" id="edad" class="form-control" placeholder="Edad" min="0">
        </div>

        <div class="col">
            <select id="genero" class="form-control">
                <option value="">Género</option>
                <option value="HOMBRE">Masculino</option>
                <option value="MUJER">Femenino</option>
                <option value="OTRO">Otro</option>
            </select>
        </div>

        <div class="col">
<button class="btn btn-primary w-100" onclick="guardar()">
   <i class="fa-solid fa-floppy-disk"></i>
   Guardar
</button>
        </div>

    </div>

    <table class="table table-bordered table-striped">
        <thead class="table-dark">
            <tr>
                <th>Nombre</th>
                <th>Edad</th>
                <th>DNI</th>
                <th>Género</th>
                <th>Acciones</th>
            </tr>
        </thead>
        <tbody id="tabla"></tbody>
    </table>

</div>

<div id="modalEditar" class="modal-custom">
    <h4 class="mb-3">Editar Persona</h4>

    <input id="editNombre" class="form-control mb-2" placeholder="Nombre">
    <input id="editDni" class="form-control mb-2" placeholder="DNI">
    <input id="editEdad" class="form-control mb-2" placeholder="Edad">

    <select id="editGenero" class="form-control mb-3">
        <option value="HOMBRE">Masculino</option>
        <option value="MUJER">Femenino</option>
        <option value="OTRO">Otro</option>
    </select>

    <div class="d-flex justify-content-between">
        <button  type="button" class="btn btn-success" onclick="actualizar()">Actualizar</button>
        <button  type="button" class="btn btn-secondary" onclick="cerrarModal()">Cancelar</button>
    </div>

</div>

<script>
    const contextPath = "${pageContext.request.contextPath}";
</script>

<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<script src="../scripts/utilsPersona.js"></script>
<script src="../scripts/listarPersona.js"></script>
<script src="../scripts/guardarPersona.js"></script>
<script src="../scripts/eliminarPersona.js"></script>
<script src="../scripts/editarPersona.js"></script>

</body>
</html>