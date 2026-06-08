navigator.mediaDevices.getUserMedia({ video: true })
.then(stream => {
    document.getElementById("video").srcObject = stream;
});

function capturar() {

    let loader = document.getElementById("loader");
    loader.style.display = "inline-block";

    let video = document.getElementById("video");
    let canvas = document.getElementById("canvas");

    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;

    let ctx = canvas.getContext("2d");

    ctx.drawImage(video, 0, 0);

    let imagen = canvas.toDataURL("image/png");

    fetch("loginFacial", {

        method: "POST",

        headers: {
            "Content-Type": "text/plain"
        },

        body: imagen

    })
    .then(res => res.text())
    .then(data => {

        loader.style.display = "none";

        console.log("RESPUESTA:", data);

        if(data.trim() === "true"){

            let modal = new bootstrap.Modal(
                document.getElementById('successModal')
            );

            modal.show();

            setTimeout(() => {

                window.location.href =
                "/Proyectof/Persona/Personahome.jsp";

            }, 2000);

        }else{

            document.getElementById("mensaje").innerHTML =
            `
            <div class="alert alert-danger">
                 Usuario no reconocido
            </div>
            `;

        }

    });

}