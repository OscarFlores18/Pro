<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<title>Login Facial</title>

<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet">

<link rel="stylesheet" href="css/login.css">

</head>
<body>

<div class="login-card">

    <h2>Login Facial</h2>

    <video id="video" autoplay></video>

    <button class="btn btn-primary btn-login" onclick="capturar()">
        Ingresar
    </button>

    <div class="spinner-border text-primary" id="loader"></div>

    <div id="mensaje" class="mt-3"></div>

</div>

<canvas id="canvas" style="display:none;"></canvas>

<!-- Modal -->
<div class="modal fade" id="successModal" tabindex="-1">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">

      <div class="modal-header bg-success text-white">
        <h5 class="modal-title">Acceso permitido</h5>
      </div>

      <div class="modal-body text-center">
        <h3> Acceso aceptado</h3>
        <p>Bienvenido al sistema.</p>
      </div>

    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>

<script src="scripts/login.js"></script>

</body>
</html>