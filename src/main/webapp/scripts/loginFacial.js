// pide permiso para usar la cámara
navigator.mediaDevices.getUserMedia({ video: true })

.then(stream => {

    document.getElementById("video").srcObject = stream;
});
// captura imagen de la cámara
function capturar() {
    let loader = document.getElementById("loader");
    loader.style.display = "inline-block";
	
	
	Swal.fire({
	    title: "Reconociendo rostro...",
	    text: "Espere unos segundos.",
	    allowOutsideClick: false,
	    allowEscapeKey: false,
		backdrop: true,
		heightAuto: false,
	    didOpen: () => {
	        Swal.showLoading();
	    }
	});
	
	
	

    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let ctx = canvas.getContext("2d");
    // dibuja la cámara en el canvas
    ctx.drawImage(video,0,0);
    // convierte la imagen a base64
    let imagen = canvas.toDataURL("image/png");
	fetch("/Proyectof/loginFacial", {
	    method: "POST",
	    headers: {
	        "Content-Type": "text/plain"
	    },
	    body: imagen
	})
    .then(res => res.text())

    .then(data => {
        loader.style.display="none";
		
		Swal.close();

        console.log(
            "RESPUESTA:",
            data
        );
        data=data.trim();
		if (data === "ADMIN") {

		    Swal.fire({
		        icon: "success",
		        title: "¡Bienvenido!",
		        text: "Inicio de sesion exitoso.",
		        timer: 2000,
		        showConfirmButton: false
		    }).then(() => {
		        window.location.href = "/Proyectof/Persona/Personahome.jsp";
		    });

		}
		else if (data === "NO_ADMIN") {

		    Swal.fire({
		        icon: "error",
		        title: "Acceso denegado",
		        text: "Usted no es el administrador."
		    });

		}
		else if (data === "NO_FACE") {

		    Swal.fire({
		        icon: "warning",
		        title: "No se detecto ninguna cara",
		        text: "Coloquese frente a la camara e intente nuevamente."
		    });

		}
		else {

		    Swal.fire({
		        icon: "error",
		        title: "Error",
		        text: "Ocurrio un error en el reconocimiento facial."
		    });

		}
    });
}