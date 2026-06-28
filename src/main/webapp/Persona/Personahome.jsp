<%@ page language="java" contentType="text/html; charset=UTF-8"
pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
	<title>Gestión de Usuarios</title>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="${pageContext.request.contextPath}/css/styles.css">
	
	<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
	
</head>
	
	<body>
	
		<%
		String bienvenida = (String) session.getAttribute("bienvenida");
		if (bienvenida != null) {
		session.removeAttribute("bienvenida");
		%>
	
		<script>
		document.addEventListener("DOMContentLoaded", function () {
		    Swal.fire({
		        icon: "success",
		        title: "¡Bienvenido!",
		        text: "<%= bienvenida %>",
		        timer: 2000,
		        showConfirmButton: false
		    });
		});
		</script>
			
			
			
		<%
		}
		%>

	<div class="container py-5">
	
	    <div class="cabecera">
	
	        <div>
	
	            <h2>
	                <i class="fa-solid fa-users"></i>
	                Gestión de Usuarios
	            </h2>
	
	            <p>
	                Administra todos los usuarios registrados.
	            </p>
	
	        </div>
	
	    </div>
	    <div class="row align-items-center mb-4">
	
	        <div class="col-md-8">
	
	            <div class="input-group">
	
	                <span class="input-group-text">
	                    <i class="fa-solid fa-magnifying-glass"></i>
	                </span>
	
	                <input
	                    type="text"
	                    id="buscar"
	                    class="form-control"
	                    placeholder="Buscar usuario...">
	            </div>
	        </div>
	
	        <div class="col-md-4 text-end">
	
	            <button
	                class="btn btn-primary btn-lg"
	                onclick="guardar()">
	
	                <i class="fa-solid fa-user-plus"></i>
	
	                Nuevo Usuario
	
	            </button>
	        </div>
	    </div>
	
	    <div
	        id="tabla"
	        class="row g-4">
	
	    </div>
	
	</div>
	
	<script>
	
	const contextPath="${pageContext.request.contextPath}";
	
	</script>
	
	<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
	
	
	<script src="../scripts/utilsPersona.js"></script>
	<script src="../scripts/buscarPersona.js"></script>
	<script src="../scripts/listarPersona.js"></script>
	<script src="../scripts/guardarPersona.js"></script>
	<script src="../scripts/eliminarPersona.js"></script>
	<script src="../scripts/editarPersona.js"></script>
	
	</body>

</html>