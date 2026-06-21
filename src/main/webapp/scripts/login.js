// pide permiso para usar la cámara
navigator.mediaDevices.getUserMedia({ video: true })

.then(stream => {

    document.getElementById("video").srcObject = stream;
});
// captura imagen de la cámara
function capturar() {
    let loader = document.getElementById("loader");
    loader.style.display = "inline-block";

    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let ctx = canvas.getContext("2d");
    // dibuja la cámara en el canvas
    ctx.drawImage(video,0,0);
    // convierte la imagen a base64
    let imagen = canvas.toDataURL("image/png");
    fetch("loginFacial", {
        method:"POST",
        headers:{
            "Content-Type":"text/plain"
        },
        body:imagen
    })
    .then(res => res.text())

    .then(data => {
        loader.style.display="none";
        console.log(
            "RESPUESTA:",
            data
        );
        data=data.trim();
        if(data === "ADMIN"){

            let modal =
            new bootstrap.Modal(
                document.getElementById(
                    'successModal'
                )
            );
            modal.show();
            setTimeout(()=>{
                window.location.href =
                "/Proyectof/Persona/Personahome.jsp";
            },2000);
        }
        else if(data === "NO_ADMIN"){

            document.getElementById("mensaje").innerHTML =
            `
            <div class="alert alert-danger">

                 Usted no es el administrador
            </div>
            `;
        }
        else if(data === "NO_FACE"){
            document.getElementById("mensaje").innerHTML =

            `
            <div class="alert alert-warning">

                 No hay ninguna cara en la camara

            </div>
            `;
        }
        else{
            document.getElementById("mensaje").innerHTML =

            `
            <div class="alert alert-danger">

                Error en reconocimiento facial

            </div>
            `;
        }
    });
}