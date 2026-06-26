<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Iniciar Sesión</title>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" href="../css/styles.css">
</head>
<body>

<div class="container-fluid vh-100 d-flex justify-content-center align-items-center fondo-login">

    <div class="card shadow login-card">

        <div class="card-body p-5">

            <h2 class="text-center fw-bold mb-2">
                Iniciar sesión
            </h2>
            <p class="text-center text-muted mb-4">
                Acceda al panel de administración
            </p>

            <% if(request.getAttribute("error") != null){ %>

                <div class="alert alert-danger">

                    <%= request.getAttribute("error") %>

                </div>

            <% } %>

            <form action="<%=request.getContextPath()%>/login" method="post">
                <div class="mb-3">
                    <label class="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        name="nombre"
                        id="nombre"
                        placeholder="Ingrese su nombre"
                        required>

                </div>

                <div class="mb-4">
                    <label class="form-label">
                        Contraseña
                    </label>

                    <input
                        type="password"
                        class="form-control"
                        name="password"
                        id="password"
                        placeholder="Ingrese su contraseña"
                        required>

                </div>

                <button
                    type="submit"
                    class="btn btn-primary w-100">

                    Iniciar sesión

                </button>

            </form>
            <div class="text-center my-4">

                <span class="text-secondary">
                    ─────────── O ───────────
                </span>

            </div>
			<a href="<%=request.getContextPath()%>/Login/loginface.jsp"
		   class="btn btn-outline-dark w-100">
		    Acceder por reconocimiento facial
			</a>

        </div>

    </div>
</div>
<script src="../scripts/login.js"></script>
</body>
</html>